<?php

/**
 * Content creation page
 */
function usanetwork_page_collection_node_add($page_collection) {
  $item = menu_get_item('node/add');
  $content = system_admin_menu_block($item);
  // Bypass the node/add listing if only one content type is available.
  foreach ($content as $key => $menu_item) {
    $args = unserialize($menu_item['page_arguments']);
    $content_type = isset($args[0]) ? $args[0] : null;
    if (!isset($content_type) || !in_array($content_type, array_keys(_usanetwork_page_collection_node_content_types($page_collection->type)))) {
      unset($content[$key]);
    }
    else {
      $content[$key]['localized_options']['query']['page_collection'] = $page_collection->nid;
      $content[$key]['localized_options']['query']['destination'] = 'node/' . $page_collection->nid . '/page_collection';
    }
  }
  if (count($content) == 1) {
    $item = array_shift($content);
    drupal_goto($item['href'], $item['localized_options']);
  }
  return theme('node_add_list', array('content' => $content));
}

/**
 * Returns global administration form
 */
function usanetwork_page_collection_admin_settings($form, &$form_state) {
  $namespace = USANETOWRK_PAGE_COLLECTION_NAMESPACE;

  $form[$namespace . '_content_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Page collection content types'),
    '#options' => node_type_get_names(),
    '#default_value' => variable_get($namespace . '_content_types', array()),
  );

  $form = system_settings_form($form);
  array_unshift($form['#submit'], 'usanetwork_page_collection_admin_settings_submit');
  return $form;
}

/**
 * Submit handler for admin settings form.
 */
function usanetwork_page_collection_admin_settings_submit($form, &$form_state) {
  $namespace = USANETOWRK_PAGE_COLLECTION_NAMESPACE;
  $content_types = variable_get($namespace . '_content_types');

  $fields = _usanetwork_page_collection_field_bases();
  $instances = _usanetwork_page_collection_field_instances();
  foreach ($form_state['input'][$namespace . '_content_types'] as $content_type => $value) {
    $value = isset($value) ? $value : 0;
    $content_types[$content_type] = isset($content_types[$content_type]) ? $content_types[$content_type] : 0;
    if ($value === $content_types[$content_type]) {
      continue;
    }
    foreach ($fields as $field) {
      $instance = isset($instances[$field['field_name']]) ? $instances[$field['field_name']] : array();
      $instance['field_name'] = $field['field_name'];
      $instance['entity_type'] = 'node';
      $instance['bundle'] = $content_type;

      if ($value && $content_types[$content_type] === 0) {
        /* Attach fields to selected types */
        $prior_instance = field_read_instance($instance['entity_type'], $instance['field_name'], $instance['bundle']);
        if (empty($prior_instance)) {
          field_create_instance($instance);
        }
      }
      elseif (!$value && $content_types[$content_type] !== 0) {
        /* Detach fields */
        field_delete_instance($instance, false);
      }
    }
  }
}

/**
 * Per content type configuration form
 */
function usanetwork_page_collection_content_type_settings($form, &$form_state, $content_type) {
  $form_state['content_type'] = $content_type;
  $form['#tree'] = true;
  $content_types = _usanetwork_page_collection_node_content_types($content_type);
  foreach ($content_types as $key => $value) {
    if ($value) {
      $content_types[$key] = $key;
    }
  }
  $form['content_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Child content types'),
    '#options' => node_type_get_names(),
    '#default_value' => $content_types,
  );

  $form['additional_settings'] = array(
    '#type' => 'vertical_tabs',
  );

  $form['field_sync'] = array(
    '#type' => 'fieldset',
    '#title' => t('Field synchronization'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'additional_settings',
    '#weight' => 0,
  );
  $system_fields = _usanetwork_page_collection_field_bases();
  $instances = field_info_instances('node', $content_type);
  $options = array();
  $default = _usanetwork_page_collection_sync_fields_load($content_type);
  foreach ($default as $key => $value) {
    if ($value) {
      $default[$key] = $key;
    }
  }
  foreach ($instances as $instance) {
    if (!in_array($instance['field_name'], array_keys($system_fields))) {
      $options[$instance['field_name']] = $instance['label'];
    }
  }
  $form['field_sync']['fields'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Enable synchronization for selected fields:'),
    '#options' => $options,
    '#default_value' => $default,
  );

  $form['actions'] = array('#type' => 'actions',);
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );

  return $form;
}

/**
 * Submit handler for per content type settings form.
 */
function usanetwork_page_collection_content_type_settings_submit($form, &$form_state) {
  $content_type = $form_state['content_type'];
  $namespace = USANETOWRK_PAGE_COLLECTION_NAMESPACE;

  if (isset($form_state['values']['content_types'])) {
    variable_set($namespace . '_' . $content_type . '_content_types', $form_state['values']['content_types']);
  }

  if (isset($form_state['values']['field_sync']['fields'])) {
    _usanetwork_page_collection_sync_fields_save($form_state['values']['field_sync']['fields'], $content_type);
  }
}

/**
 * Page collection node form.
 */
function usanetwork_page_collection_node_form($form, &$form_state, $page_collection) {
  if (!isset($page_collection->page_collection)) {
    $page_collection = node_load($page_collection->nid, $page_collection->vid, true);
  }
  $form_state['page_collection'] = $page_collection;

  $form['#tree'] = true;

  $form['add'] = array(
    '#type' => 'fieldset',
    '#title' => t('Add existing content'),
    '#collapsible' => true,
    '#attributes' => array(
      'class' => array('container-inline'),
    ),
  );
  $form['add']['node'] = array(
    '#type' => 'textfield',
    '#title' => '',
    '#title_display' => 'invisible',
    '#autocomplete_path' => 'node/' . $page_collection->nid . '/page_collection/add/autocomplete',
  );
  $form['add']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Add'),
    '#submit' => array('usanetwork_page_collection_node_add_submit'),
    '#validate' => array('usanetwork_page_collection_node_add_validate'),
    '#limit_validation_errors' => array(
      array('add')
    ),
  );

  $form['relations'] = array(
    '#theme' => 'usanetwork_page_collection_relation_table',
  );
  $relations = new RecursiveIteratorIterator(new RelationsRecursiveIterator($page_collection->page_collection), RecursiveIteratorIterator::SELF_FIRST);
  foreach ($relations as $relation) {
    $operations = array();
    $operations[] = l('remove', 'node/' . $page_collection->nid . '/page_collection/' . $relation->node->nid . '/remove');
    $operations[] = l('edit', 'node/' . $relation->node->nid . '/edit', array('query' => array('destination' => 'node/' . $page_collection->nid . '/page_collection')));
    $operations[] = l('delete', 'node/' . $relation->node->nid . '/delete', array('query' => array('destination' => 'node/' . $page_collection->nid . '/page_collection')));

    $form['relations'][$relation->id] = array(
      '#depth' => $relations->getDepth(),
      'id' => array(
        '#type' => 'hidden',
        '#value' => $relation->id,
      ),
      'nid' => array(
        '#type' => 'hidden',
        '#value' => $relation->node->nid,
      ),
      'pnid' => array(
        '#type' => 'hidden',
        '#value' => $relation->parent ? $relation->parent->nid : 0,
      ),
      'prepend_parent_path' => array(
        '#type' => 'hidden',
        '#value' => $relation->prepend_parent_path ? 1 : 0,
      ),
      'link' => array(
        '#markup' => l($relation->node->title, 'node/' . $relation->node->nid),
      ),
      'weight' => array(
        '#type' => 'weight',
        '#title' => t('Weight'),
        '#default_value' => $relation->weight,
        '#delta' => 10,
        '#title_display' => 'invisible',
      ),
      'operations' => array(
        '#markup' => implode(' ', $operations),
      ),
    );
  }

  $form['additional_settings'] = array(
    '#type' => 'vertical_tabs',
  );

  $form['field_sync'] = array(
    '#type' => 'fieldset',
    '#title' => t('Field synchronization'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'additional_settings',
    '#weight' => 0,
  );
  $system_fields = _usanetwork_page_collection_field_bases();
  $instances = field_info_instances('node', $page_collection->type);
  $options = array();
  $default = _usanetwork_page_collection_sync_fields_load($page_collection->type, $page_collection->nid);
  foreach ($default as $key => $value) {
    if ($value) {
      $default[$key] = $key;
    }
  }
  foreach ($instances as $instance) {
    if (!in_array($instance['field_name'], array_keys($system_fields))) {
      $options[$instance['field_name']] = $instance['label'];
    }
  }
  $form['field_sync']['default'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use default settings'),
    '#default_value' => _usanetwork_page_collection_sync_fields_default($page_collection->nid) ? 1 : 0,
  );
  $form['field_sync']['fields'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Enable synchronization for selected fields:'),
    '#options' => $options,
    '#default_value' => $default,
    '#states' => array(
      'invisible' => array(
        ':input[name="field_sync[default]"]' => array('checked' => true),
      ),
    )
  );

  $form['actions'] = array('#type' => 'actions',);
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );

  return $form;
}

/**
 * Submit handler for page collection node form
 */
function usanetwork_page_collection_node_form_submit($form, &$form_state) {
  $page_collection = $form_state['page_collection'];
  $page_collection->original = clone $page_collection;
  $lang = entity_language('node', $page_collection);

  if (isset($form_state['input']['relations'])) {
    $relations = $form_state['input']['relations'];
    // update relations
    $_relations = array();
    foreach (new RecursiveIteratorIterator(new RelationsRecursiveIterator($page_collection->page_collection), RecursiveIteratorIterator::SELF_FIRST) as $relation) {
      $_relation = new stdClass();
      $_relation->id = $relation->id;
      $_relation->pcid = $relation->pcid;
      $_relation->pnid = isset($relations[$relation->id]['pnid']) ? $relations[$relation->id]['pnid'] : 0;
      $_relation->nid = $relation->node->nid;
      $_relation->weight = $relations[$relation->id]['weight'];
      $_relation->prepend_parent_path = $relation->prepend_parent_path;
      $_relations[] = $_relation;
    }
    $page_collection->page_collection = _usanetwork_page_collection_node_tree($page_collection->nid, $_relations);
    node_save($page_collection);
  }

  // save field sync config
  if ($form_state['values']['field_sync']['default']) {
    $form_state['values']['field_sync']['fields'] = null;
  }
  _usanetwork_page_collection_sync_fields_save($form_state['values']['field_sync']['fields'], $page_collection->type, $page_collection->nid);

  $nids = array($page_collection->nid);
  $relations = new RecursiveIteratorIterator(new RelationsRecursiveIterator($page_collection->page_collection), RecursiveIteratorIterator::SELF_FIRST);
  foreach ($relations as $relation) {
    $nids[] = $relation->node->nid;
  }
  // clear cache
  entity_get_controller('node')->resetCache($nids);
}

/**
 * Validate handler for page collection item addition
 */
function usanetwork_page_collection_node_add_validate($form, &$form_state) {
  $page_collection = $form_state['page_collection'];

  $string = $form_state['values']['add']['node'];
  if (!preg_match('/\(([0-9]{1,})\)$/', $string, $matches)) {
    $content_types = _usanetwork_page_collection_node_content_types($page_collection->type);

    if (strpos($string, ':') !== false) {
      list($type, $title) = explode(':', $string);
    }
    else {
      $title = $string;
    }
    // no nid provided, try to find by title
    $query = db_select('node', 'n');
    $query->fields('n', array('nid'))
      ->condition('n.title', db_like(trim($title)), 'LIKE')
      ->condition('n.type', array_keys($content_types), 'IN');
    if (isset($type)) {
      $query->leftJoin('node_type', 'nt', 'n.type = nt.type');
      $query->condition('nt.name', db_like(trim($type)), 'like');
    }

    $results = $query->execute()->fetchCol();
    if (count($results) > 0 && count($results) == 1) {
      $add_node = node_load(reset($results));
    }
    elseif (count($results) > 1) {
      form_set_error('add][node', t('Found more than one node with such title. Please, specify node id.'));
    }
  }
  else {
    $add_node = node_load($matches[1]);
  }

  if (!isset($add_node) || !$add_node) {
    form_set_error('add][node', t('Selected page not found.'));
  }
  else {
    $used = db_select('page_collection_relations', 'pc')
      ->fields('pc', array('nid'))
      ->condition('nid', $add_node->nid, '=')
      ->execute()
      ->fetchCol();
    if (count($used) > 0) {
      form_set_error('add][node', t('Page is already used in a page collection.'));
    }
    else {
      $form_state['add_node'] = $add_node;
    }
  }
}

/**
 * Submit handler for page collection item addition
 */
function usanetwork_page_collection_node_add_submit($form, &$form_state) {
  $page_collection = $form_state['page_collection'];
  $node = $form_state['add_node'];

  // add relationship
  db_insert('page_collection_relations')
    ->fields(array(
      'pcid' => $page_collection->nid,
      'nid' => $node->nid,
    ))
    ->execute();
  // clear cache
  entity_get_controller('node')->resetCache(array($page_collection->nid));
}

/**
 * Remove from page collection confirmation form
 */
function usanetwork_page_collection_node_remove($form, &$form_state, $page_collection, $node) {
  $form_state['page_collection'] = $page_collection;
  $form_state['node'] = $node;
  $question = t('Do you want to remove node %title form page collection %collection?', array(
    '%title' => $node->title,
    '%collection' => $page_collection->title,
  ));
  $description = t('Node will not be deleted. It will be unassigned from page collection.');
  $path = 'node/' . $page_collection->nid . '/page_collection';
  return confirm_form($form, $question, $path, $description);
}

function usanetwork_page_collection_node_remove_submit($form, &$form_state) {
  $page_collection = $form_state['page_collection'];
  $node = $form_state['node'];
  $path = 'node/' . $page_collection->nid . '/page_collection';

  // delete relation
  db_delete('page_collection_relations')
    ->condition('pcid', $page_collection->nid, '=')
    ->condition('nid', $node->nid, '=')
    ->execute();

  // set parent to 0 where parent was removed
  db_update('page_collection_relations')
    ->fields(array(
      'pnid' => 0,
    ))
    ->condition('pnid', $node->nid, '=')
    ->execute();

  // clear cache
  entity_get_controller('node')->resetCache(array($page_collection->nid));

  $form_state['redirect'] = $path;
}

/**
 * Theme callback for node relation table
 */
function theme_usanetwork_page_collection_relation_table($variables) {
  $element = $variables['element'];

  $table_id = drupal_html_id('table-' . implode('-', $element['#array_parents']));
  $element['#theme'] = 'table';
  $element['#header'] = array(t('Title'), t('Weight'), '');
  $element['#rows'] = array();
  foreach (element_children($element) as $id) {
    $item = $element[$id];
    $item['weight']['#attributes']['class'] = array('relation-weight');
    $item['nid']['#attributes']['class'] = array('relation-id');
    $item['pnid']['#attributes']['class'] = array('relation-pid');

    $indent = theme('indentation', array('size' => $item['#depth']));
    $row = array(
      'data' => array(
        $indent . drupal_render($item['id']) . drupal_render($item['nid']) . drupal_render($item['pnid']) .
        drupal_render($item['link']),
        drupal_render($item['weight']),
        drupal_render($item['operations']),
      ),
      'class' => array('draggable'),
    );

    $element['#rows'][] = $row;
  }
  $element['#attributes'] = array('id' => $table_id);

  drupal_add_tabledrag($table_id, 'match', 'parent', 'relation-pid', 'relation-pid', 'relation-id', FALSE);
  drupal_add_tabledrag($table_id, 'order', 'sibling', 'relation-weight');

  return drupal_render($element);
}

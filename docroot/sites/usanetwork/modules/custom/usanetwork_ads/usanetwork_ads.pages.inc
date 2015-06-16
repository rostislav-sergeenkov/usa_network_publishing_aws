<?php

/**
 * Implements hook_form_alter().
 */
function usanetwork_ads_form_alter(&$form, &$form_state, $form_id) {
  // Entity edit forms
  $entity_edit_forms = array(
    'node_form',
    'file_entity_edit',
    'taxonomy_form_term',
  );

  if (isset($form['#bundle'])) {
    $entity_edit_forms[] = $form['#bundle'] . '_node_form';
  }

  if (in_array($form_id, $entity_edit_forms)) {
    $entity = FALSE;
    $entity_type = FALSE;
    switch ($form_id) {
      case 'node_form':
        $entity = isset($form_state['node']) ? $form_state['node'] : FALSE;
        $entity_type = 'node';
        break;
      case 'file_entity_edit':
        $entity = isset($form_state['file']) ? $form_state['file'] : FALSE;
        $entity_type = 'file';
        break;
      case 'taxonomy_form_term':
        $entity = isset($form_state['term']) ? $form_state['term'] : FALSE;
        $entity_type = 'taxonomy_term';
        break;
    }

    if (!$entity || !$entity_type) {
      if (isset($form['#bundle']) && $form_id == $form['#bundle'] . '_node_form') {
        $entity = isset($form_state['node']) ? $form_state['node'] : FALSE;
        $entity_type = 'node';
      }
      else {
        return;
      }
    }

    if (!$entity) {
      return;
    }

    list($entity_id, ,$bundle) = entity_extract_ids($entity_type, $entity);
    $form_state['entity'] = $entity;
    $form_state['entity_type'] = $entity_type;
    $form_state['entity_id'] = $entity_id;
    $form_state['bundle'] = $bundle;

    $defaults = _usanetwork_ads_entity_settings($entity, $entity_type);
    if (!empty($defaults) && !isset($defaults['is_sponsored'])) {
      $defaults['is_sponsored'] = _usanetwork_ads_is_entity_sponsored($entity, $entity_type);
    }

    $form['usanetwork_ads'] = array(
      '#tree' => true,
      '#type' => 'fieldset',
      '#title' => t('Site Metrics'),
      '#group' => 'additional_settings',
      '#weight' => 5,
      '#access' => user_access('administer usanetwork dart settings'),
      '#collapsible' => true,
      '#collapsed' => true,
    );

    $form['usanetwork_ads']['default'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use defaults'),
      '#default_value' => empty($defaults) ? 1 : (isset($defaults['default']) ? $defaults['default'] : 0),
    );

    $form['usanetwork_ads']['variables'] = array(
      '#type' => 'fieldset',
      '#title' => t('Variables'),
      '#states' => array(
        'invisible' => array(
          ':input[name="usanetwork_ads[default]"]' => array('checked' => true),
        ),
      ),
    );

    _usanetwork_ads_dart_elements($form['usanetwork_ads']['variables'], $defaults);

    $id = drupal_html_id('usanetwork-ads-' . $bundle . '-' . $entity_id);
    $form['usanetwork_ads']['variables']['omniture'] = array(
      '#type' => 'fieldset',
      '#tree' => TRUE,
      '#title' => t('Omniture Variables'),
    );

    $items_count = isset($form_state['usanetwork_ads']['omniture']['items_count']) ? $form_state['usanetwork_ads']['omniture']['items_count'] : count($defaults['omniture']['variables']);
    _usanetwork_ads_omniture_elements($id, $form['usanetwork_ads']['variables']['omniture'], $defaults['omniture'], $items_count);
    $mandatory = _usanetwork_ads_mandatory_omniture_variables($entity_type, $bundle);
    if (!empty($mandatory)) {
      $form['usanetwork_ads']['default']['#default_value'] = 0;
      $form['usanetwork_ads']['#attributes']['class'][] = 'required-fields';
    }
    $variables =& $form['usanetwork_ads']['variables']['omniture']['variables'];
    foreach ($mandatory as $variable_name) {
      $element_delta = NULL;
      foreach (element_children($variables) as $delta) {
        if ($delta !== 'add_more' && $variables[$delta]['key']['#default_value'] == $variable_name) {
          $element_delta = $delta;
          break;
        }
      }

      if ($element_delta === NULL) {
        $add_more = $variables['add_more'];
        unset($variables['add_more']);
        $variables[] = _usanetwork_ads_omniture_variable_elements(array(
          'key' => $variable_name,
        ));
        $element_delta = key($variables);
        $variables['add_more'] = $add_more;
      }
      $variables[$element_delta]['key']['#attributes']['readonly'] = 'readonly';
      $variables[$element_delta]['value']['#required'] = TRUE;
    }

    $form_state['usanetwork_ads']['omniture']['items_count'] = $items_count;
    $form['usanetwork_ads']['variables']['omniture']['variables']['#attributes']['id'] = $id . '-omniture-values';

    $form['#submit'][] = 'usanetwork_ads_form_entity_form_submit';
    if (!empty($form['actions']['submit']['#submit'])) {
      $form['actions']['submit']['#submit'][] = 'usanetwork_ads_form_entity_form_submit';
    }
  }

  // Bundle settings form
  $bundle_setting_forms = array(
    'node_type_form',
    'file_entity_file_type_form',
    'taxonomy_form_vocabulary',
  );
  if (in_array($form_id, $bundle_setting_forms)) {
    $entity_type = FALSE;
    $bundle = FALSE;

    switch ($form_id) {
      case 'node_type_form':
        $entity_type = 'node';
        $bundle = isset($form['#node_type']) ? $form['#node_type']->type : FALSE;
        break;
      case 'file_entity_file_type_form':
        $entity_type = 'file';
        $bundle = isset($form['#file_type']) ? $form['#file_type']->type : FALSE;
        break;
      case 'taxonomy_form_vocabulary':
        $entity_type = 'taxonomy_term';
        $bundle = isset($form['#vocabulary']) ? $form['#vocabulary']->machine_name : FALSE;
        break;
    }

    if (!$entity_type || !$bundle) {
      return;
    }
    $form_state['entity_type'] = $entity_type;
    $form_state['bundle'] = $bundle;
    $defaults = _usanetwork_ads_bundle_settings($entity_type, $bundle);

    $form['usanetwork_ads'] = array(
      '#tree' => true,
      '#type' => 'fieldset',
      '#title' => t('Site Metrics'),
      '#group' => 'additional_settings',
      '#weight' => 5,
      '#access' => user_access('administer usanetwork dart settings'),
      '#collapsible' => true,
      '#collapsed' => true,
    );

    _usanetwork_ads_dart_elements($form['usanetwork_ads'], $defaults);
    unset($form['usanetwork_ads']['is_sponsored']);
    unset($form['usanetwork_ads']['sect']['#description']);

    $id = drupal_html_id('usanetwork-ads-' . $bundle);
    $form['usanetwork_ads']['omniture'] = array(
      '#type' => 'fieldset',
      '#tree' => TRUE,
      '#title' => t('Omniture Variables'),
    );

    $items_count = isset($form_state['usanetwork_ads']['omniture']['items_count']) ? $form_state['usanetwork_ads']['omniture']['items_count'] : count($defaults['omniture']['variables']);
    _usanetwork_ads_omniture_elements($id, $form['usanetwork_ads']['omniture'], $defaults['omniture'], $items_count);
    $form_state['usanetwork_ads']['omniture']['items_count'] = $items_count;
    $form['usanetwork_ads']['omniture']['variables']['#attributes']['id'] = $id . '-omniture-values';

    $form['#submit'][] = 'usanetwork_ads_form_bundle_form_submit';
    if (!empty($form['actions']['submit']['#submit'])) {
      $form['actions']['submit']['#submit'][] = 'usanetwork_ads_form_bundle_form_submit';
    }
  }
}

/**
 * Entity save submit callback
 * Saves settings
 */
function usanetwork_ads_form_entity_form_submit($form, &$form_state) {
  if (!isset($form_state['input']['usanetwork_ads']) || !isset($form_state['entity'])) {
    return;
  }

  $entity = $form_state['entity'];
  $entity_type = $form_state['entity_type'];
  if (!empty($form_state['entity_id'])) {
    $entity_id = $form_state['entity_id'];
  } else {
    list($entity_id,,) = entity_extract_ids($entity_type, $entity);
  }
  if (empty($entity_id)) {
    return;
  }
  $bundle = $form_state['bundle'];

  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $entity_settings = $form_state['input']['usanetwork_ads']['variables'];
  $entity_settings['default'] = $form_state['input']['usanetwork_ads']['default'];

  // remove empty omniture variables
  $variables = array();
  if (isset($entity_settings['omniture']['variables']) && is_array($entity_settings['omniture']['variables'])) {
    foreach ($entity_settings['omniture']['variables'] as $item) {
      if (!empty($item['key'])) {
        $variables[] = $item;
      }
    }
  }
  $entity_settings['omniture']['variables'] = $variables;

  $settings[$entity_type][$bundle][$entity_id] = $entity_settings;
  variable_set('usanetwork_ads_site_metric_settings', $settings);
}

/**
 * Bundle save submit callback
 * Saves settings
 */
function usanetwork_ads_form_bundle_form_submit($form, &$form_state) {
  if (!isset($form_state['input']['usanetwork_ads']) || !isset($form_state['bundle'])) {
    return;
  }

  $entity_type = $form_state['entity_type'];
  $bundle = $form_state['bundle'];
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $type_settings = $form_state['input']['usanetwork_ads'];

  if ($entity_type == 'taxonomy_term' && $bundle !== $form_state['values']['machine_name']) {
    $new_bundle = $form_state['values']['machine_name'];
    if (isset($settings[$entity_type][$bundle])) {
      $settings[$entity_type][$new_bundle] = $settings[$entity_type][$bundle];
      unset($settings[$entity_type][$bundle]);
    }
    $bundle = $new_bundle;
  }

  // remove empty omniture variables
  $variables = array();
  foreach ($type_settings['omniture']['variables'] as $item) {
    if (!empty($item['key'])) {
      $variables[] = $item;
    }
  }
  $type_settings['omniture']['variables'] = $variables;

  $settings[$entity_type][$bundle]['default'] = $type_settings;
  variable_set('usanetwork_ads_site_metric_settings', $settings);
}


/**
 * Submit callback for add omniture variable
 */
function usanetwork_ads_add_omniture_submit($form, &$form_state) {
  $button = $form_state['triggering_element'];

  // Increment the items count.
  $form_state['usanetwork_ads']['omniture']['items_count']++;

  $form_state['rebuild'] = TRUE;
}

/**
 * Ajax callback for add omniture variable.
 */
function usanetwork_ads_add_omniture_ajax_submit(&$form, &$form_state) {
  $button = $form_state['triggering_element'];

  // Go one level up in the form, to the widgets container.
  $element = drupal_array_get_nested_value($form, array_slice($button['#array_parents'], 0, -1));
  return $element;
}

/**
 * Returns dart form elements
 */
function _usanetwork_ads_dart_elements(&$parent, $defaults = array()) {
  $parent['is_sponsored'] = array(
    '#type' => 'radios',
    '#title' => t('Is Sponsored'),
    '#options' => array(
      -1 => t('Inherited'),
      0 => t('No'),
      1 => t('Yes'),
    ),
    '#default_value' => isset($defaults['is_sponsored']) && $defaults['is_sponsored'] !== false ? $defaults['is_sponsored'] : -1,
  );
  $parent['sect'] = array(
    '#type' => 'textfield',
    '#title' => t('"sect" value'),
    '#default_value' => isset($defaults['sect']) ? $defaults['sect'] : '',
    '#description' => t('Setting a "sect" value here will over-ride value set for any associated TV Show.'),
  );
  $parent['sub'] = array(
    '#type' => 'textfield',
    '#title' => t('"sub" value'),
    '#default_value' => isset($defaults['sub']) ? $defaults['sub'] : '',
  );
  $parent['sub2'] = array(
    '#type' => 'textfield',
    '#title' => t('"sub2" value'),
    '#default_value' => isset($defaults['sub2']) ? $defaults['sub2'] : '',
  );
}

/**
 * Returns omniture form elements
 */
function _usanetwork_ads_omniture_elements($id, &$parent, $defaults = array(), $items_count = null) {
  $parent['disable'] = array(
    '#type' => 'checkbox',
    '#title' => t('Disable omniture variables'),
    '#default_value' => isset($defaults['disable']) ? $defaults['disable'] : 0,
  );


  $parent['variables'] = array(
    '#type' => 'container',
  );

  if (isset($items_count)) {
    for ($delta = 0; $delta < $items_count; $delta++) {
      $parent['variables'][$delta] = _usanetwork_ads_omniture_variable_elements(isset($defaults['variables'][$delta]) ? $defaults['variables'][$delta] : array());
    }
  }
  else {
    foreach ($defaults['variables'] as $delta => $values) {
      $parent['variables'][$delta] = _usanetwork_ads_omniture_variable_elements($values);
    }
  }

  // Add the "Add more" button.
  $parent['variables']['add_more'] = array(
    '#type' => 'submit',
    '#value' => t('Add variable'),
    '#submit' => array('usanetwork_ads_add_omniture_submit'),
    '#ajax' => array(
      'callback' => 'usanetwork_ads_add_omniture_ajax_submit',
      'wrapper' => $id . '-omniture-values',
      'effect' => 'fade',
    ),
  );
}

/**
 * Return omniture variable elements.
 */
function _usanetwork_ads_omniture_variable_elements($defaults = array()) {
  $form = array(
    '#type' => 'fieldset',
    '#tree' => TRUE,
  );;
  $form['key'] = array(
    '#type' => 'textfield',
    '#title' => t('Variable Name'),
    '#default_value' => $defaults['key'],
  );
  $form['value'] = array(
    '#type' => 'textfield',
    '#title' => t('Value'),
    '#default_value' => $defaults['value'],
  );

  return $form;
}

/**
 * Returns entity specific settings.
 */
function _usanetwork_ads_entity_settings($entity, $entity_type) {
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  list($entity_id, , $bundle) = entity_extract_ids($entity_type, $entity);
  $entity_settings = isset($settings[$entity_type][$bundle][$entity_id]) ? $settings[$entity_type][$bundle][$entity_id] : array();

  return $entity_settings;
}

/**
 * Returns bundle specific settings.
 */
function _usanetwork_ads_bundle_settings($entity_type, $bundle) {
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $bundle_settings = isset($settings[$entity_type][$bundle]['default']) ? $settings[$entity_type][$bundle]['default'] : array();

  return $bundle_settings;
}

/**
 * Returns node specific settings.
 */
function _usanetwork_ads_content_type_settings($type) {
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $node_settings = isset($settings['node'][$type]['default']) ? $settings['node'][$type]['default'] : array();

  return $node_settings;
}

<?php

/**
 * @file
 * Contains field hooks.
 */

/**
 * Implements hook_field_info().
 */
function usanetwork_dynamic_entity_reference_field_info() {
  $return = array();

  $return['usanetwork_dynamic_entity_reference'] = array(
    'label' => t('USA Network Dynamic Entity Reference'),
    'description' => t('An entity field containing a dynamic entity reference.'),
    'settings' => array(
      'entity_type_ids' => array(),
      'entity_bundles' => array(),
    ),
    'instance_settings' => array(
      'handler' => 'default',
    ),
    'default_widget' => 'usanetwork_dynamic_entity_reference_default',
    'default_formatter' => 'usanetwork_dynamic_entity_reference_label',
    'property_callbacks' => array('usanetwork_dynamic_entity_reference_field_property_callback'),
  );

  return $return;
}

/**
 * Property callback for the Entity Metadata framework.
 */
function usanetwork_dynamic_entity_reference_field_property_callback(&$info, $entity_type, $field, $instance, $field_type) {
  // Set the property type based on the targe type.
  $field_type['property_type'] = 'entity';
  $field_type['setter callback'] = 'usanetwork_dynamic_entity_reference_metadata_field_property_set';

  // Then apply the default.
  entity_metadata_field_default_property_callback($info, $entity_type, $field, $instance, $field_type);
}

/**
 * Callback for setting field property values.
 */
function usanetwork_dynamic_entity_reference_metadata_field_property_set($entity, $name, $value, $langcode, $entity_type, $info) {
  $field = field_info_field($name);
  $langcode = entity_metadata_field_get_language($entity_type, $entity, $field, $langcode);
  $values = $field['cardinality'] == 1 && !is_array($value) ? array($value) : $value;
  $items = array();
  foreach ($values as $delta => $value) {
    if (is_array($value)) {
      if (!isset($value['target_type']) || !isset($value['target_id'])) {
        throw new \InvalidArgumentException('Expected a target type and ID in order to set the entity value');
      }
      $items[$delta] = entity_metadata_wrapper($value['target_type'], $value['target_id']);
    }
    elseif (is_object($value) && $value instanceof EntityDrupalWrapper) {
      // Object.
      $items[$delta] = $value;
    }
    else {
      throw new \InvalidArgumentException('Expected a target type and ID or an entity metadata wrapper in order to set the entity value');
    }
  }
  $entity->{$name}[$langcode] = $items;
  // Empty the static field language cache, so the field system picks up any
  // possible new languages.
  drupal_static_reset('field_language');
}

/**
 * Implements hook_field_widget_info().
 */
function usanetwork_dynamic_entity_reference_field_widget_info() {
  $return = array();

  $return['usanetwork_dynamic_entity_reference_default'] = array(
    'label' => t('Autocomplete'),
    'field types' => array('usanetwork_dynamic_entity_reference'),
    'settings' => array(),
    'behaviors' => array(
      'multiple values' => FIELD_BEHAVIOR_DEFAULT,
      'default value' => FIELD_BEHAVIOR_DEFAULT,
    ),
  );

  return $return;
}

/**
 * Implements hook_field_widget_form().
 */
function usanetwork_dynamic_entity_reference_field_widget_form(&$form, &$form_state, $field, $instance, $langcode, $items, $delta, $element) {
  switch ($instance['widget']['type']) {
    case 'usanetwork_dynamic_entity_reference_default':

      $entity = $element['#entity'];
      $item = isset($items[$delta]) ? $items[$delta] : NULL;
      if ($item) {
        $entities = entity_load($item['target_type'], array($item['target_id']));
        if (!empty($entities)) {
          $item['entity'] = entity_metadata_wrapper($item['target_type'], reset($entities));
        }
        else {
          // Entity removed.
          $item = NULL;
          unset($items[$delta]);
        }
      }

      // Prepare the autocomplete path parameters.
      $autocomplete_path_parameters = array(
        'field_name' => $element['#field_name'],
        'entity_type' => $element['#entity_type'],
        'bundle_name' => $element['#bundle'],
        'target_type' => $item ? $item['target_type'] : NULL,
        'string' => NULL,
      );

      global $user;
      $element += array(
        '#type' => 'textfield',
        '#maxlength' => 1024,
        '#default_value' => $item ? $item['entity']->label() . ' (' . $item['entity']->getIdentifier() . ')' : '',
        '#autocomplete_path' => 'usanetwork_dynamic_entity_reference/autocomplete/' . implode('/', $autocomplete_path_parameters),
        '#element_validate' => array('usanetwork_dynamic_entity_reference_field_widget_form_validate'),
        '#autocreate_uid' => isset($entity->uid) ? $entity->uid : $user->uid,
        '#field_name' => $element['#field_name'],
      );

      $element['#title'] = t('Label');

      // Select the target entity type.
      $options = array();

      foreach (entity_get_info() as $entity_type => $entity_info) {
        $options[$entity_type] = $entity_info['label'];
      }

      $entity_type_ids = $field['settings']['entity_type_ids'];
      $available = array_intersect_key($options, $entity_type_ids ?: array());
      $keys = array_keys($options);
      
      $entity_type = array(
        '#type' => 'select',
        '#options' => $available,
        '#title' => t('Entity type'),
        '#default_value' => $item ? $item['target_type'] : reset($keys),
        '#weight' => -50,
        '#attributes' => array(
          'class' => array('dynamic-entity-reference-entity-type'),
        ),
      );

      return array(
        '#type' => 'container',
        '#attributes' => array(
          'class' => array('container-inline'),
        ),
        'target_type' => $entity_type,
        'target_id' => $element,
        '#attached' => array(
          'js' => array(
            drupal_get_path('module', 'usanetwork_dynamic_entity_reference') . '/js/usanetwork_dynamic_entity_reference.widget.js' => array(
              // This has to run after default autocomplete.
              'weight' => 1000,
              'scope' => 'footer',
            ),
          ),
        ),
      );

      break;
  }
  return array();
}

/**
 * Element validate callback for dynamic entity reference widget.
 */
function usanetwork_dynamic_entity_reference_field_widget_form_validate($element, &$form_state, $form) {
  // If a value was entered into the autocomplete.
  $value = NULL;
  if (!empty($element['#value'])) {
    // Take "label (entity id)', match the id from parenthesis.
    if (preg_match("/.+\((\d+)\)/", $element['#value'], $matches)) {
      $value = $matches[1];
    }
    elseif (preg_match("/.+\(([\w.]+)\)/", $element['#value'], $matches)) {
      $value = $matches[1];
    }
  }
  form_set_value($element, $value, $form_state);
}

/**
 * Implements hook_field_formatter_info().
 */
function usanetwork_dynamic_entity_reference_field_formatter_info() {
  $return = array();

  $return['usanetwork_dynamic_entity_reference_default'] = array(
    'label' => t('Label'),
    'field types' => array('usanetwork_dynamic_entity_reference'),
    'settings' => array(
      'link' => TRUE,
    ),
  );

  return $return;
}

/**
 * Implements hook_field_formatter_settings_form().
 */
function usanetwork_dynamic_entity_reference_field_formatter_settings_form($field, $instance, $view_mode, $form, &$form_state) {
  $display = $instance['display'][$view_mode];
  $settings = $display['settings'];

  $element = array();
  switch ($display['type']) {
    case 'usanetwork_dynamic_entity_reference_default':
      $element['link'] = array(
        '#title' => t('Link label to the referenced entity'),
        '#type' => 'checkbox',
        '#default_value' => $settings['link'],
      );

      break;

  }

  return $element;
}

/**
 * Implements hook_field_formatter_settings_summary().
 */
function usanetwork_dynamic_entity_reference_field_formatter_settings_summary($field, $instance, $view_mode) {
  $display = $instance['display'][$view_mode];
  $settings = $display['settings'];

  $return = array();
  switch ($display['type']) {
    case 'usanetwork_dynamic_entity_reference_default':
      $return[] = $settings['link'] ? t('Link to the referenced entity') : t('No link');
      break;

  }

  return implode('<br />', $return);
}

/**
 * Implements hook_field_formatter_prepare_view().
 */
function usanetwork_dynamic_entity_reference_field_formatter_prepare_view($entity_type, $entities, $field, $instances, $langcode, &$entity_items, $displays) {
  if ($field['type'] == 'usanetwork_dynamic_entity_reference') {
    $target_ids = array();
    $revision_ids = array();

    foreach ($entity_items as $items) {
      // Collect every possible entity attached to any of the entities.
      foreach ($items as $item) {
        if (!empty($item['revision_id']) && !empty($item['target_type'])) {
          $revision_ids[$item['target_type']][] = $item['revision_id'];
        }
        elseif (!empty($item['target_id']) && !empty($item['target_type'])) {
          $target_ids[$item['target_type']][] = $item['target_id'];
        }
      }
    }

    $target_entities = array();

    if ($target_ids) {
      foreach ($target_ids as $target_type => $ids) {
        $target_entities = entity_load($target_type, $ids);
        foreach ($target_entities as $id => $target_entity) {
          $target_entities[$target_type][$id] = entity_metadata_wrapper($entity_type, $target_entity);
        }
      }
    }

    if ($revision_ids) {
      // We need to load the revisions one by-one.
      foreach ($revision_ids as $target_type => $rev_ids) {
        foreach ($rev_ids as $revision_id) {
          $target_entity = entity_revision_load($target_type, $revision_id);
          $target_entity_wrapper = entity_metadata_wrapper($entity_type, $target_entity);
          // Use the revision ID in the key.
          $identifier = $target_entity_wrapper->getIdentifier() . ':' . $revision_id;
          $target_entities[$target_type][$identifier] = $target_entity_wrapper;
        }
      }
    }

    // Iterate through the fieldable entities again to attach the loaded data.
    $rekey = FALSE;
    foreach ($entity_items as $key => $items) {
      foreach ($items as $delta => $item) {
        // If we have a revision ID, the key uses it as well.
        $identifier = !empty($item['revision_id']) ? $item['target_id'] . ':' . $item['revision_id'] : $item['target_id'];
        if ($item['target_id'] !== 0) {
          if (!isset($item['target_type']) || !isset($target_entities[$item['target_type']][$identifier])) {
            // The entity no longer exists, so empty the item.
            unset($items[$delta]);
            $rekey = TRUE;
            continue;
          }

          $item['entity'] = $target_entities[$item['target_type']][$identifier];

          if (!entity_access('view', $item['target_type'], $item['entity']->value())) {
            continue;
          }
        }
        else {
          // This is an "auto_create" item, just leave the entity in place.
        }

        // Mark item as accessible.
        $item['access'] = TRUE;
        $items[$delta] = $item;
      }

      // Rekey the items array if needed.
      if ($rekey) {
        $items = array_values(array_filter($items, function ($item) {
          return isset($item) && isset($item['entity']) && !empty($item['access']);
        }));
      }
      $entity_items[$key] = $items;
    }
  }
}

/**
 * Implements hook_field_formatter_view().
 */
function usanetwork_dynamic_entity_reference_field_formatter_view($entity_type, $entity, $field, $instance, $langcode, &$items, $display) {
  $settings = $display['settings'];

  $element = array();
  switch ($display['type']) {
    case 'usanetwork_dynamic_entity_reference_default':
      $elements = array();

      foreach ($items as $delta => $item) {
        if (empty($item['access'])) {
          // User doesn't have access to the referenced entity.
          continue;
        }
        /** @var $referenced_entity \EntityDrupalWrapper */
        if ($referenced_entity = $item['entity']) {
          $label = $referenced_entity->label();
          // If the link is to be displayed and the entity has a uri, display a
          // link.
          if ($settings['link'] && $uri = entity_uri($referenced_entity->type(), $referenced_entity->value())) {
            $elements[$delta] = array(
              '#type' => 'markup',
              '#markup' => l($label, $uri['path'], $uri['options']),
            );
          }
          else {
            $elements[$delta] = array('#markup' => check_plain($label));
          }
        }
      }

      return $elements;
      break;

  }

  return $element;
}

/**
 * Implements hook_field_settings_form().
 */
function usanetwork_dynamic_entity_reference_field_settings_form($field, $instance, $has_data) {
  // Select the target entity type.
  $entity_type_options = array();

  foreach (entity_get_info() as $entity_type => $entity_info) {
    $entity_type_options[$entity_type] = $entity_info['label'];
  }

  $available_entity_bundles = _usanetwork_dynamic_entity_reference_get_js_settings_data($entity_type_options);

  $element['#rebuild'] = TRUE;

  $element['entity_type_ids'] = array(
    '#type' => 'select',
    '#title' => t('Select items'),
    '#options' => $entity_type_options,
    '#default_value' => $field['settings']['entity_type_ids'],
    '#disabled' => $has_data,
    '#multiple' => TRUE,
  );

  $element['entity_bundles'] = array(
    '#type' => 'select',
    '#title' => t('Select bundles'),
    '#disabled' => $has_data,
    '#options' => _usanetwork_dynamic_entity_reference_get_full_bundles_list($available_entity_bundles),
    '#multiple' => TRUE,
    '#prefix' => '<div id="entity-bundles-replace">',
    '#suffix' => '</div>',
  );

  $element['#attached']['js'][] = array(
    'data' => array(
      'entity_bundles_data' => $available_entity_bundles,
      'entity_bundles_selected' => $field['settings']['entity_bundles'],
    ),
    'type' => 'setting',
  );

  $element['#attached']['js'][drupal_get_path('module', 'usanetwork_dynamic_entity_reference') . '/js/usanetwork_dynamic_entity_reference.entity_bundle_selector.js'] = array();

  return $element;
}

/**
 * Implements hook_field_is_empty().
 */
function usanetwork_dynamic_entity_reference_field_is_empty($item, $field) {
  return empty($item['target_id']);
}

function _usanetwork_dynamic_entity_reference_get_js_settings_data($entity_types) {
  $result = array();

  if (!empty($entity_types)) {
    foreach ($entity_types as $entity_type => $entity_type_name) {
      $result[$entity_type] = _usanetwork_dynamic_entity_reference_get_entity_bundles_settings_array($entity_type);
    }
  }

  return $result;
}

/**
 * Returns list of bundles.
 */
function _usanetwork_dynamic_entity_reference_get_full_bundles_list(array $entity_types = array()) {
  if (empty($entity_types)) {
    $entity_type_options = array();

    foreach (entity_get_info() as $entity_type => $entity_info) {
      $entity_type_options[$entity_type] = $entity_info['label'];
    }

    $entity_types = _usanetwork_dynamic_entity_reference_get_js_settings_data($entity_type_options);
  }

  $result = array();

  if (!empty($entity_types)) {
    foreach ($entity_types as $entity_type_name => $entity_type_bundles) {
      $result += $entity_type_bundles;
    }
  }

  return $result;
}

/**
 * AJAX callback for getting a list of bundles in order of selected entity.
 * FEATURED FUNCTION
 */
function _usanetwork_dynamic_entity_reference_entity_bundles_replace($form, $form_state) {
  $selected_entity_types = $form_state['values']['field']['settings']['entity_type_ids'];
  $entity_bundles_field = $form_state['complete form']['field']['settings']['entity_bundles'];

  $selected_bundles_list = _usanetwork_dynamic_entity_reference_get_entity_multiple_bundles_settings_array($selected_entity_types);

  if (empty($selected_bundles_list)) {
    $selected_bundles_list = _usanetwork_dynamic_entity_reference_entity_bundles_default_options();
  }

  $entity_bundles_field['#options'] = $selected_bundles_list;

  return $entity_bundles_field;
}

/**
 * Returns settings array of entity bundles.
 */
function _usanetwork_dynamic_entity_reference_get_entity_bundles_settings_array($entity_type) {
  $selected_bundles_list = array();
  $bundles = field_info_bundles($entity_type);

  if (!empty($bundles)) {
    foreach ($bundles as $bundle_name => $bundle) {
      $selected_bundles_list[$bundle_name] = $bundle['label'];
    }
  }

  return $selected_bundles_list;
}

/**
 * Returns settings array of bundles of multiple entities.
 */
function _usanetwork_dynamic_entity_reference_get_entity_multiple_bundles_settings_array(array $entity_types = array()) {
  if (count($entity_types) == 1) {
    return _usanetwork_dynamic_entity_reference_get_entity_bundles_settings_array(reset($entity_types));
  }

  if (!empty($entity_types)) {
    $selected_bundles_list = array();

    foreach ($entity_types as $entity_type) {
      $selected_bundles_list += _usanetwork_dynamic_entity_reference_get_entity_bundles_settings_array($entity_type);
    }

    return $selected_bundles_list;
  }

  return array();
}

/**
 * AJAX callback for getting default value of bundles list.
 * FEATURED FUNCTION.
 */
function _usanetwork_dynamic_entity_reference_entity_bundles_default_options($data = NULL) {

  if (!empty($data)) {
    return _usanetwork_dynamic_entity_reference_get_entity_multiple_bundles_settings_array($data);
  }

  return array(
    '_none' => t('None'),
  );
}

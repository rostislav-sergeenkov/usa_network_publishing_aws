<?php

/**
 * @file
 * Page callbacks of Data for MPS.
 */

/**
 * Menu callback; presents MPS JSON data.
 *
 * @param string $entity_type
 *   Type of entity.
 *
 * @param object $entity
 *   Object of entity.
 *
 * @return array
 *   Render array.
 */
function mps_load_info($entity_type, $entity) {

  $path = drupal_get_path('module', 'mps');

  $entity_array = _mps_iterate_entity($entity_type, $entity);

  $options = array(
    'attributes' => array(
      'id' => 'copy-link',
      'class' => 'copy-link'
    ),
    'external' => TRUE,
    'fragment' => FALSE
  );

  $output = array(
    'textarea' => array(
      '#type' => 'markup',
      '#markup' => '<textarea rows="10" id="mps-json" class="mps-json">' . drupal_json_encode($entity_array) . '</textarea><br/>',
    ),
    'copy_link' => array(
      '#type' => 'markup',
      '#markup' => l(t('Select JSON Data'), NULL, $options),
    ),
    '#attached' => array(
      'js' => array(
        $path . '/js/mps_copy_link.js'
      ),
      'css' => array(
        $path . '/css/mps_info.css'
      ),
    ),
  );

  return $output;
}

/**
 * Helper function; provides value of field.
 *
 * @param string $field_type
 *   Type of field.
 *
 * @param object $field
 *   Object of field.
 *
 * @return array|bool|string
 *   Array for multiple value fields, string for single value fields, FALSE for
 *   empty fields.
 */
function _mps_get_value($field_type, $field) {

  if (empty($field->value())) {
    return FALSE;
  }

  switch ($field_type) {
    case 'collection':
      // Do nothing. It handles separately.
      $value = FALSE;
      break;
    case 'datetime':
      $value = $field->value();
      break;
    case 'datestamp':
      $value = $field->value();
      break;
    case 'entityreference':
      $value = $field->title->value();
      break;
    case 'field_collection':
      $value = _mps_iterate_entity($field->type(), $field->value());
      break;
    case 'file':
      $value = file_create_url($field->file->value()->uri);
      break;
    case 'image':
      $file = $field->file->value();
      $value = file_create_url($file->uri);
      break;
    case 'link_field':
      $value = $field->url->value();
      break;
    case 'list_boolean':
      $value = $field->value();
      break;
    case 'location':
      // Do nothing. It handles separately.
      $value = FALSE;
      break;
    case 'pub_tv_relationship_field':
      $value = $field->value();
      foreach ($value as $key => $item) {
        if (empty($item)) {
          unset($value[$key]);
        }
      }
      break;
    case 'taxonomy_term_reference':
      $value = $field->name->value();
      break;
    case 'text':
      $value = $field->value(array('decode' => TRUE));
      break;
    case 'text_long':
      $value = $field->value(array('decode' => TRUE));
      break;
    case 'text_with_summary':
      $value = $field->value->value(array('decode' => TRUE));
      break;
    default :
      $value = FALSE;
      watchdog('mps_json', 'Field type of "@field_type" is not handling.', array('@field_type' => $field_type), WATCHDOG_ERROR);
      break;
  }

  return $value;
}

/**
 * Helper function; iterates through the entity.
 *
 * @param string $entity_type
 *   Type of entity.
 *
 * @param object $entity
 *   Object of entity.
 *
 * @return array
 *   Array of field values of entity.
 */
function _mps_iterate_entity($entity_type, $entity) {

  $wrapper = entity_metadata_wrapper($entity_type, $entity);

  $entity_array = array();

  $field_info_instances = field_info_instances($entity_type, $wrapper->getBundle());

  foreach ($field_info_instances as $field_name => $value) {

    $field_info = field_info_field($field_name);

    // Collections module has an issue with metadatawrapper.
    // This type of field is excluded from iterator.
    if ($field_info['type'] === 'collection') {
      continue;
    }
    if ($field_info['type'] === 'location') {
      $field_view = (field_view_field($entity_type, $entity, $field_name));
      $field_view['#label_display'] = 'hidden';
      $field_value = trim(decode_entities(strip_tags(render($field_view))));
      if (!empty($field_value)) {
        $entity_array[$field_name] = $field_value;
      }
      continue;
    }
    $_mps_get_value = function($property) use ($field_info) {
      return _mps_get_value($field_info['type'], $property);
    };
    $field_value = $field_info['cardinality'] == 1 ? [$wrapper->$field_name] : iterator_to_array($wrapper->$field_name);
    $field_value = implode('|', array_filter(array_map($_mps_get_value, $field_value)));
    if ($field_value) {
      $entity_array[$field_name] = $field_value;
    }
  }
  return $entity_array;
}

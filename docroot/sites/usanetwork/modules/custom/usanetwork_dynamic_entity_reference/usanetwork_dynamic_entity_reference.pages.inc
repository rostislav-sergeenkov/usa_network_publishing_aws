<?php

/**
 * @file
 * Contains page callbacks for the module.
 */

/**
 * Dynamic entity reference auto-complete callback.
 */
function usanetwork_dynamic_entity_reference_autocomplete($field_name, $entity_type, $bundle_name, $entity_id, $target_type = NULL, $string = NULL) {
  // field_undr/node/page_a/node/a

  $field_info = field_info_field($field_name);
  $field_allowed_bundles = $field_info['settings']['entity_bundles'];

  if ($target_type == NULL) {
    drupal_json_output(array());
  }
  $match_operator = 'CONTAINS';
  // Get the typed string, if exists from the URL.
  $match = drupal_strtolower($string);

  $instance_info = array(
    'entity_id' => $entity_id,
    'entity_type' => $entity_type,
    'field_name' => $field_name,
    'bundle_name' => $bundle_name,
    'target_type' => $target_type,
    'target_bundles' => $field_allowed_bundles,
  );
  $options = usanetwork_dynamic_entity_reference_get_referenceable_entities($instance_info, $target_type, $field_allowed_bundles, $match, $match_operator, 10);

  $matches = array();
  // Loop through the entities and convert them into autocomplete output.
  foreach ($options as $values) {
    foreach ($values as $entity_id => $label) {
      $key = "$label ($entity_id)";
      // Strip things like starting/trailing white spaces, line breaks and
      // tags.
      $key = preg_replace('/\s\s+/', ' ', str_replace("\n", '', trim(decode_entities(strip_tags($key)))));
      // Names containing commas or quotes must be wrapped in quotes.
      $matches[$key] = '<div class="reference-autocomplete" data-type="und" data-id="' . $entity_id . '">' . $label . '</div>';
    }
  }

  drupal_json_output($matches);
}

/**
 * Builds default query for nodes.
 *
 * @param $target_bundles
 * @param null $match
 * @param string $match_operator
 * @return \Drupal\Core\Database\Query\Select|SelectQuery
 */
function _usanetwork_dynamic_entity_reference_get_node_query($target_bundles, $match = NULL, $match_operator = 'LIKE') {
  if ($match_operator == 'LIKE' && !empty($match)) {
    $match = '%' . $match . '%';
  }

  $query = db_select('node', 'n');
  $query->fields('n', array('nid', 'vid', 'type', 'title'));
  $query->condition('n.type', $target_bundles, is_array($target_bundles) ? 'IN' : '=');

  if (isset($match)) {
    $query->condition('n.title', $match, $match_operator);
    $query->orderBy('n.title', 'ASC');
  }

  return $query;
}

/**
 * Builds default query for files.
 *
 * @param $target_bundles
 * @param null $match
 * @param string $match_operator
 * @return \Drupal\Core\Database\Query\Select|SelectQuery
 */
function _usanetwork_dynamic_entity_reference_get_file_query($target_bundles, $match = NULL, $match_operator = 'LIKE') {
  if ($match_operator == 'LIKE' && !empty($match)) {
    $match = '%' . $match . '%';
  }

  $query = db_select('file_managed', 'f');
  $query->fields('f', array('fid', 'vid', 'type', 'filename'));
  $query->condition('f.type', $target_bundles, is_array($target_bundles) ? 'IN' : '=');

  if (isset($match)) {
    $query->condition('f.filename', $match, $match_operator);
    $query->orderBy('f.filename', 'ASC');
  }

  if (_usanetwork_dynamic_entity_reference_is_videos_bundle($target_bundles)) {
    $query->join('mpx_video', 'mv', 'mv.fid=f.fid');
    $query->addField('mv', 'expiration_date');
    $query->condition('mv.expiration_date', REQUEST_TIME, '>');
  }

  return $query;
}

/**
 * Checks if $target_bundles are videos
 * @param $target_bundles
 * @return bool
 */
function _usanetwork_dynamic_entity_reference_is_videos_bundle($target_bundles) {
  if (is_array($target_bundles)) {
    foreach ($target_bundles as $target_bundle) {
      if ($target_bundle != 'mpx_video_1' && $target_bundle != 'mpx_video_2') {
        return FALSE;
      }
    }

    return TRUE;
  }
  else {
    if ($target_bundles == 'mpx_video_1' || $target_bundles == 'mpx_video_2') {
      return TRUE;
    }
  }

  return FALSE;
}

/**
 * Builds an EntityQuery to get referenceable entities.
 *
 * @param string $target_type
 *   The target entity type.
 * @param string|null $match
 *   (Optional) Text to match the label against. Defaults to NULL.
 * @param string $match_operator
 *   (Optional) The operation the matching should be done with. Defaults
 *   to "CONTAINS".
 *
 * @return SelectQueryInterface
 *   The EntityQuery object with the basic conditions and sorting applied to
 *   it.
 */
function usanetwork_dynamic_entity_reference_build_entity_query($target_type, $target_bundles, $match = NULL, $match_operator = 'CONTAINS') {
  $query = new stdClass();

  // Compatibility with EntityFieldQuery operators
  if ($match_operator == 'CONTAINS') {
    $match_operator = 'LIKE';
  }

  switch ($target_type) {
    case 'node':
      $query = _usanetwork_dynamic_entity_reference_get_node_query($target_bundles, $match, $match_operator);
      break;
    case 'file':
      $query = _usanetwork_dynamic_entity_reference_get_file_query($target_bundles, $match, $match_operator);
      break;
    default:
      $query = NULL;
      break;
  }

  if ($query == NULL) {
    return NULL;
  }

  return $query;
}

/**
 * Gets referenceable entities.
 *
 * @param string $target_type
 *   The target entity type.
 * @param string|null $match
 *   (Optional) Text to match the label against. Defaults to NULL.
 * @param string $match_operator
 *   (Optional) The operation the matching should be done with. Defaults
 *   to "CONTAINS".
 * @param int $limit
 *   The query limit.
 *
 * @return array
 *   Array of entity labels keyed by bundle and ID.
 */
function usanetwork_dynamic_entity_reference_get_referenceable_entities($instance_info, $target_type, $target_bundles, $match, $match_operator, $limit) {
  $target_bundles = _usanetwork_dynamic_entity_reference_filter_bundles($target_type, $target_bundles);

  $query = usanetwork_dynamic_entity_reference_build_entity_query($target_type, $target_bundles, $match, $match_operator);
  $query->range(0, $limit);
  $result = $query->execute()->fetchAll();

  if (empty($result)) {
    return array();
  }

  $options = array();

  foreach ($result as $result_num => $result_item) {
    $entity_id_key = '';
    $entity_load_callback = '';

    switch ($target_type) {
      case 'file': $entity_id_key = 'fid'; $entity_load_callback = 'file_load'; break;
      case 'node': $entity_id_key = 'nid'; $entity_load_callback = 'node_load'; break;
      default: continue;
    }

    $entity = $entity_load_callback($result_item->{$entity_id_key});
    $wrapper = entity_metadata_wrapper($target_type, $entity);
    $bundle = $wrapper->getBundle();

    $options[$result_item->type][$result_item->{$entity_id_key}] = check_plain($wrapper->label() . ' (' . $wrapper->type() . ' of ' . $bundle . ')');
  }
  
  return $options;
}

/**
 * Removes bundles of other entities for current query.
 */
function _usanetwork_dynamic_entity_reference_filter_bundles($entity_type, $bundles) {
  $entity_info = entity_get_info($entity_type);
  $filtred_bundles = array();

  if (!empty($entity_info['bundles'])) {
    $available_bundles = array_keys($entity_info['bundles']);

    foreach ($bundles as $bundle) {
      if (in_array($bundle, $available_bundles)) {
        $filtred_bundles[$bundle] = $bundle;
      }
    }
  }

  return $filtred_bundles;
}

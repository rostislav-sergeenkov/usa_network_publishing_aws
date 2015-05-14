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

function _usanetwork_dynamic_entity_reference_get_node_query($target_bundles, $match = NULL, $match_operator = 'CONTAINS') {
  $entity_info = entity_get_info('node');

  $query = db_select('node', 'n');
  $query->condition('n.type', $target_bundles, 'IN');

  if (isset($match) && isset($entity_info['entity keys']['label']) && $label_key = $entity_info['entity keys']['label']) {

  }

  return $query;
}

function _usanetwork_dynamic_entity_reference_get_file_query($target_bundles, $match = NULL, $match_operator = 'CONTAINS') {
  $entity_info = entity_get_info('file');

  $query = db_select('file_managed', 'f');
  $query->condition('f.type', $target_bundles, 'IN');

  return $query;
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


  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', $target_type);

  if (!empty($target_bundles)) {
    if (is_array($target_bundles)) {
      $query->entityCondition('bundle', $target_bundles, 'IN');
    }
    else {
      $query->entityCondition('bundle', $target_bundles);
    }
  }

  $entity_info = entity_get_info($target_type);

  if (isset($match) && isset($entity_info['entity keys']['label']) && $label_key = $entity_info['entity keys']['label']) {
    $query->propertyCondition($label_key, $match, $match_operator);
    $query->propertyOrderBy($label_key, 'ASC');
  }

  // Add entity-access tag.
  $query->addTag($target_type . '_access');

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

  $query->addTag('usanetwork_dynamic_entity_reference');
  $query->addmetaData('instance_info', $instance_info);
  $result = $query->execute();

  if (empty($result) || empty($result[$target_type])) {
    return array();
  }

  $options = array();

  $entities = entity_load($target_type, array_keys($result[$target_type]));
  foreach ($entities as $entity_id => $entity) {
    /** @var \EntityDrupalWrapper $wrapper */
    $wrapper = entity_metadata_wrapper($target_type, $entity);
    $bundle = $wrapper->getBundle();
    $options[$bundle][$entity_id] = check_plain($wrapper->label() . ' (' . $wrapper->type() . ' of ' . $bundle . ')');
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

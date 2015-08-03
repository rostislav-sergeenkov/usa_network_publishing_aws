<?php
/**
 * @file
 * usanetwork_catchall.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function usanetwork_catchall_taxonomy_default_vocabularies() {
  return array(
    'object_type' => array(
      'name' => 'Object type',
      'machine_name' => 'object_type',
      'description' => 'IdeaMelt object type',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

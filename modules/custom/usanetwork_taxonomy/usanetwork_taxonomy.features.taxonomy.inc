<?php
/**
 * @file
 * usanetwork_taxonomy.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function usanetwork_taxonomy_taxonomy_default_vocabularies() {
  return array(
    'cta_type' => array(
      'name' => 'Call to Action Type',
      'machine_name' => 'cta_type',
      'description' => 'cta types with associated icons',
      'hierarchy' => '0',
      'module' => 'taxonomy',
      'weight' => '0',
    ),
  );
}

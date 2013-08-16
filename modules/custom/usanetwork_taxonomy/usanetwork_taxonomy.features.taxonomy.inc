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
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'media_categories' => array(
      'name' => 'Media Categories',
      'machine_name' => 'media_categories',
      'description' => '',
      'hierarchy' => 1,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'media_tags' => array(
      'name' => 'Media Tags',
      'machine_name' => 'media_tags',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

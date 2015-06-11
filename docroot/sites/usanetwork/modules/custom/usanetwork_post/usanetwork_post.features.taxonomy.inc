<?php
/**
 * @file
 * usanetwork_post.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function usanetwork_post_taxonomy_default_vocabularies() {
  return array(
    'blog' => array(
      'name' => 'Blog',
      'machine_name' => 'blog',
      'description' => '',
      'hierarchy' => 1,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

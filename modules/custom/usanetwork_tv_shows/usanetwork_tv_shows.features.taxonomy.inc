<?php
/**
 * @file
 * usanetwork_tv_shows.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function usanetwork_tv_shows_taxonomy_default_vocabularies() {
  return array(
    'tv_episode_type' => array(
      'name' => 'Episode Type',
      'machine_name' => 'tv_episode_type',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

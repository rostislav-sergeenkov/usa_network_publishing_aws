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
    'categories' => array(
      'name' => 'Categories',
      'machine_name' => 'categories',
      'description' => 'Top line categories',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'cta_type' => array(
      'name' => 'Call to Action Type',
      'machine_name' => 'cta_type',
      'description' => 'cta types with associated icons',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'genre' => array(
      'name' => 'Genre',
      'machine_name' => 'genre',
      'description' => 'Media Genres',
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
    'rating_attributes' => array(
      'name' => 'TV Rating Attributes',
      'machine_name' => 'rating_attributes',
      'description' => 'Rating Attributes for TV Ratings',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'role' => array(
      'name' => 'Role',
      'machine_name' => 'role',
      'description' => 'The type of role performed by a person in a movie, show, soundtrack, etc.',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'tags' => array(
      'name' => 'Tags',
      'machine_name' => 'tags',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'tv_rating' => array(
      'name' => 'TV Rating',
      'machine_name' => 'tv_rating',
      'description' => 'Television Show Ratings',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'usa_video_terms' => array(
      'name' => 'USA Video Terms',
      'machine_name' => 'usa_video_terms',
      'description' => 'Terms for categorizing thePlatform TVE and MPX videos.',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}

<?php
/**
 * @file
 * usanetwork_movie.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_movie_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:movie.
  $config['node:movie'] = array(
    'instance' => 'node:movie',
    'config' => array(
      'description' => array(
        'value' => '[node:field_summary]',
      ),
      'og:description' => array(
        'value' => '[node:field_summary]',
      ),
      'og:image' => array(
        'value' => '[node:field_movie_cover_media]',
      ),
      'twitter:image:src' => array(
        'value' => '[node:field_movie_cover_media]',
      ),
    ),
  );

  return $config;
}

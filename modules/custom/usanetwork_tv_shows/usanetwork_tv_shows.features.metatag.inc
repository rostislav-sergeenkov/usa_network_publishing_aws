<?php
/**
 * @file
 * usanetwork_tv_shows.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_tv_shows_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:tv_episode.
  $config['node:tv_episode'] = array(
    'instance' => 'node:tv_episode',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_usa_og_image]',
      ),
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
    ),
  );

  // Exported Metatag config instance: node:tv_season.
  $config['node:tv_season'] = array(
    'instance' => 'node:tv_season',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_tv_cover_media]',
      ),
    ),
  );

  // Exported Metatag config instance: node:tv_show.
  $config['node:tv_show'] = array(
    'instance' => 'node:tv_show',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_usa_og_image]',
      ),
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
    ),
  );

  return $config;
}

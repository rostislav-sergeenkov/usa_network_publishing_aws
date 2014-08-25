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
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:title' => array(
        'value' => '[node:field-show:title] | [node:title]',
      ),
      'og:description' => array(
        'value' => '[node:body]',
      ),
      'og:image' => array(
        'value' => '[node:field_tv_cover_media]',
      ),
    ),
  );

  // Exported Metatag config instance: node:tv_season.
  $config['node:tv_season'] = array(
    'instance' => 'node:tv_season',
    'config' => array(
      'og:title' => array(
        'value' => '[node:field-show:title] | [node:title]',
      ),
      'og:description' => array(
        'value' => '[node:field-show:title] | [node:title]',
      ),
      'og:image' => array(
        'value' => '[node:field_tv_cover_media]',
      ),
    ),
  );

  // Exported Metatag config instance: node:tv_show.
  $config['node:tv_show'] = array(
    'instance' => 'node:tv_show',
    'config' => array(
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:title' => array(
        'value' => '[node:title]',
      ),
      'og:description' => array(
        'value' => '[node:body]',
      ),
      'og:image' => array(
        'value' => '[node:field_logo]',
      ),
    ),
  );

  return $config;
}

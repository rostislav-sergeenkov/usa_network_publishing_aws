<?php
/**
 * @file
 * usanetwork_catchall.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_catchall_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:catchall_page.
  $config['node:catchall_page'] = array(
    'instance' => 'node:catchall_page',
    'config' => array(
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:title' => array(
        'value' => '[node:title]',
      ),
      'og:description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:image' => array(
        'value' => '[node:field_usa_og_image]',
      ),
    ),
  );

  return $config;
}

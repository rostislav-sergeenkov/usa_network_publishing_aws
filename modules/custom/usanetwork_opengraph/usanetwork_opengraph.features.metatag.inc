<?php
/**
 * @file
 * usanetwork_opengraph.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_opengraph_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:catchall_page.
  $config['node:catchall_page'] = array(
    'instance' => 'node:catchall_page',
    'config' => array(
      'description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:image' => array(
        'value' => '[node:field_usa_og_image]',
      ),
    ),
  );

  // Exported Metatag config instance: node:usanetwork_static_page.
  $config['node:usanetwork_static_page'] = array(
    'instance' => 'node:usanetwork_static_page',
    'config' => array(
      'description' => array(
        'value' => '[node:field_usa_og_description]',
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

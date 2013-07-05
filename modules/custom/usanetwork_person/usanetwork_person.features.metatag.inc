<?php
/**
 * @file
 * usanetwork_person.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_person_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:person.
  $config['node:person'] = array(
    'instance' => 'node:person',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_person_cover_photo]',
      ),
    ),
  );

  return $config;
}

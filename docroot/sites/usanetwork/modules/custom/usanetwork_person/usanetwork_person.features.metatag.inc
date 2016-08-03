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
      'robots' => array(
        'value' => array(
          'index' => 0,
          'follow' => 0,
          'noindex' => 0,
          'nofollow' => 0,
          'noarchive' => 0,
          'nosnippet' => 0,
          'noodp' => 0,
          'noydir' => 0,
          'noimageindex' => 0,
          'notranslate' => 0,
        ),
      ),
      'og:title' => array(
        'value' => '[node:field-show:title] | [node:field_person_first_name] [node:field_person_last_name]',
      ),
      'og:description' => array(
        'value' => '[node:field_usa_og_description]',
      ),
      'og:image' => array(
        'value' => '[node:field_usa_og_image], [node:field_person_cover_photo]',
      ),
    ),
  );

  return $config;
}

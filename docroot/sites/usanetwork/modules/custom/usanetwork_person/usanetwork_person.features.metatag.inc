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
      'og:title' => array(
        'value' => '[node:field-show:title] | [node:field_person_first_name] [node:field_person_last_name]',
      ),
      'og:description' => array(
        'value' => '[node:body]',
      ),
      'og:image' => array(
        'value' => '[node:field_person_cover_photo]',
      ),
    ),
  );

  return $config;
}

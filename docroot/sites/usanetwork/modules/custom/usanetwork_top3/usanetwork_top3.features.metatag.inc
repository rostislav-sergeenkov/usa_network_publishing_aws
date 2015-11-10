<?php
/**
 * @file
 * usanetwork_top3.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_top3_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:top3_gallery.
  $config['node:top3_gallery'] = array(
    'instance' => 'node:top3_gallery',
    'config' => array(
      'og:title' => array(
        'value' => '[node:field-show:title] | [node:title]',
      ),
      'og:description' => array(
        'value' => '[node:title] Photos | [node:body]',
      ),
      'og:image' => array(
        'value' => '[node:field_cover_item]',
      ),
    ),
  );

  return $config;
}

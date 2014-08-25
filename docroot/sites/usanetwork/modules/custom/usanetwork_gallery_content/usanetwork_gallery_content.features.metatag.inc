<?php
/**
 * @file
 * usanetwork_gallery_content.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_gallery_content_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:media_gallery.
  $config['node:media_gallery'] = array(
    'instance' => 'node:media_gallery',
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

<?php
/**
 * @file
 * usanetwork_timeline_gallery.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_timeline_gallery_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:timeline_gallery.
  $config['node:timeline_gallery'] = array(
    'instance' => 'node:timeline_gallery',
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

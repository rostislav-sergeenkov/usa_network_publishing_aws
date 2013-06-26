<?php
/**
 * @file
 * usanetwork_video.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_video_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:usa_tve_video.
  $config['node:usa_tve_video'] = array(
    'instance' => 'node:usa_tve_video',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_video_thumbnail]',
      ),
    ),
  );

  // Exported Metatag config instance: node:usa_video.
  $config['node:usa_video'] = array(
    'instance' => 'node:usa_video',
    'config' => array(
      'og:image' => array(
        'value' => '[node:field_video_thumbnail]',
      ),
    ),
  );

  return $config;
}

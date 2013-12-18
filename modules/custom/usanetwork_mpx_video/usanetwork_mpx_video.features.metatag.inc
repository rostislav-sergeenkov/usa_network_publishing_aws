<?php
/**
 * @file
 * usanetwork_mpx_video.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_mpx_video_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: file.
  $config['file'] = array(
    'instance' => 'file',
    'config' => array(),
  );

  // Exported Metatag config instance: file:mpx_video_1.
  $config['file:mpx_video_1'] = array(
    'instance' => 'file:mpx_video_1',
    'config' => array(
      'title' => array(
        'value' => '[file:field_mpx_title] | [site:name]',
      ),
      'description' => array(
        'value' => '[file:field_mpx_description]',
      ),
    ),
  );

  // Exported Metatag config instance: file:mpx_video_2.
  $config['file:mpx_video_2'] = array(
    'instance' => 'file:mpx_video_2',
    'config' => array(
      'title' => array(
        'value' => '[file:field_mpx_title] | [site:name]',
      ),
      'description' => array(
        'value' => '[file:field_mpx_description]',
      ),
    ),
  );

  return $config;
}

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
      'og:description' => array(
        'value' => '[file:og-description]',
      ),
      'og:image' => array(
        'value' => '[file:og-image]',
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
      'og:description' => array(
        'value' => '[file:og-description]',
      ),
      'og:image' => array(
        'value' => '[file:og-image]',
      ),
    ),
  );

  return $config;
}

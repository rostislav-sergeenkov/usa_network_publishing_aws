<?php
/**
 * @file
 * usanetwork_post.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_post_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:post.
  $config['node:post'] = array(
    'instance' => 'node:post',
    'config' => array(
      'description' => array(
        'value' => '[node:field_summary]',
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
        'value' => '[node:field_summary]',
      ),
      'og:image' => array(
        'value' => '[node:field_post_cover]',
      ),
      'twitter:image' => array(
        'value' => '[node:field_post_cover]',
      ),
    ),
  );

  return $config;
}

<?php
/**
 * @file
 * usanetwork_quiz.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_quiz_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: node:quiz.
  $config['node:quiz'] = array(
    'instance' => 'node:quiz',
    'config' => array(
      'title' => array(
        'value' => '[node:field-show:title] - [node:title] | [site:name]',
      ),
      'description' => array(
        'value' => '[node:og-description]',
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
      'og:title' => array(
        'value' => '[node:field-show:title] - [node:title]',
      ),
      'og:description' => array(
        'value' => '[node:og-description]',
      ),
      'og:image' => array(
        'value' => '[node:og-image]',
      ),
    ),
  );

  return $config;
}

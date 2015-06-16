<?php
/**
 * @file
 * usanetwork_og_metatags.features.metatag.inc
 */

/**
 * Implements hook_metatag_export_default().
 */
function usanetwork_og_metatags_metatag_export_default() {
  $config = array();

  // Exported Metatag config instance: global:frontpage.
  $config['global:frontpage'] = array(
    'instance' => 'global:frontpage',
    'config' => array(
      'title' => array(
        'value' => '[site:name]',
      ),
      'canonical' => array(
        'value' => '[site:url]',
      ),
      'shortlink' => array(
        'value' => '[site:url]',
      ),
      'og:title' => array(
        'value' => '[site:name]',
      ),
      'og:description' => array(
        'value' => '[site:name]',
      ),
      'og:type' => array(
        'value' => 'website',
      ),
      'og:image' => array(
        'value' => 'http://www.usanetwork.com/sites/usanetwork/files/Frozen_Bug.png',
      ),
      'og:url' => array(
        'value' => '[site:url]',
      ),
    ),
  );

  // Exported Metatag config instance: node:usa_homepage.
  $config['node:usa_homepage'] = array(
    'instance' => 'node:usa_homepage',
    'config' => array(
      'title' => array(
        'value' => '[site:name]',
      ),
      'description' => array(
        'value' => '',
      ),
      'og:title' => array(
        'value' => '[site:name]',
      ),
      'og:description' => array(
        'value' => '[site:name]',
      ),
      'og:type' => array(
        'value' => 'website',
      ),
      'og:image' => array(
        'value' => 'http://www.usanetwork.com/sites/usanetwork/files/Frozen_Bug.png',
      ),
    ),
  );

  return $config;
}

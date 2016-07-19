<?php
/**
 * @file
 * usanetwork_instagram.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function usanetwork_instagram_filter_default_formats() {
  $formats = array();

  // Exported format: WYSIWYG Social.
  $formats['wysiwyg_social'] = array(
    'format' => 'wysiwyg_social',
    'name' => 'WYSIWYG Social',
    'cache' => 0,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_tokens' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'media_filter' => array(
        'weight' => 2,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_htmlcorrector' => array(
        'weight' => 10,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}

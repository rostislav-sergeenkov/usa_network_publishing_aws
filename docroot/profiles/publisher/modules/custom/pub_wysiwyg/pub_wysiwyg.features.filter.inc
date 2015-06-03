<?php
/**
 * @file
 * pub_wysiwyg.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function pub_wysiwyg_filter_default_formats() {
  $formats = array();

  // Exported format: Publisher.
  $formats['publisher'] = array(
    'format' => 'publisher',
    'name' => 'Publisher',
    'cache' => 0,
    'status' => 1,
    'weight' => -10,
    'filters' => array(
      'filter_html' => array(
        'weight' => -50,
        'status' => 1,
        'settings' => array(
          'allowed_html' => '<a> <em> <strong> <youtube> <div> <p> <br><mpx><iframe>',
          'filter_html_help' => 1,
          'filter_html_nofollow' => 0,
        ),
      ),
      'embed_external' => array(
        'weight' => -49,
        'status' => 1,
        'settings' => array(),
      ),
      'pub_wysiwyg_youtube' => array(
        'weight' => -48,
        'status' => 1,
        'settings' => array(),
      ),
      'pub_wysiwyg_mpx' => array(
        'weight' => -47,
        'status' => 1,
        'settings' => array(),
      ),
      'media_filter' => array(
        'weight' => -46,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_autop' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_htmlcorrector' => array(
        'weight' => -44,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}

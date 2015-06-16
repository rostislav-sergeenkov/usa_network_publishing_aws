<?php
/**
 * @file
 * usanetwork_wysiwyg.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function usanetwork_wysiwyg_filter_default_formats() {
  $formats = array();

  // Exported format: WYSIWYG Basic.
  $formats['wysiwyg_basic'] = array(
    'format' => 'wysiwyg_basic',
    'name' => 'WYSIWYG Basic',
    'cache' => 0,
    'status' => 1,
    'weight' => -10,
    'filters' => array(
      'filter_html' => array(
        'weight' => -50,
        'status' => 1,
        'settings' => array(
          'allowed_html' => '<p> <a> <em> <strong> <strike> <cite> <code> <ul> <ol> <li> <dl> <dt> <dd> <img> <table> <tbody> <tr> <td> <th> <tbody> <caption> <thead> <tfoot> <h1> <h2> <h3> <h4> <h5> <h6> <blockquote> <hr> <span> <br> <sup> <sub> <div> <article> <aside>',
          'filter_html_help' => 0,
          'filter_html_nofollow' => 1,
        ),
      ),
      'media_filter' => array(
        'weight' => -46,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'filter_htmlcorrector' => array(
        'weight' => -44,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_tokens' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  // Exported format: WYSIWYG Full Html.
  $formats['wysiwyg_full_html'] = array(
    'format' => 'wysiwyg_full_html',
    'name' => 'WYSIWYG Full Html',
    'cache' => 1,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_url' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
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

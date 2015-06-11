<?php
/**
 * @file
 * tve_auth.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function tve_auth_filter_default_formats() {
  $formats = array();

  // Exported input format: WYSIWYG TVE.
  $formats['wysiwyg_full'] = array(
    'format' => 'wysiwyg_full',
    'name' => 'WYSIWYG TVE',
    'cache' => 1,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_html' => array(
        'weight' => -10,
        'status' => 1,
        'settings' => array(
          'allowed_html' => '<p> <a> <em> <strong> <strike> <cite> <code> <ul> <ol> <li> <dl> <dt> <dd> <img> <table> <tbody> <tr> <td> <th> <tbody> <caption> <thead> <tfoot> <h1> <h2> <h3> <h4> <h5> <h6> <blockquote> <hr> <span> <br> <sup> <sub> <div> <article> <aside>',
          'filter_html_help' => 0,
          'filter_html_nofollow' => 1,
        ),
      ),      
	    'filter_autop' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
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

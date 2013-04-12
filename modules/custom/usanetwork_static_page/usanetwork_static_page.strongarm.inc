<?php
/**
 * @file
 * usanetwork_static_page.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_static_page_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__usanetwork_static_page';
  $strongarm->value = array(
    'view_modes' => array(),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '40',
        ),
        'title' => array(
          'weight' => '-5',
        ),
        'path' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_usanetwork_static_page';
  $strongarm->value = array(
    0 => 'main-menu',
    1 => 'usa-footer-bottom',
    2 => 'usa-footer-top',
  );
  $export['menu_options_usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_usanetwork_static_page';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_usanetwork_static_page';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_usanetwork_static_page';
  $strongarm->value = '1';
  $export['node_preview_usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_usanetwork_static_page';
  $strongarm->value = 0;
  $export['node_submitted_usanetwork_static_page'] = $strongarm;

  return $export;
}

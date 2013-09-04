<?php
/**
 * @file
 * usanetwork_promo_iframe.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_promo_iframe_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__usanetwork_promo_iframe';
  $strongarm->value = array(
    'view_modes' => array(),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '2',
        ),
        'title' => array(
          'weight' => '1',
        ),
        'path' => array(
          'weight' => '1',
        ),
        'redirect' => array(
          'weight' => '3',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_usanetwork_promo_iframe';
  $strongarm->value = array();
  $export['menu_options_usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_usanetwork_promo_iframe';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_usanetwork_promo_iframe';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_usanetwork_promo_iframe';
  $strongarm->value = '1';
  $export['node_preview_usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_usanetwork_promo_iframe';
  $strongarm->value = 0;
  $export['node_submitted_usanetwork_promo_iframe'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_usanetwork_promo_iframe';
  $strongarm->value = '';
  $export['representative_image_field_node_usanetwork_promo_iframe'] = $strongarm;

  return $export;
}

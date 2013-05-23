<?php
/**
 * @file
 * usanetwork_promo.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_promo_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__usanetwork_promo';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'carousel_promo' => array(
        'custom_settings' => TRUE,
      ),
      'home_promo' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'print' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'admin_reference_preview' => array(
        'custom_settings' => FALSE,
      ),
      'promoted_content' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title_lg' => array(
        'custom_settings' => FALSE,
      ),
      'cast_carousel' => array(
        'custom_settings' => FALSE,
      ),
      'follow_social' => array(
        'custom_settings' => FALSE,
      ),
      'home_promo_bspot' => array(
        'custom_settings' => TRUE,
      ),
      'promo_teaser' => array(
        'custom_settings' => TRUE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '7',
        ),
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '6',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_usanetwork_promo';
  $strongarm->value = array();
  $export['menu_options_usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_usanetwork_promo';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_usanetwork_promo';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_usanetwork_promo';
  $strongarm->value = '1';
  $export['node_preview_usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_usanetwork_promo';
  $strongarm->value = 0;
  $export['node_submitted_usanetwork_promo'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_usanetwork_promo';
  $strongarm->value = 'field_promo_regular_image';
  $export['representative_image_field_node_usanetwork_promo'] = $strongarm;

  return $export;
}

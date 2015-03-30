<?php
/**
 * @file
 * usanetwork_promo_iframe.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_promo_iframe_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo_iframe|default';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo_iframe';
  $ds_layout->view_mode = 'default';
  $ds_layout->layout = 'promo_iframe_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 1,
    'regions' => array(
      'iframe' => array(
        0 => 'field_promo_iframe_src_link',
      ),
    ),
    'fields' => array(
      'field_promo_iframe_src_link' => 'iframe',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo_iframe|default'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo_iframe|promo_teaser';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo_iframe';
  $ds_layout->view_mode = 'promo_teaser';
  $ds_layout->layout = 'promo_iframe_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'iframe' => array(
        0 => 'field_promo_iframe_src_link',
      ),
    ),
    'fields' => array(
      'field_promo_iframe_src_link' => 'iframe',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo_iframe|promo_teaser'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo_iframe|promo_teaser_large';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo_iframe';
  $ds_layout->view_mode = 'promo_teaser_large';
  $ds_layout->layout = 'promo_iframe_teaser_large';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'iframe' => array(
        0 => 'field_promo_iframe_src_link',
      ),
    ),
    'fields' => array(
      'field_promo_iframe_src_link' => 'iframe',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo_iframe|promo_teaser_large'] = $ds_layout;

  return $export;
}

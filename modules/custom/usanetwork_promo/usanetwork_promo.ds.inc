<?php
/**
 * @file
 * usanetwork_promo.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_promo_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo|carousel_promo';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo';
  $ds_layout->view_mode = 'carousel_promo';
  $ds_layout->layout = 'carousel_item';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_promo_regular_image',
      ),
      'title' => array(
        0 => 'field_promo_text_line_1',
      ),
      'caption' => array(
        0 => 'field_promo_text_line_2',
      ),
    ),
    'fields' => array(
      'field_promo_regular_image' => 'media',
      'field_promo_text_line_1' => 'title',
      'field_promo_text_line_2' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|carousel_promo'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo|home_promo';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo';
  $ds_layout->view_mode = 'home_promo';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_promo_wide_image',
        1 => 'field_promo_regular_image',
        2 => 'field_promo_text_line_1',
        3 => 'field_promo_text_line_2',
        4 => 'field_call_to_action_type',
        5 => 'field_promo_call_to_action_text',
      ),
    ),
    'fields' => array(
      'field_promo_wide_image' => 'ds_content',
      'field_promo_regular_image' => 'ds_content',
      'field_promo_text_line_1' => 'ds_content',
      'field_promo_text_line_2' => 'ds_content',
      'field_call_to_action_type' => 'ds_content',
      'field_promo_call_to_action_text' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|home_promo'] = $ds_layout;

  return $export;
}

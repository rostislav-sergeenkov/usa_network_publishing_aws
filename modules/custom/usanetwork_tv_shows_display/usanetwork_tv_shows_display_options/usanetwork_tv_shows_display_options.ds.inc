<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_tv_shows_display_options_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo|promo_teaser_large';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo';
  $ds_layout->view_mode = 'promo_teaser_large';
  $ds_layout->layout = 'promo_teaser_large';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media_large' => array(
        0 => 'field_promo_wide_image',
      ),
      'media' => array(
        0 => 'field_promo_regular_image',
      ),
      'title' => array(
        0 => 'field_promo_text_line_1',
      ),
      'caption' => array(
        0 => 'field_promo_text_line_2',
      ),
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_promo_call_to_action_text',
      ),
      'link' => array(
        0 => 'field_promo_link',
      ),
      'caption_wide' => array(
        0 => 'field_promo_text_line_2_wide',
      ),
      'title_wide' => array(
        0 => 'field_promo_text_line_1_wide',
      ),
    ),
    'fields' => array(
      'field_promo_wide_image' => 'media_large',
      'field_promo_regular_image' => 'media',
      'field_promo_text_line_1' => 'title',
      'field_promo_text_line_2' => 'caption',
      'field_call_to_action_type' => 'cta',
      'field_promo_call_to_action_text' => 'cta',
      'field_promo_link' => 'link',
      'field_promo_text_line_2_wide' => 'caption_wide',
      'field_promo_text_line_1_wide' => 'title_wide',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|promo_teaser_large'] = $ds_layout;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_tv_shows_display_options_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'promo_teaser_large';
  $ds_view_mode->label = 'promo_teaser_large';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['promo_teaser_large'] = $ds_view_mode;

  return $export;
}

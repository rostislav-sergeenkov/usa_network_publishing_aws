<?php
/**
 * @file
 * usanetwork_promo.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_promo_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usanetwork_promo|promo_teaser';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usanetwork_promo';
  $ds_fieldsetting->view_mode = 'promo_teaser';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => 'h3',
        'class' => '',
      ),
    ),
  );
  $export['node|usanetwork_promo|promo_teaser'] = $ds_fieldsetting;

  return $export;
}

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
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_promo_call_to_action_text',
      ),
      'link' => array(
        0 => 'field_promo_link',
      ),
      'target' => array(
        0 => 'field_target',
      ),
    ),
    'fields' => array(
      'field_promo_regular_image' => 'media',
      'field_promo_text_line_1' => 'title',
      'field_promo_text_line_2' => 'caption',
      'field_call_to_action_type' => 'cta',
      'field_promo_call_to_action_text' => 'cta',
      'field_promo_link' => 'link',
      'field_target' => 'target',
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
  $ds_layout->layout = 'home_promo';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'text_2_wide' => array(
        0 => 'field_promo_text_line_2_wide',
      ),
      'text_1_wide' => array(
        0 => 'field_promo_text_line_1_wide',
      ),
      'media_normal' => array(
        0 => 'field_promo_regular_image',
      ),
      'text_1' => array(
        0 => 'field_promo_text_line_1',
      ),
      'text_2' => array(
        0 => 'field_promo_text_line_2',
      ),
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_promo_call_to_action_text',
      ),
      'link' => array(
        0 => 'field_promo_link',
      ),
      'target' => array(
        0 => 'field_target',
      ),
    ),
    'fields' => array(
      'field_promo_text_line_2_wide' => 'text_2_wide',
      'field_promo_text_line_1_wide' => 'text_1_wide',
      'field_promo_regular_image' => 'media_normal',
      'field_promo_text_line_1' => 'text_1',
      'field_promo_text_line_2' => 'text_2',
      'field_call_to_action_type' => 'cta',
      'field_promo_call_to_action_text' => 'cta',
      'field_promo_link' => 'link',
      'field_target' => 'target',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|home_promo'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo|home_promo_bspot';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo';
  $ds_layout->view_mode = 'home_promo_bspot';
  $ds_layout->layout = 'home_promo';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'text_2_wide' => array(
        0 => 'field_promo_text_line_2_wide',
      ),
      'text_1_wide' => array(
        0 => 'field_promo_text_line_1_wide',
      ),
      'media_wide' => array(
        0 => 'field_promo_wide_image',
      ),
      'media_normal' => array(
        0 => 'field_promo_regular_image',
      ),
      'text_1' => array(
        0 => 'field_promo_text_line_1',
      ),
      'text_2' => array(
        0 => 'field_promo_text_line_2',
      ),
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_promo_call_to_action_text',
      ),
      'link' => array(
        0 => 'field_promo_link',
      ),
      'target' => array(
        0 => 'field_target',
      ),
    ),
    'fields' => array(
      'field_promo_text_line_2_wide' => 'text_2_wide',
      'field_promo_text_line_1_wide' => 'text_1_wide',
      'field_promo_wide_image' => 'media_wide',
      'field_promo_regular_image' => 'media_normal',
      'field_promo_text_line_1' => 'text_1',
      'field_promo_text_line_2' => 'text_2',
      'field_call_to_action_type' => 'cta',
      'field_promo_call_to_action_text' => 'cta',
      'field_promo_link' => 'link',
      'field_target' => 'target',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|home_promo_bspot'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_promo|promo_teaser';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_promo';
  $ds_layout->view_mode = 'promo_teaser';
  $ds_layout->layout = 'promo_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 1,
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
      'title_wide' => array(
        0 => 'field_promo_text_line_1_wide',
      ),
      'caption_wide' => array(
        0 => 'field_promo_text_line_2_wide',
      ),
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_promo_call_to_action_text',
      ),
      'link' => array(
        0 => 'field_promo_link',
      ),
      'target' => array(
        0 => 'field_target',
      ),
    ),
    'fields' => array(
      'field_promo_regular_image' => 'media',
      'field_promo_text_line_1' => 'title',
      'field_promo_text_line_2' => 'caption',
      'field_promo_text_line_1_wide' => 'title_wide',
      'field_promo_text_line_2_wide' => 'caption_wide',
      'field_call_to_action_type' => 'cta',
      'field_promo_call_to_action_text' => 'cta',
      'field_promo_link' => 'link',
      'field_target' => 'target',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_promo|promo_teaser'] = $ds_layout;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_aspot.ds.inc
 */

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_aspot_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'aspot_title_image';
  $ds_field->label = 'aspot-title-image';
  $ds_field->field_type = 3;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->properties = array();
  $export['aspot_title_image'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_aspot_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_aspot|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_aspot';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'a_spot';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'mobile_text_2' => array(
        0 => 'field_mobile_text_line_2',
      ),
      'text_1_image' => array(
        0 => 'aspot_title_image',
      ),
      'media_desktop' => array(
        0 => 'field_usa_aspot_desktop',
      ),
      'media_mobile' => array(
        0 => 'field_usa_aspot_mobile',
      ),
      'hex' => array(
        0 => 'field_usa_text_color',
      ),
      'text_1' => array(
        0 => 'field_usa_aspot_txt1',
      ),
      'text_2' => array(
        0 => 'field_usa_aspot_txt2',
      ),
      'text_3' => array(
        0 => 'field_usa_aspot_txt3',
      ),
      'text_1_font_size' => array(
        0 => 'field_text_line_1_font_size',
      ),
      'text_2_font_size' => array(
        0 => 'field_text_line_2_font_size',
      ),
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_usa_aspot_txt4',
      ),
      'link' => array(
        0 => 'field_usa_aspot_link',
      ),
    ),
    'fields' => array(
      'field_mobile_text_line_2' => 'mobile_text_2',
      'aspot_title_image' => 'text_1_image',
      'field_usa_aspot_desktop' => 'media_desktop',
      'field_usa_aspot_mobile' => 'media_mobile',
      'field_usa_text_color' => 'hex',
      'field_usa_aspot_txt1' => 'text_1',
      'field_usa_aspot_txt2' => 'text_2',
      'field_usa_aspot_txt3' => 'text_3',
      'field_text_line_1_font_size' => 'text_1_font_size',
      'field_text_line_2_font_size' => 'text_2_font_size',
      'field_call_to_action_type' => 'cta',
      'field_usa_aspot_txt4' => 'cta',
      'field_usa_aspot_link' => 'link',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_aspot|full'] = $ds_layout;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_aspot.ds.inc
 */

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
      'media_desktop' => array(
        0 => 'field_usa_aspot_desktop',
      ),
      'media_tablet' => array(
        0 => 'field_usa_aspot_tablet',
      ),
      'media_mobile' => array(
        0 => 'field_usa_aspot_mobile',
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
      'cta' => array(
        0 => 'field_call_to_action_type',
        1 => 'field_usa_aspot_txt4',
      ),
    ),
    'fields' => array(
      'field_usa_aspot_desktop' => 'media_desktop',
      'field_usa_aspot_tablet' => 'media_tablet',
      'field_usa_aspot_mobile' => 'media_mobile',
      'field_usa_aspot_txt1' => 'text_1',
      'field_usa_aspot_txt2' => 'text_2',
      'field_usa_aspot_txt3' => 'text_3',
      'field_call_to_action_type' => 'cta',
      'field_usa_aspot_txt4' => 'cta',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_aspot|full'] = $ds_layout;

  return $export;
}

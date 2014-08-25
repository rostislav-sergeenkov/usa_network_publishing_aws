<?php
/**
 * @file
 * usanetwork_seo_page.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_seo_page_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|catchall_seo_page|default';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'catchall_seo_page';
  $ds_fieldsetting->view_mode = 'default';
  $ds_fieldsetting->settings = array(
    'dart_for_seo_catchall' => array(
      'weight' => '4',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|catchall_seo_page|default'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_seo_page_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'dart_for_seo_catchall';
  $ds_field->label = 'Dart for seo catchall';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->properties = array(
    'block' => 'dart|dart-tag-300x250_ifr_reload',
    'block_render' => '1',
  );
  $export['dart_for_seo_catchall'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_seo_page_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|catchall_seo_page|default';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'catchall_seo_page';
  $ds_layout->view_mode = 'default';
  $ds_layout->layout = 'ds_2col_stacked';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'header' => array(
        0 => 'field_h1',
      ),
      'left' => array(
        0 => 'body',
        1 => 'field_catchall_seo_page_video',
      ),
      'right' => array(
        0 => 'field_call_to_action',
        1 => 'dart_for_seo_catchall',
      ),
    ),
    'fields' => array(
      'field_h1' => 'header',
      'body' => 'left',
      'field_catchall_seo_page_video' => 'left',
      'field_call_to_action' => 'right',
      'dart_for_seo_catchall' => 'right',
    ),
    'classes' => array(),
  );
  $export['node|catchall_seo_page|default'] = $ds_layout;

  return $export;
}

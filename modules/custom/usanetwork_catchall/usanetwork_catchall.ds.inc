<?php
/**
 * @file
 * usanetwork_catchall.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_catchall_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|catchall_page|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'catchall_page';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '11',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|catchall_page|search_result'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_catchall_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|catchall_page|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'catchall_page';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_usa_catchall_media',
      ),
      'body' => array(
        0 => 'field_show',
        1 => 'field_usa_catchall_html',
      ),
      'title' => array(
        0 => 'title',
      ),
    ),
    'fields' => array(
      'field_usa_catchall_media' => 'media',
      'field_show' => 'body',
      'field_usa_catchall_html' => 'body',
      'title' => 'title',
    ),
    'classes' => array(),
  );
  $export['node|catchall_page|search_result'] = $ds_layout;

  return $export;
}

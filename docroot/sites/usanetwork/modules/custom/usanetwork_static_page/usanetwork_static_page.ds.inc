<?php
/**
 * @file
 * usanetwork_static_page.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_static_page_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usanetwork_static_page|search_index';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usanetwork_static_page';
  $ds_fieldsetting->view_mode = 'search_index';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|usanetwork_static_page|search_index'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usanetwork_static_page|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usanetwork_static_page';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '1',
        'wrapper' => 'h2',
        'class' => '',
      ),
    ),
  );
  $export['node|usanetwork_static_page|search_result'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_static_page_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usanetwork_static_page|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usanetwork_static_page';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'media' => array(
        0 => 'field_usa_og_image',
      ),
      'body' => array(
        0 => 'field_usa_og_description',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_usa_og_image' => 'media',
      'field_usa_og_description' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|usanetwork_static_page|search_result'] = $ds_layout;

  return $export;
}

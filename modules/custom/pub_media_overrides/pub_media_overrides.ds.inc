<?php
/**
 * @file
 * pub_media_overrides.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function pub_media_overrides_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|media_gallery|block_cover_title';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'media_gallery';
  $ds_fieldsetting->view_mode = 'block_cover_title';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|media_gallery|block_cover_title'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function pub_media_overrides_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|media_gallery|block_cover_title';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'media_gallery';
  $ds_layout->view_mode = 'block_cover_title';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_cover_item',
        1 => 'title',
      ),
    ),
    'fields' => array(
      'field_cover_item' => 'ds_content',
      'title' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|media_gallery|block_cover_title'] = $ds_layout;

  return $export;
}

<?php
/**
 * @file
 * pub_character_profile_overrides.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function pub_character_profile_overrides_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|character_profile|block_cover_title';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'character_profile';
  $ds_fieldsetting->view_mode = 'block_cover_title';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|character_profile|block_cover_title'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function pub_character_profile_overrides_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|character_profile|block_cover_title';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'character_profile';
  $ds_layout->view_mode = 'block_cover_title';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_usa_character_thumb',
        1 => 'title',
      ),
    ),
    'fields' => array(
      'field_usa_character_thumb' => 'ds_content',
      'title' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|character_profile|block_cover_title'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|character_profile|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'character_profile';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_character_cover_photo',
        1 => 'body',
      ),
    ),
    'fields' => array(
      'field_character_cover_photo' => 'ds_content',
      'body' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|character_profile|full'] = $ds_layout;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_home.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_home_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_homepage|full';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_homepage';
  $ds_fieldsetting->view_mode = 'full';
  $ds_fieldsetting->settings = array(
    'home_ad_rectangle' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|usa_homepage|full'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_home_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'home_ad_rectangle';
  $ds_field->label = 'home_ad_rectangle';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->properties = array(
    'block' => 'dart|dart-tag-300x250_scr',
    'block_render' => '3',
  );
  $export['home_ad_rectangle'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_home_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_homepage|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_homepage';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'usa_home';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ad' => array(
        0 => 'home_ad_rectangle',
      ),
      'aspot' => array(
        0 => 'field_usa_hp_arefs',
      ),
      'bspot' => array(
        0 => 'field_usa_hp_brefs',
      ),
      'cspot' => array(
        0 => 'field_usa_hp_crefs',
      ),
      'featured' => array(
        0 => 'field_hp_promos',
      ),
    ),
    'fields' => array(
      'home_ad_rectangle' => 'ad',
      'field_usa_hp_arefs' => 'aspot',
      'field_usa_hp_brefs' => 'bspot',
      'field_usa_hp_crefs' => 'cspot',
      'field_hp_promos' => 'featured',
    ),
    'classes' => array(),
  );
  $export['node|usa_homepage|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_homepage|global_nav_block_more';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_homepage';
  $ds_layout->view_mode = 'global_nav_block_more';
  $ds_layout->layout = 'global_nav_block';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_hp_nav_img_more',
      ),
    ),
    'fields' => array(
      'field_hp_nav_img_more' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|usa_homepage|global_nav_block_more'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_homepage|global_nav_block_shows';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_homepage';
  $ds_layout->view_mode = 'global_nav_block_shows';
  $ds_layout->layout = 'global_nav_block';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_hp_nav_img_shows',
      ),
    ),
    'fields' => array(
      'field_hp_nav_img_shows' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|usa_homepage|global_nav_block_shows'] = $ds_layout;

  return $export;
}

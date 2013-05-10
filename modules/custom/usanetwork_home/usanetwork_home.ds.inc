<?php
/**
 * @file
 * usanetwork_home.ds.inc
 */

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
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_usa_hp_arefs',
        1 => 'field_usa_hp_brefs',
        2 => 'field_usa_hp_crefs',
        3 => 'field_hp_promos',
      ),
    ),
    'fields' => array(
      'field_usa_hp_arefs' => 'ds_content',
      'field_usa_hp_brefs' => 'ds_content',
      'field_usa_hp_crefs' => 'ds_content',
      'field_hp_promos' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|usa_homepage|full'] = $ds_layout;

  return $export;
}

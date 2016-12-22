<?php
/**
 * @file
 * usanetwork_gobal_nav_image.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_gobal_nav_image_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|global_nav_image|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'global_nav_image';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'global_nav_img';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'link' => array(
        0 => 'field_nav_img_link',
      ),
      'media' => array(
        0 => 'field_gobal_nav_image',
      ),
    ),
    'fields' => array(
      'field_nav_img_link' => 'link',
      'field_gobal_nav_image' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|global_nav_image|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|global_nav_image|teaser';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'global_nav_image';
  $ds_layout->view_mode = 'teaser';
  $ds_layout->layout = 'global_nav_img';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'link' => array(
        0 => 'field_nav_img_link',
      ),
      'media' => array(
        0 => 'field_gobal_nav_image',
      ),
    ),
    'fields' => array(
      'field_nav_img_link' => 'link',
      'field_gobal_nav_image' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|global_nav_image|teaser'] = $ds_layout;

  return $export;
}

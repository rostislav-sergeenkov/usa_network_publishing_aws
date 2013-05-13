<?php
/**
 * @file
 * pub_tv_overrides.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function pub_tv_overrides_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|tv_show|follow_social';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'tv_show';
  $ds_fieldsetting->view_mode = 'follow_social';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|tv_show|follow_social'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function pub_tv_overrides_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tv_show|follow_social';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tv_show';
  $ds_layout->view_mode = 'follow_social';
  $ds_layout->layout = 'social_follow';
  $ds_layout->settings = array(
    'hide_empty_regions' => 1,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'social' => array(
        0 => 'field_usa_link_facebook',
        1 => 'field_usa_link_pinterest',
        2 => 'field_usa_link_tumblr',
        3 => 'field_usa_link_twitter',
      ),
      'media' => array(
        0 => 'field_social_logo',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_usa_link_facebook' => 'social',
      'field_usa_link_pinterest' => 'social',
      'field_usa_link_tumblr' => 'social',
      'field_usa_link_twitter' => 'social',
      'field_social_logo' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|tv_show|follow_social'] = $ds_layout;

  return $export;
}

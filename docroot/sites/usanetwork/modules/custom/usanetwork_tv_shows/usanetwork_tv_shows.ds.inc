<?php
/**
 * @file
 * usanetwork_tv_shows.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_tv_shows_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|tv_episode|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'tv_episode';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '1',
        'wrapper' => 'h2',
        'class' => '',
      ),
    ),
  );
  $export['node|tv_episode|search_result'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|tv_show|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'tv_show';
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
  $export['node|tv_show|search_result'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_tv_shows_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tv_episode|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tv_episode';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_usa_og_image',
      ),
      'title' => array(
        0 => 'title',
      ),
      'body' => array(
        0 => 'field_usa_og_description',
      ),
    ),
    'fields' => array(
      'field_usa_og_image' => 'media',
      'title' => 'title',
      'field_usa_og_description' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|tv_episode|search_result'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tv_show|block_cover_title';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tv_show';
  $ds_layout->view_mode = 'block_cover_title';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_display_title',
        1 => 'field_logo',
      ),
    ),
    'fields' => array(
      'field_display_title' => 'ds_content',
      'field_logo' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|tv_show|block_cover_title'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tv_show|follow_social';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tv_show';
  $ds_layout->view_mode = 'follow_social';
  $ds_layout->layout = 'social_follow';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_social_logo',
      ),
      'social' => array(
        0 => 'field_usa_link_twitter',
        1 => 'field_usa_link_tumblr',
        2 => 'field_usa_link_pinterest',
        3 => 'field_usa_link_facebook',
      ),
      'title' => array(
        0 => 'field_display_title',
      ),
    ),
    'fields' => array(
      'field_social_logo' => 'media',
      'field_usa_link_twitter' => 'social',
      'field_usa_link_tumblr' => 'social',
      'field_usa_link_pinterest' => 'social',
      'field_usa_link_facebook' => 'social',
      'field_display_title' => 'title',
    ),
    'classes' => array(),
  );
  $export['node|tv_show|follow_social'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tv_show|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tv_show';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'body' => array(
        0 => 'field_usa_og_description',
      ),
      'media' => array(
        0 => 'field_usa_og_image',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_usa_og_description' => 'body',
      'field_usa_og_image' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|tv_show|search_result'] = $ds_layout;

  return $export;
}

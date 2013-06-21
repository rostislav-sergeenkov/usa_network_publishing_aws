<?php
/**
 * @file
 * pub_person_overrides.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function pub_person_overrides_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|person|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'person';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|person|search_result'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function pub_person_overrides_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|person|cast_carousel';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'person';
  $ds_layout->view_mode = 'cast_carousel';
  $ds_layout->layout = 'cast_carousel';
  $ds_layout->settings = array(
    'hide_empty_regions' => 1,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_usa_character_thumb',
      ),
      'cast_content' => array(
        0 => 'title',
        1 => 'field_role',
        2 => 'field_usa_actor_name',
      ),
    ),
    'fields' => array(
      'field_usa_character_thumb' => 'media',
      'title' => 'cast_content',
      'field_role' => 'cast_content',
      'field_usa_actor_name' => 'cast_content',
    ),
    'classes' => array(),
  );
  $export['node|person|cast_carousel'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|person|follow_social';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'person';
  $ds_layout->view_mode = 'follow_social';
  $ds_layout->layout = 'social_follow';
  $ds_layout->settings = array(
    'hide_empty_regions' => 1,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_usa_character_thumb',
      ),
      'title' => array(
        0 => 'title',
        1 => 'field_role',
        2 => 'field_usa_actor_name',
      ),
      'social' => array(
        0 => 'field_usa_link_facebook',
        1 => 'field_usa_link_twitter',
        2 => 'field_usa_link_pinterest',
        3 => 'field_usa_link_tumblr',
      ),
    ),
    'fields' => array(
      'field_usa_character_thumb' => 'media',
      'title' => 'title',
      'field_role' => 'title',
      'field_usa_actor_name' => 'title',
      'field_usa_link_facebook' => 'social',
      'field_usa_link_twitter' => 'social',
      'field_usa_link_pinterest' => 'social',
      'field_usa_link_tumblr' => 'social',
    ),
    'classes' => array(),
  );
  $export['node|person|follow_social'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|person|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'person';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_usa_character_thumb',
      ),
      'title' => array(
        0 => 'title',
        1 => 'field_usa_actor_name',
      ),
      'body' => array(
        0 => 'field_show',
        1 => 'body',
      ),
    ),
    'fields' => array(
      'field_usa_character_thumb' => 'media',
      'title' => 'title',
      'field_usa_actor_name' => 'title',
      'field_show' => 'body',
      'body' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|person|search_result'] = $ds_layout;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_post.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_post_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|post|default';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'post';
  $ds_fieldsetting->view_mode = 'default';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'comments' => array(
      'weight' => '6',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|post|default'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|post|teaser';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'post';
  $ds_fieldsetting->view_mode = 'teaser';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'post_date' => array(
      'weight' => '3',
      'label' => 'hidden',
      'format' => 'ds_post_date_long',
    ),
  );
  $export['node|post|teaser'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_post_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|post|default';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'post';
  $ds_layout->view_mode = 'default';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_cover_media',
        1 => 'title',
        2 => 'body',
        3 => 'field_gigya_share_bar',
        4 => 'field_content_tags',
        5 => 'field_contributor',
        6 => 'comments',
      ),
    ),
    'fields' => array(
      'field_cover_media' => 'ds_content',
      'title' => 'ds_content',
      'body' => 'ds_content',
      'field_gigya_share_bar' => 'ds_content',
      'field_content_tags' => 'ds_content',
      'field_contributor' => 'ds_content',
      'comments' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|post|default'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|post|teaser';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'post';
  $ds_layout->view_mode = 'teaser';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_cover_media',
        1 => 'title',
        2 => 'body',
        3 => 'post_date',
        4 => 'field_gigya_share_bar',
      ),
    ),
    'fields' => array(
      'field_cover_media' => 'ds_content',
      'title' => 'ds_content',
      'body' => 'ds_content',
      'post_date' => 'ds_content',
      'field_gigya_share_bar' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|post|teaser'] = $ds_layout;

  return $export;
}

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
      'weight' => '7',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'author' => array(
      'weight' => '3',
      'label' => 'hidden',
      'format' => 'author',
    ),
    'post_date' => array(
      'weight' => '6',
      'label' => 'hidden',
      'format' => 'ds_post_date_html5_tools_iso8601',
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
    'gigya_comment_count' => array(
      'weight' => '4',
      'label' => 'hidden',
      'format' => 'default',
    ),
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
    'author' => array(
      'weight' => '2',
      'label' => 'hidden',
      'format' => 'author',
    ),
    'post_date' => array(
      'weight' => '6',
      'label' => 'hidden',
      'format' => 'ds_post_date_aired_on',
    ),
  );
  $export['node|post|teaser'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_post_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'gigya_comment_count';
  $ds_field->label = 'gigya-comment-count';
  $ds_field->field_type = 3;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->properties = array();
  $export['gigya_comment_count'] = $ds_field;

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
        0 => 'field_post_cover',
        1 => 'title',
        2 => 'field_sub_title',
        3 => 'author',
        4 => 'body',
        5 => 'field_gigya_share_bar',
        6 => 'post_date',
        7 => 'comments',
      ),
    ),
    'fields' => array(
      'field_post_cover' => 'ds_content',
      'title' => 'ds_content',
      'field_sub_title' => 'ds_content',
      'author' => 'ds_content',
      'body' => 'ds_content',
      'field_gigya_share_bar' => 'ds_content',
      'post_date' => 'ds_content',
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
        0 => 'title',
        1 => 'field_post_cover',
        2 => 'author',
        3 => 'field_gigya_share_bar',
        4 => 'field_summary',
        5 => 'gigya_comment_count',
        6 => 'post_date',
      ),
    ),
    'fields' => array(
      'title' => 'ds_content',
      'field_post_cover' => 'ds_content',
      'author' => 'ds_content',
      'field_gigya_share_bar' => 'ds_content',
      'field_summary' => 'ds_content',
      'gigya_comment_count' => 'ds_content',
      'post_date' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|post|teaser'] = $ds_layout;

  return $export;
}

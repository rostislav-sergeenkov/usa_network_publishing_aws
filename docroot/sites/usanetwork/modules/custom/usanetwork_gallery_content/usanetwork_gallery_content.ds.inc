<?php
/**
 * @file
 * usanetwork_gallery_content.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_gallery_content_ds_field_settings_info() {
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

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|media_gallery|block_cover_title_lg';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'media_gallery';
  $ds_fieldsetting->view_mode = 'block_cover_title_lg';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|media_gallery|block_cover_title_lg'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|media_gallery|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'media_gallery';
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
  $export['node|media_gallery|search_result'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_gallery_content_ds_layout_settings_info() {
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

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|media_gallery|block_cover_title_lg';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'media_gallery';
  $ds_layout->view_mode = 'block_cover_title_lg';
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
  $export['node|media_gallery|block_cover_title_lg'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|media_gallery|inline_content';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'media_gallery';
  $ds_layout->view_mode = 'inline_content';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_media_items',
      ),
    ),
    'fields' => array(
      'field_media_items' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['node|media_gallery|inline_content'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|media_gallery|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'media_gallery';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'media' => array(
        0 => 'field_usa_og_image',
      ),
      'body' => array(
        0 => 'field_usa_og_description',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_usa_og_image' => 'media',
      'field_usa_og_description' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|media_gallery|search_result'] = $ds_layout;

  return $export;
}

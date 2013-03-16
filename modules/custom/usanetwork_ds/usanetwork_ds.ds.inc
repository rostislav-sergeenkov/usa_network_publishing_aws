<?php
/**
 * @file
 * usanetwork_ds.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_ds_ds_field_settings_info() {
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

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_ds_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|image|block_cover_title';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'image';
  $ds_layout->view_mode = 'block_cover_title';
  $ds_layout->layout = 'html5_figure';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
      ),
    ),
    'fields' => array(
      'file' => 'media',
    ),
    'classes' => array(),
    'wrappers' => array(),
    'layout_wrapper' => 'div',
  );
  $export['file|image|block_cover_title'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|image|gallery_full';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'image';
  $ds_layout->view_mode = 'gallery_full';
  $ds_layout->layout = 'html5_figure';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
        1 => 'field_caption',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_caption' => 'media',
    ),
    'classes' => array(),
  );
  $export['file|image|gallery_full'] = $ds_layout;

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
  $ds_layout->id = 'node|media_gallery|gallery_full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'media_gallery';
  $ds_layout->view_mode = 'gallery_full';
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
  $export['node|media_gallery|gallery_full'] = $ds_layout;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_ds_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'block_cover_title';
  $ds_view_mode->label = 'block_cover_title';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['block_cover_title'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'gallery_full';
  $ds_view_mode->label = 'gallery_full';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['gallery_full'] = $ds_view_mode;

  return $export;
}

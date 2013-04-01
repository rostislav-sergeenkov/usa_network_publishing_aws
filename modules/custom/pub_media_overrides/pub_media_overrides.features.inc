<?php
/**
 * @file
 * pub_media_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_media_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_fields_alter().
 */
function pub_media_overrides_field_default_fields_alter(&$data) {
  if (isset($data['node-media_gallery-body'])) {
    $data['node-media_gallery-body']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => '1',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_categories'])) {
    $data['node-media_gallery-field_categories']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '2',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_collection'])) {
    $data['node-media_gallery-field_collection']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '6',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_content_tags'])) {
    $data['node-media_gallery-field_content_tags']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '4',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_cover_item'])) {
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '5',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_media_items'])) {
    $data['node-media_gallery-field_media_items']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'hidden',
      'module' => 'file',
      'settings' => array(),
      'type' => 'file_default',
      'weight' => '0',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_pub_relation_movie'])) {
    $data['node-media_gallery-field_pub_relation_movie']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'module' => 'field_collection',
      'settings' => array(
        'view_mode' => 'full',
      ),
      'type' => 'field_collection_fields',
      'weight' => '7',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_pub_relation_tv_shows'])) {
    $data['node-media_gallery-field_pub_relation_tv_shows']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'module' => 'field_collection',
      'settings' => array(
        'view_mode' => 'full',
      ),
      'type' => 'field_collection_fields',
      'weight' => '8',
    ); /* WAS: '' */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_media_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__media_gallery'])) {
    $data['field_bundle_settings_node__media_gallery']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

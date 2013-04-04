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
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
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
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '8',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_categories'])) {
    $data['node-media_gallery-field_categories']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '9',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_collection'])) {
    $data['node-media_gallery-field_collection']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '11',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_content_tags'])) {
    $data['node-media_gallery-field_content_tags']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '10',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_cover_item'])) {
    $data['node-media_gallery-field_cover_item']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'hidden',
      'module' => 'file_entity',
      'settings' => array(
        'file_view_mode' => 'block_cover_title',
      ),
      'type' => 'file_rendered',
      'weight' => '0',
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_media_items'])) {
    $data['node-media_gallery-field_media_items']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '5',
    ); /* WAS: '' */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_media_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__media_gallery'])) {
    $data['field_bundle_settings_node__media_gallery']->value['extra_fields']['form']['metatags']['weight'] = '3'; /* WAS: '2' */
    $data['field_bundle_settings_node__media_gallery']->value['extra_fields']['form']['path']['weight'] = '5'; /* WAS: '3' */
    $data['field_bundle_settings_node__media_gallery']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

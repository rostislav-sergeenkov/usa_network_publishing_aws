<?php
/**
 * @file
 * usanetwork_microsite.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_microsite_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_field_bases_alter().
 */
function usanetwork_microsite_field_default_field_bases_alter(&$data) {
  if (isset($data['field_media_gallery'])) {
    $data['field_media_gallery']['cardinality'] = -1; /* WAS: 1 */
    $data['field_media_gallery']['settings']['handler'] = 'base'; /* WAS: 'views' */
    $data['field_media_gallery']['settings']['handler_settings']['sort'] = array(
      'type' => 'none',
    ); /* WAS: '' */
    $data['field_media_gallery']['settings']['handler_settings']['target_bundles'] = array(
      'media_gallery' => 'media_gallery',
    ); /* WAS: '' */
    unset($data['field_media_gallery']['settings']['handler_settings']['view']);
  }
  if (isset($data['field_person'])) {
    $data['field_person']['cardinality'] = -1; /* WAS: 1 */
  }
}

/**
 * Implements hook_node_info_alter().
 */
function usanetwork_microsite_node_info_alter(&$data) {
  if (isset($data['usanetwork_microsite'])) {
    $data['usanetwork_microsite']['description'] = 'Use existing content to create a "single page" microsite.'; /* WAS: 'Use existing content to create a "single page" microsite. Each section of the microsite can also open as it\'s own page with specific content loaded.' */
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_microsite_node_info() {
  $items = array(
    'usanetwork_microsite' => array(
      'name' => t('Microsite'),
      'base' => 'node_content',
      'description' => t('Use existing content to create a "single page" microsite.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

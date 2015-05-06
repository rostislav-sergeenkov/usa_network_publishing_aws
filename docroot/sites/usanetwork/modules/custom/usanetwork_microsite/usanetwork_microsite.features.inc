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

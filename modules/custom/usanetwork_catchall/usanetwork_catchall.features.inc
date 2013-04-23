<?php
/**
 * @file
 * usanetwork_catchall.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_catchall_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_catchall_node_info() {
  $items = array(
    'catchall_page' => array(
      'name' => t('Catchall Page'),
      'base' => 'node_content',
      'description' => t('Catchall Page'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

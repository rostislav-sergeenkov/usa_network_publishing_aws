<?php
/**
 * @file
 * usanetwork_aspot.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_aspot_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
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
function usanetwork_aspot_node_info() {
  $items = array(
    'usanetwork_aspot' => array(
      'name' => t('A-spot'),
      'base' => 'node_content',
      'description' => t('Big, high-res image of USA\'s most important content on the homepage and on the landing pages for each show.'),
      'has_title' => '1',
      'title_label' => t('Administrative Title'),
      'help' => '',
    ),
  );
  return $items;
}

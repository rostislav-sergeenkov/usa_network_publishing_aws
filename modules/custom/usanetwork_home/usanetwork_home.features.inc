<?php
/**
 * @file
 * usanetwork_home.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_home_ctools_plugin_api() {
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
 * Implements hook_views_api().
 */
function usanetwork_home_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_home_node_info() {
  $items = array(
    'usa_homepage' => array(
      'name' => t('Homepage'),
      'base' => 'node_content',
      'description' => t('Monday through Sunday homepages'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

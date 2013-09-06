<?php
/**
 * @file
 * usanetwork_home.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_home_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_home_views_api($module = NULL, $api = NULL) {
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

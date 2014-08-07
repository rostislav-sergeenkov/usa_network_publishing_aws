<?php
/**
 * @file
 * usanetwork_seo_catchall.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_seo_catchall_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_seo_catchall_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_seo_catchall_node_info() {
  $items = array(
    'catchall_seo_page' => array(
      'name' => t('Catchall Seo Page'),
      'base' => 'node_content',
      'description' => t('Catchall Seo Page'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

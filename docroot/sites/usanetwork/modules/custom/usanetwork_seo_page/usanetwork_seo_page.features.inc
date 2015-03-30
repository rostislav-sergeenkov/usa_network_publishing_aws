<?php
/**
 * @file
 * usanetwork_seo_page.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_seo_page_ctools_plugin_api($module = NULL, $api = NULL) {
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
function usanetwork_seo_page_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_seo_page_node_info() {
  $items = array(
    'catchall_seo_page' => array(
      'name' => t('SEO Page'),
      'base' => 'node_content',
      'description' => t('Content type for creating SEO pages.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

<?php
/**
 * @file
 * usanetwork_static_page.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_static_page_ctools_plugin_api() {
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
function usanetwork_static_page_node_info() {
  $items = array(
    'usanetwork_static_page' => array(
      'name' => t('Static Page'),
      'base' => 'node_content',
      'description' => t('Create simple, primarily text-based pages, such as Privacy Policy, Terms of Use, About, etc.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

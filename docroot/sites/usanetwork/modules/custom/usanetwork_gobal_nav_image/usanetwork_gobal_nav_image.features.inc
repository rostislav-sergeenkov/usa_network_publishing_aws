<?php
/**
 * @file
 * usanetwork_gobal_nav_image.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_gobal_nav_image_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
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
function usanetwork_gobal_nav_image_node_info() {
  $items = array(
    'global_nav_image' => array(
      'name' => t('Global Nav Image'),
      'base' => 'node_content',
      'description' => t('Images attached to the homepage that appear as part of the global navigation drawers for "shows" and "more".'),
      'has_title' => '1',
      'title_label' => t('Admin Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

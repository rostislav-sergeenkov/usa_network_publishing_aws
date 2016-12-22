<?php
/**
 * @file
 * usanetwork_top3.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_top3_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "flexslider" && $api == "flexslider_default_preset") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_top3_node_info() {
  $items = array(
    'top3_gallery' => array(
      'name' => t('TOP3 Gallery'),
      'base' => 'node_content',
      'description' => t('Create and manage a TOP3 gallery.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

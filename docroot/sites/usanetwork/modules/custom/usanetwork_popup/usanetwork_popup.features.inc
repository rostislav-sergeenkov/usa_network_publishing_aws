<?php
/**
 * @file
 * usanetwork_popup.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_popup_ctools_plugin_api($module = NULL, $api = NULL) {
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
function usanetwork_popup_node_info() {
  $items = array(
    'popup_element' => array(
      'name' => t('Pop-up Element'),
      'base' => 'node_content',
      'description' => t('Pop-up for Homepage'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

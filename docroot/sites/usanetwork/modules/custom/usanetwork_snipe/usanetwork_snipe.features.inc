<?php
/**
 * @file
 * usanetwork_snipe.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_snipe_ctools_plugin_api() {
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
function usanetwork_snipe_node_info() {
  $items = array(
    'snipe' => array(
      'name' => t('Snipe'),
      'base' => 'node_content',
      'description' => t('Used to schedule “snipe” content and the URL to which it links so that the same message is seen on all screens at the same time.'),
      'has_title' => '1',
      'title_label' => t('Administrative Title'),
      'help' => '',
    ),
  );
  return $items;
}

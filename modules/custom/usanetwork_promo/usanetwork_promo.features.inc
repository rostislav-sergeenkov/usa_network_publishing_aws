<?php
/**
 * @file
 * usanetwork_promo.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_promo_ctools_plugin_api() {
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
function usanetwork_promo_node_info() {
  $items = array(
    'usanetwork_promo' => array(
      'name' => t('Promo'),
      'base' => 'node_content',
      'description' => t('Enter information for B-spots, C-spots, etc. Do not use for A-spots.'),
      'has_title' => '1',
      'title_label' => t('Administrative Title'),
      'help' => '',
    ),
  );
  return $items;
}

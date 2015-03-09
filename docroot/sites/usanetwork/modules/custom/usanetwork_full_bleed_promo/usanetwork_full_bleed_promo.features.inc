<?php
/**
 * @file
 * usanetwork_full_bleed_promo.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_full_bleed_promo_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_full_bleed_promo_node_info() {
  $items = array(
    'usanetwork_full_bleed_promo' => array(
      'name' => t('Full Bleed Promo'),
      'base' => 'node_content',
      'description' => t('This content type is used in homepage display mainly'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

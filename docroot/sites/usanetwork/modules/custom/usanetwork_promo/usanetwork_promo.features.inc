<?php
/**
 * @file
 * usanetwork_promo.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_promo_ctools_plugin_api($module = NULL, $api = NULL) {
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
 * Implements hook_views_api().
 */
function usanetwork_promo_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_promo_node_info() {
  $items = array(
    'usanetwork_promo' => array(
      'name' => t('Promo'),
      'base' => 'node_content',
      'description' => t('Used on homepage B-spots and C-spots, also in evergreen and show promo carousels.'),
      'has_title' => '1',
      'title_label' => t('Administrative Title'),
      'help' => '',
    ),
  );
  return $items;
}

<?php
/**
 * @file
 * usanetwork_promo_iframe.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_promo_iframe_ctools_plugin_api($module = NULL, $api = NULL) {
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
function usanetwork_promo_iframe_node_info() {
  $items = array(
    'usanetwork_promo_iframe' => array(
      'name' => t('Promo iFrame'),
      'base' => 'node_content',
      'description' => t('Used on show pages to set up and show promotional content in iframes in show promo carousels.'),
      'has_title' => '1',
      'title_label' => t('Administrative Title'),
      'help' => '',
    ),
  );
  return $items;
}

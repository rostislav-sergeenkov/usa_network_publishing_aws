<?php
/**
 * @file
 * usanetwork_ads.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_ads_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "dart" && $api == "dart_tag_default") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

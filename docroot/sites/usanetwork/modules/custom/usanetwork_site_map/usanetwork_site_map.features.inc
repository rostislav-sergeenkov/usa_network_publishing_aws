<?php
/**
 * @file
 * usanetwork_site_map.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_site_map_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
}

<?php
/**
 * @file
 * usanetwork_social_meter.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_social_meter_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

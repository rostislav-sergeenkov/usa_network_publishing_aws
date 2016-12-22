<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_tv_shows_display_options_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

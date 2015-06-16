<?php
/**
 * @file
 * usanetwork_tv_shows_color_field.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_tv_shows_color_field_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

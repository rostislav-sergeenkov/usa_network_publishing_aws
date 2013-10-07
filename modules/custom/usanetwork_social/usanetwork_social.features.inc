<?php
/**
 * @file
 * usanetwork_social.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_social_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

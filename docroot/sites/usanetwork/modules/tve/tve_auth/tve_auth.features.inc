<?php
/**
 * @file
 * tve_auth.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function tve_auth_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

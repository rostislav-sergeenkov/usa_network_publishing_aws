<?php
/**
 * @file
 * usanetwork_program_guide.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_program_guide_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

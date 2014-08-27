<?php
/**
 * @file
 * usanetwork_nitro.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_nitro_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

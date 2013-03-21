<?php
/**
 * @file
 * pub_relations_usanetwork.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_relations_usanetwork_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

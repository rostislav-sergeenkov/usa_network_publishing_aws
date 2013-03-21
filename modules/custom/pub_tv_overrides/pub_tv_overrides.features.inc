<?php
/**
 * @file
 * pub_tv_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_tv_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

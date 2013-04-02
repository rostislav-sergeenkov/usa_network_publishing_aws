<?php
/**
 * @file
 * pub_character_profile_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_character_profile_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

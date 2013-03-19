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

/**
 * Implements hook_strongarm_alter().
 */
function pub_tv_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__tv_show'])) {
    $data['field_bundle_settings_node__tv_show']->value['extra_fields']['form']['metatags']['weight'] = '3'; /* WAS: '5' */
    $data['field_bundle_settings_node__tv_show']->value['extra_fields']['form']['path']['weight'] = '4'; /* WAS: '6' */
  }
}

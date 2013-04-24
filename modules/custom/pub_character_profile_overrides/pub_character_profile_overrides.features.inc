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
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_character_profile_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__character_profile'])) {
    $data['field_bundle_settings_node__character_profile']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__character_profile']->value['view_modes']['full']['custom_settings'] = TRUE; /* WAS: FALSE */
  }
  if (isset($data['node_submitted_character_profile'])) {
    $data['node_submitted_character_profile']->value = 0; /* WAS: 1 */
  }
}

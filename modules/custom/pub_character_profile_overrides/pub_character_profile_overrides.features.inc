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
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_group_info_alter().
 */
function pub_character_profile_overrides_field_group_info_alter(&$data) {
  if (isset($data['group_characters_information|node|character_profile|form'])) {
    $data['group_characters_information|node|character_profile|form']->data['children']['7'] = 'field_usa_character_thumb'; /* WAS: '' */
  }
}

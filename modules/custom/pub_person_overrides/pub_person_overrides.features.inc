<?php
/**
 * @file
 * pub_person_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_person_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_person_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__person'])) {
    $data['field_bundle_settings_node__person']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['block_cover_title_lg'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['cast_carousel'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['follow_social'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

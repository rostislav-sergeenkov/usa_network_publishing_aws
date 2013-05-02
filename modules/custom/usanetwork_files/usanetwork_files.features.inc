<?php
/**
 * @file
 * usanetwork_files.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_files_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function usanetwork_files_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_file__image'])) {
    $data['field_bundle_settings_file__image']->value['extra_fields']['display']['file']['thumb_tiny'] = array(
      'weight' => '0',
      'visible' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_file__image']->value['view_modes']['thumb_tiny'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

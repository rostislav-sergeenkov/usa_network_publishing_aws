<?php
/**
 * @file
 * usanetwork_person.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_person_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_field_instances_alter().
 */
function usanetwork_person_field_default_field_instances_alter(&$data) {
  if (isset($data['node-person-field_person_ms_background'])) {
    $data['node-person-field_person_ms_background']['settings']['file_extensions'] = 'jpg jpeg png gif'; /* WAS: 'txt' */
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_person_node_info() {
  $items = array(
    'person' => array(
      'name' => t('Person'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

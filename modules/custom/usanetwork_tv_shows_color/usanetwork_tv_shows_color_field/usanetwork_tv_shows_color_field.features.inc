<?php
/**
 * @file
 * usanetwork_tv_shows_color_field.features.inc
 */

/**
 * Implements hook_field_group_info_alter().
 */
function usanetwork_tv_shows_color_field_field_group_info_alter(&$data) {
  if (isset($data['group_usa_custom_tab|node|tv_show|form'])) {
    $data['group_usa_custom_tab|node|tv_show|form']->data['children']['7'] = 'field_usa_tv_show_color'; /* WAS: '' */
  }
}

/**
 * Implements hook_field_default_field_instances_alter().
 */
function usanetwork_tv_shows_color_field_field_default_field_instances_alter(&$data) {
  if (isset($data['node-tv_show-field_pathauto_alias'])) {
    $data['node-tv_show-field_pathauto_alias']['widget']['weight'] = 63; /* WAS: 64 */
  }
}
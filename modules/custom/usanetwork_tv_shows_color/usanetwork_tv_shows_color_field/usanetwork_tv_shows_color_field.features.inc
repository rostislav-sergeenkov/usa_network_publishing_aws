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
    $data['group_usa_custom_tab|node|tv_show|form']->data['children']['6'] = 'field_usa_tv_show_color'; /* WAS: 'group_show_aspots' */
    $data['group_usa_custom_tab|node|tv_show|form']->data['children']['7'] = 'group_show_aspots'; /* WAS: '' */
  }
}

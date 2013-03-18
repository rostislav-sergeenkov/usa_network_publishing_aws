<?php
/**
 * @file
 * usanetwork_mods.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_mods_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_menu|node|tv_show|form';
  $field_group->group_name = 'group_show_menu';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show Menu',
    'weight' => '2',
    'children' => array(
      0 => 'field_show_links',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_show_menu|node|tv_show|form'] = $field_group;

  return $export;
}

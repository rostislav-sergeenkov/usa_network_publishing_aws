<?php
/**
 * @file
 * usanetwork_tv_shows_color_field.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_tv_shows_color_field_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_colors|node|tv_show|form';
  $field_group->group_name = 'group_colors';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show color',
    'weight' => '5',
    'children' => array(
      0 => 'field_usa_tv_show_color',
      1 => 'field_usa_tv_show_color_second',
      2 => 'field_usa_tv_show_color_tertiary',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-colors field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_colors|node|tv_show|form'] = $field_group;

  return $export;
}

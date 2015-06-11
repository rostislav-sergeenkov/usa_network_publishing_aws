<?php
/**
 * @file
 * usanetwork_snipe.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_snipe_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_snipe_basic|node|snipe|form';
  $field_group->group_name = 'group_snipe_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'snipe';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_usa_snipe_html',
      1 => 'field_usa_snipe_image',
      2 => 'field_usa_display_date_time',
      3 => 'field_usa_display_length',
      4 => 'field_usa_support_files',
      5 => 'title',
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
  $export['group_snipe_basic|node|snipe|form'] = $field_group;

  return $export;
}

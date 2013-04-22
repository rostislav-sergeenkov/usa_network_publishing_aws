<?php
/**
 * @file
 * usanetwork_catchall.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_catchall_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_reference|node|catchall_page|form';
  $field_group->group_name = 'group_reference';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show reference',
    'weight' => '1',
    'children' => array(
      0 => 'field_show',
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
  $export['group_reference|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_required_input|node|catchall_page|form';
  $field_group->group_name = 'group_required_input';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Static Content',
    'weight' => '0',
    'children' => array(
      0 => 'field_usa_catchall_html',
      1 => 'field_usa_catchall_js',
      2 => 'field_usa_css',
      3 => 'field_usa_catchall_fixedwidth',
      4 => 'field_usa_catchall_fixed_width',
      5 => 'field_usa_catchall_files',
      6 => 'title',
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
  $export['group_required_input|node|catchall_page|form'] = $field_group;

  return $export;
}

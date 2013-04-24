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
  $field_group->identifier = 'group_catchall_basic|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_show',
      1 => 'field_usa_catchall_fixedwidth',
      2 => 'title',
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
  $export['group_catchall_basic|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_code|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_code';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Catchall Code',
    'weight' => '1',
    'children' => array(
      0 => 'field_usa_catchall_html',
      1 => 'field_usa_catchall_js',
      2 => 'field_usa_css',
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
  $export['group_catchall_code|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_media|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Catchall Files',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_catchall_media',
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
  $export['group_catchall_media|node|catchall_page|form'] = $field_group;

  return $export;
}

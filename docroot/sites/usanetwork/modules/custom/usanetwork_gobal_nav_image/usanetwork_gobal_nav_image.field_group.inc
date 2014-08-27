<?php
/**
 * @file
 * usanetwork_gobal_nav_image.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_gobal_nav_image_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_basic|node|global_nav_image|form';
  $field_group->group_name = 'group_usa_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'global_nav_image';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_gobal_nav_image',
      1 => 'field_nav_img_link',
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
  $export['group_usa_basic|node|global_nav_image|form'] = $field_group;

  return $export;
}

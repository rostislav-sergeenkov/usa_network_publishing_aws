<?php
/**
 * @file
 * pub_person_overrides.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function pub_person_overrides_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom_tab|node|person|form';
  $field_group->group_name = 'group_usa_custom_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA custom',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_character_thumb',
      1 => 'field_usa_link_facebook',
      2 => 'field_usa_link_twitter',
      3 => 'field_show',
      4 => 'field_role',
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
  $export['group_usa_custom_tab|node|person|form'] = $field_group;

  return $export;
}

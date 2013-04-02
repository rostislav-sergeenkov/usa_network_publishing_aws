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
  $field_group->identifier = 'group_additional_information|node|person|form';
  $field_group->group_name = 'group_additional_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '1',
    'children' => array(
      0 => 'field_person_birth_date',
      1 => 'field_person_birth_location',
      2 => 'field_person_external_links',
      3 => 'field_character',
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
  $export['group_additional_information|node|person|form'] = $field_group;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_aspot.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_aspot_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_aspot_basic|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_aspot_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '3',
    'children' => array(
      0 => 'field_show',
      1 => 'field_usa_aspot_link',
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
  $export['group_aspot_basic|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_aspot_fields|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_aspot_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-spot text rows',
    'weight' => '5',
    'children' => array(
      0 => 'field_call_to_action_type',
      1 => 'field_usa_aspot_txt1',
      2 => 'field_usa_aspot_txt2',
      3 => 'field_usa_aspot_txt3',
      4 => 'field_usa_aspot_txt4',
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
  $export['group_usa_aspot_fields|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_media|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-spot media',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_aspot_desktop',
      1 => 'field_usa_aspot_mobile',
      2 => 'field_usa_aspot_tablet',
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
  $export['group_usa_media|node|usanetwork_aspot|form'] = $field_group;

  return $export;
}

<?php
/**
 * @file
 * pub_media_overrides.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function pub_media_overrides_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_rels|node|media_gallery|form';
  $field_group->group_name = 'group_show_rels';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom_tab';
  $field_group->data = array(
    'label' => 'Show relationships',
    'weight' => '15',
    'children' => array(
      0 => 'field_episode',
      1 => 'field_season',
      2 => 'field_show',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Show relationships',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_show_rels|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom_tab|node|media_gallery|form';
  $field_group->group_name = 'group_usa_custom_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA custom',
    'weight' => '2',
    'children' => array(
      0 => 'field_person',
      1 => 'group_show_rels',
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
  $export['group_usa_custom_tab|node|media_gallery|form'] = $field_group;

  return $export;
}

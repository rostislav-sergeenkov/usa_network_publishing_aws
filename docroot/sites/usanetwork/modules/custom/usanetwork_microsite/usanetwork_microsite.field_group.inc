<?php
/**
 * @file
 * usanetwork_microsite.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_microsite_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_section|node|show_microsite|form';
  $field_group->group_name = 'group_ms_section';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'show_microsite';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'ms_section',
    'weight' => '10',
    'children' => array(
      0 => 'field_usa_hp_arefs',
      1 => 'field_usa_hp_brefs',
      2 => 'field_usa_hp_crefs',
      3 => 'field_media_gallery',
      4 => 'field_episode_credit_person',
      5 => 'field_ms_section_enable',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-section field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_section|node|show_microsite|form'] = $field_group;

  return $export;
}

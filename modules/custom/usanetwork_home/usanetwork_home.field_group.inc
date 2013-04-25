<?php
/**
 * @file
 * usanetwork_home.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_home_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_aspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_aspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-spots',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_hp_arefs',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'A-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'No more than 3 to 5 A-spots are recommended for this region',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_hp_aspots|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_bspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_bspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'B-spots',
    'weight' => '3',
    'children' => array(
      0 => 'field_usa_hp_brefs',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'B-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'A maximum of 5 promos recommended for this region',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_hp_bspots|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_cspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_cspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'C-spots',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_hp_crefs',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'C-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'A maximum of 5 promos recommended for this region',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_hp_cspots|node|usa_homepage|form'] = $field_group;

  return $export;
}

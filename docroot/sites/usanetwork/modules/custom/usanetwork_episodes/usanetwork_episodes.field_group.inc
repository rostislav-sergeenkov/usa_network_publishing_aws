<?php
/**
 * @file
 * usanetwork_episodes.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_episodes_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|node|tv_episode|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '12',
    'children' => array(
      0 => 'field_sponsored',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-sponsorship field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_sponsorship|node|tv_episode|form'] = $field_group;

  return $export;
}

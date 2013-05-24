<?php
/**
 * @file
 * usanetwork_nitro.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_nitro_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_media_gallery_nitro|node|media_gallery|form';
  $field_group->group_name = 'group_media_gallery_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '3',
    'children' => array(
      0 => 'field_enable_nitro',
      1 => 'field_nitro_action_name',
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
  $export['group_media_gallery_nitro|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_person_nitro|node|person|form';
  $field_group->group_name = 'group_person_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '5',
    'children' => array(
      0 => 'field_enable_nitro',
      1 => 'field_nitro_action_name',
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
  $export['group_person_nitro|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_tv_episode_nitro|node|tv_episode|form';
  $field_group->group_name = 'group_tv_episode_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '3',
    'children' => array(
      0 => 'field_enable_nitro',
      1 => 'field_nitro_action_name',
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
  $export['group_tv_episode_nitro|node|tv_episode|form'] = $field_group;

  return $export;
}

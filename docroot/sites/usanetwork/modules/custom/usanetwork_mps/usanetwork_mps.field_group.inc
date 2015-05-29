<?php
/**
 * @file
 * usanetwork_mps.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_mps_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|file|mpx_video_1|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_1';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '58',
    'children' => array(
      0 => 'field_sponsored',
      1 => 'field_campaign_name',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Sponsorship',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => 'group-sponsorship field-group-tab',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_sponsorship|file|mpx_video_1|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|file|mpx_video_2|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_2';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '62',
    'children' => array(
      0 => 'field_sponsored',
      1 => 'field_campaign_name',
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
  $export['group_sponsorship|file|mpx_video_2|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|node|media_gallery|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '14',
    'children' => array(
      0 => 'field_sponsored',
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
  $export['group_sponsorship|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|node|tv_show|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '16',
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
  $export['group_sponsorship|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|node|usanetwork_promo|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '10',
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
  $export['group_sponsorship|node|usanetwork_promo|form'] = $field_group;

  return $export;
}

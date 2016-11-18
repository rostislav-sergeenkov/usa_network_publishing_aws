<?php
/**
 * @file
 * usanetwork_mpx_video.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_mpx_video_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_endcard|file|mpx_video_2|form';
  $field_group->group_name = 'group_endcard';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_2';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Endcard Settings',
    'weight' => '47',
    'children' => array(
      0 => 'field_endcard_timing',
      1 => 'field_custom_time',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Endcard Settings',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_endcard|file|mpx_video_2|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_details|file|mpx_video_1|form';
  $field_group->group_name = 'group_promo_details';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_1';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Details',
    'weight' => '37',
    'children' => array(
      0 => 'field_promo_call_to_action_text',
      1 => 'field_promo_violator_name',
      2 => 'field_promo_title',
      3 => 'field_promo_topic',
      4 => 'field_promo_long_description',
      5 => 'field_promo_exclude_from_related',
      6 => 'field_promo_created_ovts',
      7 => 'field_call_to_action_type',
      8 => 'field_promo_image_override',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-promo-details field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_promo_details|file|mpx_video_1|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_details|file|mpx_video_2|form';
  $field_group->group_name = 'group_promo_details';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_2';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Details',
    'weight' => '39',
    'children' => array(
      0 => 'field_promo_call_to_action_text',
      1 => 'field_promo_violator_name',
      2 => 'field_promo_title',
      3 => 'field_promo_topic',
      4 => 'field_promo_long_description',
      5 => 'field_promo_exclude_from_related',
      6 => 'field_promo_created_ovts',
      7 => 'field_call_to_action_type',
      8 => 'field_promo_image_override',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-promo-details field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_promo_details|file|mpx_video_2|form'] = $field_group;

  return $export;
}

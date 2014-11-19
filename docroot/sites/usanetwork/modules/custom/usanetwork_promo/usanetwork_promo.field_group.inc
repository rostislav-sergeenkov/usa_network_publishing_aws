<?php
/**
 * @file
 * usanetwork_promo.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_promo_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_basic|node|usanetwork_promo|form';
  $field_group->group_name = 'group_promo_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '3',
    'children' => array(
      0 => 'field_promo_link',
      1 => 'field_show',
      2 => 'field_target',
      3 => 'field_promo_assoc_video',
      4 => 'field_promo_assoc_content',
      5 => 'title',
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
  $export['group_promo_basic|node|usanetwork_promo|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_text_rows|node|usanetwork_promo|form';
  $field_group->group_name = 'group_promo_text_rows';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Text Rows',
    'weight' => '5',
    'children' => array(
      0 => 'field_call_to_action_type',
      1 => 'field_promo_call_to_action_text',
      2 => 'field_promo_text_line_1',
      3 => 'field_promo_text_line_2',
      4 => 'field_meta_text_bar',
      5 => 'field_promo_text_line_1_wide',
      6 => 'field_promo_text_line_2_wide',
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
  $export['group_promo_text_rows|node|usanetwork_promo|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_media|node|usanetwork_promo|form';
  $field_group->group_name = 'group_usa_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Media',
    'weight' => '4',
    'children' => array(
      0 => 'field_promo_regular_image',
      1 => 'field_promo_wide_image',
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
  $export['group_usa_media|node|usanetwork_promo|form'] = $field_group;

  return $export;
}

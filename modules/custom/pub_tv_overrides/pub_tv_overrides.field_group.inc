<?php
/**
 * @file
 * pub_tv_overrides.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function pub_tv_overrides_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_menu|node|tv_show|form';
  $field_group->group_name = 'group_show_menu';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show Menu',
    'weight' => '1',
    'children' => array(
      0 => 'field_show_links',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Show Menu',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'It is recommended that PARENT (main link) items be text only with no url added',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_show_menu|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom_tab|node|tv_show|form';
  $field_group->group_name = 'group_usa_custom_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '4',
    'children' => array(
      0 => 'field_display_title',
      1 => 'field_usa_tv_a_spot',
      2 => 'field_usa_tv_featured_videos',
      3 => 'field_usa_tv_on_now',
      4 => 'field_usa_tv_promo',
      5 => 'field_usa_tv_tune_in_date',
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
  $export['group_usa_custom_tab|node|tv_show|form'] = $field_group;

  return $export;
}

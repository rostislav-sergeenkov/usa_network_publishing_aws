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
    'weight' => '2',
    'children' => array(
      0 => 'field_show_links',
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
  $export['group_show_menu|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_information|node|tv_show|form';
  $field_group->group_name = 'group_social_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social Information',
    'weight' => '3',
    'children' => array(
      0 => 'group_twitter_settings',
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
  $export['group_social_information|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_twitter_settings|node|tv_show|form';
  $field_group->group_name = 'group_twitter_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Twitter Settings',
    'weight' => '27',
    'children' => array(
      0 => 'field_twitter_eql_template',
      1 => 'field_twitter_childrenof',
      2 => 'field_twitter_feed',
      3 => 'field_twitter_state',
      4 => 'field_twitter_source',
      5 => 'field_twitter_markers',
      6 => 'field_twitter_tags',
      7 => 'field_twitter_sortorder',
      8 => 'field_twitter_safehtml',
      9 => 'field_twitter_itemsperpage',
      10 => 'field_twitter_children',
      11 => 'field_show_twitter_page',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_twitter_settings|node|tv_show|form'] = $field_group;

  return $export;
}

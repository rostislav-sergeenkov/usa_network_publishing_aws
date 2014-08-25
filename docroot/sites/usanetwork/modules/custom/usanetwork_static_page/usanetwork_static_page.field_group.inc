<?php
/**
 * @file
 * usanetwork_static_page.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_static_page_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_page_ideamelt|node|usanetwork_static_page|form';
  $field_group->group_name = 'group_page_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_static_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA IdeaMelt',
    'weight' => '2',
    'children' => array(
      0 => 'field_ideamelt_action_type',
      1 => 'field_ideamelt_object_type',
      2 => 'field_send_ideamelt_notification',
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
  $export['group_page_ideamelt|node|usanetwork_static_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|usanetwork_static_page|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_static_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '1',
    'children' => array(
      0 => 'field_usa_og_description',
      1 => 'field_usa_og_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'USA OG fields',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|usanetwork_static_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_static_basic|node|usanetwork_static_page|form';
  $field_group->group_name = 'group_usa_static_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_static_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_show',
      2 => 'title',
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
  $export['group_usa_static_basic|node|usanetwork_static_page|form'] = $field_group;

  return $export;
}

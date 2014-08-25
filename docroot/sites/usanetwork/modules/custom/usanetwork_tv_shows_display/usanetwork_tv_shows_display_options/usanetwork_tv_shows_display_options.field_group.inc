<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_tv_shows_display_options_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_tv_promo_vids|node|tv_show|form';
  $field_group->group_name = 'group_usa_tv_promo_vids';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom_tab';
  $field_group->data = array(
    'label' => 'Featured Video Promos',
    'weight' => '90',
    'children' => array(
      0 => 'field_usa_tv_promo_vids',
      1 => 'field_usa_tv_promo_vids_label',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Featured Video Promos',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_usa_tv_promo_vids|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_tv_promo|node|tv_show|form';
  $field_group->group_name = 'group_usa_tv_promo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom_tab';
  $field_group->data = array(
    'label' => 'Featured',
    'weight' => '89',
    'children' => array(
      0 => 'field_usa_tv_promo',
      1 => 'field_usa_tv_promo_large',
      2 => 'field_usa_tv_promo_rows',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Featured',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_usa_tv_promo|node|tv_show|form'] = $field_group;

  return $export;
}

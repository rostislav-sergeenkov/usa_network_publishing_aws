<?php
/**
 * @file
 * usanetwork_full_bleed_promo.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_full_bleed_promo_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_basic_information|node|usanetwork_full_bleed_promo|form';
  $field_group->group_name = 'group_basic_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_full_bleed_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_usa_fbp_cta_link',
      1 => 'field_usa_fbp_desktop_image',
      2 => 'field_usa_fbp_mobile_image',
      3 => 'field_usa_fbp_linked_content',
      4 => 'field_usa_tv_show_color',
      5 => 'title',
      6 => 'path',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Basic Information',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_basic_information|node|usanetwork_full_bleed_promo|form'] = $field_group;

  return $export;
}

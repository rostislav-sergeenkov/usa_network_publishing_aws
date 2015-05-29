<?php
/**
 * @file
 * usanetwork_promo_iframe.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_promo_iframe_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_iframe_basic|node|usanetwork_promo_iframe|form';
  $field_group->group_name = 'group_promo_iframe_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo_iframe';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_show',
      1 => 'field_promo_iframe_src_link',
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
  $export['group_promo_iframe_basic|node|usanetwork_promo_iframe|form'] = $field_group;

  return $export;
}

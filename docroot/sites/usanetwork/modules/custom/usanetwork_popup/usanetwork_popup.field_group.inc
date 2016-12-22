<?php
/**
 * @file
 * usanetwork_popup.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_popup_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_effect|node|popup_element|form';
  $field_group->group_name = 'group_effect';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'popup_element';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Effect',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_css',
      1 => 'field_usa_catchall_js',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-effect field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_effect|node|popup_element|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_media|node|popup_element|form';
  $field_group->group_name = 'group_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'popup_element';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Media',
    'weight' => '1',
    'children' => array(
      0 => 'field_popup_desktop_image',
      1 => 'field_popup_mobile_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Media',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_media|node|popup_element|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_basic|node|popup_element|form';
  $field_group->group_name = 'group_promo_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'popup_element';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_promo_link',
      2 => 'title',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Basic Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_promo_basic|node|popup_element|form'] = $field_group;

  return $export;
}

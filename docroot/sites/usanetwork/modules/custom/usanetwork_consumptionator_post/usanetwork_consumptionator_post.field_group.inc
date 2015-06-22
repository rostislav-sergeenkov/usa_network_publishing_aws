<?php
/**
 * @file
 * usanetwork_post.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_consumptionator_post_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_additional_information|node|consumpt_post|form';
  $field_group->group_name = 'group_additional_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'consumpt_post';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '3',
    'children' => array(
      0 => 'field_categories',
      1 => 'field_collection',
      2 => 'field_content_tags',
      3 => 'field_contributor',
      4 => 'field_media_gallery',
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
  $export['group_additional_information|node|consumpt_post|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_basic_information|node|consumpt_post|form';
  $field_group->group_name = 'group_basic_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'consumpt_post';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_blog',
      2 => 'field_post_cover',
      3 => 'field_post_cover_toggle',
      4 => 'field_show',
      5 => 'field_summary',
      6 => 'field_sub_title',
      7 => 'title',
      8 => 'group_blog_display_author',
      9 => 'group_blog_displaying_author',
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
  $export['group_basic_information|node|consumpt_post|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_blog_displaying_author|node|consumpt_post|form';
  $field_group->group_name = 'group_blog_displaying_author';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'consumpt_post';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_basic_information';
  $field_group->data = array(
    'label' => 'Displaying Author',
    'weight' => '10',
    'children' => array(
      0 => 'field_blog_display_author',
      1 => 'field_override_display_author',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Displaying Author',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_blog_displaying_author|node|consumpt_post|form'] = $field_group;


  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sponsorship|node|consumpt_post|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'consumpt_post';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '37',
    'children' => array(
      0 => 'field_sponsored',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Sponsorship',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_sponsorship|node|consumpt_post|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_details|node|consumpt_post|form';
  $field_group->group_name = 'group_promo_details';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'consumpt_post';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Details',
    'weight' => '7',
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
  $export['group_promo_details|node|consumpt_post|form'] = $field_group;

  return $export;
}

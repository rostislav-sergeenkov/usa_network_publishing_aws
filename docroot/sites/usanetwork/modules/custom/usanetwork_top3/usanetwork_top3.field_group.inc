<?php
/**
 * @file
 * usanetwork_top3.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_top3_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_additional|node|top3_gallery|form';
  $field_group->group_name = 'group_gallery_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '2',
    'children' => array(),
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
  $export['group_gallery_additional|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_basic|node|top3_gallery|form';
  $field_group->group_name = 'group_gallery_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '1',
    'children' => array(
      0 => 'body',
      1 => 'field_media_items',
      2 => 'field_slides_content',
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
  $export['group_gallery_basic|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_ideamelt|node|top3_gallery|form';
  $field_group->group_name = 'group_gallery_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA IdeaMelt',
    'weight' => '10',
    'children' => array(
      0 => 'field_ideamelt_action_type',
      1 => 'field_send_ideamelt_notification',
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
  $export['group_gallery_ideamelt|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_details|node|top3_gallery|form';
  $field_group->group_name = 'group_promo_details';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Details',
    'weight' => '6',
    'children' => array(
      0 => 'field_call_to_action_type',
      1 => 'field_promo_image_override',
      2 => 'field_promo_topic',
      3 => 'field_promo_violator_name',
      4 => 'field_promo_title',
      5 => 'field_promo_long_description',
      6 => 'field_promo_call_to_action_text',
      7 => 'field_promo_exclude_from_related',
      8 => 'field_promo_created_ovts',
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
  $export['group_promo_details|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_seo|node|top3_gallery|form';
  $field_group->group_name = 'group_seo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'SEO',
    'weight' => '4',
    'children' => array(
      0 => 'field_seo_h1',
      1 => 'field_seo_page_title',
      2 => 'field_usa_og_description',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-seo field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_seo|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_rels|node|top3_gallery|form';
  $field_group->group_name = 'group_show_rels';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom';
  $field_group->data = array(
    'label' => 'Show relationships',
    'weight' => '23',
    'children' => array(
      0 => 'field_episode',
      1 => 'field_season',
      2 => 'field_show',
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
  $export['group_show_rels|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom|node|top3_gallery|form';
  $field_group->group_name = 'group_usa_custom';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '3',
    'children' => array(
      0 => 'field_show',
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
  $export['group_usa_custom|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|top3_gallery|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '5',
    'children' => array(
      0 => 'field_usa_og_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'USA OG fields',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags
',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|top3_gallery|form'] = $field_group;

  return $export;
}

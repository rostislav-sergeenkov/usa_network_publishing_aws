<?php
/**
 * @file
 * usanetwork_microsite.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_microsite_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_aspots|field_collection_item|field_ms_section|form';
  $field_group->group_name = 'group_ms_aspots';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_ms_section';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-SPOTS',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_tv_a_spot',
      1 => 'group_ms_slide_settings',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-aspots field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_aspots|field_collection_item|field_ms_section|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_base_info|node|usanetwork_microsite|form';
  $field_group->group_name = 'group_ms_base_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_microsite';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Base Info',
    'weight' => '1',
    'children' => array(
      0 => 'field_ms_small_logo',
      1 => 'field_ms_theme',
      2 => 'field_ms_tune_in',
      3 => 'field_pathauto_alias',
      4 => 'field_show',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-base-info field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_base_info|node|usanetwork_microsite|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_featured|field_collection_item|field_ms_section|form';
  $field_group->group_name = 'group_ms_featured';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_ms_section';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Featured',
    'weight' => '5',
    'children' => array(
      0 => 'field_usa_tv_promo',
      1 => 'field_usa_tv_promo_large',
      2 => 'field_usa_tv_promo_rows',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-featured field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_featured|field_collection_item|field_ms_section|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_sections|node|usanetwork_microsite|form';
  $field_group->group_name = 'group_ms_sections';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_microsite';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sections',
    'weight' => '2',
    'children' => array(
      0 => 'field_ms_section',
      1 => 'field_ms_section_separator',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-sections field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_sections|node|usanetwork_microsite|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_slide_settings|field_collection_item|field_ms_section|form';
  $field_group->group_name = 'group_ms_slide_settings';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_ms_section';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_ms_aspots';
  $field_group->data = array(
    'label' => 'slideshow options',
    'weight' => '24',
    'children' => array(
      0 => 'field_usa_autoscroll',
      1 => 'field_usa_slide_speed',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-slide-settings field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_slide_settings|field_collection_item|field_ms_section|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_social|node|usanetwork_microsite|form';
  $field_group->group_name = 'group_ms_social';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_microsite';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social Information',
    'weight' => '3',
    'children' => array(
      0 => 'field_usa_instagram_page',
      1 => 'field_usa_link_facebook',
      2 => 'field_usa_link_pinterest',
      3 => 'field_usa_link_tumblr',
      4 => 'field_usa_link_twitter',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ms-social field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ms_social|node|usanetwork_microsite|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_seo|field_collection_item|field_ms_section|form';
  $field_group->group_name = 'group_seo';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_ms_section';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'SEO',
    'weight' => '6',
    'children' => array(
      0 => 'field_seo_h1',
      1 => 'field_seo_page_title',
      2 => 'field_usa_og_description',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'SEO',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-seo field-group-fieldset',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_seo|field_collection_item|field_ms_section|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_settings|node|usanetwork_microsite|form';
  $field_group->group_name = 'group_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_microsite';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Settings',
    'weight' => '4',
    'children' => array(
      0 => 'field_ms_display_global_nav',
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
  $export['group_settings|node|usanetwork_microsite|form'] = $field_group;

  return $export;
}

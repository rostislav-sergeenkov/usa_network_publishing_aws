<?php
/**
 * @file
 * usanetwork_timeline_gallery.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_timeline_gallery_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_additional|node|timeline_gallery|form';
  $field_group->group_name = 'group_gallery_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '1',
    'children' => array(
      0 => 'field_content_tags',
      1 => 'field_summary',
      2 => 'field_usa_css',
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
  $export['group_gallery_additional|node|timeline_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_basic|node|timeline_gallery|form';
  $field_group->group_name = 'group_gallery_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_cover_item',
      2 => 'field_show',
      3 => 'field_timeline_episode_section',
      4 => 'title',
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
  $export['group_gallery_basic|node|timeline_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_ideamelt|node|timeline_gallery|form';
  $field_group->group_name = 'group_gallery_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
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
  $export['group_gallery_ideamelt|node|timeline_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_seo|node|timeline_gallery|form';
  $field_group->group_name = 'group_seo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'SEO',
    'weight' => '3',
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
  $export['group_seo|node|timeline_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_timeline_gallery_nitro|node|timeline_gallery|form';
  $field_group->group_name = 'group_timeline_gallery_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '5',
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
  $export['group_timeline_gallery_nitro|node|timeline_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|timeline_gallery|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'timeline_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '6',
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
  $export['group_usa_og_fields|node|timeline_gallery|form'] = $field_group;

  return $export;
}

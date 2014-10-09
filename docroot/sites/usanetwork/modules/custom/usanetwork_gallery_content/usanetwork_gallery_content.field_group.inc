<?php
/**
 * @file
 * usanetwork_gallery_content.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_gallery_content_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_additional|node|media_gallery|form';
  $field_group->group_name = 'group_gallery_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '1',
    'children' => array(
      0 => 'field_categories',
      1 => 'field_collection',
      2 => 'field_content_tags',
      3 => 'field_summary',
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
  $export['group_gallery_additional|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_basic|node|media_gallery|form';
  $field_group->group_name = 'group_gallery_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_cover_item',
      2 => 'field_media_items',
      3 => 'field_seo_h1',
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
  $export['group_gallery_basic|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_gallery_ideamelt|node|media_gallery|form';
  $field_group->group_name = 'group_gallery_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA IdeaMelt',
    'weight' => '24',
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
  $export['group_gallery_ideamelt|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_media_gallery_nitro|node|media_gallery|form';
  $field_group->group_name = 'group_media_gallery_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '3',
    'children' => array(
      0 => 'field_enable_nitro',
      1 => 'field_nitro_action_name',
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
  $export['group_media_gallery_nitro|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_rels|node|media_gallery|form';
  $field_group->group_name = 'group_show_rels';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
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
  $export['group_show_rels|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom|node|media_gallery|form';
  $field_group->group_name = 'group_usa_custom';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '2',
    'children' => array(
      0 => 'field_person',
      1 => 'field_gallery_type',
      2 => 'group_show_rels',
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
  $export['group_usa_custom|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|media_gallery|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '4',
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
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags
',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|media_gallery|form'] = $field_group;

  return $export;
}

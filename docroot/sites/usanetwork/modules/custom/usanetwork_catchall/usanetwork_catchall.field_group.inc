<?php
/**
 * @file
 * usanetwork_catchall.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_catchall_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_basic|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_show',
      1 => 'field_usa_catchall_fixedwidth',
      2 => 'field_automatic_refresh',
      3 => 'field_refresh_time',
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
  $export['group_catchall_basic|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_code|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_code';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Catchall Code',
    'weight' => '3',
    'children' => array(
      0 => 'field_usa_catchall_html',
      1 => 'field_usa_catchall_js',
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
  $export['group_catchall_code|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_displayed_info|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_displayed_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Displayed Info',
    'weight' => '1',
    'children' => array(
      0 => 'field_displayed_info_description',
      1 => 'field_displayed_info_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-catchall-displayed-info field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_catchall_displayed_info|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_ideamelt|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA IdeaMelt',
    'weight' => '7',
    'children' => array(
      0 => 'field_ideamelt_action_type',
      1 => 'field_ideamelt_object_type',
      2 => 'field_send_ideamelt_notification',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'USA IdeaMelt',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_catchall_ideamelt|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_media|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Catchall Files',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_catchall_media',
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
  $export['group_catchall_media|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_catchall_nitro|node|catchall_page|form';
  $field_group->group_name = 'group_catchall_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '6',
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
  $export['group_catchall_nitro|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_seo|node|catchall_page|form';
  $field_group->group_name = 'group_seo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'SEO',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_og_description',
      1 => 'field_seo_page_title',
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
  $export['group_seo|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|catchall_page|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG Fields',
    'weight' => '5',
    'children' => array(
      0 => 'field_usa_og_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'USA OG Fields',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|catchall_page|form'] = $field_group;

  return $export;
}

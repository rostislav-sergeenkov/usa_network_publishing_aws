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
  $field_group->identifier = 'group_creating_top3|node|top3_gallery|form';
  $field_group->group_name = 'group_creating_top3';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom';
  $field_group->data = array(
    'label' => 'Creating a top3 ("Choose Your")',
    'weight' => '7',
    'children' => array(
      0 => 'field_logo',
      1 => 'field_logo_top',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Creating a top3 ("Choose Your")',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_creating_top3|node|top3_gallery|form'] = $field_group;

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
    'weight' => '1',
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
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_slides_content',
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
    'weight' => '9',
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
    'weight' => '5',
    'children' => array(
      0 => 'field_call_to_action_type',
      1 => 'field_promo_call_to_action_text',
      2 => 'field_promo_created_ovts',
      3 => 'field_promo_exclude_from_related',
      4 => 'field_promo_image_override',
      5 => 'field_promo_long_description',
      6 => 'field_promo_title',
      7 => 'field_promo_topic',
      8 => 'field_promo_violator_name',
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
  $export['group_seo|node|top3_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_rels|node|top3_gallery|form';
  $field_group->group_name = 'group_show_rels';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show relationships',
    'weight' => '13',
    'children' => array(),
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
  $field_group->identifier = 'group_sponsorship|node|top3_gallery|form';
  $field_group->group_name = 'group_sponsorship';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Sponsorship',
    'weight' => '6',
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
  $export['group_sponsorship|node|top3_gallery|form'] = $field_group;

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
    'weight' => '2',
    'children' => array(
      0 => 'field_background',
      1 => 'field_show',
      2 => 'group_creating_top3',
      3 => 'group_viewing_top3',
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
    'weight' => '4',
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

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_viewing_top3|node|top3_gallery|form';
  $field_group->group_name = 'group_viewing_top3';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'top3_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom';
  $field_group->data = array(
    'label' => 'Viewing a top3 ("I Chose My")',
    'weight' => '8',
    'children' => array(
      0 => 'field_logo_top_view',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Viewing a top3 ("I Chose My")',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_viewing_top3|node|top3_gallery|form'] = $field_group;

  return $export;
}

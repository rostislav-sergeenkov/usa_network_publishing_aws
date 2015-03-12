<?php
/**
 * @file
 * usanetwork_home.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_home_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_floodlight_tag|node|usa_homepage|form';
  $field_group->group_name = 'group_floodlight_tag';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Floodlight Tag',
    'weight' => '10',
    'children' => array(
      0 => 'field_floodlight_category',
      1 => 'field_floodlight_type',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-floodlight-tag field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_floodlight_tag|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_aspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_aspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-spots',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_hp_arefs',
      1 => 'group_slide_settings',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'A-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'Unlimited A-spots',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_hp_aspots|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_bspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_bspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'B-spots',
    'weight' => '5',
    'children' => array(
      0 => 'field_usa_hp_brefs',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'B-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'A maximum of 1 promo for this region.<br />
On page load, only the first promo in each spot will be displayed.',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_hp_bspots|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_cspots|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_cspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'C-spots',
    'weight' => '6',
    'children' => array(
      0 => 'field_usa_hp_crefs',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'C-spots',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'A maximum of 1 promo for this region.<br />
On page load, only the first promo in each spot will be displayed.',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_hp_cspots|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_full_bleed_promo|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_full_bleed_promo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Full Bleed Promo',
    'weight' => '7',
    'children' => array(
      0 => 'field_hp_full_bleed_promo',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-hp-full-bleed-promo field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_hp_full_bleed_promo|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_globalnav_img|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_globalnav_img';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Global Nav images',
    'weight' => '9',
    'children' => array(
      0 => 'field_hp_nav_img_more',
      1 => 'field_hp_nav_img_shows',
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
  $export['group_hp_globalnav_img|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_promo_carousel|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_promo_carousel';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo carousel',
    'weight' => '8',
    'children' => array(
      0 => 'field_hp_promo_carousel',
      1 => 'field_hp_promo_carousel_display',
      2 => 'field_hp_promo_carousel_title',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-hp-promo-carousel field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_hp_promo_carousel|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_hp_promos|node|usa_homepage|form';
  $field_group->group_name = 'group_hp_promos';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Featured-Themed',
    'weight' => '7',
    'children' => array(
      0 => 'field_hp_promos',
      1 => 'field_hp_episodes_block_title',
      2 => 'field_hp_promos_block_title',
      3 => 'field_caption_text',
      4 => 'field_additional_text',
      5 => 'field_hp_promo_logo',
      6 => 'field_hp_promo_background',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Featured-Themed',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'A maximum of 4 promos recommended for this region.<br />
If more than 4 are added a carousel will be triggered on page load so content can be scrolled through.',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_hp_promos|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_slide_settings|node|usa_homepage|form';
  $field_group->group_name = 'group_slide_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_hp_aspots';
  $field_group->data = array(
    'label' => 'slideshow options',
    'weight' => '17',
    'children' => array(
      0 => 'field_usa_autoscroll',
      1 => 'field_usa_slide_speed',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'slideshow options',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_slide_settings|node|usa_homepage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_promo_carousel|node|usa_homepage|form';
  $field_group->group_name = 'group_social_promo_carousel';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usa_homepage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social carousel',
    'weight' => '18',
    'children' => array(
      0 => 'field_social_promo_title',
      1 => 'field_social_promo_additional',
      2 => 'field_social_promo_carousel',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-promo-carousel field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_promo_carousel|node|usa_homepage|form'] = $field_group;

  return $export;
}

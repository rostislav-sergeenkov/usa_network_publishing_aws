<?php
/**
 * @file
 * usanetwork_person.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_person_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_person_additional|node|person|form';
  $field_group->group_name = 'group_person_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '1',
    'children' => array(
      0 => 'field_person_birth_date',
      1 => 'field_person_birth_location',
      2 => 'field_person_external_links',
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
  $export['group_person_additional|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_person_basic|node|person|form';
  $field_group->group_name = 'group_person_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Person\'s Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_person_cover_photo',
      2 => 'field_person_first_name',
      3 => 'field_person_last_name',
      4 => 'field_person_middle_name',
      5 => 'field_person_prefix',
      6 => 'field_person_suffix',
      7 => 'group_person_legal_name',
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
  $export['group_person_basic|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_person_legal_name|node|person|form';
  $field_group->group_name = 'group_person_legal_name';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_person_basic';
  $field_group->data = array(
    'label' => 'Legal Name',
    'weight' => '20',
    'children' => array(
      0 => 'field_different_legal_name',
      1 => 'field_legal_name_first_name',
      2 => 'field_legal_name_last_name',
      3 => 'field_legal_name_middle_name',
      4 => 'field_legal_name_prefix',
      5 => 'field_legal_name_suffix',
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
  $export['group_person_legal_name|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_person_nitro|node|person|form';
  $field_group->group_name = 'group_person_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '4',
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
  $export['group_person_nitro|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social|node|person|form';
  $field_group->group_name = 'group_social';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom';
  $field_group->data = array(
    'label' => 'Social',
    'weight' => '27',
    'children' => array(
      0 => 'field_usa_link_facebook',
      1 => 'field_usa_link_pinterest',
      2 => 'field_usa_link_tumblr',
      3 => 'field_usa_link_twitter',
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
  $export['group_social|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom|node|person|form';
  $field_group->group_name = 'group_usa_custom';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '2',
    'children' => array(
      0 => 'field_role',
      1 => 'field_show',
      2 => 'field_usa_actor_name',
      3 => 'field_usa_character_thumb',
      4 => 'field_hide_social_follow',
      5 => 'field_hide_cast_carousel',
      6 => 'group_social',
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
  $export['group_usa_custom|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|person|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '3',
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
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|person|form'] = $field_group;

  return $export;
}

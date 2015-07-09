<?php
/**
 * @file
 * usanetwork_movie.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_movie_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_additional_information|node|movie|form';
  $field_group->group_name = 'group_additional_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'movie';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '2',
    'children' => array(
      0 => 'field_movie_external_links',
      1 => 'field_movie_primary_genre',
      2 => 'field_movie_rating',
      3 => 'field_movie_release_year',
      4 => 'field_movie_secondary_genre',
      5 => 'field_movie_tags',
      6 => 'field_movie_type',
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
  $export['group_additional_information|node|movie|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_cast_crew|node|movie|form';
  $field_group->group_name = 'group_cast_crew';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'movie';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Cast/Crew',
    'weight' => '1',
    'children' => array(
      0 => 'field_movie_credit',
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
  $export['group_cast_crew|node|movie|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_colors|node|movie|form';
  $field_group->group_name = 'group_colors';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'movie';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Movie color',
    'weight' => '3',
    'children' => array(
      0 => 'field_usa_tv_show_color',
      1 => 'field_usa_tv_show_color_second',
      2 => 'field_usa_tv_show_color_tertiary',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Movie color',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-colors field-group-tab',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_colors|node|movie|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_required_information|node|movie|form';
  $field_group->group_name = 'group_required_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'movie';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_movie_cover_media',
      2 => 'field_summary',
      3 => 'title',
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
  $export['group_required_information|node|movie|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_custom_tab|node|movie|form';
  $field_group->group_name = 'group_usa_custom_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'movie';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '4',
    'children' => array(
      0 => 'field_usa_tv_tune_in_date',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-custom-tab field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_custom_tab|node|movie|form'] = $field_group;

  return $export;
}

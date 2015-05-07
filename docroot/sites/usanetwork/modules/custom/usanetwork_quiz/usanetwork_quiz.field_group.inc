<?php
/**
 * @file
 * usanetwork_quiz.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_quiz_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_additional_information|node|quiz|form';
  $field_group->group_name = 'group_additional_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '2',
    'children' => array(
      0 => 'field_quiz_entry_text',
      1 => 'field_quiz_header_image',
      2 => 'field_quiz_repeat_text',
      3 => 'field_quiz_splash_image',
      4 => 'field_usa_catchall_js',
      5 => 'field_usa_css',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-additional-information field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_additional_information|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_basic_information|node|quiz|form';
  $field_group->group_name = 'group_basic_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_quiz_theme',
      2 => 'field_quiz_type',
      3 => 'field_show',
      4 => 'field_usa_tv_show_color',
      5 => 'field_usa_tv_show_hover_color',
      6 => 'title',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-basic-information field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_basic_information|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ms_info|node|quiz|form';
  $field_group->group_name = 'group_ms_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Microsite Info',
    'weight' => '6',
    'children' => array(
      0 => 'field_quiz_thumbnail',
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
  $export['group_ms_info|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_promo_details|node|quiz|form';
  $field_group->group_name = 'group_promo_details';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Promo Details',
    'weight' => '12',
    'children' => array(
      0 => 'field_promo_call_to_action_text',
      1 => 'field_promo_long_description',
      2 => 'field_promo_title',
      3 => 'field_promo_topic',
      4 => 'field_promo_violator_name',
      5 => 'field_call_to_action_type',
      6 => 'field_promo_exclude_from_related',
      7 => 'field_promo_image_override',
      8 => 'field_promo_created_ovts',
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
  $export['group_promo_details|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_quiz_quiestions|node|quiz|form';
  $field_group->group_name = 'group_quiz_quiestions';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Questions',
    'weight' => '3',
    'children' => array(
      0 => 'field_quiz_questions',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-quiz-quiestions field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_quiz_quiestions|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_quiz_result|node|quiz|form';
  $field_group->group_name = 'group_quiz_result';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Results',
    'weight' => '4',
    'children' => array(
      0 => 'field_quiz_calculation',
      1 => 'field_quiz_results',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-quiz-result field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_quiz_result|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_seo|node|quiz|form';
  $field_group->group_name = 'group_seo';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'SEO',
    'weight' => '1',
    'children' => array(
      0 => 'field_usa_og_description',
      1 => 'field_seo_h1',
      2 => 'field_seo_page_title',
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
  $export['group_seo|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|quiz|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
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
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-og-fields field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_og_fields|node|quiz|form'] = $field_group;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_social_meter.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_social_meter_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|file|mpx_video_1|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_1';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '24',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|file|mpx_video_1|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|file|mpx_video_2|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'file';
  $field_group->bundle = 'mpx_video_2';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '24',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|file|mpx_video_2|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|catchall_page|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '10',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|catchall_page|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|media_gallery|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'media_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '11',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|media_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|person|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'person';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '11',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|person|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|post|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'post';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '6',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|post|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|quiz|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'quiz';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '13',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|quiz|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|tv_episode|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '11',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_meter|node|usanetwork_promo|form';
  $field_group->group_name = 'group_social_meter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_promo';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social meter',
    'weight' => '45',
    'children' => array(
      0 => 'field_social_enable',
      1 => 'field_social_hashtag',
      2 => 'field_social_sfs_id',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-social-meter field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_social_meter|node|usanetwork_promo|form'] = $field_group;

  return $export;
}

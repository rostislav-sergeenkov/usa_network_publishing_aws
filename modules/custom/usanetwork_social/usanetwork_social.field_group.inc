<?php
/**
 * @file
 * usanetwork_social.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_social_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_chat_settings|node|tv_show|form';
  $field_group->group_name = 'group_chat_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Chat with Fans Settings',
    'weight' => '45',
    'children' => array(
      0 => 'field_chat_children',
      1 => 'field_chat_childrenof',
      2 => 'field_chat_eql_template',
      3 => 'field_chat_feed',
      4 => 'field_chat_identitymanagerurl',
      5 => 'field_chat_itemsperpage',
      6 => 'field_chat_markers',
      7 => 'field_chat_safehtml',
      8 => 'field_chat_show',
      9 => 'field_chat_sortorder',
      10 => 'field_chat_source',
      11 => 'field_chat_state',
      12 => 'field_chat_submittargeturl',
      13 => 'field_chat_tags',
      14 => 'field_show_chat_page',
      15 => 'field_show_chat_post_comment',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Chat with Fans Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_chat_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_chat|node|tv_show|default';
  $field_group->group_name = 'group_chat';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Chat with Fans',
    'weight' => '5',
    'children' => array(
      0 => 'field_chat_children',
      1 => 'field_chat_childrenof',
      2 => 'field_chat_eql_template',
      3 => 'field_chat_feed',
      4 => 'field_chat_identitymanagerurl',
      5 => 'field_chat_itemsperpage',
      6 => 'field_chat_markers',
      7 => 'field_chat_safehtml',
      8 => 'field_chat_show',
      9 => 'field_chat_sortorder',
      10 => 'field_chat_source',
      11 => 'field_chat_state',
      12 => 'field_chat_submittargeturl',
      13 => 'field_chat_tags',
      14 => 'field_show_chat_page',
      15 => 'field_show_chat_post_comment',
    ),
    'format_type' => 'hidden',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
      ),
    ),
  );
  $export['group_chat|node|tv_show|default'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_newsletter|node|tv_show|form';
  $field_group->group_name = 'group_newsletter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Newsletter Settings',
    'weight' => '43',
    'children' => array(
      0 => 'field_usa_lyris_listid',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Newsletter Settings',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_newsletter|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_social_information|node|tv_show|form';
  $field_group->group_name = 'group_social_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Social Information',
    'weight' => '2',
    'children' => array(
      0 => 'group_trend',
      1 => 'group_chat_settings',
      2 => 'group_newsletter',
      3 => 'group_twitter_settings',
      4 => 'group_usa_show_follow',
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
  $export['group_social_information|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_trend|node|tv_show|form';
  $field_group->group_name = 'group_trend';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Trending Settings',
    'weight' => '44',
    'children' => array(
      0 => 'field_show_trending',
      1 => 'field_trend_base_url',
      2 => 'field_trend_url_params',
      3 => 'field_trend_show_path',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Trending Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_trend|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_twitter_settings|node|tv_show|form';
  $field_group->group_name = 'group_twitter_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Twitter Settings',
    'weight' => '46',
    'children' => array(
      0 => 'field_show_twitter_page',
      1 => 'field_twitter_children',
      2 => 'field_twitter_childrenof',
      3 => 'field_twitter_eql_template',
      4 => 'field_twitter_feed',
      5 => 'field_twitter_itemsperpage',
      6 => 'field_twitter_markers',
      7 => 'field_twitter_safehtml',
      8 => 'field_twitter_show',
      9 => 'field_twitter_sortorder',
      10 => 'field_twitter_source',
      11 => 'field_twitter_state',
      12 => 'field_twitter_tags',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Twitter Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_twitter_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_twitter|node|tv_show|default';
  $field_group->group_name = 'group_twitter';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Twitter',
    'weight' => '6',
    'children' => array(
      0 => 'field_show_twitter_page',
      1 => 'field_twitter_children',
      2 => 'field_twitter_childrenof',
      3 => 'field_twitter_eql_template',
      4 => 'field_twitter_feed',
      5 => 'field_twitter_itemsperpage',
      6 => 'field_twitter_markers',
      7 => 'field_twitter_safehtml',
      8 => 'field_twitter_show',
      9 => 'field_twitter_sortorder',
      10 => 'field_twitter_source',
      11 => 'field_twitter_state',
      12 => 'field_twitter_tags',
    ),
    'format_type' => 'hidden',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
      ),
    ),
  );
  $export['group_twitter|node|tv_show|default'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_show_follow|node|tv_show|form';
  $field_group->group_name = 'group_usa_show_follow';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Follow block',
    'weight' => '42',
    'children' => array(
      0 => 'field_social_logo',
      1 => 'field_usa_link_facebook',
      2 => 'field_usa_link_pinterest',
      3 => 'field_usa_link_tumblr',
      4 => 'field_usa_link_twitter',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Follow block',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_usa_show_follow|node|tv_show|form'] = $field_group;

  return $export;
}

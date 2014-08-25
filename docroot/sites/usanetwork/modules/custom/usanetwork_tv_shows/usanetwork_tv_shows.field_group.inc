<?php
/**
 * @file
 * usanetwork_tv_shows.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_tv_shows_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_additional_information|node|tv_show|form';
  $field_group->group_name = 'group_additional_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '3',
    'children' => array(
      0 => 'field_additional_genres',
      1 => 'field_content_tags',
      2 => 'field_primary_genre',
      3 => 'field_tv_external_links',
      4 => 'field_tv_show_marquee',
      5 => 'field_floodlight_tag',
      6 => 'group_floodlight_tag',
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
  $export['group_additional_information|node|tv_show|form'] = $field_group;

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
    'weight' => '46',
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
  $field_group->identifier = 'group_chatter_to_tv_settings|node|tv_show|form';
  $field_group->group_name = 'group_chatter_to_tv_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Chatter to TV Settings',
    'weight' => '47',
    'children' => array(
      0 => 'field_chat_to_tv_checkbox_text',
      1 => 'field_chat_to_tv_comment_prefix',
      2 => 'field_chat_to_tv_description',
      3 => 'field_chat_to_tv_echo_marker',
      4 => 'field_chat_to_tv_end_time',
      5 => 'field_chat_to_tv_legal_copy',
      6 => 'field_chat_to_tv_start_time',
      7 => 'field_chat_to_tv_title',
      8 => 'field_show_chatter_to_tv',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Chatter to TV Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_chatter_to_tv_settings|node|tv_show|form'] = $field_group;

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
  $field_group->identifier = 'group_ep_additional|node|tv_episode|form';
  $field_group->group_name = 'group_ep_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '2',
    'children' => array(
      0 => 'field_content_tags',
      1 => 'field_original_air_date',
      2 => 'field_tv_episode_type',
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
  $export['group_ep_additional|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ep_cast_crew|node|tv_episode|form';
  $field_group->group_name = 'group_ep_cast_crew';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Cast/Crew',
    'weight' => '3',
    'children' => array(
      0 => 'field_episode_credit',
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
  $export['group_ep_cast_crew|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_episode_basic|node|tv_episode|form';
  $field_group->group_name = 'group_episode_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_episode_number',
      2 => 'field_season',
      3 => 'field_show',
      4 => 'field_tv_cover_media',
      5 => 'title',
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
  $export['group_episode_basic|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_episode_ideamelt|node|tv_episode|form';
  $field_group->group_name = 'group_episode_ideamelt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA IdeaMelt',
    'weight' => '5',
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
  $export['group_episode_ideamelt|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_fb_settings|node|tv_show|form';
  $field_group->group_name = 'group_fb_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Facebook Settings',
    'weight' => '50',
    'children' => array(
      0 => 'field_fb_children',
      1 => 'field_fb_childrenof',
      2 => 'field_fb_eql_template',
      3 => 'field_fb_feed',
      4 => 'field_fb_itemsperpage',
      5 => 'field_fb_markers',
      6 => 'field_fb_safehtml',
      7 => 'field_fb_show',
      8 => 'field_fb_sortorder',
      9 => 'field_fb_source',
      10 => 'field_fb_state',
      11 => 'field_fb_tags',
      12 => 'field_show_fb_page',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Facebook Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_fb_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_floodlight_tag|node|tv_show|form';
  $field_group->group_name = 'group_floodlight_tag';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_additional_information';
  $field_group->data = array(
    'label' => 'Floodlight Tag',
    'weight' => '26',
    'children' => array(
      0 => 'field_floodlight_type',
      1 => 'field_floodlight_category',
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
  $export['group_floodlight_tag|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_getglue_settings|node|tv_show|form';
  $field_group->group_name = 'group_getglue_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'GetGlue Settings',
    'weight' => '52',
    'children' => array(
      0 => 'field_getglue_show',
      1 => 'field_getglue_sticker_name',
      2 => 'field_show_getglue',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'GetGlue Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_getglue_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_homepage_twitter_settings|node|tv_show|form';
  $field_group->group_name = 'group_homepage_twitter_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Show Homepage Twitter Settings',
    'weight' => '49',
    'children' => array(
      0 => 'field_homepage_show_twitter_page',
      1 => 'field_homepage_twitter_children',
      2 => 'field_homepage_twitter_childrnof',
      3 => 'field_homepage_twitter_eql_templ',
      4 => 'field_homepage_twitter_feed',
      5 => 'field_homepage_twitter_itemsperp',
      6 => 'field_homepage_twitter_markers',
      7 => 'field_homepage_twitter_safehtml',
      8 => 'field_homepage_twitter_show',
      9 => 'field_homepage_twitter_sortorder',
      10 => 'field_homepage_twitter_source',
      11 => 'field_homepage_twitter_state',
      12 => 'field_homepage_twitter_tags',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Show Homepage Twitter Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_homepage_twitter_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_instagram_settings|node|tv_show|form';
  $field_group->group_name = 'group_instagram_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Instagram Settings',
    'weight' => '53',
    'children' => array(
      0 => 'field_instagram_show_id',
      1 => 'field_show_instagram_page',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Instagram Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_instagram_settings|node|tv_show|form'] = $field_group;

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
      1 => 'field_show_news_letter',
      2 => 'field_shows_property',
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
  $field_group->identifier = 'group_pinterest_settings|node|tv_show|form';
  $field_group->group_name = 'group_pinterest_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Pinterest Settings',
    'weight' => '51',
    'children' => array(
      0 => 'field_pinterest_url',
      1 => 'field_show_pinterest_page',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Pinterest Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_pinterest_settings|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_required_information|node|tv_show|form';
  $field_group->group_name = 'group_required_information';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_banner',
      2 => 'field_logo',
      3 => 'field_tv_cover_media',
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
  $export['group_required_information|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_season_additional|node|tv_season|form';
  $field_group->group_name = 'group_season_additional';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_season';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Additional Information',
    'weight' => '1',
    'children' => array(
      0 => 'field_original_air_date',
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
  $export['group_season_additional|node|tv_season|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_season_basic|node|tv_season|form';
  $field_group->group_name = 'group_season_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_season';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'body',
      1 => 'field_season_id',
      2 => 'field_show',
      3 => 'field_tv_cover_media',
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
  $export['group_season_basic|node|tv_season|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_aspots|node|tv_show|form';
  $field_group->group_name = 'group_show_aspots';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_custom_tab';
  $field_group->data = array(
    'label' => 'A-SPOTS',
    'weight' => '88',
    'children' => array(
      0 => 'field_usa_tv_a_spot',
      1 => 'group_slide_settings',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'A-SPOTS',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'No more than 3 A-spots are recommended for this region',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $export['group_show_aspots|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_show_menu|node|tv_show|form';
  $field_group->group_name = 'group_show_menu';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Show Menu',
    'weight' => '1',
    'children' => array(
      0 => 'field_show_links',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Show Menu',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => 'It is recommended that PARENT (main link) items be text only with no url added',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_show_menu|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_slide_settings|node|tv_show|form';
  $field_group->group_name = 'group_slide_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_show_aspots';
  $field_group->data = array(
    'label' => 'slideshow options',
    'weight' => '70',
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
  $export['group_slide_settings|node|tv_show|form'] = $field_group;

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
      0 => 'field_hide_cast_carousel',
      1 => 'field_hide_social_follow',
      2 => 'group_chat_settings',
      3 => 'group_chatter_to_tv_settings',
      4 => 'group_fb_settings',
      5 => 'group_getglue_settings',
      6 => 'group_homepage_twitter_settings',
      7 => 'group_instagram_settings',
      8 => 'group_newsletter',
      9 => 'group_pinterest_settings',
      10 => 'group_sync_settings',
      11 => 'group_trend',
      12 => 'group_twitter_settings',
      13 => 'group_usa_show_follow',
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
  $field_group->identifier = 'group_sync_settings|node|tv_show|form';
  $field_group->group_name = 'group_sync_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_social_information';
  $field_group->data = array(
    'label' => 'Sync Settings',
    'weight' => '45',
    'children' => array(
      0 => 'field_show_sync',
      1 => 'field_sync_desktop_url',
      2 => 'field_sync_phone_url',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Sync Settings',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsed',
    ),
  );
  $export['group_sync_settings|node|tv_show|form'] = $field_group;

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
    'label' => 'Social Buzz Settings',
    'weight' => '44',
    'children' => array(
      0 => 'field_show_trending',
      1 => 'field_trend_base_url',
      2 => 'field_trend_show_path',
      3 => 'field_trend_url_params',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Social Buzz Settings',
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
  $field_group->identifier = 'group_tv_episode_nitro|node|tv_episode|form';
  $field_group->group_name = 'group_tv_episode_nitro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Nitro',
    'weight' => '1',
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
  $export['group_tv_episode_nitro|node|tv_episode|form'] = $field_group;

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
    'weight' => '48',
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
  $field_group->identifier = 'group_usa_custom_tab|node|tv_show|form';
  $field_group->group_name = 'group_usa_custom_tab';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA Custom',
    'weight' => '4',
    'children' => array(
      0 => 'field_display_title',
      1 => 'field_usa_tv_on_now',
      2 => 'field_usa_tv_tune_in_date',
      3 => 'field_pathauto_alias',
      4 => 'field_usa_tv_show_color',
      5 => 'field_facebook_tracking_enabled',
      6 => 'group_show_aspots',
      7 => 'group_usa_tv_promo_vids',
      8 => 'group_usa_tv_promo',
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
  $export['group_usa_custom_tab|node|tv_show|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|tv_episode|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_episode';
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
        'description' => 'These fields are used in search index, search results, standard and Open Graph meta tags',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_og_fields|node|tv_episode|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_og_fields|node|tv_show|form';
  $field_group->group_name = 'group_usa_og_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'tv_show';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'USA OG fields',
    'weight' => '6',
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
  $export['group_usa_og_fields|node|tv_show|form'] = $field_group;

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

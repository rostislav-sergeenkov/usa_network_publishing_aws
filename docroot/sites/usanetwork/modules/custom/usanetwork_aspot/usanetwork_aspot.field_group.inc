<?php
/**
 * @file
 * usanetwork_aspot.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_aspot_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_animated_intro|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_animated_intro';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Animated Intro',
    'weight' => '3',
    'children' => array(
      0 => 'field_animated_a_spot',
      1 => 'field_mp4_video_url',
      2 => 'field_webm_video_url',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Animated Intro',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_animated_intro|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_aspot_basic|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_aspot_basic';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Basic Information',
    'weight' => '0',
    'children' => array(
      0 => 'field_show',
      1 => 'field_usa_aspot_link',
      2 => 'field_target',
      3 => 'field_aspot_linked_content',
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
  $export['group_aspot_basic|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_aspot_fields|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_aspot_fields';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'A-spot text rows',
    'weight' => '4',
    'children' => array(
      0 => 'field_call_to_action_type',
      1 => 'field_usa_aspot_txt1',
      2 => 'field_usa_aspot_txt2',
      3 => 'field_usa_aspot_txt3',
      4 => 'field_usa_aspot_txt4',
      5 => 'field_usa_text_color',
      6 => 'field_mobile_text_line_2',
      7 => 'field_text_line_1_font_size',
      8 => 'field_text_line_1_image',
      9 => 'field_text_line_2_font_size',
      10 => 'field_episodic_1_color',
      11 => 'field_episodic_1_fontsize',
      12 => 'field_episodic_1_image',
      13 => 'field_episodic_1_mobile_fontsize',
      14 => 'field_episodic_1_tablan_fontsize',
      15 => 'field_episodic_1_tabpor_fontsize',
      16 => 'field_episodic_1_title',
      17 => 'field_episodic_2_color',
      18 => 'field_episodic_2_fontsize',
      19 => 'field_episodic_2_mobile_fontsize',
      20 => 'field_episodic_2_tablan_fontsize',
      21 => 'field_episodic_2_tabpor_fontsize',
      22 => 'field_episodic_2_title',
      23 => 'field_episodic_3_color',
      24 => 'field_episodic_3_fontsize',
      25 => 'field_episodic_3_mobile_fontsize',
      26 => 'field_episodic_3_tablan_fontsize',
      27 => 'field_episodic_3_tabpor_fontsize',
      28 => 'field_episodic_3_title',
      29 => 'field_is_episodic',
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
  $export['group_usa_aspot_fields|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_aspot_ui_desktop|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_aspot_ui_desktop';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_aspot_ui';
  $field_group->data = array(
    'label' => 'Desktop',
    'weight' => '56',
    'children' => array(
      0 => 'field_aspot_preview_bg_offset',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-aspot-ui-desktop field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_aspot_ui_desktop|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_aspot_ui_mobile|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_aspot_ui_mobile';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_usa_aspot_ui';
  $field_group->data = array(
    'label' => 'Mobile',
    'weight' => '55',
    'children' => array(
      0 => 'field_aspot_preview_mbg_offset',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-aspot-ui-mobile field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_aspot_ui_mobile|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_aspot_ui|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_aspot_ui';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Homepage A-spot UI',
    'weight' => '5',
    'children' => array(
      0 => 'field_aspot_enabled_gi',
      1 => 'field_aspot_gi_title',
      2 => 'field_aspot_gi_title_prefix',
      3 => 'field_aspot_preview_bg_offset',
      4 => 'field_aspot_gi_draggable_data',
      5 => 'field_aspot_gi_cta',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Homepage A-spot UI',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_aspot_ui|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_media|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Homepage A-spot media',
    'weight' => '1',
    'children' => array(
      0 => 'field_usa_aspot_desktop',
      1 => 'field_usa_aspot_mobile',
      2 => 'field_usa_aspot_tablet_portrait',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Homepage A-spot media',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_usa_media|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_tv_aspot_ui|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_tv_aspot_ui';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'TV show A-spot UI',
    'weight' => '6',
    'children' => array(
      0 => 'field_aspot_preview_tbg_offset',
      1 => 'field_aspot_enabled_tgi',
      2 => 'field_aspot_tgi_title_prefix',
      3 => 'field_aspot_tgi_title',
      4 => 'field_aspot_tgi_draggable_data',
      5 => 'field_aspot_tgi_cta',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-tv-aspot-ui field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_tv_aspot_ui|node|usanetwork_aspot|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_usa_tv_media|node|usanetwork_aspot|form';
  $field_group->group_name = 'group_usa_tv_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'usanetwork_aspot';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'TV show A-spot media',
    'weight' => '2',
    'children' => array(
      0 => 'field_usa_tv_aspot_desktop',
      1 => 'field_usa_tv_aspot_mobile',
      2 => 'field_usa_tv_aspot_tablet_p',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-usa-tv-media field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_usa_tv_media|node|usanetwork_aspot|form'] = $field_group;

  return $export;
}

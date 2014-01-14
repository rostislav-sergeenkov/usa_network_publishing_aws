<?php
/**
 * @file
 * usanetwork_search.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_search_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "apachesolr" && $api == "apachesolr_environments") {
    return array("version" => "1");
  }
  if ($module == "apachesolr_search" && $api == "apachesolr_search_defaults") {
    return array("version" => "3");
  }
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_field_instances_alter().
 */
function usanetwork_search_field_default_field_instances_alter(&$data) {
  if (isset($data['node-catchall_page-field_automatic_refresh'])) {
    $data['node-catchall_page-field_automatic_refresh']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 12,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_enable_nitro'])) {
    $data['node-catchall_page-field_enable_nitro']['display']['search_index']['weight'] = 14; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_ideamelt_action_type'])) {
    $data['node-catchall_page-field_ideamelt_action_type']['display']['search_index']['weight'] = 15; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_ideamelt_object_type'])) {
    $data['node-catchall_page-field_ideamelt_object_type']['display']['search_index']['weight'] = 17; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_nitro_action_name'])) {
    $data['node-catchall_page-field_nitro_action_name']['display']['search_index']['weight'] = 18; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_refresh_time'])) {
    $data['node-catchall_page-field_refresh_time']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 5,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_send_ideamelt_notification'])) {
    $data['node-catchall_page-field_send_ideamelt_notification']['display']['search_index']['weight'] = 13; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_show'])) {
    $data['node-catchall_page-field_show']['display']['search_index']['weight'] = 0; /* WAS: 6 */
  }
  if (isset($data['node-catchall_page-field_usa_catchall_fixedwidth'])) {
    $data['node-catchall_page-field_usa_catchall_fixedwidth']['display']['search_index']['weight'] = 22; /* WAS: 4 */
  }
  if (isset($data['node-catchall_page-field_usa_catchall_html'])) {
    $data['node-catchall_page-field_usa_catchall_html']['display']['search_index']['weight'] = 21; /* WAS: 3 */
  }
  if (isset($data['node-catchall_page-field_usa_catchall_js'])) {
    $data['node-catchall_page-field_usa_catchall_js']['display']['search_index']['weight'] = 20; /* WAS: 2 */
  }
  if (isset($data['node-catchall_page-field_usa_catchall_media'])) {
    $data['node-catchall_page-field_usa_catchall_media']['display']['search_index']['weight'] = 23; /* WAS: 7 */
  }
  if (isset($data['node-catchall_page-field_usa_css'])) {
    $data['node-catchall_page-field_usa_css']['display']['search_index']['weight'] = 19; /* WAS: 1 */
  }
  if (isset($data['node-catchall_page-field_usa_og_description'])) {
    $data['node-catchall_page-field_usa_og_description']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-catchall_page-field_usa_og_description']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-catchall_page-field_usa_og_description']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
    $data['node-catchall_page-field_usa_og_description']['display']['search_index']['weight'] = 1; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_usa_og_image'])) {
    $data['node-catchall_page-field_usa_og_image']['display']['search_index']['weight'] = 16; /* WAS: 0 */
  }
  if (isset($data['node-catchall_page-field_usa_pc_afterall_content'])) {
    $data['node-catchall_page-field_usa_pc_afterall_content']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 4,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_css'])) {
    $data['node-catchall_page-field_usa_pc_css']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 3,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_css_inline'])) {
    $data['node-catchall_page-field_usa_pc_css_inline']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 2,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_file_folder'])) {
    $data['node-catchall_page-field_usa_pc_file_folder']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 6,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_files'])) {
    $data['node-catchall_page-field_usa_pc_files']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 7,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_images'])) {
    $data['node-catchall_page-field_usa_pc_images']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 11,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_javascript'])) {
    $data['node-catchall_page-field_usa_pc_javascript']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 10,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_javascript_inline'])) {
    $data['node-catchall_page-field_usa_pc_javascript_inline']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 9,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_overall_content'])) {
    $data['node-catchall_page-field_usa_pc_overall_content']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 8,
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_summary'])) {
    $data['node-media_gallery-field_summary']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-media_gallery-field_usa_og_description'])) {
    $data['node-media_gallery-field_usa_og_description']['display']['search_index']['type'] = 'hidden'; /* WAS: 'text_plain' */
    unset($data['node-media_gallery-field_usa_og_description']['display']['search_index']['module']);
  }
  if (isset($data['node-person-body'])) {
    $data['node-person-body']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-person-body']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-person-body']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
    $data['node-person-body']['display']['search_index']['weight'] = 2; /* WAS: 0 */
  }
  if (isset($data['node-person-field_different_legal_name'])) {
    $data['node-person-field_different_legal_name']['display']['search_index']['weight'] = 16; /* WAS: 0 */
  }
  if (isset($data['node-person-field_enable_nitro'])) {
    $data['node-person-field_enable_nitro']['display']['search_index']['weight'] = 6; /* WAS: 0 */
  }
  if (isset($data['node-person-field_hide_cast_carousel'])) {
    $data['node-person-field_hide_cast_carousel']['display']['search_index']['weight'] = 9; /* WAS: 0 */
  }
  if (isset($data['node-person-field_hide_social_follow'])) {
    $data['node-person-field_hide_social_follow']['display']['search_index']['weight'] = 8; /* WAS: 0 */
  }
  if (isset($data['node-person-field_legal_name_first_name'])) {
    $data['node-person-field_legal_name_first_name']['display']['search_index']['weight'] = 14; /* WAS: 0 */
  }
  if (isset($data['node-person-field_legal_name_last_name'])) {
    $data['node-person-field_legal_name_last_name']['display']['search_index']['weight'] = 19; /* WAS: 0 */
  }
  if (isset($data['node-person-field_legal_name_middle_name'])) {
    $data['node-person-field_legal_name_middle_name']['display']['search_index']['weight'] = 17; /* WAS: 0 */
  }
  if (isset($data['node-person-field_legal_name_prefix'])) {
    $data['node-person-field_legal_name_prefix']['display']['search_index']['weight'] = 18; /* WAS: 0 */
  }
  if (isset($data['node-person-field_legal_name_suffix'])) {
    $data['node-person-field_legal_name_suffix']['display']['search_index']['weight'] = 23; /* WAS: 0 */
  }
  if (isset($data['node-person-field_nitro_action_name'])) {
    $data['node-person-field_nitro_action_name']['display']['search_index']['weight'] = 7; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_birth_date'])) {
    $data['node-person-field_person_birth_date']['display']['search_index']['weight'] = 22; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_birth_location'])) {
    $data['node-person-field_person_birth_location']['display']['search_index']['weight'] = 21; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_cover_photo'])) {
    $data['node-person-field_person_cover_photo']['display']['search_index']['weight'] = 20; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_external_links'])) {
    $data['node-person-field_person_external_links']['display']['search_index']['weight'] = 15; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_first_name'])) {
    $data['node-person-field_person_first_name']['display']['search_index']['weight'] = 12; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_last_name'])) {
    $data['node-person-field_person_last_name']['display']['search_index']['weight'] = 5; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_middle_name'])) {
    $data['node-person-field_person_middle_name']['display']['search_index']['weight'] = 13; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_prefix'])) {
    $data['node-person-field_person_prefix']['display']['search_index']['weight'] = 4; /* WAS: 0 */
  }
  if (isset($data['node-person-field_person_suffix'])) {
    $data['node-person-field_person_suffix']['display']['search_index']['weight'] = 3; /* WAS: 0 */
  }
  if (isset($data['node-person-field_role'])) {
    $data['node-person-field_role']['display']['search_index']['weight'] = 27; /* WAS: 23 */
  }
  if (isset($data['node-person-field_show'])) {
    $data['node-person-field_show']['display']['search_index']['weight'] = 1; /* WAS: 6 */
  }
  if (isset($data['node-person-field_usa_actor_name'])) {
    $data['node-person-field_usa_actor_name']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'text_default' */
    $data['node-person-field_usa_actor_name']['display']['search_index']['weight'] = 0; /* WAS: 2 */
  }
  if (isset($data['node-person-field_usa_character_thumb'])) {
    $data['node-person-field_usa_character_thumb']['display']['search_index']['weight'] = 24; /* WAS: 20 */
  }
  if (isset($data['node-person-field_usa_link_facebook'])) {
    $data['node-person-field_usa_link_facebook']['display']['search_index']['weight'] = 25; /* WAS: 21 */
  }
  if (isset($data['node-person-field_usa_link_pinterest'])) {
    $data['node-person-field_usa_link_pinterest']['display']['search_index']['weight'] = 28; /* WAS: 24 */
  }
  if (isset($data['node-person-field_usa_link_tumblr'])) {
    $data['node-person-field_usa_link_tumblr']['display']['search_index']['weight'] = 29; /* WAS: 25 */
  }
  if (isset($data['node-person-field_usa_link_twitter'])) {
    $data['node-person-field_usa_link_twitter']['display']['search_index']['weight'] = 26; /* WAS: 22 */
  }
  if (isset($data['node-person-field_usa_og_description'])) {
    $data['node-person-field_usa_og_description']['display']['search_index']['weight'] = 11; /* WAS: 0 */
  }
  if (isset($data['node-person-field_usa_og_image'])) {
    $data['node-person-field_usa_og_image']['display']['search_index']['weight'] = 10; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-body'])) {
    $data['node-tv_episode-body']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-tv_episode-body']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-tv_episode-body']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
    $data['node-tv_episode-body']['display']['search_index']['weight'] = 3; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_content_tags'])) {
    $data['node-tv_episode-field_content_tags']['display']['search_index']['weight'] = 13; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_enable_nitro'])) {
    $data['node-tv_episode-field_enable_nitro']['display']['search_index']['weight'] = 5; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_episode_credit'])) {
    $data['node-tv_episode-field_episode_credit']['display']['search_index']['weight'] = 12; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_episode_number'])) {
    $data['node-tv_episode-field_episode_number']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-tv_episode-field_episode_number']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
    $data['node-tv_episode-field_episode_number']['display']['search_index']['weight'] = 2; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_ideamelt_action_type'])) {
    $data['node-tv_episode-field_ideamelt_action_type']['display']['search_index']['weight'] = 9; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_nitro_action_name'])) {
    $data['node-tv_episode-field_nitro_action_name']['display']['search_index']['weight'] = 4; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_original_air_date'])) {
    $data['node-tv_episode-field_original_air_date']['display']['search_index']['weight'] = 14; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_season'])) {
    $data['node-tv_episode-field_season']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-tv_episode-field_season']['display']['search_index']['module'] = 'entityreference'; /* WAS: '' */
    $data['node-tv_episode-field_season']['display']['search_index']['settings']['link'] = FALSE; /* WAS: '' */
    $data['node-tv_episode-field_season']['display']['search_index']['type'] = 'entityreference_label'; /* WAS: 'hidden' */
    $data['node-tv_episode-field_season']['display']['search_index']['weight'] = 1; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_send_ideamelt_notification'])) {
    $data['node-tv_episode-field_send_ideamelt_notification']['display']['search_index']['weight'] = 8; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_show'])) {
    $data['node-tv_episode-field_show']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-tv_episode-field_show']['display']['search_index']['module'] = 'entityreference'; /* WAS: '' */
    $data['node-tv_episode-field_show']['display']['search_index']['settings']['link'] = FALSE; /* WAS: '' */
    $data['node-tv_episode-field_show']['display']['search_index']['type'] = 'entityreference_label'; /* WAS: 'hidden' */
  }
  if (isset($data['node-tv_episode-field_tv_cover_media'])) {
    $data['node-tv_episode-field_tv_cover_media']['display']['search_index']['weight'] = 11; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_tv_episode_type'])) {
    $data['node-tv_episode-field_tv_episode_type']['display']['search_index']['weight'] = 10; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_usa_og_description'])) {
    $data['node-tv_episode-field_usa_og_description']['display']['search_index']['weight'] = 6; /* WAS: 0 */
  }
  if (isset($data['node-tv_episode-field_usa_og_image'])) {
    $data['node-tv_episode-field_usa_og_image']['display']['search_index']['weight'] = 7; /* WAS: 0 */
  }
  if (isset($data['node-tv_show-body'])) {
    $data['node-tv_show-body']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-tv_show-body']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-tv_show-body']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_checkbox_text'])) {
    $data['node-tv_show-field_chat_to_tv_checkbox_text']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_comment_prefix'])) {
    $data['node-tv_show-field_chat_to_tv_comment_prefix']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_description'])) {
    $data['node-tv_show-field_chat_to_tv_description']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_echo_marker'])) {
    $data['node-tv_show-field_chat_to_tv_echo_marker']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_end_time'])) {
    $data['node-tv_show-field_chat_to_tv_end_time']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_legal_copy'])) {
    $data['node-tv_show-field_chat_to_tv_legal_copy']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_start_time'])) {
    $data['node-tv_show-field_chat_to_tv_start_time']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_chat_to_tv_title'])) {
    $data['node-tv_show-field_chat_to_tv_title']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_display_title'])) {
    $data['node-tv_show-field_display_title']['display']['search_index']['type'] = 'hidden'; /* WAS: 'text_plain' */
    unset($data['node-tv_show-field_display_title']['display']['search_index']['module']);
  }
  if (isset($data['node-tv_show-field_fb_children'])) {
    $data['node-tv_show-field_fb_children']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_childrenof'])) {
    $data['node-tv_show-field_fb_childrenof']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_eql_template'])) {
    $data['node-tv_show-field_fb_eql_template']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_feed'])) {
    $data['node-tv_show-field_fb_feed']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_itemsperpage'])) {
    $data['node-tv_show-field_fb_itemsperpage']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_markers'])) {
    $data['node-tv_show-field_fb_markers']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_safehtml'])) {
    $data['node-tv_show-field_fb_safehtml']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_show'])) {
    $data['node-tv_show-field_fb_show']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_sortorder'])) {
    $data['node-tv_show-field_fb_sortorder']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_source'])) {
    $data['node-tv_show-field_fb_source']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_state'])) {
    $data['node-tv_show-field_fb_state']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_fb_tags'])) {
    $data['node-tv_show-field_fb_tags']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_show_twitter_page'])) {
    $data['node-tv_show-field_homepage_show_twitter_page']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_children'])) {
    $data['node-tv_show-field_homepage_twitter_children']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_childrnof'])) {
    $data['node-tv_show-field_homepage_twitter_childrnof']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_eql_templ'])) {
    $data['node-tv_show-field_homepage_twitter_eql_templ']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_feed'])) {
    $data['node-tv_show-field_homepage_twitter_feed']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_itemsperp'])) {
    $data['node-tv_show-field_homepage_twitter_itemsperp']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_markers'])) {
    $data['node-tv_show-field_homepage_twitter_markers']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_safehtml'])) {
    $data['node-tv_show-field_homepage_twitter_safehtml']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_show'])) {
    $data['node-tv_show-field_homepage_twitter_show']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_sortorder'])) {
    $data['node-tv_show-field_homepage_twitter_sortorder']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_source'])) {
    $data['node-tv_show-field_homepage_twitter_source']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_state'])) {
    $data['node-tv_show-field_homepage_twitter_state']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_homepage_twitter_tags'])) {
    $data['node-tv_show-field_homepage_twitter_tags']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_instagram_show_id'])) {
    $data['node-tv_show-field_instagram_show_id']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_pinterest_url'])) {
    $data['node-tv_show-field_pinterest_url']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_show_chatter_to_tv'])) {
    $data['node-tv_show-field_show_chatter_to_tv']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_show_fb_page'])) {
    $data['node-tv_show-field_show_fb_page']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_show_instagram_page'])) {
    $data['node-tv_show-field_show_instagram_page']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_show_news_letter'])) {
    $data['node-tv_show-field_show_news_letter']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_show_pinterest_page'])) {
    $data['node-tv_show-field_show_pinterest_page']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_shows_property'])) {
    $data['node-tv_show-field_shows_property']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_large'])) {
    $data['node-tv_show-field_usa_tv_promo_large']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_rows'])) {
    $data['node-tv_show-field_usa_tv_promo_rows']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_vids_label'])) {
    $data['node-tv_show-field_usa_tv_promo_vids_label']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_show_color'])) {
    $data['node-tv_show-field_usa_tv_show_color']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_tune_in_date'])) {
    $data['node-tv_show-field_usa_tv_tune_in_date']['display']['search_index']['type'] = 'hidden'; /* WAS: 'text_plain' */
    unset($data['node-tv_show-field_usa_tv_tune_in_date']['display']['search_index']['module']);
  }
  if (isset($data['node-usa_tve_video-body'])) {
    $data['node-usa_tve_video-body']['display']['search_index']['weight'] = 1; /* WAS: 0 */
  }
  if (isset($data['node-usa_tve_video-field_episode_number'])) {
    $data['node-usa_tve_video-field_episode_number']['display']['search_index']['weight'] = 7; /* WAS: 6 */
  }
  if (isset($data['node-usa_tve_video-field_full_episode'])) {
    $data['node-usa_tve_video-field_full_episode']['display']['search_index']['weight'] = 12; /* WAS: 13 */
  }
  if (isset($data['node-usa_tve_video-field_publish_date'])) {
    $data['node-usa_tve_video-field_publish_date']['display']['search_index']['weight'] = 11; /* WAS: 12 */
  }
  if (isset($data['node-usa_tve_video-field_rating'])) {
    $data['node-usa_tve_video-field_rating']['display']['search_index']['weight'] = 9; /* WAS: 10 */
  }
  if (isset($data['node-usa_tve_video-field_season_id'])) {
    $data['node-usa_tve_video-field_season_id']['display']['search_index']['weight'] = 8; /* WAS: 7 */
  }
  if (isset($data['node-usa_tve_video-field_show'])) {
    $data['node-usa_tve_video-field_show']['display']['search_index']['weight'] = 0; /* WAS: 1 */
  }
  if (isset($data['node-usa_tve_video-field_usa_video_terms'])) {
    $data['node-usa_tve_video-field_usa_video_terms']['display']['search_index']['weight'] = 10; /* WAS: 11 */
  }
  if (isset($data['node-usa_tve_video-field_video_guid'])) {
    $data['node-usa_tve_video-field_video_guid']['display']['search_index']['weight'] = 3; /* WAS: 2 */
  }
  if (isset($data['node-usa_tve_video-field_video_pid'])) {
    $data['node-usa_tve_video-field_video_pid']['display']['search_index']['weight'] = 4; /* WAS: 3 */
  }
  if (isset($data['node-usa_video-body'])) {
    $data['node-usa_video-body']['display']['search_index']['weight'] = 1; /* WAS: 0 */
  }
  if (isset($data['node-usa_video-field_episode_number'])) {
    $data['node-usa_video-field_episode_number']['display']['search_index']['weight'] = 7; /* WAS: 6 */
  }
  if (isset($data['node-usa_video-field_season_id'])) {
    $data['node-usa_video-field_season_id']['display']['search_index']['weight'] = 8; /* WAS: 7 */
  }
  if (isset($data['node-usa_video-field_sent_ideamelt_notification'])) {
    $data['node-usa_video-field_sent_ideamelt_notification']['display']['search_index']['weight'] = 2; /* WAS: 0 */
  }
  if (isset($data['node-usa_video-field_show'])) {
    $data['node-usa_video-field_show']['display']['search_index']['weight'] = 0; /* WAS: 1 */
  }
  if (isset($data['node-usa_video-field_video_guid'])) {
    $data['node-usa_video-field_video_guid']['display']['search_index']['weight'] = 5; /* WAS: 4 */
  }
  if (isset($data['node-usa_video-field_video_pid'])) {
    $data['node-usa_video-field_video_pid']['display']['search_index']['weight'] = 4; /* WAS: 3 */
  }
  if (isset($data['node-usa_video-field_video_release_url'])) {
    $data['node-usa_video-field_video_release_url']['display']['search_index']['weight'] = 3; /* WAS: 2 */
  }
  if (isset($data['node-usa_video-field_video_thumbnail'])) {
    $data['node-usa_video-field_video_thumbnail']['display']['search_index']['weight'] = 6; /* WAS: 5 */
  }
  if (isset($data['node-usanetwork_static_page-body'])) {
    $data['node-usanetwork_static_page-body']['display']['search_index']['type'] = 'hidden'; /* WAS: 'text_plain' */
    $data['node-usanetwork_static_page-body']['display']['search_index']['weight'] = 2; /* WAS: 0 */
    unset($data['node-usanetwork_static_page-body']['display']['search_index']['module']);
  }
  if (isset($data['node-usanetwork_static_page-field_ideamelt_action_type'])) {
    $data['node-usanetwork_static_page-field_ideamelt_action_type']['display']['search_index']['weight'] = 5; /* WAS: 0 */
  }
  if (isset($data['node-usanetwork_static_page-field_ideamelt_object_type'])) {
    $data['node-usanetwork_static_page-field_ideamelt_object_type']['display']['search_index']['weight'] = 4; /* WAS: 0 */
  }
  if (isset($data['node-usanetwork_static_page-field_send_ideamelt_notification'])) {
    $data['node-usanetwork_static_page-field_send_ideamelt_notification']['display']['search_index']['weight'] = 3; /* WAS: 0 */
  }
  if (isset($data['node-usanetwork_static_page-field_show'])) {
    $data['node-usanetwork_static_page-field_show']['display']['search_index']['weight'] = 0; /* WAS: 1 */
  }
  if (isset($data['node-usanetwork_static_page-field_usa_og_description'])) {
    $data['node-usanetwork_static_page-field_usa_og_description']['display']['search_index']['label'] = 'hidden'; /* WAS: 'above' */
    $data['node-usanetwork_static_page-field_usa_og_description']['display']['search_index']['module'] = 'text'; /* WAS: '' */
    $data['node-usanetwork_static_page-field_usa_og_description']['display']['search_index']['type'] = 'text_plain'; /* WAS: 'hidden' */
    $data['node-usanetwork_static_page-field_usa_og_description']['display']['search_index']['weight'] = 1; /* WAS: 0 */
  }
  if (isset($data['node-usanetwork_static_page-field_usa_og_image'])) {
    $data['node-usanetwork_static_page-field_usa_og_image']['display']['search_index']['weight'] = 6; /* WAS: 0 */
  }
}

<?php
/**
 * @file
 * usanetwork_search.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_search_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_instance
  $overrides["field_instance.node-catchall_page-field_automatic_refresh.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 12,
  );
  $overrides["field_instance.node-catchall_page-field_enable_nitro.display|search_index|weight"] = 14;
  $overrides["field_instance.node-catchall_page-field_ideamelt_action_type.display|search_index|weight"] = 15;
  $overrides["field_instance.node-catchall_page-field_ideamelt_object_type.display|search_index|weight"] = 17;
  $overrides["field_instance.node-catchall_page-field_nitro_action_name.display|search_index|weight"] = 18;
  $overrides["field_instance.node-catchall_page-field_refresh_time.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 5,
  );
  $overrides["field_instance.node-catchall_page-field_send_ideamelt_notification.display|search_index|weight"] = 13;
  $overrides["field_instance.node-catchall_page-field_show.display|search_index|weight"] = 0;
  $overrides["field_instance.node-catchall_page-field_usa_catchall_fixedwidth.display|search_index|weight"] = 22;
  $overrides["field_instance.node-catchall_page-field_usa_catchall_html.display|search_index|weight"] = 21;
  $overrides["field_instance.node-catchall_page-field_usa_catchall_js.display|search_index|weight"] = 20;
  $overrides["field_instance.node-catchall_page-field_usa_catchall_media.display|search_index|weight"] = 23;
  $overrides["field_instance.node-catchall_page-field_usa_css.display|search_index|weight"] = 19;
  $overrides["field_instance.node-catchall_page-field_usa_og_description.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-catchall_page-field_usa_og_description.display|search_index|module"] = 'text';
  $overrides["field_instance.node-catchall_page-field_usa_og_description.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-catchall_page-field_usa_og_description.display|search_index|weight"] = 1;
  $overrides["field_instance.node-catchall_page-field_usa_og_image.display|search_index|weight"] = 16;
  $overrides["field_instance.node-catchall_page-field_usa_pc_afterall_content.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 4,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_css.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 3,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_css_inline.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 2,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_file_folder.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 6,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_files.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 7,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_images.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 11,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_javascript.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 10,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_javascript_inline.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 9,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_overall_content.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 8,
  );
  $overrides["field_instance.node-media_gallery-field_summary.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-media_gallery-field_usa_og_description.display|search_index|module"]["DELETED"] = TRUE;
  $overrides["field_instance.node-media_gallery-field_usa_og_description.display|search_index|type"] = 'hidden';
  $overrides["field_instance.node-person-body.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-person-body.display|search_index|module"] = 'text';
  $overrides["field_instance.node-person-body.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-person-body.display|search_index|weight"] = 2;
  $overrides["field_instance.node-person-field_different_legal_name.display|search_index|weight"] = 16;
  $overrides["field_instance.node-person-field_enable_nitro.display|search_index|weight"] = 6;
  $overrides["field_instance.node-person-field_hide_cast_carousel.display|search_index|weight"] = 9;
  $overrides["field_instance.node-person-field_hide_social_follow.display|search_index|weight"] = 8;
  $overrides["field_instance.node-person-field_legal_name_first_name.display|search_index|weight"] = 14;
  $overrides["field_instance.node-person-field_legal_name_last_name.display|search_index|weight"] = 19;
  $overrides["field_instance.node-person-field_legal_name_middle_name.display|search_index|weight"] = 17;
  $overrides["field_instance.node-person-field_legal_name_prefix.display|search_index|weight"] = 18;
  $overrides["field_instance.node-person-field_legal_name_suffix.display|search_index|weight"] = 23;
  $overrides["field_instance.node-person-field_nitro_action_name.display|search_index|weight"] = 7;
  $overrides["field_instance.node-person-field_person_birth_date.display|search_index|weight"] = 22;
  $overrides["field_instance.node-person-field_person_birth_location.display|search_index|weight"] = 21;
  $overrides["field_instance.node-person-field_person_cover_photo.display|search_index|weight"] = 20;
  $overrides["field_instance.node-person-field_person_external_links.display|search_index|weight"] = 15;
  $overrides["field_instance.node-person-field_person_first_name.display|search_index|weight"] = 12;
  $overrides["field_instance.node-person-field_person_last_name.display|search_index|weight"] = 5;
  $overrides["field_instance.node-person-field_person_middle_name.display|search_index|weight"] = 13;
  $overrides["field_instance.node-person-field_person_prefix.display|search_index|weight"] = 4;
  $overrides["field_instance.node-person-field_person_suffix.display|search_index|weight"] = 3;
  $overrides["field_instance.node-person-field_role.display|search_index|weight"] = 27;
  $overrides["field_instance.node-person-field_show.display|search_index|weight"] = 1;
  $overrides["field_instance.node-person-field_usa_actor_name.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-person-field_usa_actor_name.display|search_index|weight"] = 0;
  $overrides["field_instance.node-person-field_usa_character_thumb.display|search_index|weight"] = 24;
  $overrides["field_instance.node-person-field_usa_link_facebook.display|search_index|weight"] = 25;
  $overrides["field_instance.node-person-field_usa_link_pinterest.display|search_index|weight"] = 28;
  $overrides["field_instance.node-person-field_usa_link_tumblr.display|search_index|weight"] = 29;
  $overrides["field_instance.node-person-field_usa_link_twitter.display|search_index|weight"] = 26;
  $overrides["field_instance.node-person-field_usa_og_description.display|search_index|weight"] = 11;
  $overrides["field_instance.node-person-field_usa_og_image.display|search_index|weight"] = 10;
  $overrides["field_instance.node-tv_episode-body.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-tv_episode-body.display|search_index|module"] = 'text';
  $overrides["field_instance.node-tv_episode-body.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-tv_episode-body.display|search_index|weight"] = 3;
  $overrides["field_instance.node-tv_episode-field_content_tags.display|search_index|weight"] = 13;
  $overrides["field_instance.node-tv_episode-field_enable_nitro.display|search_index|weight"] = 5;
  $overrides["field_instance.node-tv_episode-field_episode_credit.display|search_index|weight"] = 12;
  $overrides["field_instance.node-tv_episode-field_episode_number.display|search_index|module"] = 'text';
  $overrides["field_instance.node-tv_episode-field_episode_number.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-tv_episode-field_episode_number.display|search_index|weight"] = 2;
  $overrides["field_instance.node-tv_episode-field_ideamelt_action_type.display|search_index|weight"] = 9;
  $overrides["field_instance.node-tv_episode-field_nitro_action_name.display|search_index|weight"] = 4;
  $overrides["field_instance.node-tv_episode-field_original_air_date.display|search_index|weight"] = 14;
  $overrides["field_instance.node-tv_episode-field_season.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-tv_episode-field_season.display|search_index|module"] = 'entityreference';
  $overrides["field_instance.node-tv_episode-field_season.display|search_index|settings|link"] = FALSE;
  $overrides["field_instance.node-tv_episode-field_season.display|search_index|type"] = 'entityreference_label';
  $overrides["field_instance.node-tv_episode-field_season.display|search_index|weight"] = 1;
  $overrides["field_instance.node-tv_episode-field_send_ideamelt_notification.display|search_index|weight"] = 8;
  $overrides["field_instance.node-tv_episode-field_show.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-tv_episode-field_show.display|search_index|module"] = 'entityreference';
  $overrides["field_instance.node-tv_episode-field_show.display|search_index|settings|link"] = FALSE;
  $overrides["field_instance.node-tv_episode-field_show.display|search_index|type"] = 'entityreference_label';
  $overrides["field_instance.node-tv_episode-field_tv_cover_media.display|search_index|weight"] = 11;
  $overrides["field_instance.node-tv_episode-field_tv_episode_type.display|search_index|weight"] = 10;
  $overrides["field_instance.node-tv_episode-field_usa_og_description.display|search_index|weight"] = 6;
  $overrides["field_instance.node-tv_episode-field_usa_og_image.display|search_index|weight"] = 7;
  $overrides["field_instance.node-tv_show-body.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-tv_show-body.display|search_index|module"] = 'text';
  $overrides["field_instance.node-tv_show-body.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-tv_show-field_chat_to_tv_checkbox_text.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_comment_prefix.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_description.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_echo_marker.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_end_time.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_legal_copy.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_start_time.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_chat_to_tv_title.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_display_title.display|search_index|module"]["DELETED"] = TRUE;
  $overrides["field_instance.node-tv_show-field_display_title.display|search_index|type"] = 'hidden';
  $overrides["field_instance.node-tv_show-field_fb_children.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_childrenof.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_eql_template.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_feed.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_itemsperpage.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_markers.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_safehtml.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_show.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_sortorder.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_source.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_state.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_fb_tags.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_show_twitter_page.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_children.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_childrnof.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_eql_templ.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_feed.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_itemsperp.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_markers.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_safehtml.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_show.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_sortorder.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_source.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_state.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_homepage_twitter_tags.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_instagram_show_id.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_pinterest_url.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_show_chatter_to_tv.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_show_fb_page.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_show_instagram_page.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_show_news_letter.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_show_pinterest_page.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_shows_property.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_large.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_rows.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_vids_label.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_show_color.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_tune_in_date.display|search_index|module"]["DELETED"] = TRUE;
  $overrides["field_instance.node-tv_show-field_usa_tv_tune_in_date.display|search_index|type"] = 'hidden';
  $overrides["field_instance.node-usa_tve_video-body.display|search_index|weight"] = 1;
  $overrides["field_instance.node-usa_tve_video-field_episode_number.display|search_index|weight"] = 7;
  $overrides["field_instance.node-usa_tve_video-field_full_episode.display|search_index|weight"] = 12;
  $overrides["field_instance.node-usa_tve_video-field_publish_date.display|search_index|weight"] = 11;
  $overrides["field_instance.node-usa_tve_video-field_rating.display|search_index|weight"] = 9;
  $overrides["field_instance.node-usa_tve_video-field_season_id.display|search_index|weight"] = 8;
  $overrides["field_instance.node-usa_tve_video-field_show.display|search_index|weight"] = 0;
  $overrides["field_instance.node-usa_tve_video-field_usa_video_terms.display|search_index|weight"] = 10;
  $overrides["field_instance.node-usa_tve_video-field_video_guid.display|search_index|weight"] = 3;
  $overrides["field_instance.node-usa_tve_video-field_video_pid.display|search_index|weight"] = 4;
  $overrides["field_instance.node-usa_video-body.display|search_index|weight"] = 1;
  $overrides["field_instance.node-usa_video-field_episode_number.display|search_index|weight"] = 7;
  $overrides["field_instance.node-usa_video-field_season_id.display|search_index|weight"] = 8;
  $overrides["field_instance.node-usa_video-field_sent_ideamelt_notification.display|search_index|weight"] = 2;
  $overrides["field_instance.node-usa_video-field_show.display|search_index|weight"] = 0;
  $overrides["field_instance.node-usa_video-field_video_guid.display|search_index|weight"] = 5;
  $overrides["field_instance.node-usa_video-field_video_pid.display|search_index|weight"] = 4;
  $overrides["field_instance.node-usa_video-field_video_release_url.display|search_index|weight"] = 3;
  $overrides["field_instance.node-usa_video-field_video_thumbnail.display|search_index|weight"] = 6;
  $overrides["field_instance.node-usanetwork_static_page-body.display|search_index|module"]["DELETED"] = TRUE;
  $overrides["field_instance.node-usanetwork_static_page-body.display|search_index|type"] = 'hidden';
  $overrides["field_instance.node-usanetwork_static_page-body.display|search_index|weight"] = 2;
  $overrides["field_instance.node-usanetwork_static_page-field_ideamelt_action_type.display|search_index|weight"] = 5;
  $overrides["field_instance.node-usanetwork_static_page-field_ideamelt_object_type.display|search_index|weight"] = 4;
  $overrides["field_instance.node-usanetwork_static_page-field_send_ideamelt_notification.display|search_index|weight"] = 3;
  $overrides["field_instance.node-usanetwork_static_page-field_show.display|search_index|weight"] = 0;
  $overrides["field_instance.node-usanetwork_static_page-field_usa_og_description.display|search_index|label"] = 'hidden';
  $overrides["field_instance.node-usanetwork_static_page-field_usa_og_description.display|search_index|module"] = 'text';
  $overrides["field_instance.node-usanetwork_static_page-field_usa_og_description.display|search_index|type"] = 'text_plain';
  $overrides["field_instance.node-usanetwork_static_page-field_usa_og_description.display|search_index|weight"] = 1;
  $overrides["field_instance.node-usanetwork_static_page-field_usa_og_image.display|search_index|weight"] = 6;

 return $overrides;
}

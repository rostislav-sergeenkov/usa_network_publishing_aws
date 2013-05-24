<?php
/**
 * @file
 * pub_tv_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_tv_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field
  $overrides["field.node-tv_episode-body.field_instance|display|full"] = array(
    'label' => 'hidden',
    'module' => 'text',
    'settings' => array(),
    'type' => 'text_default',
    'weight' => '1',
  );
  $overrides["field.node-tv_episode-body.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_content_tags.field_instance|display|default|weight"] = '1';
  $overrides["field.node-tv_episode-field_content_tags.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '3',
  );
  $overrides["field.node-tv_episode-field_content_tags.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_episode_credit.field_instance|display|default|weight"] = '13';
  $overrides["field.node-tv_episode-field_episode_credit.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '5',
  );
  $overrides["field.node-tv_episode-field_episode_credit.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_episode_number.field_instance|display|default|weight"] = '8';
  $overrides["field.node-tv_episode-field_episode_number.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '9',
  );
  $overrides["field.node-tv_episode-field_episode_number.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_advanced"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_buttons"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_container_id"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_desc"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_image_behavior"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_image_url"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_layout"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_link_back"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_override_default"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_short_url"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_showcounts"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|settings|gigya_sharebar_title"]["DELETED"] = TRUE;
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|display|full"] = array(
    'label' => 'hidden',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '2',
  );
  $overrides["field.node-tv_episode-field_gigya_share_bar.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '4',
  );
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|exclude_cv"] = 1;
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|fences_wrapper"] = 'div';
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|required"] = 1;
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|settings|default_value"] = 'blank';
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|settings|default_value2"] = 'same';
  $overrides["field.node-tv_episode-field_original_air_date.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_season.field_instance|display|default|weight"] = '7';
  $overrides["field.node-tv_episode-field_season.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '10',
  );
  $overrides["field.node-tv_episode-field_season.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_show.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '8',
  );
  $overrides["field.node-tv_episode-field_show.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_tv_cover_media.field_instance|display|full"] = array(
    'label' => 'hidden',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );
  $overrides["field.node-tv_episode-field_tv_cover_media.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_episode-field_tv_episode_type.field_instance|display|default|weight"] = '15';
  $overrides["field.node-tv_episode-field_tv_episode_type.field_instance|display|full"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '6',
  );
  $overrides["field.node-tv_episode-field_tv_episode_type.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_season-field_original_air_date.field_instance|exclude_cv"] = 1;
  $overrides["field.node-tv_season-field_original_air_date.field_instance|fences_wrapper"] = 'div';
  $overrides["field.node-tv_season-field_original_air_date.field_instance|settings|default_value"] = 'blank';
  $overrides["field.node-tv_season-field_original_air_date.field_instance|settings|default_value2"] = 'same';
  $overrides["field.node-tv_season-field_original_air_date.field_instance|settings|exclude_cv"] = FALSE;
  $overrides["field.node-tv_show-field_banner.field_instance|description"] = 'This field is not used by USA';
  $overrides["field.node-tv_show-field_banner.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field.node-tv_show-field_banner.field_instance|display|follow_social"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field.node-tv_show-field_banner.field_instance|fences_wrapper"] = 'div';
  $overrides["field.node-tv_show-field_banner.field_instance|required"] = 0;
  $overrides["field.node-tv_show-field_banner.field_instance|widget|settings|allowed_types|default"]["DELETED"] = TRUE;
  $overrides["field.node-tv_show-field_banner.field_instance|widget|settings|allowed_types|document"] = 0;
  $overrides["field.node-tv_show-field_banner.field_instance|widget|settings|browser_plugins|library"]["DELETED"] = TRUE;
  $overrides["field.node-tv_show-field_logo.field_instance|description"] = 'Used in show carousels.';
  $overrides["field.node-tv_show-field_logo.field_instance|display|block_cover_title"] = array(
    'label' => 'hidden',
    'module' => 'image',
    'settings' => array(
      'image_link' => '',
      'image_style' => 'gallery_block_cover',
    ),
    'type' => 'image',
    'weight' => '0',
  );
  $overrides["field.node-tv_show-field_logo.field_instance|display|follow_social"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '38',
  );
  $overrides["field.node-tv_show-field_logo.field_instance|fences_wrapper"] = 'figure';
  $overrides["field.node-tv_show-field_tv_cover_media.field_instance|description"] = 'This field is not used by USA';
  $overrides["field.node-tv_show-field_tv_cover_media.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field.node-tv_show-field_tv_cover_media.field_instance|display|follow_social"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field.node-tv_show-field_tv_cover_media.field_instance|required"] = 0;

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__tv_episode.value|view_modes|block_cover_title"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_episode.value|view_modes|block_cover_title_lg"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_episode.value|view_modes|full|custom_settings"] = TRUE;
  $overrides["variable.field_bundle_settings_node__tv_show.value|extra_fields|form|flag"] = array(
    'weight' => '10',
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|block_cover_title"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|block_cover_title_lg"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|carousel_promo"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|cast_carousel"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|follow_social"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|home_promo"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__tv_show.value|view_modes|social_follow"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

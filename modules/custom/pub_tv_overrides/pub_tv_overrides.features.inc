<?php
/**
 * @file
 * pub_tv_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_tv_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_fields_alter().
 */
function pub_tv_overrides_field_default_fields_alter(&$data) {
  if (isset($data['node-tv_episode-body'])) {
    $data['node-tv_episode-body']['field_instance']['display']['full'] = array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => '1',
    ); /* WAS: '' */
    $data['node-tv_episode-body']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_content_tags'])) {
    $data['node-tv_episode-field_content_tags']['field_instance']['display']['default']['weight'] = '1'; /* WAS: 1 */
    $data['node-tv_episode-field_content_tags']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '3',
    ); /* WAS: '' */
    $data['node-tv_episode-field_content_tags']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_episode_credit'])) {
    $data['node-tv_episode-field_episode_credit']['field_instance']['display']['default']['weight'] = '13'; /* WAS: 13 */
    $data['node-tv_episode-field_episode_credit']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '5',
    ); /* WAS: '' */
    $data['node-tv_episode-field_episode_credit']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_episode_number'])) {
    $data['node-tv_episode-field_episode_number']['field_instance']['display']['default']['weight'] = '8'; /* WAS: 8 */
    $data['node-tv_episode-field_episode_number']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '9',
    ); /* WAS: '' */
    $data['node-tv_episode-field_episode_number']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_gigya_share_bar'])) {
    $data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['type'] = 'hidden'; /* WAS: 'gigya_sharebar_formatter_default' */
    $data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['full'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '2',
    ); /* WAS: '' */
    $data['node-tv_episode-field_gigya_share_bar']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['module']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_advanced']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_buttons']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_container_id']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_desc']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_image_behavior']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_image_url']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_layout']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_link_back']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_override_default']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_short_url']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_showcounts']);
    unset($data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['default']['settings']['gigya_sharebar_title']);
  }
  if (isset($data['node-tv_episode-field_original_air_date'])) {
    $data['node-tv_episode-field_original_air_date']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '4',
    ); /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['exclude_cv'] = 1; /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['fences_wrapper'] = 'div'; /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['required'] = 1; /* WAS: 0 */
    $data['node-tv_episode-field_original_air_date']['field_instance']['settings']['default_value'] = 'blank'; /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['settings']['default_value2'] = 'same'; /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_season'])) {
    $data['node-tv_episode-field_season']['field_instance']['display']['default']['weight'] = '7'; /* WAS: 7 */
    $data['node-tv_episode-field_season']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '10',
    ); /* WAS: '' */
    $data['node-tv_episode-field_season']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_show'])) {
    $data['node-tv_episode-field_show']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '8',
    ); /* WAS: '' */
    $data['node-tv_episode-field_show']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
    unset($data['node-tv_episode-field_show']['field_config']['settings']['handler_settings']['sort']['direction']);
    unset($data['node-tv_episode-field_show']['field_config']['settings']['handler_settings']['sort']['field']);
    unset($data['node-tv_episode-field_show']['field_config']['settings']['handler_settings']['sort']['property']);
  }
  if (isset($data['node-tv_episode-field_tv_cover_media'])) {
    $data['node-tv_episode-field_tv_cover_media']['field_instance']['display']['full'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '0',
    ); /* WAS: '' */
    $data['node-tv_episode-field_tv_cover_media']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_episode-field_tv_episode_type'])) {
    $data['node-tv_episode-field_tv_episode_type']['field_instance']['display']['default']['weight'] = '15'; /* WAS: 15 */
    $data['node-tv_episode-field_tv_episode_type']['field_instance']['display']['full'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '6',
    ); /* WAS: '' */
    $data['node-tv_episode-field_tv_episode_type']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_season-field_original_air_date'])) {
    $data['node-tv_season-field_original_air_date']['field_instance']['exclude_cv'] = 1; /* WAS: '' */
    $data['node-tv_season-field_original_air_date']['field_instance']['fences_wrapper'] = 'div'; /* WAS: '' */
    $data['node-tv_season-field_original_air_date']['field_instance']['settings']['default_value'] = 'blank'; /* WAS: '' */
    $data['node-tv_season-field_original_air_date']['field_instance']['settings']['default_value2'] = 'same'; /* WAS: '' */
    $data['node-tv_season-field_original_air_date']['field_instance']['settings']['exclude_cv'] = FALSE; /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_logo'])) {
    $data['node-tv_show-field_logo']['field_instance']['description'] = 'Used in show carousels.'; /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['fences_wrapper'] = 'figure'; /* WAS: '' */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_tv_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__tv_episode'])) {
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['block_cover_title_lg'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['full']['custom_settings'] = TRUE; /* WAS: FALSE */
  }
  if (isset($data['field_bundle_settings_node__tv_show'])) {
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['block_cover_title_lg'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['follow_social'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['social_follow'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

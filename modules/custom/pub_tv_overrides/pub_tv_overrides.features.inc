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
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
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
    $data['node-tv_episode-body']['field_instance']['display']['search_index'] = array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_plain',
      'weight' => '1',
    ); /* WAS: '' */
    $data['node-tv_episode-body']['field_instance']['display']['search_result'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '18',
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
    $data['node-tv_episode-field_content_tags']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '7',
    ); /* WAS: '' */
    $data['node-tv_episode-field_content_tags']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '19',
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
    $data['node-tv_episode-field_episode_credit']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '12',
    ); /* WAS: '' */
    $data['node-tv_episode-field_episode_credit']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '20',
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
    $data['node-tv_episode-field_episode_number']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '10',
    ); /* WAS: '' */
    $data['node-tv_episode-field_episode_number']['field_instance']['display']['search_result'] = array(
      'label' => 'inline',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => '4',
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
    $data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['search_index'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '13',
    ); /* WAS: '' */
    $data['node-tv_episode-field_gigya_share_bar']['field_instance']['display']['search_result'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '21',
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
    $data['node-tv_episode-field_original_air_date']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '11',
    ); /* WAS: '' */
    $data['node-tv_episode-field_original_air_date']['field_instance']['display']['search_result'] = array(
      'label' => 'hidden',
      'module' => 'date',
      'settings' => array(
        'format_type' => 'edit_date',
        'fromto' => 'both',
        'multiple_from' => '',
        'multiple_number' => '',
        'multiple_to' => '',
      ),
      'type' => 'date_default',
      'weight' => '5',
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
    $data['node-tv_episode-field_season']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '9',
    ); /* WAS: '' */
    $data['node-tv_episode-field_season']['field_instance']['display']['search_result'] = array(
      'label' => 'inline',
      'module' => 'entityreference',
      'settings' => array(
        'link' => FALSE,
      ),
      'type' => 'entityreference_label',
      'weight' => '3',
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
    $data['node-tv_episode-field_show']['field_instance']['display']['search_index'] = array(
      'label' => 'hidden',
      'module' => 'entityreference',
      'settings' => array(
        'link' => FALSE,
      ),
      'type' => 'entityreference_label',
      'weight' => '2',
    ); /* WAS: '' */
    $data['node-tv_episode-field_show']['field_instance']['display']['search_result'] = array(
      'label' => 'hidden',
      'module' => 'entityreference',
      'settings' => array(
        'link' => FALSE,
      ),
      'type' => 'entityreference_label',
      'weight' => '2',
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
    $data['node-tv_episode-field_tv_cover_media']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '8',
    ); /* WAS: '' */
    $data['node-tv_episode-field_tv_cover_media']['field_instance']['display']['search_result'] = array(
      'label' => 'hidden',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '16',
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
    $data['node-tv_episode-field_tv_episode_type']['field_instance']['display']['search_index'] = array(
      'label' => 'hidden',
      'module' => 'taxonomy',
      'settings' => array(),
      'type' => 'taxonomy_term_reference_plain',
      'weight' => '3',
    ); /* WAS: '' */
    $data['node-tv_episode-field_tv_episode_type']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '22',
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
  if (isset($data['node-tv_show-field_banner'])) {
    $data['node-tv_show-field_banner']['field_instance']['description'] = 'This field is not used by USA'; /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['display']['default']['weight'] = '4'; /* WAS: 4 */
    $data['node-tv_show-field_banner']['field_instance']['display']['follow_social'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '57',
    ); /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '36',
    ); /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['fences_wrapper'] = 'div'; /* WAS: '' */
    $data['node-tv_show-field_banner']['field_instance']['required'] = 0; /* WAS: 1 */
    $data['node-tv_show-field_banner']['field_instance']['widget']['settings']['allowed_types']['document'] = 0; /* WAS: '' */
    unset($data['node-tv_show-field_banner']['field_instance']['widget']['settings']['allowed_types']['default']);
    unset($data['node-tv_show-field_banner']['field_instance']['widget']['settings']['browser_plugins']['library']);
  }
  if (isset($data['node-tv_show-field_logo'])) {
    $data['node-tv_show-field_logo']['field_instance']['description'] = 'Used in show carousels.'; /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'hidden',
      'module' => 'image',
      'settings' => array(
        'image_link' => '',
        'image_style' => 'gallery_block_cover',
      ),
      'type' => 'image',
      'weight' => '0',
    ); /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['display']['default']['weight'] = '3'; /* WAS: 3 */
    $data['node-tv_show-field_logo']['field_instance']['display']['follow_social'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '38',
    ); /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '56',
    ); /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '35',
    ); /* WAS: '' */
    $data['node-tv_show-field_logo']['field_instance']['fences_wrapper'] = 'figure'; /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_tv_cover_media'])) {
    $data['node-tv_show-field_tv_cover_media']['field_instance']['description'] = 'This field is not used by USA'; /* WAS: '' */
    $data['node-tv_show-field_tv_cover_media']['field_instance']['display']['block_cover_title'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
    $data['node-tv_show-field_tv_cover_media']['field_instance']['display']['follow_social'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
    $data['node-tv_show-field_tv_cover_media']['field_instance']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '58',
    ); /* WAS: '' */
    $data['node-tv_show-field_tv_cover_media']['field_instance']['display']['search_result'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => '37',
    ); /* WAS: '' */
    $data['node-tv_show-field_tv_cover_media']['field_instance']['required'] = 0; /* WAS: 1 */
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
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['carousel_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['cast_carousel'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['follow_social'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['full']['custom_settings'] = TRUE; /* WAS: FALSE */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['home_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['home_promo_bspot'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['promo_teaser'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['search_index'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['search_result'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['vid_teaser_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['vid_teaser_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['vid_teaser_show_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_episode']->value['view_modes']['vid_teaser_show_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
  }
  if (isset($data['field_bundle_settings_node__tv_show'])) {
    $data['field_bundle_settings_node__tv_show']->value['extra_fields']['form']['flag'] = array(
      'weight' => '10',
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['block_cover_title_lg'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['carousel_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['cast_carousel'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['follow_social'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['home_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['home_promo_bspot'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['promo_teaser'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['search_index'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['search_result'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['social_follow'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['vid_teaser_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['vid_teaser_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['vid_teaser_show_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__tv_show']->value['view_modes']['vid_teaser_show_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
  }
}

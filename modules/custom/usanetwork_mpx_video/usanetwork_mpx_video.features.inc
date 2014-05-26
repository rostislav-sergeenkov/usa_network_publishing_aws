<?php
/**
 * @file
 * usanetwork_mpx_video.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_mpx_video_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_mpx_video_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_ds_field_settings_info_alter().
 */
function usanetwork_mpx_video_ds_field_settings_info_alter(&$data) {
  if (isset($data['file|mpx_video_1|full'])) {
    $data['file|mpx_video_1|full']->settings['video_companion_rectangle_small'] = array(
      'weight' => 9,
      'label' => 'hidden',
      'format' => 'default',
    ); /* WAS: '' */
  }
  if (isset($data['file|mpx_video_2|full'])) {
    $data['file|mpx_video_2|full']->settings['video_companion_rectangle_small'] = array(
      'weight' => 9,
      'label' => 'hidden',
      'format' => 'default',
    ); /* WAS: '' */
  }
}

/**
 * Implements hook_ds_layout_settings_info_alter().
 */
function usanetwork_mpx_video_ds_layout_settings_info_alter(&$data) {
  if (isset($data['file|mpx_video_1|full'])) {
    $data['file|mpx_video_1|full']->settings['fields']['video_companion_rectangle_small'] = 'ad_comp'; /* WAS: '' */
  }
  if (isset($data['file|mpx_video_2|full'])) {
    $data['file|mpx_video_2|full']->settings['fields']['video_companion_rectangle_small'] = 'ad_comp'; /* WAS: '' */
  }
}

/**
 * Implements hook_ds_view_modes_info_alter().
 */
function usanetwork_mpx_video_ds_view_modes_info_alter(&$data) {
  if (isset($data['vid_teaser_episode'])) {
    $data['vid_teaser_episode']->entities['file'] = 'file'; /* WAS: '' */
  }
  if (isset($data['vid_teaser_general'])) {
    $data['vid_teaser_general']->entities['file'] = 'file'; /* WAS: '' */
  }
  if (isset($data['vid_teaser_show_episode'])) {
    $data['vid_teaser_show_episode']->entities['file'] = 'file'; /* WAS: '' */
  }
  if (isset($data['vid_teaser_show_general'])) {
    $data['vid_teaser_show_general']->entities['file'] = 'file'; /* WAS: '' */
  }
}

/**
 * Implements hook_default_queues_type().
 */
function usanetwork_mpx_video_default_queues_type() {
  $items = array();
  $items['video_mpx_queue'] = entity_import('queues_type', '{
    "label" : "Video MPX Queue",
    "type" : "video_mpx_queue",
    "target" : "file",
    "settings" : { "entityreference_field" : {
        "cardinality" : "-1",
        "target_bundles" : {
          "mpx_video_1" : "mpx_video_1",
          "0" : 0,
          "image" : 0,
          "video" : 0,
          "audio" : 0,
          "document" : 0,
          "mpx_player" : 0
        }
      }
    }
  }');
  return $items;
}

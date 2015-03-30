<?php
/**
 * @file
 * usanetwork_video.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_video_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_video_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_video_node_info() {
  $items = array(
    'usa_tve_video' => array(
      'name' => t('USA TVE Video'),
      'base' => 'node_content',
      'description' => t('Video from USA network TV Everywhere feed'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'usa_video' => array(
      'name' => t('USA MPX Video'),
      'base' => 'node_content',
      'description' => t('Video from USA network standard MPX'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implements hook_default_queues_type().
 */
function usanetwork_video_default_queues_type() {
  $items = array();
  $items['video_queue'] = entity_import('queues_type', '{
    "label" : "Video Queue",
    "type" : "video_queue",
    "target" : "node",
    "settings" : { "entityreference_field" : {
        "cardinality" : "-1",
        "target_bundles" : {
          "usa_video" : "usa_video",
          "usa_tve_video" : "usa_tve_video",
          "usanetwork_aspot" : 0,
          "catchall_page" : 0,
          "usa_homepage" : 0,
          "media_gallery" : 0,
          "movie" : 0,
          "person" : 0,
          "usanetwork_promo" : 0,
          "usanetwork_static_page" : 0,
          "tv_episode" : 0,
          "tv_season" : 0,
          "tv_show" : 0,
          "webform" : 0
        }
      }
    }
  }');
  return $items;
}

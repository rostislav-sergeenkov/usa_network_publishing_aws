<?php
/**
 * @file
 * usanetwork_home.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_home_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_home_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function usanetwork_home_node_info() {
  $items = array(
    'usa_homepage' => array(
      'name' => t('Homepage'),
      'base' => 'node_content',
      'description' => t('Monday through Sunday homepages'),
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
function usanetwork_home_default_queues_type() {
  $items = array();

  $items['tv_shows_queue'] = entity_import('queues_type', '{
    "label" : "TV Shows Queue",
    "type" : "tv_shows_queue",
    "target" : "node",
    "settings" : { "entityreference_field" : {
        "cardinality" : "-1",
        "target_bundles" : {
          "tv_show" : "tv_show",
          "usanetwork_aspot" : 0,
          "catchall_page" : 0,
          "global_nav_image" : 0,
          "usa_homepage" : 0,
          "media_gallery" : 0,
          "person" : 0,
          "post" : 0,
          "usanetwork_promo" : 0,
          "usanetwork_promo_iframe" : 0,
          "quiz" : 0,
          "catchall_seo_page" : 0,
          "snipe" : 0,
          "usanetwork_static_page" : 0,
          "tv_episode" : 0,
          "tv_season" : 0,
          "usa_video" : 0,
          "usa_tve_video" : 0,
          "webform" : 0
        }
      }
    }
  }');

  return $items;
}

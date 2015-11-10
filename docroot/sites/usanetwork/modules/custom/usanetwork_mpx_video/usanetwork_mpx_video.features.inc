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
 * Implements hook_views_default_views_alter().
 */
function usanetwork_mpx_video_views_default_views_alter(&$data) {
  if (isset($data['content_files'])) {
    $data['content_files']->display['mpx_files_page']->display_options['filters']['field_show_target_id'] = array(
      'id' => 'field_show_target_id',
      'table' => 'field_data_field_show',
      'field' => 'field_show_target_id',
      'group' => 1,
      'exposed' => TRUE,
      'expose' => array(
        'operator_id' => 'field_show_target_id_op',
        'label' => 'Show',
        'operator' => 'field_show_target_id_op',
        'identifier' => 'field_show_target_id',
        'remember_roles' => array(
          2 => 2,
          1 => 0,
          11 => 0,
          16 => 0,
          21 => 0,
          26 => 0,
          31 => 0,
          36 => 0,
        ),
      ),
    ); /* WAS: '' */
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

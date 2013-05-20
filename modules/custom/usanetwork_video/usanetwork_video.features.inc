<?php
/**
 * @file
 * usanetwork_video.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_video_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
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

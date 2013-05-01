<?php
/**
 * @file
 * usanetwork_episodes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_episodes_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function usanetwork_episodes_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function usanetwork_episodes_image_default_styles() {
  $styles = array();

  // Exported image style: episode_wide.
  $styles['episode_wide'] = array(
    'name' => 'episode_wide',
    'effects' => array(
      2 => array(
        'label' => 'Focus Scale And Crop',
        'help' => 'Scale and crop based on data provided by <em>ImageField Focus</em>.',
        'effect callback' => 'imagefield_focus_scale_and_crop_effect',
        'form callback' => 'imagefield_focus_scale_and_crop_form',
        'summary theme' => 'imagefield_focus_scale_and_crop_summary',
        'module' => 'imagefield_focus',
        'name' => 'imagefield_focus_scale_and_crop',
        'data' => array(
          'width' => '1230',
          'height' => '360',
          'strength' => 'high',
        ),
        'weight' => '2',
      ),
    ),
  );

  return $styles;
}

<?php
/**
 * @file
 * usanetwork_episodes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_episodes_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "file_entity" && $api == "file_default_displays") {
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
function usanetwork_episodes_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function usanetwork_episodes_image_default_styles() {
  $styles = array();

  // Exported image style: 677x381.
  $styles['677x381'] = array(
    'effects' => array(
      0 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 677,
          'height' => 381,
        ),
        'weight' => 0,
      ),
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 677,
          'height' => 381,
        ),
        'weight' => 1,
      ),
    ),
    'label' => '677x381',
  );

  // Exported image style: 769x434.
  $styles['769x434'] = array(
    'effects' => array(
      0 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 769,
          'height' => 434,
        ),
        'weight' => 0,
      ),
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 769,
          'height' => 434,
        ),
        'weight' => 1,
      ),
    ),
    'label' => '769x434',
  );

  // Exported image style: episode_wide.
  $styles['episode_wide'] = array(
    'label' => 'episode_wide',
    'effects' => array(
      12 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 1230,
          'height' => 360,
        ),
        'weight' => -10,
      ),
      11 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1230,
          'height' => 360,
        ),
        'weight' => -9,
      ),
    ),
  );

  return $styles;
}

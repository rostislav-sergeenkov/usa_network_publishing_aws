<?php
/**
 * @file
 * usanetwork_episodes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_episodes_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
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

  // Exported image style: episode_wide.
  $styles['episode_wide'] = array(
    'name' => 'episode_wide',
    'label' => 'episode_wide',
    'effects' => array(
      12 => array(
        'label' => 'Focal Point Scale And Crop',
        'help' => 'Scale and crop based on data provided by <em>Focal Point</em>.',
        'effect callback' => 'focal_point_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'focal_point',
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 1230,
          'height' => 360,
        ),
        'weight' => -10,
      ),
      11 => array(
        'label' => 'Scale and crop',
        'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1230,
          'height' => 360,
        ),
        'weight' => -9,
      ),
    ),
    'label' => 'episode_wide',
  );

  $styles['634x349'] = array(
    'effects' => array(
      array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 634,
          'height' => 349,
        ),
        'weight' => 0,
      ),
      array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 634,
          'height' => 349,
        ),
        'weight' => 1,
      ),
    ),
  );

  $styles['769x434'] = array(
    'effects' => array(
      array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 769,
          'height' => 434,
        ),
        'weight' => 0,
      ),
      array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 769,
          'height' => 434,
        ),
        'weight' => 1,
      ),
    ),
  );

  $styles['677x381'] = array(
    'effects' => array(
      array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 677,
          'height' => 381,
        ),
        'weight' => 0,
      ),
      array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 677,
          'height' => 381,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

<?php
/**
 * @file
 * usanetwork_gigya.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_gigya_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_image_default_styles().
 */
function usanetwork_gigya_image_default_styles() {
  $styles = array();

  // Exported image style: share.
  $styles['share'] = array(
    'label' => 'share',
    'effects' => array(
      1 => array(
        'name' => 'coloractions_convert',
        'data' => array(
          'format' => 'image/jpeg',
          'quality' => 75,
        ),
        'weight' => 1,
      ),
      3 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 1400,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 2,
      ),
    ),
  );

  return $styles;
}

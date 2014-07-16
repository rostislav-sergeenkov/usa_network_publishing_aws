<?php
/**
 * @file
 * usanetwork_imagestyles.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_imagestyles_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_image_wrap';
  $strongarm->value = 1;
  $export['borealis_image_wrap'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_responsive_builds';
  $strongarm->value = array(
    'respondsmall' => 250,
    'respondmedium' => 437.5,
    'respondlarge' => 765.625,
    'respondxl' => 1339.84375,
    'respondxl2' => 2344.7265625,
    'respondxl3' => 4103.27148438,
    'respondxl4' => 7180.72509766,
  );
  $export['borealis_responsive_builds'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_children';
  $strongarm->value = array(
    0 => 'flexslider_full',
    1 => 'promoted_content',
    2 => 'large',
    3 => 'episode_wide',
    4 => 'video_full',
  );
  $export['borealis_ri_children'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_hidpi';
  $strongarm->value = '1.75';
  $export['borealis_ri_hidpi'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_image_wrap';
  $strongarm->value = 1;
  $export['borealis_ri_image_wrap'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_lazyload';
  $strongarm->value = '1';
  $export['borealis_ri_lazyload'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_min_size';
  $strongarm->value = '250';
  $export['borealis_ri_min_size'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'borealis_ri_parents';
  $strongarm->value = array(
    'flexslider_full' => array(
      'effects' => array(
        0 => array(
          'label' => 'Scale and crop',
          'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
          'effect callback' => 'image_scale_and_crop_effect',
          'dimensions callback' => 'image_resize_dimensions',
          'form callback' => 'image_resize_form',
          'summary theme' => 'image_resize_summary',
          'module' => 'image',
          'name' => 'image_scale_and_crop',
          'data' => array(
            'width' => 800,
            'height' => 500,
          ),
          'weight' => 0,
        ),
      ),
      'name' => 'flexslider_full',
      'module' => 'flexslider',
      'storage' => 4,
    ),
    'promoted_content' => array(
      'name' => 'promoted_content',
      'effects' => array(
        1 => array(
          'label' => 'Scale',
          'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
          'effect callback' => 'image_scale_effect',
          'dimensions callback' => 'image_scale_dimensions',
          'form callback' => 'image_scale_form',
          'summary theme' => 'image_scale_summary',
          'module' => 'image',
          'name' => 'image_scale',
          'data' => array(
            'width' => '1920',
            'height' => '',
            'upscale' => 1,
          ),
          'weight' => '1',
        ),
        2 => array(
          'label' => 'Focus Scale And Crop',
          'help' => 'Scale and crop based on data provided by <em>ImageField Focus</em>.',
          'effect callback' => 'imagefield_focus_scale_and_crop_effect',
          'form callback' => 'imagefield_focus_scale_and_crop_form',
          'summary theme' => 'imagefield_focus_scale_and_crop_summary',
          'module' => 'imagefield_focus',
          'name' => 'imagefield_focus_scale_and_crop',
          'data' => array(
            'width' => '960',
            'height' => '540',
            'strength' => 'low',
          ),
          'weight' => '2',
        ),
      ),
      'module' => 'pub_image_styles',
      'storage' => 4,
    ),
    'large' => array(
      'effects' => array(
        0 => array(
          'label' => 'Scale',
          'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
          'effect callback' => 'image_scale_effect',
          'dimensions callback' => 'image_scale_dimensions',
          'form callback' => 'image_scale_form',
          'summary theme' => 'image_scale_summary',
          'module' => 'image',
          'name' => 'image_scale',
          'data' => array(
            'width' => 480,
            'height' => 480,
            'upscale' => 0,
          ),
          'weight' => 0,
        ),
      ),
      'name' => 'large',
      'module' => 'image',
      'storage' => 4,
    ),
    'episode_wide' => array(
      'isid' => '1',
      'name' => 'episode_wide',
      'module' => 'usanetwork_episodes',
      'storage' => 2,
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
          'ieid' => '2',
          'isid' => '1',
          'weight' => '2',
        ),
      ),
    ),
    'video_full' => array(
      'isid' => '2',
      'name' => 'video_full',
      'module' => NULL,
      'storage' => 1,
      'effects' => array(
        2 => array(
          'label' => 'Scale',
          'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
          'effect callback' => 'image_scale_effect',
          'dimensions callback' => 'image_scale_dimensions',
          'form callback' => 'image_scale_form',
          'summary theme' => 'image_scale_summary',
          'module' => 'image',
          'name' => 'image_scale',
          'data' => array(
            'width' => '1245',
            'height' => '',
            'upscale' => 0,
          ),
          'ieid' => '2',
          'isid' => '2',
          'weight' => '1',
        ),
      ),
    ),
  );
  $export['borealis_ri_parents'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'imagefield_focus_media_settings';
  $strongarm->value = array(
    'focus' => '1',
    'focus_lock_ratio' => '',
    'focus_min_size' => '',
  );
  $export['imagefield_focus_media_settings'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'image_toolkit';
  $strongarm->value = 'imagemagick';
  $export['image_toolkit'] = $strongarm;

  return $export;
}

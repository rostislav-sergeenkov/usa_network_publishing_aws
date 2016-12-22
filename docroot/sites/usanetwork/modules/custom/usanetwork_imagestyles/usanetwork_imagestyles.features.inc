<?php
/**
 * @file
 * usanetwork_imagestyles.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_imagestyles_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_image_default_styles().
 */
function usanetwork_imagestyles_image_default_styles() {
  $styles = array();

  // Exported image style: 1245x709.
  $styles['1245x709'] = array(
    'effects' => array(
      4 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1245,
          'height' => 709,
        ),
        'weight' => 2,
      ),
    ),
    'label' => '1245x709',
  );

  // Exported image style: 1400_wide.
  $styles['1400_wide'] = array(
    'effects' => array(
      1 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 1400,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
    'label' => '1400_wide',
  );

  // Exported image style: 2490x1418.
  $styles['2490x1418'] = array(
    'effects' => array(
      2 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 2490,
          'height' => 1418,
        ),
        'weight' => 2,
      ),
    ),
    'label' => '2490x1418',
  );

  // Exported image style: 300x169_video.
  $styles['300x169_video'] = array(
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 300,
          'height' => 169,
        ),
        'weight' => 1,
      ),
    ),
    'label' => '300x169_video',
  );

  // Exported image style: 600x500.
  $styles['600x500'] = array(
    'effects' => array(
      8 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 600,
          'height' => 500,
        ),
        'weight' => 2,
      ),
    ),
    'label' => '600x500',
  );

  // Exported image style: 615x350.
  $styles['615x350'] = array(
    'effects' => array(
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 615,
          'height' => 350,
        ),
        'weight' => 2,
      ),
    ),
    'label' => '615x350',
  );

  // Exported image style: block_cover_title_lg.
  $styles['block_cover_title_lg'] = array(
    'label' => 'block_cover_title_lg',
    'effects' => array(
      13 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 300,
          'height' => 250,
        ),
        'weight' => -10,
      ),
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 300,
          'height' => 250,
        ),
        'weight' => -9,
      ),
    ),
  );

  // Exported image style: gallery_block_cover.
  $styles['gallery_block_cover'] = array(
    'label' => 'gallery_block_cover',
    'effects' => array(
      17 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 268,
          'height' => 223,
        ),
        'weight' => -10,
      ),
      16 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 268,
          'height' => 223,
        ),
        'weight' => -9,
      ),
    ),
  );

  // Exported image style: meet_the_cast_carousel.
  $styles['meet_the_cast_carousel'] = array(
    'label' => 'Meet the Cast carousel',
    'effects' => array(
      2 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 240,
          'height' => 285,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: person_cover.
  $styles['person_cover'] = array(
    'label' => 'person_cover',
    'effects' => array(
      23 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 760,
          'height' => 879,
        ),
        'weight' => -10,
      ),
      22 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 760,
          'height' => 879,
        ),
        'weight' => -9,
      ),
    ),
  );

  // Exported image style: search_result.
  $styles['search_result'] = array(
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 100,
          'height' => 83,
        ),
        'weight' => 1,
      ),
    ),
    'label' => 'search_result',
  );

  // Exported image style: thumb_tiny.
  $styles['thumb_tiny'] = array(
    'label' => 'thumb_tiny',
    'effects' => array(
      26 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 42,
          'height' => 42,
        ),
        'weight' => -10,
      ),
      25 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 42,
          'height' => 42,
        ),
        'weight' => -9,
      ),
    ),
  );

  // Exported image style: timeline_gallery_image.
  $styles['timeline_gallery_image'] = array(
    'label' => 'Timeline gallery image',
    'effects' => array(
      2 => array(
        'name' => 'focal_point_scale_and_crop',
        'data' => array(
          'width' => 1340,
          'height' => 754,
          'focal_point_advanced' => array(
            'shift_x' => '',
            'shift_y' => '',
          ),
        ),
        'weight' => -10,
      ),
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1340,
          'height' => 754,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: video_full.
  $styles['video_full'] = array(
    'effects' => array(
      2 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 1245,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
    'label' => 'video_full',
  );

  return $styles;
}

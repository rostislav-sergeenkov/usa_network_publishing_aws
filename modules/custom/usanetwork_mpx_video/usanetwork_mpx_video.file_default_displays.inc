<?php
/**
 * @file
 * usanetwork_mpx_video.file_default_displays.inc
 */

/**
 * Implements hook_file_default_displays().
 */
function usanetwork_mpx_video_file_default_displays() {
  $export = array();

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__pub_mpx_video';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'pub_mpx_video_player_id' => array(
      1 => '4Dl3P2Df_j5l',
    ),
  );
  $export['mpx_video_1__inline_content__pub_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__vid_teaser_episode__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_1__vid_teaser_episode__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__vid_teaser_front__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x250',
  );
  $export['mpx_video_1__vid_teaser_front__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__vid_teaser_general__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_1__vid_teaser_general__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__vid_teaser_show_episode__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_1__vid_teaser_show_episode__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__vid_teaser_show_general__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_1__vid_teaser_show_general__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__pub_mpx_video';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'pub_mpx_video_player_id' => array(
      2 => 'usa_hls_vod_noauth',
    ),
  );
  $export['mpx_video_2__inline_content__pub_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__vid_teaser_episode__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_2__vid_teaser_episode__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__vid_teaser_front__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x250',
  );
  $export['mpx_video_2__vid_teaser_front__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__vid_teaser_general__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_2__vid_teaser_general__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__vid_teaser_show_episode__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_2__vid_teaser_show_episode__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__vid_teaser_show_general__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '300x169_video',
  );
  $export['mpx_video_2__vid_teaser_show_general__media_theplatform_mpx_image'] = $file_display;

  return $export;
}

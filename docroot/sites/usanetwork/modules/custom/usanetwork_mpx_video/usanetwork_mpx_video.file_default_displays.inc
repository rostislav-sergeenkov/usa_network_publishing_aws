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
  $file_display->name = 'image__teaser__file_image';
  $file_display->weight = 5;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => 'medium',
  );
  $export['image__teaser__file_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_file_default';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__file_field_file_default'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_file_download_link';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'text' => 'Download [file:name]',
  );
  $export['mpx_video_1__inline_content__file_field_file_download_link'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_file_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__file_field_file_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_file_url_plain';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__file_field_file_url_plain'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_file_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'controls' => 1,
    'autoplay' => 0,
    'loop' => 0,
    'width' => '',
    'height' => '',
    'multiple_file_behavior' => 'tags',
  );
  $export['mpx_video_1__inline_content__file_field_file_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_media_large_icon';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__file_field_media_large_icon'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__file_field_page_collection_resources_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__file_field_page_collection_resources_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'image_style' => '',
  );
  $export['mpx_video_1__inline_content__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__media_theplatform_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__inline_content__media_theplatform_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__inline_content__pub_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_image_image_style' => '',
  );
  $export['mpx_video_1__inline_content__pub_mpx_image'] = $file_display;

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
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_file_default';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__file_field_file_default'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_file_download_link';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'text' => 'Download [file:name]',
  );
  $export['mpx_video_1__microsite_thumbnail__file_field_file_download_link'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_file_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__file_field_file_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_file_url_plain';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__file_field_file_url_plain'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_file_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'controls' => 1,
    'autoplay' => 0,
    'loop' => 0,
    'width' => '',
    'height' => '',
    'multiple_file_behavior' => 'tags',
  );
  $export['mpx_video_1__microsite_thumbnail__file_field_file_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_flexslider_file_entity';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'optionset' => 'default',
    'view_mode' => 'teaser',
    'view_mode_thumb' => '_empty',
    'thumbnail_path' => '',
  );
  $export['mpx_video_1__microsite_thumbnail__file_field_flexslider_file_entity'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_media_large_icon';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__file_field_media_large_icon'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__file_field_page_collection_resources_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__file_field_page_collection_resources_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '',
  );
  $export['mpx_video_1__microsite_thumbnail__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__media_theplatform_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_1__microsite_thumbnail__media_theplatform_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__pub_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_image_image_style' => '',
  );
  $export['mpx_video_1__microsite_thumbnail__pub_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__microsite_thumbnail__pub_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_video_player_id' => array(
      1 => '',
    ),
  );
  $export['mpx_video_1__microsite_thumbnail__pub_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_1__preview__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => 'thumbnail',
  );
  $export['mpx_video_1__preview__media_theplatform_mpx_image'] = $file_display;

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
  $file_display->name = 'mpx_video_2__inline_content__file_field_file_default';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__file_field_file_default'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_file_download_link';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'text' => 'Download [file:name]',
  );
  $export['mpx_video_2__inline_content__file_field_file_download_link'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_file_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__file_field_file_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_file_url_plain';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__file_field_file_url_plain'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_file_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'controls' => 1,
    'autoplay' => 0,
    'loop' => 0,
    'width' => '',
    'height' => '',
    'multiple_file_behavior' => 'tags',
  );
  $export['mpx_video_2__inline_content__file_field_file_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_media_large_icon';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__file_field_media_large_icon'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__file_field_page_collection_resources_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__file_field_page_collection_resources_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'image_style' => '',
  );
  $export['mpx_video_2__inline_content__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__media_theplatform_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__inline_content__media_theplatform_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__inline_content__pub_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_image_image_style' => '',
  );
  $export['mpx_video_2__inline_content__pub_mpx_image'] = $file_display;

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
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_file_default';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__file_field_file_default'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_file_download_link';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'text' => 'Download [file:name]',
  );
  $export['mpx_video_2__microsite_thumbnail__file_field_file_download_link'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_file_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__file_field_file_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_file_url_plain';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__file_field_file_url_plain'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_file_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'controls' => 1,
    'autoplay' => 0,
    'loop' => 0,
    'width' => '',
    'height' => '',
    'multiple_file_behavior' => 'tags',
  );
  $export['mpx_video_2__microsite_thumbnail__file_field_file_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_flexslider_file_entity';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'optionset' => 'default',
    'view_mode' => 'teaser',
    'view_mode_thumb' => '_empty',
    'thumbnail_path' => '',
  );
  $export['mpx_video_2__microsite_thumbnail__file_field_flexslider_file_entity'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_media_large_icon';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__file_field_media_large_icon'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__file_field_page_collection_resources_table';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__file_field_page_collection_resources_table'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__media_theplatform_mpx_image';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = array(
    'image_style' => '',
  );
  $export['mpx_video_2__microsite_thumbnail__media_theplatform_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__media_theplatform_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = '';
  $export['mpx_video_2__microsite_thumbnail__media_theplatform_mpx_video'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__pub_mpx_image';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_image_image_style' => '',
  );
  $export['mpx_video_2__microsite_thumbnail__pub_mpx_image'] = $file_display;

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'mpx_video_2__microsite_thumbnail__pub_mpx_video';
  $file_display->weight = 0;
  $file_display->status = FALSE;
  $file_display->settings = array(
    'pub_mpx_video_player_id' => array(
      2 => '',
    ),
  );
  $export['mpx_video_2__microsite_thumbnail__pub_mpx_video'] = $file_display;

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
    'image_style' => '300x169_video',
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

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'video__preview__file_field_media_large_icon';
  $file_display->weight = 50;
  $file_display->status = TRUE;
  $file_display->settings = '';
  $export['video__preview__file_field_media_large_icon'] = $file_display;

  return $export;
}

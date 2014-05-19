<?php
/**
 * @file
 * usanetwork_mpx_video.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_mpx_video_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'file|mpx_video_1|full';
  $ds_fieldsetting->entity_type = 'file';
  $ds_fieldsetting->bundle = 'mpx_video_1';
  $ds_fieldsetting->view_mode = 'full';
  $ds_fieldsetting->settings = array(
    'video_mpx_companion_rectangle' => array(
      'weight' => '9',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_dart' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_leaderboard' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['file|mpx_video_1|full'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'file|mpx_video_1|vid_teaser_episode';
  $ds_fieldsetting->entity_type = 'file';
  $ds_fieldsetting->bundle = 'mpx_video_1';
  $ds_fieldsetting->view_mode = 'vid_teaser_episode';
  $ds_fieldsetting->settings = array(
    'file_name' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['file|mpx_video_1|vid_teaser_episode'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'file|mpx_video_2|full';
  $ds_fieldsetting->entity_type = 'file';
  $ds_fieldsetting->bundle = 'mpx_video_2';
  $ds_fieldsetting->view_mode = 'full';
  $ds_fieldsetting->settings = array(
    'video_mpx_companion_rectangle' => array(
      'weight' => '9',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_dart' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_leaderboard' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['file|mpx_video_2|full'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'file|mpx_video_2|vid_teaser_episode';
  $ds_fieldsetting->entity_type = 'file';
  $ds_fieldsetting->bundle = 'mpx_video_2';
  $ds_fieldsetting->view_mode = 'vid_teaser_episode';
  $ds_fieldsetting->settings = array(
    'file_name' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['file|mpx_video_2|vid_teaser_episode'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_mpx_video_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'video_mpx_companion_rectangle';
  $ds_field->label = 'video_mpx_companion_rectangle';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'file' => 'file',
  );
  $ds_field->properties = array(
    'block' => 'pub_ads|ad_300x250_1',
    'block_render' => '1',
  );
  $export['video_mpx_companion_rectangle'] = $ds_field;

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'video_mpx_dart';
  $ds_field->label = 'video_mpx_dart';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'file' => 'file',
  );
  $ds_field->properties = array(
    'block' => 'dart|dart-tag-728x90_scr_vid',
    'block_render' => '1',
  );
  $export['video_mpx_dart'] = $ds_field;

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'video_mpx_leaderboard';
  $ds_field->label = 'video_mpx_leaderboard';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'file' => 'file',
  );
  $ds_field->properties = array(
    'block' => 'pub_ads|ad_728x90_1',
    'block_render' => '1',
  );
  $export['video_mpx_leaderboard'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_mpx_video_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|full';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'usa_mpx_video';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ad_dart' => array(
        0 => 'video_mpx_dart',
      ),
      'ad_lead' => array(
        0 => 'video_mpx_leaderboard',
      ),
      'show' => array(
        0 => 'field_show',
      ),
      'video_title' => array(
        0 => 'field_mpx_title',
      ),
      'season' => array(
        0 => 'field_mpx_season_number',
      ),
      'episode' => array(
        0 => 'field_mpx_episode_number',
      ),
      'airdate' => array(
        0 => 'field_mpx_airdate',
      ),
      'description' => array(
        0 => 'field_mpx_description',
        1 => 'field_gigya_share_bar',
      ),
      'ad_comp' => array(
        0 => 'video_mpx_companion_rectangle',
      ),
    ),
    'fields' => array(
      'video_mpx_dart' => 'ad_dart',
      'video_mpx_leaderboard' => 'ad_lead',
      'field_show' => 'show',
      'field_mpx_title' => 'video_title',
      'field_mpx_season_number' => 'season',
      'field_mpx_episode_number' => 'episode',
      'field_mpx_airdate' => 'airdate',
      'field_mpx_description' => 'description',
      'field_gigya_share_bar' => 'description',
      'video_mpx_companion_rectangle' => 'ad_comp',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|vid_teaser_episode';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'vid_teaser_episode';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file_name',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
        1 => 'field_mpx_airdate',
      ),
      'title' => array(
        0 => 'field_show',
      ),
    ),
    'fields' => array(
      'file_name' => 'media',
      'field_mpx_title' => 'caption',
      'field_mpx_airdate' => 'caption',
      'field_show' => 'title',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|vid_teaser_general';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'vid_teaser_general';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'field_show',
      ),
      'media' => array(
        0 => 'field_mpx_media_thumbnail',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'field_show' => 'title',
      'field_mpx_media_thumbnail' => 'media',
      'field_mpx_title' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|vid_teaser_show_episode';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'vid_teaser_show_episode';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_mpx_season_number',
        1 => 'field_mpx_episode_number',
      ),
    ),
    'fields' => array(
      'field_mpx_title' => 'title',
      'field_mpx_episode_number' => 'caption',
      'field_mpx_season_number' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_show_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|vid_teaser_show_general';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'vid_teaser_show_general';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_mpx_media_thumbnail',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_mpx_duration',
      ),
    ),
    'fields' => array(
      'field_mpx_media_thumbnail' => 'media',
      'field_mpx_title' => 'title',
      'field_mpx_duration' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_show_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|full';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'usa_mpx_video';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ad_dart' => array(
        0 => 'video_mpx_dart',
      ),
      'ad_lead' => array(
        0 => 'video_mpx_leaderboard',
      ),
      'show' => array(
        0 => 'field_show',
      ),
      'video_title' => array(
        0 => 'field_mpx_title',
      ),
      'season' => array(
        0 => 'field_mpx_season_number',
      ),
      'episode' => array(
        0 => 'field_mpx_episode_number',
      ),
      'airdate' => array(
        0 => 'field_mpx_airdate',
      ),
      'description' => array(
        0 => 'field_mpx_description',
        1 => 'field_gigya_share_bar',
      ),
      'ad_comp' => array(
        0 => 'video_mpx_companion_rectangle',
      ),
    ),
    'fields' => array(
      'video_mpx_dart' => 'ad_dart',
      'video_mpx_leaderboard' => 'ad_lead',
      'field_show' => 'show',
      'field_mpx_title' => 'video_title',
      'field_mpx_season_number' => 'season',
      'field_mpx_episode_number' => 'episode',
      'field_mpx_airdate' => 'airdate',
      'field_mpx_description' => 'description',
      'field_gigya_share_bar' => 'description',
      'video_mpx_companion_rectangle' => 'ad_comp',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|vid_teaser_episode';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'vid_teaser_episode';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file_name',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
        1 => 'field_mpx_airdate',
      ),
    ),
    'fields' => array(
      'file_name' => 'media',
      'field_show' => 'title',
      'field_mpx_title' => 'caption',
      'field_mpx_airdate' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|vid_teaser_general';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'vid_teaser_general';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'field_show',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'field_show' => 'title',
      'field_mpx_title' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|vid_teaser_show_episode';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'vid_teaser_show_episode';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_mpx_season_number',
        1 => 'field_mpx_episode_number',
      ),
    ),
    'fields' => array(
      'field_mpx_title' => 'title',
      'field_mpx_season_number' => 'caption',
      'field_mpx_episode_number' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_show_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|vid_teaser_show_general';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'vid_teaser_show_general';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_mpx_duration',
      ),
    ),
    'fields' => array(
      'field_mpx_title' => 'title',
      'field_mpx_duration' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_show_general'] = $ds_layout;

  return $export;
}

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
    'video_companion_rectangle_small' => array(
      'weight' => 9,
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_companion_rectangle' => array(
      'weight' => '10',
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
    'video_companion_rectangle_small' => array(
      'weight' => 9,
      'label' => 'hidden',
      'format' => 'default',
    ),
    'video_mpx_companion_rectangle' => array(
      'weight' => '10',
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
  $ds_field->field = 'video_companion_rectangle_small';
  $ds_field->label = 'video_companion_rectangle_small';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'file' => 'file',
  );
  $ds_field->properties = array(
    'block' => 'pub_ads|ad_300x60_1',
    'block_render' => '3',
  );
  $export['video_companion_rectangle_small'] = $ds_field;

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
        0 => 'video_companion_rectangle_small',
        1 => 'video_mpx_companion_rectangle',
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
      'video_companion_rectangle_small' => 'ad_comp',
      'video_mpx_companion_rectangle' => 'ad_comp',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|inline_content';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'inline_content';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'file',
      ),
    ),
    'fields' => array(
      'file' => 'ds_content',
    ),
    'classes' => array(),
    'wrappers' => array(),
    'layout_wrapper' => 'div',
  );
  $export['file|mpx_video_1|inline_content'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|microsite_thumbnail';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'microsite_thumbnail';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_seo_h1',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_mpx_title' => 'title',
      'field_seo_h1' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|microsite_thumbnail'] = $ds_layout;

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
        0 => 'file',
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
      'file' => 'media',
      'field_mpx_title' => 'caption',
      'field_mpx_airdate' => 'caption',
      'field_show' => 'title',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_1|vid_teaser_front';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_1';
  $ds_layout->view_mode = 'vid_teaser_front';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
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
      'file' => 'media',
      'field_mpx_title' => 'caption',
      'field_mpx_airdate' => 'caption',
      'field_show' => 'title',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_1|vid_teaser_front'] = $ds_layout;

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
        0 => 'file',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'field_show' => 'title',
      'file' => 'media',
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
      'media' => array(
        0 => 'file',
      ),
      'caption' => array(
        0 => 'field_mpx_season_number',
        1 => 'field_mpx_episode_number',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_mpx_season_number' => 'caption',
      'field_mpx_episode_number' => 'caption',
      'field_mpx_title' => 'title',
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
        0 => 'file',
      ),
      'caption' => array(
        0 => 'field_mpx_duration',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_mpx_duration' => 'caption',
      'field_mpx_title' => 'title',
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
        0 => 'video_companion_rectangle_small',
        1 => 'video_mpx_companion_rectangle',
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
      'video_companion_rectangle_small' => 'ad_comp',
      'video_mpx_companion_rectangle' => 'ad_comp',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|microsite_thumbnail';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'microsite_thumbnail';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_seo_h1',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_mpx_title' => 'title',
      'field_seo_h1' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|microsite_thumbnail'] = $ds_layout;

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
        0 => 'file',
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
      'file' => 'media',
      'field_show' => 'title',
      'field_mpx_title' => 'caption',
      'field_mpx_airdate' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'file|mpx_video_2|vid_teaser_front';
  $ds_layout->entity_type = 'file';
  $ds_layout->bundle = 'mpx_video_2';
  $ds_layout->view_mode = 'vid_teaser_front';
  $ds_layout->layout = 'video_mpx_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'file',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
      ),
      'meta' => array(
        0 => 'field_mpx_episode_number',
        1 => 'field_mpx_season_number',
        2 => 'field_mpx_duration',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_show' => 'title',
      'field_mpx_title' => 'caption',
      'field_mpx_episode_number' => 'meta',
      'field_mpx_season_number' => 'meta',
      'field_mpx_duration' => 'meta',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_front'] = $ds_layout;

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
      'media' => array(
        0 => 'file',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'caption' => array(
        0 => 'field_mpx_title',
      ),
    ),
    'fields' => array(
      'file' => 'media',
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
      'media' => array(
        0 => 'file',
      ),
      'caption' => array(
        0 => 'field_mpx_season_number',
        1 => 'field_mpx_episode_number',
      ),
    ),
    'fields' => array(
      'field_mpx_title' => 'title',
      'file' => 'media',
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
      'media' => array(
        0 => 'file',
      ),
      'title' => array(
        0 => 'field_mpx_title',
      ),
      'caption' => array(
        0 => 'field_mpx_duration',
      ),
    ),
    'fields' => array(
      'file' => 'media',
      'field_mpx_title' => 'title',
      'field_mpx_duration' => 'caption',
    ),
    'classes' => array(),
  );
  $export['file|mpx_video_2|vid_teaser_show_general'] = $ds_layout;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_mpx_video_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_front';
  $ds_view_mode->label = 'vid_teaser_front';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['vid_teaser_front'] = $ds_view_mode;

  return $export;
}

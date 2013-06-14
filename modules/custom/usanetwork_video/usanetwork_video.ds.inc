<?php
/**
 * @file
 * usanetwork_video.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function usanetwork_video_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|full';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'full';
  $ds_fieldsetting->settings = array(
    'video_companion_rectangle' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_tve_video|full'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|usa_tve_video|search_result'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|vid_teaser_episode';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_episode';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_tve_video|vid_teaser_episode'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|vid_teaser_general';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_general';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_tve_video|vid_teaser_general'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|vid_teaser_show_episode';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_show_episode';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => 'h4',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_tve_video|vid_teaser_show_episode'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_tve_video|vid_teaser_show_general';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_tve_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_show_general';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => 'h4',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_tve_video|vid_teaser_show_general'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|full';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'full';
  $ds_fieldsetting->settings = array(
    'video_companion_rectangle' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
    ),
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_video|full'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|search_result';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'search_result';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|usa_video|search_result'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|vid_teaser_episode';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_episode';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_video|vid_teaser_episode'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|vid_teaser_general';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_general';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => '',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_video|vid_teaser_general'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|vid_teaser_show_episode';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_show_episode';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '1',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => 'h4',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_video|vid_teaser_show_episode'] = $ds_fieldsetting;

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|usa_video|vid_teaser_show_general';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'usa_video';
  $ds_fieldsetting->view_mode = 'vid_teaser_show_general';
  $ds_fieldsetting->settings = array(
    'title' => array(
      'weight' => '0',
      'label' => 'hidden',
      'format' => 'default',
      'formatter_settings' => array(
        'link' => '0',
        'wrapper' => 'h4',
        'class' => '',
      ),
    ),
  );
  $export['node|usa_video|vid_teaser_show_general'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_video_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'video_companion_rectangle';
  $ds_field->label = 'video_companion_rectangle';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->properties = array(
    'block' => 'pub_ads|ad_300x250_1',
    'block_render' => '1',
  );
  $export['video_companion_rectangle'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_video_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'usa_video';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ad' => array(
        0 => 'video_companion_rectangle',
      ),
      'body' => array(
        0 => 'body',
      ),
      'airdate' => array(
        0 => 'field_video_air_date',
      ),
      'video_title' => array(
        0 => 'title',
      ),
      'show' => array(
        0 => 'field_show',
      ),
      'guid' => array(
        0 => 'field_video_guid',
      ),
      'episode' => array(
        0 => 'field_episode_number',
      ),
      'season' => array(
        0 => 'field_season_id',
      ),
    ),
    'fields' => array(
      'video_companion_rectangle' => 'ad',
      'body' => 'body',
      'field_video_air_date' => 'airdate',
      'title' => 'video_title',
      'field_show' => 'show',
      'field_video_guid' => 'guid',
      'field_episode_number' => 'episode',
      'field_season_id' => 'season',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'title' => array(
        0 => 'title',
      ),
      'body' => array(
        0 => 'field_show',
        1 => 'field_season_id',
        2 => 'field_episode_number',
        3 => 'field_video_air_date',
        4 => 'body',
      ),
    ),
    'fields' => array(
      'field_video_thumbnail' => 'media',
      'title' => 'title',
      'field_show' => 'body',
      'field_season_id' => 'body',
      'field_episode_number' => 'body',
      'field_video_air_date' => 'body',
      'body' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|search_result'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|vid_teaser_episode';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'vid_teaser_episode';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'caption' => array(
        0 => 'title',
        1 => 'field_video_air_date',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
    ),
    'fields' => array(
      'title' => 'caption',
      'field_show' => 'title',
      'field_video_thumbnail' => 'media',
      'field_video_air_date' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|vid_teaser_general';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'vid_teaser_general';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'caption' => array(
        0 => 'title',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
    ),
    'fields' => array(
      'title' => 'caption',
      'field_show' => 'title',
      'field_video_thumbnail' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|vid_teaser_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|vid_teaser_show_episode';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'vid_teaser_show_episode';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'title' => array(
        0 => 'title',
      ),
      'caption' => array(
        0 => 'field_season_id',
        1 => 'field_episode_number',
      ),
    ),
    'fields' => array(
      'field_video_thumbnail' => 'media',
      'title' => 'title',
      'field_season_id' => 'caption',
      'field_episode_number' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|vid_teaser_show_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_tve_video|vid_teaser_show_general';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_tve_video';
  $ds_layout->view_mode = 'vid_teaser_show_general';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'caption' => array(
        0 => 'field_video_duration',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_video_thumbnail' => 'media',
      'field_video_duration' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_tve_video|vid_teaser_show_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|full';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'usa_video';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ad' => array(
        0 => 'video_companion_rectangle',
      ),
      'body' => array(
        0 => 'body',
      ),
      'video_title' => array(
        0 => 'title',
      ),
      'airdate' => array(
        0 => 'field_video_air_date',
      ),
      'show' => array(
        0 => 'field_show',
      ),
      'guid' => array(
        0 => 'field_video_guid',
      ),
      'episode' => array(
        0 => 'field_episode_number',
      ),
      'season' => array(
        0 => 'field_season_id',
      ),
    ),
    'fields' => array(
      'video_companion_rectangle' => 'ad',
      'body' => 'body',
      'title' => 'video_title',
      'field_video_air_date' => 'airdate',
      'field_show' => 'show',
      'field_video_guid' => 'guid',
      'field_episode_number' => 'episode',
      'field_season_id' => 'season',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|search_result';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'search_result';
  $ds_layout->layout = 'usa_search';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'title' => array(
        0 => 'title',
      ),
      'body' => array(
        0 => 'field_show',
        1 => 'field_season_id',
        2 => 'field_episode_number',
        3 => 'field_video_air_date',
        4 => 'body',
      ),
    ),
    'fields' => array(
      'field_video_thumbnail' => 'media',
      'title' => 'title',
      'field_show' => 'body',
      'field_season_id' => 'body',
      'field_episode_number' => 'body',
      'field_video_air_date' => 'body',
      'body' => 'body',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|search_result'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|vid_teaser_episode';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'vid_teaser_episode';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'caption' => array(
        0 => 'title',
        1 => 'field_video_air_date',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
    ),
    'fields' => array(
      'title' => 'caption',
      'field_show' => 'title',
      'field_video_thumbnail' => 'media',
      'field_video_air_date' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|vid_teaser_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|vid_teaser_general';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'vid_teaser_general';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'caption' => array(
        0 => 'title',
      ),
      'title' => array(
        0 => 'field_show',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
    ),
    'fields' => array(
      'title' => 'caption',
      'field_show' => 'title',
      'field_video_thumbnail' => 'media',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|vid_teaser_general'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|vid_teaser_show_episode';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'vid_teaser_show_episode';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'title' => array(
        0 => 'title',
      ),
      'caption' => array(
        0 => 'field_season_id',
        1 => 'field_episode_number',
      ),
    ),
    'fields' => array(
      'field_video_thumbnail' => 'media',
      'title' => 'title',
      'field_season_id' => 'caption',
      'field_episode_number' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|vid_teaser_show_episode'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|usa_video|vid_teaser_show_general';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'usa_video';
  $ds_layout->view_mode = 'vid_teaser_show_general';
  $ds_layout->layout = 'video_teaser';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'title' => array(
        0 => 'title',
      ),
      'media' => array(
        0 => 'field_video_thumbnail',
      ),
      'caption' => array(
        0 => 'field_video_duration',
      ),
    ),
    'fields' => array(
      'title' => 'title',
      'field_video_thumbnail' => 'media',
      'field_video_duration' => 'caption',
    ),
    'classes' => array(),
  );
  $export['node|usa_video|vid_teaser_show_general'] = $ds_layout;

  return $export;
}

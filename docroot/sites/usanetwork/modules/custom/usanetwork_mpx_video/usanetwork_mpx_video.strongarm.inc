<?php
/**
 * @file
 * usanetwork_mpx_video.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_mpx_video_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_file__mpx_video_1';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'preview' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_episode' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_general' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_show_episode' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_show_general' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title_lg' => array(
        'custom_settings' => FALSE,
      ),
      'entityreference_live_preview' => array(
        'custom_settings' => FALSE,
      ),
      'figure' => array(
        'custom_settings' => FALSE,
      ),
      'gallery_flexslider' => array(
        'custom_settings' => FALSE,
      ),
      'person_cover_image' => array(
        'custom_settings' => FALSE,
      ),
      'search_result_files' => array(
        'custom_settings' => FALSE,
      ),
      'thumb_tiny' => array(
        'custom_settings' => FALSE,
      ),
      'cover_image' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_front' => array(
        'custom_settings' => TRUE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'inline_content' => array(
        'custom_settings' => TRUE,
      ),
      'post_cover' => array(
        'custom_settings' => FALSE,
      ),
      'microsite_thumbnail' => array(
        'custom_settings' => TRUE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'filename' => array(
          'weight' => '-10',
        ),
        'preview' => array(
          'weight' => '-5',
        ),
        'metatags' => array(
          'weight' => '40',
        ),
        'redirect' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(
        'file' => array(
          'default' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_episode' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_general' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_show_episode' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_show_general' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'full' => array(
            'weight' => '32',
            'visible' => FALSE,
          ),
          'vid_teaser_front' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'inline_content' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'microsite_thumbnail' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
        ),
      ),
    ),
  );
  $export['field_bundle_settings_file__mpx_video_1'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_file__mpx_video_2';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'preview' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_episode' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_general' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_show_episode' => array(
        'custom_settings' => TRUE,
      ),
      'vid_teaser_show_general' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title_lg' => array(
        'custom_settings' => FALSE,
      ),
      'entityreference_live_preview' => array(
        'custom_settings' => FALSE,
      ),
      'figure' => array(
        'custom_settings' => FALSE,
      ),
      'gallery_flexslider' => array(
        'custom_settings' => FALSE,
      ),
      'person_cover_image' => array(
        'custom_settings' => FALSE,
      ),
      'search_result_files' => array(
        'custom_settings' => FALSE,
      ),
      'thumb_tiny' => array(
        'custom_settings' => FALSE,
      ),
      'cover_image' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_front' => array(
        'custom_settings' => TRUE,
      ),
      'inline_content' => array(
        'custom_settings' => TRUE,
      ),
      'microsite_thumbnail' => array(
        'custom_settings' => TRUE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'filename' => array(
          'weight' => '-10',
        ),
        'preview' => array(
          'weight' => '-5',
        ),
        'metatags' => array(
          'weight' => '40',
        ),
        'redirect' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(
        'file' => array(
          'default' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'full' => array(
            'weight' => '32',
            'visible' => FALSE,
          ),
          'vid_teaser_episode' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_general' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_show_episode' => array(
            'weight' => '1',
            'visible' => TRUE,
          ),
          'vid_teaser_show_general' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'vid_teaser_front' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
          'microsite_thumbnail' => array(
            'weight' => '0',
            'visible' => TRUE,
          ),
        ),
      ),
    ),
  );
  $export['field_bundle_settings_file__mpx_video_2'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'media_theplatform_mpx__cron_videos_per_run';
  $strongarm->value = '250';
  $export['media_theplatform_mpx__cron_videos_per_run'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_image_pattern';
  $strongarm->value = 'file/[file:name]';
  $export['pathauto_file_image_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_mpx_video_1_pattern';
  $strongarm->value = '';
  $export['pathauto_file_mpx_video_1_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_mpx_video_2_pattern';
  $strongarm->value = '';
  $export['pathauto_file_mpx_video_2_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_pattern';
  $strongarm->value = '';
  $export['pathauto_file_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_video_pattern';
  $strongarm->value = '';
  $export['pathauto_file_video_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_draft_auth_settings';
  $strongarm->value = array(
    'auth_flow' => 'mvpd',
  );
  $export['tve_auth_draft_auth_settings'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_published_auth_settings';
  $strongarm->value = array(
    'auth_flow' => 'mvpd',
  );
  $export['tve_auth_published_auth_settings'] = $strongarm;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_mpx_video.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_mpx_video_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_global_mpx_videos';
  $context->description = '';
  $context->tag = 'videos page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'videos' => 'videos',
        'videos/*' => 'videos/*',
        '~videos/live' => '~videos/live',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_mpx_video-usa_global_mpx_video_nav' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_global_mpx_video_nav',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_mpx_video-usa_mpx_video_views' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_mpx_video_views',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('videos page');
  $export['usa_global_mpx_videos'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_mpx_videos_live';
  $context->description = '';
  $context->tag = 'videos page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'videos/live' => 'videos/live',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-usa_mpx_video-latest_live_video' => array(
          'module' => 'views',
          'delta' => 'usa_mpx_video-latest_live_video',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_tv_schedule-usa_live_tv_schedule' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_live_tv_schedule',
          'region' => 'content',
          'weight' => '-9',
        ),
        'views-usa_mpx_video-fullepisodes_live' => array(
          'module' => 'views',
          'delta' => 'usa_mpx_video-fullepisodes_live',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('videos page');
  $export['usa_mpx_videos_live'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_show_mpx_videos';
  $context->description = '';
  $context->tag = 'videos page';
  $context->conditions = array(
    'entity_field' => array(
      'values' => array(
        'entity_type' => 'a:12:{s:4:"file";s:4:"file";s:10:"collection";i:0;s:21:"field_collection_item";i:0;s:4:"node";i:0;s:6:"queues";i:0;s:11:"queues_type";i:0;s:8:"redirect";i:0;s:13:"taxonomy_term";i:0;s:19:"taxonomy_vocabulary";i:0;s:4:"user";i:0;s:15:"wysiwyg_profile";i:0;s:25:"state_flow_history_entity";i:0;}',
        'field_name' => 'field_mpx_full_episode',
        'field_value' => '1',
        'field_empty' => 0,
        'field_not_empty' => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        '~videos' => '~videos',
        '~videos/live' => '~videos/live',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_mpx_video-usa_show_mpx_video_nav' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_show_mpx_video_nav',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_mpx_video-usa_mpx_video_views' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_mpx_video_views',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('videos page');
  $export['usa_show_mpx_videos'] = $context;

  return $export;
}

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
        'usanetwork_menu-usanetwork_menu_consumptionator' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_consumptionator',
          'region' => 'header',
          'weight' => '-10',
        ),
        'mps-topbanner' => array(
          'module' => 'mps',
          'delta' => 'topbanner',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
        'views-usa_mpx_video-latest_live_video' => array(
          'module' => 'views',
          'delta' => 'usa_mpx_video-latest_live_video',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_blocks-usa_footer_promos' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_footer_promos',
          'region' => 'footer',
          'weight' => '-10',
        ),
        'usanetwork_lyris-newsletter_subscription' => array(
          'module' => 'usanetwork_lyris',
          'delta' => 'newsletter_subscription',
          'region' => 'footer',
          'weight' => '-9',
        ),
        'usanetwork_menu-usanetwork_menu_fm_menu' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_fm_menu',
          'region' => 'footer',
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
        'entity_type' => 'a:16:{s:4:"file";s:4:"file";s:10:"collection";i:0;s:7:"comment";i:0;s:21:"field_collection_item";i:0;s:6:"module";i:0;s:4:"node";i:0;s:7:"program";i:0;s:6:"queues";i:0;s:11:"queues_type";i:0;s:8:"redirect";i:0;s:13:"taxonomy_term";i:0;s:19:"taxonomy_vocabulary";i:0;s:4:"user";i:0;s:15:"wysiwyg_profile";i:0;s:25:"state_flow_history_entity";i:0;s:9:"menu_link";i:0;}',
        'view_mode' => 'a:40:{s:4:"full";s:4:"full";s:14:"inline_content";i:0;s:13:"diff_standard";i:0;s:5:"token";i:0;s:5:"print";i:0;s:6:"teaser";i:0;s:3:"rss";i:0;s:12:"search_index";i:0;s:13:"search_result";i:0;s:16:"microsite_output";i:0;s:25:"page_collection_resources";i:0;s:16:"user_ref_preview";i:0;s:23:"admin_reference_preview";i:0;s:17:"block_cover_title";i:0;s:20:"block_cover_title_lg";i:0;s:14:"carousel_promo";i:0;s:13:"cast_carousel";i:0;s:13:"follow_social";i:0;s:21:"global_nav_block_more";i:0;s:22:"global_nav_block_shows";i:0;s:10:"home_promo";i:0;s:16:"home_promo_bspot";i:0;s:19:"microsite_thumbnail";i:0;s:12:"promo_teaser";i:0;s:18:"vid_teaser_episode";i:0;s:18:"vid_teaser_general";i:0;s:23:"vid_teaser_show_episode";i:0;s:23:"vid_teaser_show_general";i:0;s:18:"promo_teaser_large";i:0;s:7:"preview";i:0;s:28:"entityreference_live_preview";i:0;s:6:"figure";i:0;s:18:"gallery_flexslider";i:0;s:18:"person_cover_image";i:0;s:19:"search_result_files";i:0;s:10:"thumb_tiny";i:0;s:11:"cover_image";i:0;s:16:"vid_teaser_front";i:0;s:13:"usa_term_icon";i:0;s:18:"user_image_preview";i:0;}',
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
        'usanetwork_menu-usanetwork_menu_consumptionator' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_consumptionator',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_mpx_video-usa_mpx_video_full_video_advert' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_mpx_video_full_video_advert',
          'region' => 'leaderboard',
          'weight' => '-9',
        ),
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_mpx_video-usa_mpx_video_socal' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_mpx_video_socal',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_mpx_video-usa_mpx_cons_related' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usa_mpx_cons_related',
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

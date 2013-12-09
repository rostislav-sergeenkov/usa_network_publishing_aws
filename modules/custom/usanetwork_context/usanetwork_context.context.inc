<?php
/**
 * @file
 * usanetwork_context.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_context_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'schedule_page';
  $context->description = 'the tv schedule page context';
  $context->tag = 'schedule';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'schedule' => 'schedule',
        'schedule/*' => 'schedule/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_tv_schedule-usa_on_now_block' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_block',
          'region' => 'head_general',
          'weight' => '-10',
        ),
        'usanetwork_tv_schedule-usa_on_now_panel' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_panel',
          'region' => 'on_now',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('schedule');
  t('the tv schedule page context');
  $export['schedule_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_banner';
  $context->description = 'applies to all show related pages';
  $context->tag = 'shows';
  $context->conditions = array(
    'entity_field' => array(
      'values' => array(
        'entity_type' => 'a:11:{s:4:"node";s:4:"node";s:10:"collection";i:0;s:7:"comment";i:0;s:21:"field_collection_item";i:0;s:6:"queues";i:0;s:11:"queues_type";i:0;s:4:"file";i:0;s:13:"taxonomy_term";i:0;s:19:"taxonomy_vocabulary";i:0;s:4:"user";i:0;s:15:"wysiwyg_profile";i:0;}',
        'field_name' => 'field_show',
        'field_value' => '0',
        'field_empty' => 0,
        'field_not_empty' => 1,
      ),
    ),
    'node' => array(
      'values' => array(
        'media_gallery' => 'media_gallery',
        'tv_episode' => 'tv_episode',
        'tv_show' => 'tv_show',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/social' => 'node/*/social',
        'node/*/social/*' => 'node/*/social/*',
        'node/*/games' => 'node/*/games',
        'node/*/games/*' => 'node/*/games/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_blocks-usa_tv_show_menu' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_tv_show_menu',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_showpages-show_banner' => array(
          'module' => 'usanetwork_showpages',
          'delta' => 'show_banner',
          'region' => 'head_show',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('applies to all show related pages');
  t('shows');
  $export['show_banner'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_page';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'tv_show' => 'tv_show',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_blocks-usa_tv_show_menu' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_tv_show_menu',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_ads-dart_floodlight' => array(
          'module' => 'usanetwork_ads',
          'delta' => 'dart_floodlight',
          'region' => 'footer',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_social_page';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/social' => 'node/*/social',
        'node/*/social/*' => 'node/*/social/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-usa_shows-block_1' => array(
          'module' => 'views',
          'delta' => 'usa_shows-block_1',
          'region' => 'main_prefix',
          'weight' => '-10',
        ),
        'usanetwork_social-usa_show_social_tab_nav' => array(
          'module' => 'usanetwork_social',
          'delta' => 'usa_show_social_tab_nav',
          'region' => 'main_prefix',
          'weight' => '-9',
        ),
        'dart-dart-tag-300x250_ifr_reload' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-300x250_ifr_reload',
          'region' => 'sidebar_first',
          'weight' => '-10',
        ),
        'views-usa_cast-block_2' => array(
          'module' => 'views',
          'delta' => 'usa_cast-block_2',
          'region' => 'sidebar_first',
          'weight' => '-9',
        ),
        'usanetwork_social-usa_show_social_getglue' => array(
          'module' => 'usanetwork_social',
          'delta' => 'usa_show_social_getglue',
          'region' => 'sidebar_first',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_social_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_leader_reloadable';
  $context->description = 'reloadable iframe leaderboard';
  $context->tag = 'ads';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'catchall_page' => 'catchall_page',
        'media_gallery' => 'media_gallery',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
    'path' => array(
      'values' => array(
        'games' => 'games',
        'games/*' => 'games/*',
        '*/games/*' => '*/games/*',
        '*/*/games/*' => '*/*/games/*',
        'social' => 'social',
        'social/*' => 'social/*',
        '*/social/*' => '*/social/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'dart-dart-tag-728x90_ifr_reload' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-728x90_ifr_reload',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('ads');
  t('reloadable iframe leaderboard');
  $export['usa_leader_reloadable'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_leader_standard';
  $context->description = 'standard script based leaderboard ads';
  $context->tag = 'ads';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'person' => 'person',
        'tv_episode' => 'tv_episode',
        'tv_season' => 'tv_season',
        'tv_show' => 'tv_show',
        'usa_homepage' => 'usa_homepage',
        'usanetwork_static_page' => 'usanetwork_static_page',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
    'path' => array(
      'values' => array(
        'schedule' => 'schedule',
        'schedule/*' => 'schedule/*',
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'dart-dart-tag-728x90_970x66_scr' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-728x90_970x66_scr',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('ads');
  t('standard script based leaderboard ads');
  $export['usa_leader_standard'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_leader_video';
  $context->description = 'video specific leaderboards';
  $context->tag = 'ads';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'usa_tve_video' => 'usa_tve_video',
        'usa_video' => 'usa_video',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
    'path' => array(
      'values' => array(
        'videos' => 'videos',
        'videos/*' => 'videos/*',
        '*/videos/*' => '*/videos/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'dart-dart-tag-728x90_scr_vid' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-728x90_scr_vid',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('ads');
  t('video specific leaderboards');
  $export['usa_leader_video'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_nitro';
  $context->description = 'Adds code to page to allow Nitro rewards';
  $context->tag = 'nitro pages';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'catchall_page' => 'catchall_page',
        'media_gallery' => 'media_gallery',
        'person' => 'person',
        'tv_episode' => 'tv_episode',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_nitro-usa_nitro' => array(
          'module' => 'usanetwork_nitro',
          'delta' => 'usa_nitro',
          'region' => 'header',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adds code to page to allow Nitro rewards');
  t('nitro pages');
  $export['usa_nitro'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_social_pages';
  $context->description = 'context for all global social pages';
  $context->tag = 'social';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'social' => 'social',
        'social/*' => 'social/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-usa_shows-block_1' => array(
          'module' => 'views',
          'delta' => 'usa_shows-block_1',
          'region' => 'main_prefix',
          'weight' => '-10',
        ),
        'usanetwork_social-usa_show_social_tab_nav' => array(
          'module' => 'usanetwork_social',
          'delta' => 'usa_show_social_tab_nav',
          'region' => 'main_prefix',
          'weight' => '-9',
        ),
        'dart-dart-tag-300x250_ifr_reload' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-300x250_ifr_reload',
          'region' => 'sidebar_second',
          'weight' => '-36',
        ),
        'views-usa_shows-block_2' => array(
          'module' => 'views',
          'delta' => 'usa_shows-block_2',
          'region' => 'sidebar_second',
          'weight' => '-35',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('context for all global social pages');
  t('social');
  $export['usa_social_pages'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usanetwork_homepage';
  $context->description = 'The content in this context will appear on the site front page.';
  $context->tag = 'homepage';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_tv_schedule-usa_on_now_block' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_block',
          'region' => 'head_general',
          'weight' => '-10',
        ),
        'usanetwork_tv_schedule-usa_on_now_panel' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_panel',
          'region' => 'on_now',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('The content in this context will appear on the site front page.');
  t('homepage');
  $export['usanetwork_homepage'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usanetwork_sitewide';
  $context->description = '';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'sitewide' => array(
      'values' => array(
        1 => 1,
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_snipe-usa_snipe' => array(
          'module' => 'usanetwork_snipe',
          'delta' => 'usa_snipe',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_blocks-usa_meganav' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_meganav',
          'region' => 'header',
          'weight' => '-9',
        ),
        'usanetwork_blocks-usa_detect_ieversion' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_detect_ieversion',
          'region' => 'main_suffix',
          'weight' => '-10',
        ),
        'usanetwork_blocks-usa_footer_links' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_footer_links',
          'region' => 'footer',
          'weight' => '-16',
        ),
        'usanetwork_blocks-usa_footer_message' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_footer_message',
          'region' => 'footer',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('sitewide');
  $export['usanetwork_sitewide'] = $context;

  return $export;
}

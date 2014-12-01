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
        'accessibility' => 'accessibility',
        'accessibility/*' => 'accessibility/*',
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
        'entity_type' => 'a:16:{s:4:"node";s:4:"node";s:4:"file";s:4:"file";s:13:"taxonomy_term";s:13:"taxonomy_term";s:10:"collection";i:0;s:7:"comment";i:0;s:21:"field_collection_item";i:0;s:6:"module";i:0;s:7:"program";i:0;s:6:"queues";i:0;s:11:"queues_type";i:0;s:8:"redirect";i:0;s:19:"taxonomy_vocabulary";i:0;s:4:"user";i:0;s:15:"wysiwyg_profile";i:0;s:25:"state_flow_history_entity";i:0;s:9:"menu_link";i:0;}',
        'view_mode' => 'a:36:{s:14:"inline_content";i:0;s:4:"full";i:0;s:13:"diff_standard";i:0;s:5:"token";i:0;s:5:"print";i:0;s:6:"teaser";i:0;s:3:"rss";i:0;s:25:"page_collection_resources";i:0;s:16:"user_ref_preview";i:0;s:23:"admin_reference_preview";i:0;s:17:"block_cover_title";i:0;s:20:"block_cover_title_lg";i:0;s:14:"carousel_promo";i:0;s:13:"cast_carousel";i:0;s:13:"follow_social";i:0;s:21:"global_nav_block_more";i:0;s:22:"global_nav_block_shows";i:0;s:10:"home_promo";i:0;s:16:"home_promo_bspot";i:0;s:12:"promo_teaser";i:0;s:18:"vid_teaser_episode";i:0;s:18:"vid_teaser_general";i:0;s:23:"vid_teaser_show_episode";i:0;s:23:"vid_teaser_show_general";i:0;s:18:"promo_teaser_large";i:0;s:7:"preview";i:0;s:28:"entityreference_live_preview";i:0;s:6:"figure";i:0;s:18:"gallery_flexslider";i:0;s:18:"person_cover_image";i:0;s:19:"search_result_files";i:0;s:10:"thumb_tiny";i:0;s:11:"cover_image";i:0;s:16:"vid_teaser_front";i:0;s:13:"usa_term_icon";i:0;s:18:"user_image_preview";i:0;}',
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
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_social_chatter';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/social/chat-with-fans' => 'node/*/social/chat-with-fans',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[current-page:tv-show:title] | Chatter',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'Chat with other fans about [current-page:tv-show:title]!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_social_chatter'] = $context;

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
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => '',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '[current-page:tv-show:field_logo]',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
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
  $context->name = 'show_social_sync';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/social/sync' => 'node/*/social/sync',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[current-page:tv-show:title] | Sync',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See facts, trivia and photos, take quizzes and enjoy live synced events for your favorite USA Network shows!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_social_sync'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_social_trending';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/social' => 'node/*/social',
        'node/*/social/latest' => 'node/*/social/latest',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[current-page:tv-show:title] | Trending',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See what\'s currently popular about [current-page:tv-show:title] on a variety of social networks!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_social_trending'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'show_social_tweets';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/social/tweets' => 'node/*/social/tweets',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[current-page:tv-show:title] | Tweets',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See what\'s being tweeted about [current-page:tv-show:title]!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['show_social_tweets'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_global_videos';
  $context->description = '';
  $context->tag = 'videos page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'videos' => 'videos',
        'videos/*' => 'videos/*',
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
        'usanetwork_video-usa_global_video_nav' => array(
          'module' => 'usanetwork_video',
          'delta' => 'usa_global_video_nav',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_video-usa_video_views' => array(
          'module' => 'usanetwork_video',
          'delta' => 'usa_video_views',
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
  $export['usa_global_videos'] = $context;

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
        'catchall_seo_page' => 'catchall_seo_page',
        'media_gallery' => 'media_gallery',
        'post' => 'post',
        'quiz' => 'quiz',
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
    'taxonomy_term' => array(
      'values' => array(
        'blog' => 'blog',
      ),
      'options' => array(
        'term_form' => '0',
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
        'accessibility' => 'accessibility',
        'accessibility/*' => 'accessibility/*',
        '<front>' => '<front>',
        'search' => 'search',
        'search/*' => 'search/*',
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
  $context->name = 'usa_show_videos';
  $context->description = '';
  $context->tag = 'videos page';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'usa_tve_video' => 'usa_tve_video',
        'usa_video' => 'usa_video',
      ),
      'options' => array(
        'node_form' => '0',
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
        'usanetwork_video-usa_show_video_nav' => array(
          'module' => 'usanetwork_video',
          'delta' => 'usa_show_video_nav',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_video-usa_video_views' => array(
          'module' => 'usanetwork_video',
          'delta' => 'usa_video_views',
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
  $export['usa_show_videos'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_social_chatter';
  $context->description = '';
  $context->tag = 'social';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'social/chat-with-fans' => 'social/chat-with-fans',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[site:name] | Chatter',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See recent chatter from fans about [site:name] shows!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('social');
  $export['usa_social_chatter'] = $context;

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
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => '',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => 'http://www.usanetwork.com/sites/usanetwork/files/Frozen_Bug.png',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
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
  $context->name = 'usa_social_sync';
  $context->description = '';
  $context->tag = 'social';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'social/sync' => 'social/sync',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[site:name] | Sync',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See facts, trivia and photos, take quizzes and enjoy live synced events for your favorite [site:name] shows!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('social');
  $export['usa_social_sync'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_social_trending';
  $context->description = '';
  $context->tag = 'social';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'social' => 'social',
        'social/trending' => 'social/trending',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[site:name] | Trending',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See what\'s currently popular about USA Network on a variety of social networks!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('social');
  $export['usa_social_trending'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_social_tweets';
  $context->description = '';
  $context->tag = 'social';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'social/tweets' => 'social/tweets',
      ),
    ),
  );
  $context->reactions = array(
    'metatag_context_reaction' => array(
      'metatags' => array(
        'title' => array(
          'value' => '[current-page:title] | [site:name]',
          'default' => '[current-page:title] | [site:name]',
        ),
        'description' => array(
          'value' => '',
        ),
        'abstract' => array(
          'value' => '',
        ),
        'keywords' => array(
          'value' => '',
        ),
        'robots' => array(
          'value' => array(
            'index' => 0,
            'follow' => 0,
            'noindex' => 0,
            'nofollow' => 0,
            'noarchive' => 0,
            'nosnippet' => 0,
            'noodp' => 0,
            'noydir' => 0,
          ),
        ),
        'news_keywords' => array(
          'value' => '',
        ),
        'generator' => array(
          'value' => 'Drupal 7 (http://drupal.org)',
          'default' => 'Drupal 7 (http://drupal.org)',
        ),
        'copyright' => array(
          'value' => '',
        ),
        'image_src' => array(
          'value' => '',
        ),
        'canonical' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'shortlink' => array(
          'value' => '[current-page:url:unaliased]',
          'default' => '[current-page:url:unaliased]',
        ),
        'publisher' => array(
          'value' => '',
        ),
        'author' => array(
          'value' => '',
        ),
        'original-source' => array(
          'value' => '',
        ),
        'fb:admins' => array(
          'value' => '',
        ),
        'fb:app_id' => array(
          'value' => '',
        ),
        'og:site_name' => array(
          'value' => '[site:name]',
          'default' => '[site:name]',
        ),
        'og:title' => array(
          'value' => '[site:name] | Tweets',
          'default' => '[current-page:title]',
        ),
        'og:description' => array(
          'value' => 'See what\'s being tweeted about [site:name]!',
        ),
        'og:type' => array(
          'value' => 'article',
          'default' => 'article',
        ),
        'og:image' => array(
          'value' => '',
        ),
        'og:url' => array(
          'value' => '[current-page:url:absolute]',
          'default' => '[current-page:url:absolute]',
        ),
        'og:latitude' => array(
          'value' => '',
        ),
        'og:longitude' => array(
          'value' => '',
        ),
        'og:street-address' => array(
          'value' => '',
        ),
        'og:locality' => array(
          'value' => '',
        ),
        'og:region' => array(
          'value' => '',
        ),
        'og:postal-code' => array(
          'value' => '',
        ),
        'og:country-name' => array(
          'value' => '',
        ),
        'og:email' => array(
          'value' => '',
        ),
        'og:phone_number' => array(
          'value' => '',
        ),
        'og:fax_number' => array(
          'value' => '',
        ),
        'og:video' => array(
          'value' => '',
        ),
        'og:video:secure_url' => array(
          'value' => '',
        ),
        'og:video:width' => array(
          'value' => '',
        ),
        'og:video:height' => array(
          'value' => '',
        ),
        'og:video:type' => array(
          'value' => '',
        ),
      ),
      'metatag_admin' => 0,
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('social');
  $export['usa_social_tweets'] = $context;

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
        'usanetwork_aspot-usanetwork_aspot_carousel' => array(
          'module' => 'usanetwork_aspot',
          'delta' => 'usanetwork_aspot_carousel',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_menu-usanetwork_menu_aspot_ot' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_aspot_ot',
          'region' => 'content',
          'weight' => '-8',
        ),
        'usanetwork_home-usanetwork_home_bspot_cspot' => array(
          'module' => 'usanetwork_home',
          'delta' => 'usanetwork_home_bspot_cspot',
          'region' => 'content',
          'weight' => '-7',
        ),
        'usanetwork_home-usanetwork_home_shows_queue' => array(
          'module' => 'usanetwork_home',
          'delta' => 'usanetwork_home_shows_queue',
          'region' => 'content',
          'weight' => '-6',
        ),
        'usanetwork_home-usanetwork_home_featured_promos' => array(
          'module' => 'usanetwork_home',
          'delta' => 'usanetwork_home_featured_promos',
          'region' => 'content',
          'weight' => '-5',
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
        'usanetwork_menu-usanetwork_menu_sm_menu' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_sm_menu',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_blocks-usa_follow_block' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_follow_block',
          'region' => 'search',
          'weight' => '-9',
        ),
        'usanetwork_blocks-usa_detect_ieversion' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_detect_ieversion',
          'region' => 'main_suffix',
          'weight' => '-10',
        ),
        'usanetwork_menu-usanetwork_menu_fm_menu' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_fm_menu',
          'region' => 'footer',
          'weight' => '-9',
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

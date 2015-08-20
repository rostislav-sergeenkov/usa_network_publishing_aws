<?php

/**
 * Implements hook usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_registry_variables().
 */
function usanetwork_microsite_mrrobot_get_theme_registry_variables() {
  $subtheme_path = drupal_get_path('theme', 'aurora_usa') . '/usanetwork_microsite_themes/mrrobot/templates';

  return array(
    'usanetwork_microsite_mrrobot' => array(
      'template' => 'usanetwork-microsite-mrrobot',
      'path' => $subtheme_path,
      'variables' => array(
        'classes' => NULL,
        'sections' => array(),
        'tune_in' => NULL,
        'sections_navlinks' => array(),
        'facebook_tracking_html' => NULL,
        'quizzes' => array(
          0 => array(
            'nid' => NULL,
            'title' => NULL,
            'url' => NULL,
            'status' => NULL,
          ),
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_home' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-home',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'aspots' => array(),
        'featured' => array(),
        'characters' => array(
          0 => array(
            'url' => NULL,
            'title' => NULL,
            'image_url' => NULL,
          ),
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_about' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-about',
      'path' => $subtheme_path,
      'variables' => array(
        'title' => NULL,
        'description' => NULL,
        'about_quotations' => array(
          0 => array(
            'quote' => NULL,
            'source' => NULL,
          ),
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_characters' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-characters',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'people' => array(
          0 => array(
            'id' => NULL,
            'title' => NULL,
            'description' => NULL,
            'role' => NULL,
            'character_bio_summary' => NULL,
            'character_bio' => NULL,
            'quotes' => array(
              0 => array(
                'quote' => NULL,
                'source' => NULL,
              ),
            ),
            'status' => NULL,
            'background_url' => NULL,
            'cover_image_url' => NULL,
            'preview_image_url' => NULL,
            'social' => array(
              'facebook' => NULL,
              'twitter' => NULL,
              'pinterest' => NULL,
              'tumblr' => NULL
            ),
          ),
        ),
        'section_title' => NULL,
      ),
    ),
    'usanetwork_microsite_mrrobot_page_galleries' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-galleries',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'background_url' => NULL,
        'gallery' => array(),
        'episodic_galleries' => array(
          0 => array(
            'url' => NULL,
            'gallery_nid' => NULL,
            'title' => NULL,
            'cover_img' => NULL,
          ),
        ),
        'character_galleries' => array(
          0 => array(
            'url' => NULL,
            'gallery_nid' => NULL,
            'title' => NULL,
            'cover_img' => NULL,
          ),
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_games' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-games',
      'path' => $subtheme_path,
      'variables' => array(
        'page' => array(
          'quiz_html' => NULL,
          'nid' => NULL,
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_quizzes' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-quizzes',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'page' => array(
          'quiz_html' => NULL,
          'nid' => NULL,
        ),
        'quizzes_nav' => array(
          0 => array(
            'nid' => NULL,
            'title' => NULL,
            'url' => NULL,
            'cover_img' => NULL,
          ),
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_videos' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-videos',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'videos' => array(
          0 => array(
            'url' => NULL,
            'rendered' => NULL,
          ),
        ),
        'in_player' => NULL,
      ),
    ),
    'usanetwork_microsite_mrrobot_video_desc' => array(
      'template' => 'usanetwork-microsite-mrrobot-video-desc',
      'path' => $subtheme_path,
      'variables' => array(
        'video_desc' => array(
          'title' => NULL,
          'description' => NULL,
          'airdate' => NULL,
          'season_number' => NULL,
          'episode_number' => NULL,
          'duration' => NULL,
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_episodes' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-episodes',
      'path' => $subtheme_path,
      'variables' => array(
        'description' => NULL,
        'episodes' => array(
          0 => array(
            'id' => NULL,
            'content_url' => NULL,
            'title' => NULL,
            'optional_h1' => NULL,
            'description' => NULL,
            'background_url' => NULL,
            'preview_image_url' => NULL,
            'status' => NULL,
          ),
        ),
        'section_title' => NULL,
      ),
    ),
    'usanetwork_microsite_mrrobot_page_timeline' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-timeline',
      'path' => $subtheme_path,
      'variables' => array(
        'gallery_title' => NULL,
        'description' => NULL,
        'content' => NULL,
      ),
    ),
  );
}

/**
 * Returns a list of theme-oriented JS and CSS files. The function name should be next:
 * usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_includes().
 */
function usanetwork_microsite_mrrobot_get_theme_includes() {
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  $default_theme_path = $theme_path . '/usanetwork_microsite_themes/default';
  $site_theme_path = $theme_path . '/usanetwork_microsite_themes/mrrobot';
  $module_path = drupal_get_path('module', 'usanetwork_microsite');
  $mpx_video_path = drupal_get_path('module', 'usanetwork_mpx_video');
  $host = $_SERVER['HTTP_HOST'];
  $apps_usa_host = ($host == 'www.usanetwork.com' || $host == 'origin-www.usanetwork.com' || $host == 'origin-beta.usanetwork.com' || $host == 'edit.usanetwork.com') ? 'apps.usanetwork.com' : 'stage-apps.usanetwork.com';

  return array(
    'css' => array(
      $module_path . '/css/jquery.bxslider.css',
      $site_theme_path . '/css/fonts.css',
      $default_theme_path . '/css/ms_styles.css',
      $default_theme_path . '/css/site_nav.css',
      $site_theme_path . '/css/ms_gigya_share.css',
      $site_theme_path . '/css/ms_home.css',
      $site_theme_path . '/css/ms_videos.css',
      $default_theme_path . '/css/ms_timeline.css',
      $default_theme_path . '/css/ms_characters.css',
      $default_theme_path . '/css/ms_quizzes.css',
      $site_theme_path . '/css/ms_galleries.css',
      $default_theme_path . '/css/counter.css',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.css',
      $site_theme_path . '/css/ms_site.css',
    ),
    'js' => array(
      'http://' . $apps_usa_host . '/mrrobot/catchup/msmVideosByEpisode.js',
      $module_path . '/js/jquery.bxslider.min.js',
      $module_path . '/js/jquery.waypoints.min.js', // checks for element scrolled into view
      $module_path . '/js/waypoints_shortcuts/inview.min.js', // part of waypoints for checking for element scrolled into view
      $default_theme_path . '/js/ms_gigya.js',
      $site_theme_path . '/js/ms_site.js',
      $site_theme_path . '/js/ms_global.js',
      $site_theme_path . '/js/ms_videos.js',
      $site_theme_path . '/js/ms_characters.js',
      $default_theme_path . '/js/ms_quizzes.js',
      $site_theme_path . '/js/ms_galleries_bxslider.js',
//      $site_theme_path . '/js/ms_gallery_carousel.js',
      $default_theme_path . '/js/date.js',
      $site_theme_path . '/js/counter.js',
      $default_theme_path . '/js/ms_video_endcard.js',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.js',
    ),
  );
}

/**
 * Return array with theme settings for mrrobot theme.
 * This settings override defaults or it allow add new setting for current
 * instance of microsite.
 */
function usanetwork_microsite_mrrobot_get_theme_settings() {
  return array(
    'display_global_nav' => FALSE,
    'short_name_for_full_episodes' => TRUE,
    'videos_all_videos_filter' => FALSE,
    'videos_season_filters' => TRUE,
    'character_bios_remove_video_tags' => TRUE,
    'sections_use_ajax' => FALSE,
    'videos_full_episode_sort_order' => 'ASC',
    'characters_homepage_present' => TRUE,
  );
}

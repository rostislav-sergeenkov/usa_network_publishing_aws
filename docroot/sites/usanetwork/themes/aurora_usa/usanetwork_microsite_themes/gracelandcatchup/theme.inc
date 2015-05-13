<?php

/**
 * Implements hook usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_registry_variables().
 */
function usanetwork_microsite_gracelandcatchup_get_theme_registry_variables() {
  $subtheme_path = drupal_get_path('theme', 'aurora_usa') . '/usanetwork_microsite_themes/gracelandcatchup/templates';

  return array(
    'usanetwork_microsite_gracelandcatchup' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup',
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
    'usanetwork_microsite_gracelandcatchup_page_home' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-home',
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
    'usanetwork_microsite_gracelandcatchup_page_about' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-about',
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
    'usanetwork_microsite_gracelandcatchup_page_characters' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-characters',
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
    'usanetwork_microsite_gracelandcatchup_page_galleries' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-galleries',
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
    'usanetwork_microsite_gracelandcatchup_page_games' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-games',
      'path' => $subtheme_path,
      'variables' => array(
        'page' => array(
          'quiz_html' => NULL,
          'nid' => NULL,
        ),
      ),
    ),
    'usanetwork_microsite_gracelandcatchup_page_quizzes' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-quizzes',
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
    'usanetwork_microsite_gracelandcatchup_page_videos' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-videos',
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
    'usanetwork_microsite_gracelandcatchup_video_desc' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-video-desc',
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
    'usanetwork_microsite_gracelandcatchup_page_episodes' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-episodes',
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
    'usanetwork_microsite_gracelandcatchup_page_timeline' => array(
      'template' => 'usanetwork-microsite-gracelandcatchup-page-timeline',
      'path' => $subtheme_path,
      'variables' => array(
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
function usanetwork_microsite_gracelandcatchup_get_theme_includes() {
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  $site_theme_path = $theme_path . '/usanetwork_microsite_themes/gracelandcatchup';
  $module_path = drupal_get_path('module', 'usanetwork_microsite');
  $mpx_video_path = drupal_get_path('module', 'usanetwork_mpx_video');

  return array(
    'css' => array(
//      $module_path . '/css/jquery.bxslider.css',
//      $theme_path . '/usanetwork_microsite_themes/gracelandcatchup/css/ms_characters_styles.css',
      $site_theme_path . '/css/fonts.css',
      $site_theme_path . '/css/ms_styles.css',
      $site_theme_path . '/css/ms_home.css',
      $site_theme_path . '/css/ms_videos.css',
      $site_theme_path . '/css/ms_timeline.css',
      $site_theme_path . '/css/ms_characters.css',
      $site_theme_path . '/css/trivia.css',
      $site_theme_path . '/css/ms_quizzes.css',
      $site_theme_path . '/css/counter.css',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.css',
    ),
    'js' => array(
/*
      $site_theme_path . '/js/microsite_flexslider.js',
      $site_theme_path . '/js/microsite_carousel.js',
      $site_theme_path . '/js/microsite_gallery_carousel.js',
      $site_theme_path . '/js/microsite_characters.js',
      $site_theme_path . '/js/microsite_characters_bxslider.js',
*/
      $module_path . '/js/jquery.bxslider.min.js',
      $module_path . '/js/jquery.waypoints.min.js', // checks for element scrolled into view
      $module_path . '/js/waypoints_shortcuts/inview.min.js', // part of waypoints for checking for element scrolled into view
      $site_theme_path . '/js/ms_graceland_cu.js',
      $site_theme_path . '/js/ms_global.js',
      $site_theme_path . '/js/ms_videos.js',
      $site_theme_path . '/js/ms_characters.js',
      $site_theme_path . '/js/ms_quizzes.js',
      $site_theme_path . '/js/date.js',
      $site_theme_path . '/js/counter.rf.js',
      $site_theme_path . '/js/ms_video_endcard.js',
      //$module_path . '/js/usanetwork_video_endcard.js',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.js',
    ),
  );
}

/**
 * Return array with theme settings for gracelandcatchup theme.
 * This settings override defaults or it allow add new setting for current
 * instance of microsite.
 */
function usanetwork_microsite_gracelandcatchup_get_theme_settings() {
  return array(
    'display_global_nav' => FALSE,
    'short_name_for_full_episodes' => TRUE,
    'videos_all_videos_filter' => FALSE,
    'videos_season_filters' => TRUE,
    'character_bios_remove_video_tags' => TRUE,
  );
}

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
      ),
    ),
    'usanetwork_microsite_mrrobot_page_home' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-home',
      'path' => $subtheme_path,
      'variables' => array(
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
        'pages' => array(
          'html' => NULL,
        ),
      ),
    ),
    'usanetwork_microsite_mrrobot_page_videos' => array(
      'template' => 'usanetwork-microsite-mrrobot-page-videos',
      'path' => $subtheme_path,
      'variables' => array(
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
  );
}

/**
 * Returns a list of theme-oriented JS and CSS files. The function name should be next:
 * usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_includes().
 */
function usanetwork_microsite_mrrobot_get_theme_includes() {
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  $module_path = drupal_get_path('module', 'usanetwork_microsite');
  $mpx_video_path = drupal_get_path('module', 'usanetwork_mpx_video');

  return array(
    'js' => array(
/*
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_characters_bxslider.js',
*/
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_global.js',
      $module_path . '/js/jquery.bxslider.min.js',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_flexslider.js',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_carousel.js',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_gallery_carousel.js',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_galleries_bxslider.js',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_characters.js',
/*
      $theme_path . '/usanetwork_microsite_themes/mrrobot/js/microsite_episodes.js',
*/
      $module_path . '/js/usanetwork_video_endcard.js',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.js',
    ),
    'css' => array(
      $module_path . '/css/jquery.bxslider.css',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/ms_style.css',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/mrrobot_styles.css',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/ms_galleries_styles.css',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/ms_characters_styles.css',
/*
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/ms_episodes.css',
      $theme_path . '/usanetwork_microsite_themes/mrrobot/css/trivia.css',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.css',
*/
    ),
  );
}

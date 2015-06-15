<?php

/**
 * Implements hook usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_registry_variables().
 */
function usanetwork_microsite_suitssocialrecaps_get_theme_registry_variables() {
  $subtheme_path = drupal_get_path('theme', 'aurora_usa') . '/usanetwork_microsite_themes/suitssocialrecaps/templates';

  return array(
    'usanetwork_microsite_suitssocialrecaps' => array(
      'template' => 'usanetwork-microsite-suitssocialrecaps',
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
    'usanetwork_microsite_suitssocialrecaps_page_videos' => array(
      'template' => 'usanetwork-microsite-suitssocialrecaps-page-videos',
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
    'usanetwork_microsite_suitssocialrecaps_video_desc' => array(
      'template' => 'usanetwork-microsite-suitssocialrecaps-video-desc',
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
  );
}

/**
 * Returns a list of theme-oriented JS and CSS files. The function name should be next:
 * usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_includes().
 */
function usanetwork_microsite_suitssocialrecaps_get_theme_includes() {
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  $site_default_theme_path = $theme_path . '/usanetwork_microsite_themes/default';
  $site_theme_path = $theme_path . '/usanetwork_microsite_themes/suitssocialrecaps';
  $module_path = drupal_get_path('module', 'usanetwork_microsite');
  $mpx_video_path = drupal_get_path('module', 'usanetwork_mpx_video');

  return array(
    'css' => array(
      $site_default_theme_path . '/css/fonts.css',
      $site_theme_path . '/css/ms_styles.css',
      $site_default_theme_path . '/css/ms_gigya_share.css',
      $site_default_theme_path . '/css/ms_videos.css',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.css',
    ),
    'js' => array(
      '/sites/usanetwork/modules/contrib/gigya/js/gigya_sharebar.js',
      $site_theme_path . '/js/ms_site.js',
      $site_theme_path . '/js/ms_global.js',
      $site_default_theme_path . '/js/ms_videos.js',
      $site_default_theme_path . '/js/ms_video_endcard.js',
      drupal_get_path('module', 'usanetwork_video_mobile') . '/usanetwork_video_mobile.js',
    ),
  );
}

/**
 * Return array with theme settings for suitssocialrecaps theme.
 * This settings override defaults or it allow add new setting for current
 * instance of microsite.
 */
function usanetwork_microsite_suitssocialrecaps_get_theme_settings() {
  return array(
    'display_global_nav' => FALSE,
    'consumptionator_menu' => 'catchall_page',
    'short_name_for_full_episodes' => TRUE,
    'videos_all_videos_filter' => FALSE,
    'videos_season_filters' => FALSE,
    'sections_use_ajax' => FALSE,
  );
}

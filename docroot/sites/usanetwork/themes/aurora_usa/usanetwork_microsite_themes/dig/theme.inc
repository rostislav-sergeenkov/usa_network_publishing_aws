<?php

/**
 * Implements hook usanetwork_microsite_MICROSITE_SUB_THEME_NAME_get_theme_registry_variables().
 */
function usanetwork_microsite_dig_get_theme_registry_variables() {
  $subtheme_path = drupal_get_path('theme', 'aurora_usa') . '/usanetwork_microsite_themes/dig/templates';

  return array(
    'usanetwork_microsite_dig' => array(
      'template' => 'usanetwork-microsite-dig',
      'path' => $subtheme_path,
      'variables' => array(
        'classes' => NULL,
        'sections' => array(),
        'tune_in' => NULL,
        'sections_navlinks' => array(),
      ),
    ),
    'usanetwork_microsite_dig_page_home' => array(
      'template' => 'usanetwork-microsite-dig-page-home',
      'path' => $subtheme_path,
      'variables' => array(
        'aspots' => array(),
        'featured' => array(),
      ),
    ),
    'usanetwork_microsite_dig_page_about' => array(
      'template' => 'usanetwork-microsite-dig-page-about',
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
    'usanetwork_microsite_dig_page_characters' => array(
      'template' => 'usanetwork-microsite-dig-page-characters',
      'path' => $subtheme_path,
      'variables' => array(
        'people' => array(
          0 => array(
            'id' => NULL,
            'title' => NULL,
            'description' => NULL,
/*
            'quotes' => array(
              0 => array(
                'quote' => NULL,
                'source' => NULL,
              ),
            ),
*/
          ),
        ),
        'characters_navigation' => NULL,
      ),
    ),
    'usanetwork_microsite_dig_page_galleries' => array(
      'template' => 'usanetwork-microsite-dig-page-galleries',
      'path' => $subtheme_path,
      'variables' => array(
        'background_url' => NULL,
        'galleries' => array(),
        'episodic_galleries' => NULL,
        'character_galleries' => NULL,
      ),
    ),
    'usanetwork_microsite_dig_page_games' => array(
      'template' => 'usanetwork-microsite-dig-page-games',
      'path' => $subtheme_path,
      'variables' => array(
        'pages' => array(
          'html' => NULL,
        ),
      ),
    ),
    'usanetwork_microsite_dig_page_videos' => array(
      'template' => 'usanetwork-microsite-dig-page-videos',
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
    'usanetwork_microsite_dig_video_desc' => array(
      'template' => 'usanetwork-microsite-dig-video-desc',
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
function usanetwork_microsite_dig_get_theme_includes() {
  $theme_path = drupal_get_path('theme', 'aurora_usa');
  $module_path = drupal_get_path('module', 'usanetwork_microsite');
  $mpx_video_path = drupal_get_path('module', 'usanetwork_mpx_video');

  return array(
    'js' => array(
        'http://pdk.theplatform.com/pdk/tpPdkController.js',
//      $theme_path . '/javascripts/video-dropdowns.js',
//      $mpx_video_path . '/js/usanetwork_mpx_video_ajax.js',
//      $theme_path . '/javascripts/jquery.carouFredSel.min.js',
      $theme_path . '/usanetwork_microsite_themes/dig/js/microsite_flexslider.js',
      $theme_path . '/usanetwork_microsite_themes/dig/js/microsite_carousel.js',
//      $theme_path . '/usanetwork_microsite_themes/dig/js/jquery.fullPage.js',
      $theme_path . '/usanetwork_microsite_themes/dig/js/jquery.mCustomScrollbar.concat.min.js',
//      $theme_path . '/javascripts/jquery.touchSwipe.min.js',
      $theme_path . '/usanetwork_microsite_themes/dig/js/microsite_gallery_carousel.js',
      $module_path . '/js/usanetwork_video_endcard.js',
    ),
    'css' => array(
      $theme_path . '/usanetwork_microsite_themes/dig/css/ms_style.css',
      $theme_path . '/usanetwork_microsite_themes/dig/css/jquery.mCustomScrollbar.css',
      $theme_path . '/usanetwork_microsite_themes/dig/css/trivia.css'
    ),
  );
}

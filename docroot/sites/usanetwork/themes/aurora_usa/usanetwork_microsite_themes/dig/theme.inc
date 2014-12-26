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
        'bspots' => NULL,
        'cspots' => NULL,
        'promo_carousel' => array(),
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
            'quotes' => array(
              0 => array(
                'quote' => NULL,
                'source' => NULL,
              ),
            ),
          ),
        ),
        'characters_navigation' => NULL,
      ),
    ),
    'usanetwork_microsite_dig_page_galleries' => array(
      'template' => 'usanetwork-microsite-dig-page-galleries',
      'path' => $subtheme_path,
      'variables' => array(

      ),
    ),
    'usanetwork_microsite_dig_page_games' => array(
      'template' => 'usanetwork-microsite-dig-page-games',
      'path' => $subtheme_path,
      'variables' => array(),
    ),
    'usanetwork_microsite_dig_page_videos' => array(
      'template' => 'usanetwork-microsite-dig-page-videos',
      'path' => $subtheme_path,
      'variables' => array(),
    ),
  );
}

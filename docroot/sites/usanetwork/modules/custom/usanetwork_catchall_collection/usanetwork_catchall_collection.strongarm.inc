<?php
/**
 * @file
 * usanetwork_catchall_collection.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_catchall_collection_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_page_collection_catchall_page_content_types';
  $strongarm->value = array(
    'catchall_page' => 'catchall_page',
    'usanetwork_aspot' => 0,
    'global_nav_image' => 0,
    'usa_homepage' => 0,
    'media_gallery' => 0,
    'person' => 0,
    'usanetwork_promo' => 0,
    'usanetwork_promo_iframe' => 0,
    'snipe' => 0,
    'usanetwork_static_page' => 0,
    'tv_episode' => 0,
    'tv_season' => 0,
    'tv_show' => 0,
    'usa_video' => 0,
    'usa_tve_video' => 0,
    'webform' => 0,
  );
  $export['usanetwork_page_collection_catchall_page_content_types'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_page_collection_content_types';
  $strongarm->value = array(
    'catchall_page' => 'catchall_page',
    'usanetwork_aspot' => 0,
    'global_nav_image' => 0,
    'usa_homepage' => 0,
    'media_gallery' => 0,
    'person' => 0,
    'usanetwork_promo' => 0,
    'usanetwork_promo_iframe' => 0,
    'snipe' => 0,
    'usanetwork_static_page' => 0,
    'tv_episode' => 0,
    'tv_season' => 0,
    'tv_show' => 0,
    'usa_video' => 0,
    'usa_tve_video' => 0,
    'webform' => 0,
  );
  $export['usanetwork_page_collection_content_types'] = $strongarm;

  return $export;
}

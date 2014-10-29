<?php
/**
 * @file
 * usanetwork_pathauto.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_pathauto_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_ignore_words';
  $strongarm->value = '';
  $export['pathauto_ignore_words'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_catchall_page_pattern';
  $strongarm->value = '';
  $export['pathauto_node_catchall_page_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_media_gallery_pattern';
  $strongarm->value = '[node:field-show:field-pathauto-alias]/photos/[node:title]';
  $export['pathauto_node_media_gallery_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_person_pattern';
  $strongarm->value = '[node:field_show]/cast/[node:title]';
  $export['pathauto_node_person_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_post_pattern';
  $strongarm->value = '[node:field_show]/blog/[node:field_blog]/[node:title]';
  $export['pathauto_node_post_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_tv_episode_pattern';
  $strongarm->value = '[node:field_show]/episodes/[node:field_episode_number]-[node:field_episode_number]';
  $export['pathauto_node_tv_episode_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_tv_season_pattern';
  $strongarm->value = '[node:field_show]/seasons/[node:field_season_id]-[node:title]';
  $export['pathauto_node_tv_season_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_tv_show_pattern';
  $strongarm->value = '[node:field_pathauto_alias]';
  $export['pathauto_node_tv_show_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usanetwork_aspot_pattern';
  $strongarm->value = 'aspot/[node:title]';
  $export['pathauto_node_usanetwork_aspot_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usanetwork_promo_pattern';
  $strongarm->value = 'promo/[node:title]';
  $export['pathauto_node_usanetwork_promo_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usanetwork_static_page_pattern';
  $strongarm->value = '';
  $export['pathauto_node_usanetwork_static_page_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usa_homepage_pattern';
  $strongarm->value = 'homepage/[node:title]';
  $export['pathauto_node_usa_homepage_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usa_tve_video_pattern';
  $strongarm->value = '[node:field_show]/old_videos/[node:title]';
  $export['pathauto_node_usa_tve_video_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_usa_video_pattern';
  $strongarm->value = '[node:field_show]/old_videos/[node:title]';
  $export['pathauto_node_usa_video_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_blog_pattern';
  $strongarm->value = '[term:field-show:field-pathauto-alias]/blog/[term:name]';
  $export['pathauto_taxonomy_term_blog_pattern'] = $strongarm;

  return $export;
}

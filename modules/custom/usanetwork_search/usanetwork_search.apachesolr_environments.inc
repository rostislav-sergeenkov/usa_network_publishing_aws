<?php
/**
 * @file
 * usanetwork_search.apachesolr_environments.inc
 */

/**
 * Implements hook_apachesolr_environments().
 */
function usanetwork_search_apachesolr_environments() {
  $export = array();

  $environment = new stdClass();
  $environment->api_version = 1;
  $environment->env_id = 'acquia_search_server_1';
  $environment->name = 'Acquia Search';
  $environment->url = 'http://search.acquia.com/solr/CGJK-32328';
  $environment->service_class = 'AcquiaSearchService';
  $environment->conf = array(
    'apachesolr_search_changed_boost' => '0:0',
    'apachesolr_search_comment_boost' => '0:0',
    'apachesolr_search_date_boost' => '0:0',
    'apachesolr_search_promote_boost' => '0',
    'apachesolr_search_sticky_boost' => '0',
    'apachesolr_search_type_boosts' => array(
      'usanetwork_aspot' => '0',
      'catchall_page' => '0',
      'character_profile' => '0',
      'usa_homepage' => '0',
      'media_gallery' => '0',
      'movie' => '0',
      'person' => '0',
      'usanetwork_promo' => '0',
      'usanetwork_static_page' => '0',
      'tv_episode' => '0',
      'tv_season' => '0',
      'tv_show' => '8.0',
      'usa_video' => '5.0',
      'usa_tve_video' => '0',
      'webform' => '0',
    ),
    'field_bias' => array(
      'content' => '1.0',
      'label' => '5.0',
      'tags_a' => '0',
      'tags_h1' => '5.0',
      'tags_h2_h3' => '3.0',
      'tags_h4_h5_h6' => '2.0',
      'tags_inline' => '1.0',
      'taxonomy_names' => '2.0',
      'tos_content_extra' => '0.1',
      'tos_name' => '3.0',
      'ts_comments' => '0.5',
    ),
  );
  $environment->index_bundles = array(
    'node' => array(
      0 => 'catchall_page',
      1 => 'media_gallery',
      2 => 'person',
      3 => 'tv_episode',
      4 => 'tv_show',
      5 => 'usanetwork_static_page',
      6 => 'usa_video',
    ),
  );
  $export['acquia_search_server_1'] = $environment;

  return $export;
}

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
  $environment->url = 'http://search.acquia.com/solr/GMWX-32384';
  $environment->service_class = 'AcquiaSearchService';
  $environment->conf = array(
    'apachesolr_index_last' => array(
      'collection' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'field_collection_item' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'node' => array(
        'last_changed' => '1390229600',
        'last_entity_id' => '42934',
      ),
      'queues' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'queues_type' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'redirect' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'file' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'taxonomy_term' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'taxonomy_vocabulary' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'user' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'wysiwyg_profile' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'state_flow_history_entity' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
    ),
    'apachesolr_index_updated' => 1390229753,
    'apachesolr_last_optimize' => 1390211968,
    'apachesolr_read_only' => '0',
    'apachesolr_search_changed_boost' => '0:0',
    'apachesolr_search_comment_boost' => '0:0',
    'apachesolr_search_date_boost' => '0:0',
    'apachesolr_search_promote_boost' => '0',
    'apachesolr_search_sticky_boost' => '0',
    'apachesolr_search_type_boosts' => array(
      'usanetwork_aspot' => '0',
      'catchall_page' => '0',
      'global_nav_image' => '0',
      'usa_homepage' => '0',
      'media_gallery' => '1.0',
      'person' => '0',
      'usanetwork_promo' => '0',
      'usanetwork_promo_iframe' => '0',
      'snipe' => '0',
      'usanetwork_static_page' => '0',
      'tv_episode' => '0',
      'tv_season' => '0',
      'tv_show' => '21.0',
      'usa_video' => '8.0',
      'usa_tve_video' => '8.0',
      'webform' => '0',
    ),
    'field_bias' => array(
      'bm_field_usa_autoscroll' => '0',
      'bs_field_usa_autoscroll' => '0',
      'bs_promote' => '0',
      'bs_status' => '0',
      'bs_sticky' => '0',
      'bs_translate' => '0',
      'bundle' => '0',
      'bundle_name' => '0',
      'content' => '1.0',
      'dm_field_original_air_date' => '0',
      'dm_field_original_air_date_end' => '0',
      'ds_changed' => '0',
      'ds_created' => '0',
      'ds_last_comment_or_change' => '0',
      'entity_id' => '0',
      'entity_type' => '0',
      'hash' => '0',
      'id' => '0',
      'is_tnid' => '0',
      'is_uid' => '0',
      'itm_field_usa_slide_speed' => '0',
      'its_field_usa_slide_speed' => '0',
      'label' => '5.0',
      'path' => '0',
      'path_alias' => '0',
      'site' => '0',
      'sm_field_person' => '0',
      'sm_field_season' => '0',
      'sm_field_show' => '0',
      'sort_label' => '0',
      'sort_language' => '0',
      'sort_name' => '0',
      'sort_name_formatted' => '0',
      'spell' => '0',
      'ss_language' => '0',
      'ss_name' => '0',
      'ss_name_formatted' => '0',
      'tags_a' => '0',
      'tags_h1' => '5.0',
      'tags_h2_h3' => '3.0',
      'tags_h4_h5_h6' => '2.0',
      'tags_inline' => '1.0',
      'taxonomy_names' => '2.0',
      'timestamp' => '0',
      'tos_content_extra' => '0.1',
      'tos_name' => '3.0',
      'tos_name_formatted' => '0',
      'ts_comments' => '0.5',
      'url' => '0',
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
      6 => 'usa_tve_video',
      7 => 'usa_video',
    ),
  );
  $export['acquia_search_server_1'] = $environment;

  return $export;
}

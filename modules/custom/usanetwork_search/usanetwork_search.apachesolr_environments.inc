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
      'comment' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'field_collection_item' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
      ),
      'node' => array(
        'last_changed' => 0,
        'last_entity_id' => 0,
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
    ),
    'apachesolr_index_updated' => 1377258301,
    'apachesolr_last_optimize' => 1377184501,
    'apachesolr_read_only' => '0',
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

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
  $environment->env_id = 'aws_solr_search';
  $environment->name = 'aws solr search';
  $environment->url = 'http://stage-awssearchsolr.apps.nbcuni.com/solr/usanetwork_dev';
  $environment->service_class = '';
  $environment->conf = array(
    'apachesolr_direct_commit' => 0,
    'apachesolr_read_only' => '0',
    'apachesolr_soft_commit' => 0,
  );
  $environment->index_bundles = array(
    'node' => array(
      0 => 'catchall_page',
      1 => 'media_gallery',
      2 => 'person',
      3 => 'post',
      4 => 'tv_episode',
      5 => 'tv_show',
      6 => 'usanetwork_static_page',
    ),
  );
  $export['aws_solr_search'] = $environment;

  return $export;
}

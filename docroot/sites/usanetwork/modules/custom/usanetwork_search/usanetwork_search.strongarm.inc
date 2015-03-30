<?php
/**
 * @file
 * usanetwork_search.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_search_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'acquia_search_derived_key_salt';
  $strongarm->value = '35ca8413f24dd5d175321b87c65fbd9b';
  $export['acquia_search_derived_key_salt'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'acquia_search_version';
  $strongarm->value = '7.x-2.14';
  $export['acquia_search_version'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_default_environment';
  $strongarm->value = 'acquia_search_server_1';
  $export['apachesolr_default_environment'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_catchall_page';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_catchall_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_media_gallery';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_media_gallery'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_person';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_person'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_tv_episode';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_tv_show';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_usanetwork_static_page';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_usanetwork_static_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_usa_tve_video';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_usa_tve_video'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_exclude_node_enable_usa_video';
  $strongarm->value = 1;
  $export['apachesolr_exclude_node_enable_usa_video'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_index_updated';
  $strongarm->value = array(
    'acquia_search_server_1' => 1377258301,
  );
  $export['apachesolr_index_updated'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_last_optimize';
  $strongarm->value = 1377184501;
  $export['apachesolr_last_optimize'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_search_default_search_page';
  $strongarm->value = 'core_search';
  $export['apachesolr_search_default_search_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_search_mlt_blocks';
  $strongarm->value = array(
    'mlt-001' => array(
      'name' => 'More like this',
      'num_results' => '5',
      'mlt_fl' => array(
        'label' => 'label',
        'taxonomy_names' => 'taxonomy_names',
      ),
      'mlt_env_id' => 'solr',
      'mlt_mintf' => '1',
      'mlt_mindf' => '1',
      'mlt_minwl' => '3',
      'mlt_maxwl' => '15',
      'mlt_maxqt' => '20',
      'mlt_type_filters' => array(),
      'mlt_custom_filters' => '',
      'delta' => 'mlt-001',
    ),
  );
  $export['apachesolr_search_mlt_blocks'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'apachesolr_site_hash';
  $strongarm->value = 'amkpk6';
  $export['apachesolr_site_hash'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_active_modules';
  $strongarm->value = array(
    'ds_search' => 0,
    0 => 'apachesolr_search',
  );
  $export['search_active_modules'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_default_module';
  $strongarm->value = 'apachesolr_search';
  $export['search_default_module'] = $strongarm;

  return $export;
}

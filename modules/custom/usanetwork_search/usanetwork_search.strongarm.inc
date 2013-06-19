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
  $strongarm->name = 'ds_search_node_limit';
  $strongarm->value = '10';
  $export['ds_search_node_limit'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ds_search_path';
  $strongarm->value = 'content';
  $export['ds_search_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ds_search_show_title';
  $strongarm->value = 1;
  $export['ds_search_show_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ds_search_type';
  $strongarm->value = 'apachesolr_search';
  $export['ds_search_type'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ds_search_variables';
  $strongarm->value = 'none';
  $export['ds_search_variables'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ds_search_view_mode';
  $strongarm->value = 'search_result';
  $export['ds_search_view_mode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_active_modules';
  $strongarm->value = array(
    'ds_search' => 'ds_search',
    'apachesolr_search' => 0,
    'node' => 0,
    'user' => 0,
  );
  $export['search_active_modules'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_default_module';
  $strongarm->value = 'ds_search';
  $export['search_default_module'] = $strongarm;

  return $export;
}

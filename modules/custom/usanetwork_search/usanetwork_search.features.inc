<?php
/**
 * @file
 * usanetwork_search.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_search_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "apachesolr" && $api == "apachesolr_environments") {
    return array("version" => "1");
  }
  if ($module == "apachesolr_search" && $api == "apachesolr_search_defaults") {
    return array("version" => "3");
  }
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_context_default_contexts_alter().
 */
function usanetwork_search_context_default_contexts_alter(&$data) {
  if (isset($data['usanetwork_sitewide'])) {
    $data['usanetwork_sitewide']->reactions['block']['blocks']['search-form'] = array(
      'module' => 'search',
      'delta' => 'form',
      'region' => 'search',
      'weight' => -10,
    ); /* WAS: '' */
  }
}

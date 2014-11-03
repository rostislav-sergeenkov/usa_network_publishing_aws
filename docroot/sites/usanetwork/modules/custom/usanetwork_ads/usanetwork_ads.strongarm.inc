<?php
/**
 * @file
 * usanetwork_ads.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_ads_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'sitecatalyst_js_file_location';
  $strongarm->value = '/sites/usanetwork/modules/tve/tve_analytics/js/s_code.js ';
  $export['sitecatalyst_js_file_location'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_ads_adobe_tagloader_settings';
  $strongarm->value = array(
    'tag_container_dc' => 'd2',
    'tag_container_namespace' => 'nbcuniversal',
    'tag_container_name' => 'USANetwork',
  );
  $export['usanetwork_ads_adobe_tagloader_settings'] = $strongarm;

  return $export;
}

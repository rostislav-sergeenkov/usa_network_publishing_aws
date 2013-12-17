<?php
/**
 * @file
 * usanetwork_tve_video.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_tve_video_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'sitecatalyst_tve_report_suite_id';
  $strongarm->value = 'nbcutve';
  $export['sitecatalyst_tve_report_suite_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_adobe_pass_requestor_id';
  $strongarm->value = 'usa';
  $export['tve_adobe_pass_requestor_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_adobe_pass_resource_id';
  $strongarm->value = 'usa';
  $export['tve_adobe_pass_resource_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_k2_api_url';
  $strongarm->value = 'http://staging159.viewerlink.tv/';
  $export['tve_k2_api_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_brand_id';
  $strongarm->value = 'usa';
  $export['tve_mvpd_brand_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_service';
  $strongarm->value = 'http://mvpd-admin.nbcuni.com/mvpd/service';
  $export['tve_mvpd_service'] = $strongarm;

  return $export;
}

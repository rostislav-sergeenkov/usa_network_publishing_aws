<?php
/**
 * @file
 * usanetwork_mps.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_mps_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'mps_site_override';
  $strongarm->value = 'usa-web';
  $export['mps_site_override'] = $strongarm;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_redirect.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_redirect_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_redirects';
  $strongarm->value = array(
    'general' => array(
      'path' => 'video',
    ),
    'mpx' => array(
      'enable' => 0,
      'path' => 'mpx',
    ),
    'guid' => array(
      'enable' => 1,
      'path' => 'guid',
    ),
    'pid' => array(
      'enable' => 1,
      'path' => 'pid',
    ),
  );
  $export['tve_redirects'] = $strongarm;

  return $export;
}

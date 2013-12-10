<?php
/**
 * @file
 * usanetwork_mpx_video.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_mpx_video_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_mpx_video_1_pattern';
  $strongarm->value = '[file:field_show]/videos/[file:name]';
  $export['pathauto_file_mpx_video_1_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_mpx_video_2_pattern';
  $strongarm->value = '[file:field_show]/videos/[file:name]';
  $export['pathauto_file_mpx_video_2_pattern'] = $strongarm;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_pathauto.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_pathauto_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_character_profile_pattern';
  $strongarm->value = '[node:field_show]/cast/[node:field_person]/[node:title]';
  $export['pathauto_node_character_profile_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_person_pattern';
  $strongarm->value = '[node:field_show]/cast/[node:title]';
  $export['pathauto_node_person_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_tv_show_pattern';
  $strongarm->value = '[node:title]';
  $export['pathauto_node_tv_show_pattern'] = $strongarm;

  return $export;
}

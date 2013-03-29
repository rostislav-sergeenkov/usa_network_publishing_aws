<?php
/**
 * @file
 * usanetwork_strongarm.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_strongarm_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_on_now_schedule';
  $strongarm->value = 'http://www.usanetwork.com/app/json/xmltojson.php?xmlPath=/schedule.xml&jsVar=usa_homeSchedule';
  $export['usanetwork_on_now_schedule'] = $strongarm;

  return $export;
}

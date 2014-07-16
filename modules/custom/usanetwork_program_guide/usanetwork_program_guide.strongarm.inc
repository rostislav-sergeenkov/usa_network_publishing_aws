<?php
/**
 * @file
 * usanetwork_program_guide.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_program_guide_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'program_guide_data_url';
  $strongarm->value = 'http://feed.entertainment.tv.theplatform.com/f/HNK2IC/prod_usa_listing?form=json&range=1-*&sort=startTime';
  $export['program_guide_data_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'program_guide_delete_after_interval';
  $strongarm->value = '30';
  $export['program_guide_delete_after_interval'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'program_guide_update_interval';
  $strongarm->value = '1';
  $export['program_guide_update_interval'] = $strongarm;

  return $export;
}

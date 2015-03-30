<?php
/**
 * @file
 * usanetwork_menu.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_menu_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'special_menu_items_nolink_tag';
  $strongarm->value = '<a>';
  $export['special_menu_items_nolink_tag'] = $strongarm;

  return $export;
}

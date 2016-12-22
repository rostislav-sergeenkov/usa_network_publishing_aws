<?php
/**
 * @file
 * usanetwork_episodes.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_episodes_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'cover_image';
  $ds_view_mode->label = 'cover_image';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['cover_image'] = $ds_view_mode;

  return $export;
}

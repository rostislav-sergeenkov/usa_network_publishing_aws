<?php
/**
 * @file
 * usanetwork_ds.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_ds_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'block_cover_title';
  $ds_view_mode->label = 'block_cover_title';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['block_cover_title'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'block_cover_title_lg';
  $ds_view_mode->label = 'block_cover_title_lg';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['block_cover_title_lg'] = $ds_view_mode;

  return $export;
}

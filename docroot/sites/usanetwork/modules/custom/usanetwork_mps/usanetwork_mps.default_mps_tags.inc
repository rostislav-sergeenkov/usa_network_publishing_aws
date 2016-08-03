<?php
/**
 * @file
 * usanetwork_mps.default_mps_tags.inc
 */

/**
 * Implements hook_default_mps_block().
 */
function usanetwork_mps_default_mps_block() {
  $export = array();

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'logohomecard';
  $block->block_name = 'logohomecard';
  $export['logohomecard'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'logoshowcard';
  $block->block_name = 'logoshowcard';
  $export['logoshowcard'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'logosponsor';
  $block->block_name = 'logosponsor';
  $export['logosponsor'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'midbanner';
  $block->block_name = 'midbanner';
  $export['midbanner'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'showcardad';
  $block->block_name = 'showcardad';
  $export['showcardad'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'topbanner';
  $block->block_name = 'topbanner';
  $export['topbanner'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'topbox';
  $block->block_name = 'topbox';
  $export['topbox'] = $block;

  $block = new stdClass();
  $block->disabled = FALSE; /* Edit this to true to make a default block disabled initially */
  $block->api_version = 1;
  $block->machine_name = 'topthreelogo';
  $block->block_name = 'topthreelogo';
  $export['topthreelogo'] = $block;

  return $export;
}

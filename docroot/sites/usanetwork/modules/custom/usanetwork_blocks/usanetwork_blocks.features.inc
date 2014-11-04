<?php
/**
 * @file
 * usanetwork_blocks.features.inc
 */

/**
 * Implements hook_views_api().
 */
function usanetwork_blocks_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_usanetwork_blocks_defaults().
 */
function usanetwork_blocks_usanetwork_blocks_defaults() {
$usanetwork_blocks = array();
  $usanetwork_blocks['Burn Notice'] = array(
  'title' => 'Burn Notice',
  'syndicated' => TRUE,
);
  $usanetwork_blocks['Covert Affairs'] = array(
  'title' => 'Covert Affairs',
  'syndicated' => FALSE,
);
  $usanetwork_blocks['Graceland'] = array(
  'title' => 'Graceland',
  'syndicated' => FALSE,
);
  $usanetwork_blocks['Necessary Roughness'] = array(
  'title' => 'Necessary Roughness',
  'syndicated' => TRUE,
);
  $usanetwork_blocks['Psych'] = array(
  'title' => 'Psych',
  'syndicated' => TRUE,
);
  $usanetwork_blocks['Royal Pains'] = array(
  'title' => 'Royal Pains',
  'syndicated' => FALSE,
);
  $usanetwork_blocks['Suits'] = array(
  'title' => 'Suits',
  'syndicated' => FALSE,
);
  $usanetwork_blocks['White Collar'] = array(
  'title' => 'White Collar',
  'syndicated' => FALSE,
);
return $usanetwork_blocks;
}

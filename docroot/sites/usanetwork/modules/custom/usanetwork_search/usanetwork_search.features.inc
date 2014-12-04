<?php
/**
 * @file
 * usanetwork_search.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_search_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "apachesolr" && $api == "apachesolr_environments") {
    return array("version" => "1");
  }
  if ($module == "apachesolr_search" && $api == "apachesolr_search_defaults") {
    return array("version" => "3");
  }
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_field_instances_alter().
 */
function usanetwork_search_field_default_field_instances_alter(&$data) {
  if (isset($data['node-catchall_page-field_usa_pc_afterall_content'])) {
    $data['node-catchall_page-field_usa_pc_afterall_content']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 4,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_css'])) {
    $data['node-catchall_page-field_usa_pc_css']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 3,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_css_inline'])) {
    $data['node-catchall_page-field_usa_pc_css_inline']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 2,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_file_folder'])) {
    $data['node-catchall_page-field_usa_pc_file_folder']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 6,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_files'])) {
    $data['node-catchall_page-field_usa_pc_files']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 7,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_images'])) {
    $data['node-catchall_page-field_usa_pc_images']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 11,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_javascript'])) {
    $data['node-catchall_page-field_usa_pc_javascript']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 10,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_javascript_inline'])) {
    $data['node-catchall_page-field_usa_pc_javascript_inline']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 9,
    ); /* WAS: '' */
  }
  if (isset($data['node-catchall_page-field_usa_pc_overall_content'])) {
    $data['node-catchall_page-field_usa_pc_overall_content']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 8,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_large'])) {
    $data['node-tv_show-field_usa_tv_promo_large']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_rows'])) {
    $data['node-tv_show-field_usa_tv_promo_rows']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_promo_vids_label'])) {
    $data['node-tv_show-field_usa_tv_promo_vids_label']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
  if (isset($data['node-tv_show-field_usa_tv_show_color'])) {
    $data['node-tv_show-field_usa_tv_show_color']['display']['search_index'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 0,
    ); /* WAS: '' */
  }
}

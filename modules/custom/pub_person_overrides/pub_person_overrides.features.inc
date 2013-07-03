<?php
/**
 * @file
 * pub_person_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_person_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_person_overrides_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__person'])) {
    $data['field_bundle_settings_node__person']->value['view_modes']['block_cover_title'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['block_cover_title_lg'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['carousel_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['cast_carousel'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['follow_social'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['home_promo'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['home_promo_bspot'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['promo_teaser'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['search_index'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['search_result'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['vid_teaser_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['vid_teaser_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['vid_teaser_show_episode'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__person']->value['view_modes']['vid_teaser_show_general'] = array(
      'custom_settings' => FALSE,
    ); /* WAS: '' */
  }
}

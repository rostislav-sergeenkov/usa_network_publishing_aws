<?php
/**
 * @file
 * usanetwork_opengraph.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_opengraph_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_metatag_export_default_alter().
 */
function usanetwork_opengraph_metatag_export_default_alter(&$data) {
  if (isset($data['node:media_gallery'])) {
    $data['node:media_gallery']['config']['description'] = array(
      'value' => '[node:field_usa_og_description]',
    ); /* WAS: '' */
    $data['node:media_gallery']['config']['og:description'] = array(
      'value' => '[node:field_usa_og_description]',
    ); /* WAS: '' */
    $data['node:media_gallery']['config']['og:image']['value'] = '[node:field_usa_og_image]'; /* WAS: '[node:field_cover_item]' */
  }
  if (isset($data['node:person'])) {
    $data['node:person']['config']['description'] = array(
      'value' => '[node:field_usa_og_description]',
    ); /* WAS: '' */
    $data['node:person']['config']['og:description'] = array(
      'value' => '[node:field_usa_og_description]',
    ); /* WAS: '' */
    $data['node:person']['config']['og:image']['value'] = '[node:field_usa_og_image]'; /* WAS: '[node:field_person_cover_photo]' */
  }
}

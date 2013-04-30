<?php
/**
 * @file
 * usanetwork_pathauto.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_pathauto_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function usanetwork_pathauto_strongarm_alter(&$data) {
  if (isset($data['pathauto_node_media_gallery_pattern'])) {
    $data['pathauto_node_media_gallery_pattern']->value = '[node:field_show]/photos/[node:title]'; /* WAS: '[node:title]' */
  }
}

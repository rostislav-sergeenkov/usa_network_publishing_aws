<?php
/**
 * @file
 * usanetwork_comments.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_comments_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

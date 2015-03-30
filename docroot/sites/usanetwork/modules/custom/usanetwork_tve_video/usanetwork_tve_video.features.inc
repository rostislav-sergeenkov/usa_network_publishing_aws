<?php
/**
 * @file
 * usanetwork_tve_video.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_tve_video_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

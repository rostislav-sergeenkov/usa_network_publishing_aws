<?php
/**
 * @file
 * usanetwork_workbench.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_workbench_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "workbench_workflows" && $api == "workbench_workflows") {
    return array("version" => "1");
  }
}

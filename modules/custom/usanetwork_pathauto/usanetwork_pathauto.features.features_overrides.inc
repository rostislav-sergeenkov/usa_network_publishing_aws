<?php
/**
 * @file
 * usanetwork_pathauto.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_pathauto_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.pathauto_node_media_gallery_pattern.value"] = '[node:field_show]/photos/[node:title]';

 return $overrides;
}

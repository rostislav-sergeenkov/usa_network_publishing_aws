<?php
/**
 * @file
 * pub_tv_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_tv_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__tv_show.value|extra_fields|form|metatags|weight"] = '3';
  $overrides["variable.field_bundle_settings_node__tv_show.value|extra_fields|form|path|weight"] = '4';

 return $overrides;
}

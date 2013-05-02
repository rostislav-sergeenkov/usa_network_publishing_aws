<?php
/**
 * @file
 * usanetwork_files.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_files_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_file__image.value|extra_fields|display|file|thumb_tiny"] = array(
    'weight' => '0',
    'visible' => TRUE,
  );
  $overrides["variable.field_bundle_settings_file__image.value|view_modes|thumb_tiny"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

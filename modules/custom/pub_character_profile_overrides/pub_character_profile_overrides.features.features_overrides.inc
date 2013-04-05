<?php
/**
 * @file
 * pub_character_profile_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_character_profile_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__character_profile.value|view_modes|block_cover_title"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__character_profile.value|view_modes|full|custom_settings"] = TRUE;
  $overrides["variable.node_submitted_character_profile.value"] = 0;

 return $overrides;
}

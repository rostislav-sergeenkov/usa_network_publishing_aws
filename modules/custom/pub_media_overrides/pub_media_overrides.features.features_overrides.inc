<?php
/**
 * @file
 * pub_media_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_media_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__media_gallery.value|view_modes|block_cover_title"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

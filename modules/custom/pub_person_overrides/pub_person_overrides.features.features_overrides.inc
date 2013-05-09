<?php
/**
 * @file
 * pub_person_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_person_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|block_cover_title"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|block_cover_title_lg"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|cast_carousel"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|follow_social"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

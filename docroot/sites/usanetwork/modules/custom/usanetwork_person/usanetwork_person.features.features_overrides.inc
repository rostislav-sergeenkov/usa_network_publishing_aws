<?php
/**
 * @file
 * usanetwork_person.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_person_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_instance
  $overrides["field_instance.node-person-field_person_ms_background.settings|file_extensions"] = 'jpg jpeg png gif';

 return $overrides;
}

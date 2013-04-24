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

  // Exported overrides for: field_group
  $overrides["field_group.group_additional_information|node|person|form.data|children|3"] = 'field_character';

 return $overrides;
}

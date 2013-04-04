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

  // Exported overrides for: field_group
  $overrides["field_group.group_characters_information|node|character_profile|form.data|children|7"] = 'field_usa_character_thumb';

 return $overrides;
}

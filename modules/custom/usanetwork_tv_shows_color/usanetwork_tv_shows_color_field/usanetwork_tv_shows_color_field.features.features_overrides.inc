<?php
/**
 * @file
 * usanetwork_tv_shows_color_field.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_tv_shows_color_field_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_group
  $overrides["field_group.group_usa_custom_tab|node|tv_show|form.data|children|6"] = 'field_usa_tv_show_color';
  $overrides["field_group.group_usa_custom_tab|node|tv_show|form.data|children|7"] = 'group_show_aspots';

 return $overrides;
}

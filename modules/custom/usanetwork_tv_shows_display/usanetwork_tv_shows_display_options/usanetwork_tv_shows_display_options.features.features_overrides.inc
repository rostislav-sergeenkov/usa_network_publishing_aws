<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_tv_shows_display_options_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_group
  $overrides["field_group.group_usa_custom_tab|node|tv_show|form.data|children|8"] = 'group_usa_tv_promo';
  $overrides["field_group.group_usa_custom_tab|node|tv_show|form.data|children|9"] = 'group_usa_tv_promo_vids';

 return $overrides;
}

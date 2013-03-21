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

  // Exported overrides for: field
  $overrides["field.node-tv_show-field_tv_external_links.node-tv_show-field_tv_external_links"]["DELETED"] = TRUE;

 return $overrides;
}

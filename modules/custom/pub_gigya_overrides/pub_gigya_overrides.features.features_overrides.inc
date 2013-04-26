<?php
/**
 * @file
 * pub_gigya_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_gigya_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.gigya_comments_enabled.value"] = 0;
  $overrides["variable.gigya_network_list.value"] = 'Facebook, Twitter, Tumblr, Pinterest';
  $overrides["variable.gigya_share_buttons.value"] = 'Tumblr, pinterest-pinit, twitter-tweet, facebook-send';

 return $overrides;
}

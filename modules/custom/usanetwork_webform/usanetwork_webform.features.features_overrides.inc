<?php
/**
 * @file
 * usanetwork_webform.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_webform_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.captcha_description.value"] = 'This question is for testing whether you are a human visitor and to prevent automated spam submissions. <span title="This field is required." class="form-required">*</span>';

 return $overrides;
}

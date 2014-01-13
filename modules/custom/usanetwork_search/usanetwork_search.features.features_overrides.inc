<?php
/**
 * @file
 * usanetwork_search.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_search_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: context
  $overrides["context.usanetwork_sitewide.reactions|block|blocks|search-form"] = array(
    'module' => 'search',
    'delta' => 'form',
    'region' => 'search',
    'weight' => -10,
  );

 return $overrides;
}

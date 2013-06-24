<?php
/**
 * @file
 * usanetwork_opengraph.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_opengraph_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: metatag
  $overrides["metatag.node:media_gallery.config|description"] = array(
    'value' => '[node:field_usa_og_description]',
  );
  $overrides["metatag.node:media_gallery.config|og:description"] = array(
    'value' => '[node:field_usa_og_description]',
  );
  $overrides["metatag.node:media_gallery.config|og:image|value"] = '[node:field_usa_og_image]';
  $overrides["metatag.node:person.config|description"] = array(
    'value' => '[node:field_usa_og_description]',
  );
  $overrides["metatag.node:person.config|og:description"] = array(
    'value' => '[node:field_usa_og_description]',
  );
  $overrides["metatag.node:person.config|og:image|value"] = '[node:field_usa_og_image]';

 return $overrides;
}

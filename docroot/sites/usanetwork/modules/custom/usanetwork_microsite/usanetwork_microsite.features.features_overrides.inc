<?php
/**
 * @file
 * usanetwork_microsite.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_microsite_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_base
  $overrides["field_base.field_media_gallery.cardinality"] = -1;
  $overrides["field_base.field_media_gallery.settings|handler"] = 'base';
  $overrides["field_base.field_media_gallery.settings|handler_settings|sort"] = array(
    'type' => 'none',
  );
  $overrides["field_base.field_media_gallery.settings|handler_settings|target_bundles"] = array(
    'media_gallery' => 'media_gallery',
  );
  $overrides["field_base.field_media_gallery.settings|handler_settings|view"]["DELETED"] = TRUE;
  $overrides["field_base.field_person.cardinality"] = -1;

 return $overrides;
}

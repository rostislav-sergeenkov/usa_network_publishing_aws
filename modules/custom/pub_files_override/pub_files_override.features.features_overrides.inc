<?php
/**
 * @file
 * pub_files_override.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_files_override_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field
  $overrides["field.file-image-field_caption.field_instance|display|teaser|weight"] = '7';
  $overrides["field.file-image-field_copyright.field_instance|display|teaser|weight"] = '8';
  $overrides["field.file-image-field_credit.field_instance|display|teaser|weight"] = '5';
  $overrides["field.file-image-field_file_image_alt_text.field_instance|display|teaser|weight"] = '9';
  $overrides["field.file-image-field_file_image_title_text.field_instance|display|teaser|weight"] = '6';
  $overrides["field.file-image-field_keywords.field_instance|display|teaser|weight"] = '4';
  $overrides["field.file-image-field_media_categories.field_instance|display|teaser|weight"] = '2';
  $overrides["field.file-image-field_media_tags.field_instance|display|teaser|weight"] = '1';
  $overrides["field.file-image-field_source.field_instance|display|teaser|weight"] = '3';

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_file__image.value|extra_fields|display|file|teaser|visible"] = TRUE;
  $overrides["variable.field_bundle_settings_file__image.value|extra_fields|display|file|teaser|weight"] = '0';

 return $overrides;
}

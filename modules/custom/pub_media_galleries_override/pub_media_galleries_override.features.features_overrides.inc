<?php
/**
 * @file
 * pub_media_galleries_override.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_media_galleries_override_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field
  $overrides["field.node-media_gallery-body.field_instance|display|teaser|weight"] = '1';
  $overrides["field.node-media_gallery-field_categories.field_instance|display|teaser|weight"] = '8';
  $overrides["field.node-media_gallery-field_collection.field_instance|display|teaser|weight"] = '6';
  $overrides["field.node-media_gallery-field_content_tags.field_instance|display|teaser|weight"] = '7';
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|teaser|label"] = 'hidden';
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|teaser|module"] = 'file_entity';
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|teaser|settings|file_view_mode"] = 'teaser';
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|teaser|type"] = 'file_rendered';
  $overrides["field.node-media_gallery-field_gigya_share_bar.field_instance|display|teaser|weight"] = '5';
  $overrides["field.node-media_gallery-field_media_items.field_instance|display|teaser|weight"] = '2';
  $overrides["field.node-media_gallery-field_pub_relation_movie.field_instance|display|default|weight"] = '7';
  $overrides["field.node-media_gallery-field_pub_relation_movie.field_instance|display|teaser|weight"] = '3';
  $overrides["field.node-media_gallery-field_pub_relation_tv_shows.field_instance|display|default|weight"] = '8';
  $overrides["field.node-media_gallery-field_pub_relation_tv_shows.field_instance|display|teaser|weight"] = '4';

  // Exported overrides for: variable
  $overrides["variable.node_options_media_gallery.value|0"] = 'revision';
  $overrides["variable.node_options_media_gallery.value|1"]["DELETED"] = TRUE;
  $overrides["variable.node_submitted_media_gallery.value"] = 0;

 return $overrides;
}

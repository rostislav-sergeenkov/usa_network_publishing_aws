<?php
/**
 * @file
 * pub_media_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_media_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field
  $overrides["field.node-media_gallery-body.field_instance|display|block_cover_title"] = array(
    'label' => 'hidden',
    'module' => 'text',
    'settings' => array(),
    'type' => 'text_default',
    'weight' => '1',
  );
  $overrides["field.node-media_gallery-field_categories.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '2',
  );
  $overrides["field.node-media_gallery-field_collection.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '6',
  );
  $overrides["field.node-media_gallery-field_content_tags.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '4',
  );
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '5',
  );
  $overrides["field.node-media_gallery-field_media_items.field_instance|display|block_cover_title"] = array(
    'label' => 'hidden',
    'module' => 'file',
    'settings' => array(),
    'type' => 'file_default',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_pub_relation_movie.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'module' => 'field_collection',
    'settings' => array(
      'view_mode' => 'full',
    ),
    'type' => 'field_collection_fields',
    'weight' => '7',
  );
  $overrides["field.node-media_gallery-field_pub_relation_tv_shows.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'module' => 'field_collection',
    'settings' => array(
      'view_mode' => 'full',
    ),
    'type' => 'field_collection_fields',
    'weight' => '8',
  );

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__media_gallery.value|view_modes|block_cover_title"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

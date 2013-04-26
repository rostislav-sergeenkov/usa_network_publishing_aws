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
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '8',
  );
  $overrides["field.node-media_gallery-body.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_categories.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '9',
  );
  $overrides["field.node-media_gallery-field_categories.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_collection.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '11',
  );
  $overrides["field.node-media_gallery-field_collection.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_content_tags.field_instance|display|block_cover_title"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '10',
  );
  $overrides["field.node-media_gallery-field_content_tags.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|block_cover_title"] = array(
    'label' => 'hidden',
    'module' => 'file_entity',
    'settings' => array(
      'file_view_mode' => 'block_cover_title',
    ),
    'type' => 'file_rendered',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_cover_item.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'module' => 'file_entity',
    'settings' => array(
      'file_view_mode' => 'block_cover_title_lg',
    ),
    'type' => 'file_rendered',
    'weight' => '0',
  );
  $overrides["field.node-media_gallery-field_media_items.field_instance|display|block_cover_title"] = array(
    'label' => 'hidden',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '5',
  );
  $overrides["field.node-media_gallery-field_media_items.field_instance|display|block_cover_title_lg"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => '0',
  );

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__media_gallery.value|extra_fields|form|metatags|weight"] = '3';
  $overrides["variable.field_bundle_settings_node__media_gallery.value|extra_fields|form|path|weight"] = '5';
  $overrides["variable.field_bundle_settings_node__media_gallery.value|view_modes|block_cover_title"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__media_gallery.value|view_modes|block_cover_title_lg"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

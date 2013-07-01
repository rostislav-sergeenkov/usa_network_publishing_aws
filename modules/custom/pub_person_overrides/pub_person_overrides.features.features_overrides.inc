<?php
/**
 * @file
 * pub_person_overrides.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function pub_person_overrides_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|block_cover_title"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|block_cover_title_lg"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|carousel_promo"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|cast_carousel"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|follow_social"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|home_promo"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|home_promo_bspot"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|promo_teaser"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|search_index"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|search_result"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|vid_teaser_episode"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|vid_teaser_general"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|vid_teaser_show_episode"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__person.value|view_modes|vid_teaser_show_general"] = array(
    'custom_settings' => FALSE,
  );

 return $overrides;
}

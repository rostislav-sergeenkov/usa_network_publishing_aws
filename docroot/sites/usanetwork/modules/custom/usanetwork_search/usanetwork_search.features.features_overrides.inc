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

  // Exported overrides for: field_instance
  $overrides["field_instance.node-catchall_page-field_usa_pc_afterall_content.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 4,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_css.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 3,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_css_inline.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 2,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_file_folder.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 6,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_files.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 7,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_images.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 11,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_javascript.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 10,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_javascript_inline.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 9,
  );
  $overrides["field_instance.node-catchall_page-field_usa_pc_overall_content.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 8,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_large.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_rows.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_promo_vids_label.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );
  $overrides["field_instance.node-tv_show-field_usa_tv_show_color.display|search_index"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 0,
  );

 return $overrides;
}

<?php
/**
 * @file
 * usanetwork_mpx_video.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_mpx_video_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: views_view
  $overrides["views_view.content_files.display|mpx_files_page|display_options|filters|field_show_target_id"] = array(
    'id' => 'field_show_target_id',
    'table' => 'field_data_field_show',
    'field' => 'field_show_target_id',
    'group' => 1,
    'exposed' => TRUE,
    'expose' => array(
      'operator_id' => 'field_show_target_id_op',
      'label' => 'Show',
      'operator' => 'field_show_target_id_op',
      'identifier' => 'field_show_target_id',
      'remember_roles' => array(
        2 => 2,
        1 => 0,
        11 => 0,
        16 => 0,
        21 => 0,
        26 => 0,
        31 => 0,
        36 => 0,
      ),
    ),
  );

 return $overrides;
}

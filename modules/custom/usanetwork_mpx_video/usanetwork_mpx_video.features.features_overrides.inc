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

  // Exported overrides for: ds_field_settings
  $overrides["ds_field_settings.file|mpx_video_1|full.settings|video_companion_rectangle_small"] = array(
    'weight' => 9,
    'label' => 'hidden',
    'format' => 'default',
  );
  $overrides["ds_field_settings.file|mpx_video_2|full.settings|video_companion_rectangle_small"] = array(
    'weight' => 9,
    'label' => 'hidden',
    'format' => 'default',
  );

  // Exported overrides for: ds_layout_settings
  $overrides["ds_layout_settings.file|mpx_video_1|full.settings|fields|video_companion_rectangle_small"] = 'ad_comp';
  $overrides["ds_layout_settings.file|mpx_video_2|full.settings|fields|video_companion_rectangle_small"] = 'ad_comp';

  // Exported overrides for: ds_view_modes
  $overrides["ds_view_modes.vid_teaser_episode.entities|file"] = 'file';
  $overrides["ds_view_modes.vid_teaser_general.entities|file"] = 'file';
  $overrides["ds_view_modes.vid_teaser_show_episode.entities|file"] = 'file';
  $overrides["ds_view_modes.vid_teaser_show_general.entities|file"] = 'file';

 return $overrides;
}

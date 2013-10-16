<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function usanetwork_tv_shows_display_options_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: page_manager_handlers
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-2|configuration|formatter"] = 'usanetwork_tv_shows_display_entity_view';
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-2|configuration|formatter_settings|view_mode_large"] = 'promo_teaser_large';
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-7|configuration|override_title"] = 1;
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-7|configuration|override_title_text"] = '%node:field_usa_tv_promo_vids_label';

 return $overrides;
}

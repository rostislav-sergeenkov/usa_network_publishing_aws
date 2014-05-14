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

  // Exported overrides for: field_instance
  $overrides["field_instance.node-usanetwork_promo-field_meta_text_bar.display|promo_teaser_large"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 10,
  );
  $overrides["field_instance.node-usanetwork_promo-field_promo_link.display|promo_teaser_large"] = array(
    'label' => 'hidden',
    'module' => 'link',
    'settings' => array(),
    'type' => 'link_plain',
    'weight' => 4,
  );
  $overrides["field_instance.node-usanetwork_promo-field_promo_regular_image.display|promo_teaser_large"] = array(
    'label' => 'hidden',
    'module' => 'image',
    'settings' => array(
      'image_link' => '',
      'image_style' => '300x250',
    ),
    'type' => 'image',
    'weight' => 1,
  );
  $overrides["field_instance.node-usanetwork_promo-field_promo_text_line_1.display|promo_teaser_large"] = array(
    'label' => 'hidden',
    'module' => 'text',
    'settings' => array(),
    'type' => 'text_default',
    'weight' => 2,
  );
  $overrides["field_instance.node-usanetwork_promo-field_promo_text_line_2.display|promo_teaser_large"] = array(
    'label' => 'hidden',
    'module' => 'text',
    'settings' => array(),
    'type' => 'text_default',
    'weight' => 3,
  );
  $overrides["field_instance.node-usanetwork_promo-field_promo_wide_image.display|promo_teaser_large"] = array(
    'label' => 'hidden',
    'module' => 'image',
    'settings' => array(
      'image_link' => '',
      'image_style' => '615x250',
    ),
    'type' => 'image',
    'weight' => 0,
  );
  $overrides["field_instance.node-usanetwork_promo-field_show.display|promo_teaser_large"] = array(
    'label' => 'above',
    'settings' => array(),
    'type' => 'hidden',
    'weight' => 1,
  );

  // Exported overrides for: page_manager_handlers
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-2|configuration|formatter"] = 'usanetwork_tv_shows_display_entity_view';
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-2|configuration|formatter_settings|view_mode_large"] = 'promo_teaser_large';
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-7|configuration|override_title"] = 1;
  $overrides["page_manager_handlers.node_view_panel_context_2.conf|display|content|new-7|configuration|override_title_text"] = '%node:field_usa_tv_promo_vids_label';

  // Exported overrides for: variable
  $overrides["variable.field_bundle_settings_node__usanetwork_promo.value|extra_fields|display|usanetwork_promo_preview|promo_teaser_large"] = array(
    'weight' => -10,
    'visible' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__usanetwork_promo.value|view_modes|promo_teaser_large"] = array(
    'custom_settings' => TRUE,
  );

 return $overrides;
}

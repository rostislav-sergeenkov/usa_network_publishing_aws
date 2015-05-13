<?php
/**
 * @file
 * usanetwork_tv_shows_display_options.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_tv_shows_display_options_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_field_default_field_instances_alter().
 */
function usanetwork_tv_shows_display_options_field_default_field_instances_alter(&$data) {
  if (isset($data['node-usanetwork_promo-field_meta_text_bar'])) {
    $data['node-usanetwork_promo-field_meta_text_bar']['display']['promo_teaser_large'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 10,
    ); /* WAS: '' */
  }
  if (isset($data['node-usanetwork_promo-field_promo_link'])) {
    $data['node-usanetwork_promo-field_promo_link']['display']['promo_teaser_large'] = array(
      'label' => 'hidden',
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_plain',
      'weight' => 4,
    ); /* WAS: '' */
  }
  if (isset($data['node-usanetwork_promo-field_promo_regular_image'])) {
    $data['node-usanetwork_promo-field_promo_regular_image']['display']['promo_teaser_large'] = array(
      'label' => 'hidden',
      'module' => 'image',
      'settings' => array(
        'image_link' => '',
        'image_style' => '300x250',
      ),
      'type' => 'image',
      'weight' => 1,
    ); /* WAS: '' */
  }
  if (isset($data['node-usanetwork_promo-field_promo_text_line_1'])) {
    $data['node-usanetwork_promo-field_promo_text_line_1']['display']['promo_teaser_large'] = array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => 2,
    ); /* WAS: '' */
  }
  if (isset($data['node-usanetwork_promo-field_promo_text_line_2'])) {
    $data['node-usanetwork_promo-field_promo_text_line_2']['display']['promo_teaser_large'] = array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => 3,
    ); /* WAS: '' */
  }
  if (isset($data['node-usanetwork_promo-field_show'])) {
    $data['node-usanetwork_promo-field_show']['display']['promo_teaser_large'] = array(
      'label' => 'above',
      'settings' => array(),
      'type' => 'hidden',
      'weight' => 1,
    ); /* WAS: '' */
  }
}

/**
 * Implements hook_default_page_manager_handlers_alter().
 */
function usanetwork_tv_shows_display_options_default_page_manager_handlers_alter(&$data) {
  if (isset($data['node_view_panel_context_2'])) {
    $data['node_view_panel_context_2']->conf['display']->content['new-2']->configuration['formatter'] = 'usanetwork_tv_shows_display_entity_view'; /* WAS: 'entityreference_entity_view' */
    $data['node_view_panel_context_2']->conf['display']->content['new-2']->configuration['formatter_settings']['view_mode_large'] = 'promo_teaser_large'; /* WAS: '' */
    $data['node_view_panel_context_2']->conf['display']->content['new-7']->configuration['override_title'] = 1; /* WAS: 0 */
    $data['node_view_panel_context_2']->conf['display']->content['new-7']->configuration['override_title_text'] = '%node:field_usa_tv_promo_vids_label'; /* WAS: '' */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function usanetwork_tv_shows_display_options_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_node__usanetwork_promo'])) {
    $data['field_bundle_settings_node__usanetwork_promo']->value['extra_fields']['display']['usanetwork_promo_preview']['promo_teaser_large'] = array(
      'weight' => -10,
      'visible' => FALSE,
    ); /* WAS: '' */
    $data['field_bundle_settings_node__usanetwork_promo']->value['view_modes']['promo_teaser_large'] = array(
      'custom_settings' => TRUE,
    ); /* WAS: '' */
  }
}

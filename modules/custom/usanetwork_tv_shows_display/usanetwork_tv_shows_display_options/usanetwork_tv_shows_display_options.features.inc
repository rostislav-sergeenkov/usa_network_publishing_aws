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
 * Implements hook_field_group_info_alter().
 */
function usanetwork_tv_shows_display_field_field_group_info_alter(&$data) {
  if (isset($data['group_usa_custom_tab|node|tv_show|form'])) {
    $data['group_usa_custom_tab|node|tv_show|form']->data['children']['8'] = 'group_usa_tv_promo'; /* WAS: '' */
    $data['group_usa_custom_tab|node|tv_show|form']->data['children']['9'] = 'group_usa_tv_promo_vids'; /* WAS: '' */
  }
}

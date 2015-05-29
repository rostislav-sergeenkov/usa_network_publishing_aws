<?php
/**
 * @file
 * usanetwork_admin_menu.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_admin_menu_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'admin_menu_devel_modules';
  $strongarm->value = array(
    0 => 'admin_devel',
    1 => 'cache_disable',
    2 => 'coder',
    3 => 'content_copy',
    4 => 'context_ui',
    5 => 'debug',
    6 => 'delete_all',
    7 => 'demo',
    8 => 'devel',
    9 => 'devel_node_access',
    10 => 'devel_themer',
    11 => 'fontyourface_ui',
    12 => 'form_controller',
    13 => 'imagecache_ui',
    14 => 'journal',
    15 => 'l10n_client',
    16 => 'l10n_update',
    17 => 'macro',
    18 => 'rules_admin',
    19 => 'stringoverrides',
    20 => 'trace',
    21 => 'upgrade_status',
    22 => 'user_display_ui',
    23 => 'util',
    24 => 'views_ui',
    25 => 'views_theme_wizard',
  );
  $export['admin_menu_devel_modules'] = $strongarm;

  return $export;
}

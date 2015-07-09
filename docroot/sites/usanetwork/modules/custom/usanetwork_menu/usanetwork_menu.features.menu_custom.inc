<?php
/**
 * @file
 * usanetwork_menu.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function usanetwork_menu_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-also-on-usa.
  $menus['menu-also-on-usa'] = array(
    'menu_name' => 'menu-also-on-usa',
    'title' => 'Also On USA',
    'description' => '',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Also On USA');


  return $menus;
}

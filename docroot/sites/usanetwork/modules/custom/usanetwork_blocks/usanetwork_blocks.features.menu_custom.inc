<?php
/**
 * @file
 * usanetwork_blocks.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function usanetwork_blocks_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-apps-services.
  $menus['menu-apps-services'] = array(
    'menu_name' => 'menu-apps-services',
    'title' => 'Apps & Services',
    'description' => 'Editor can add/remove links that appear in this section and change the order of them',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Apps & Services');
  t('Editor can add/remove links that appear in this section and change the order of them');


  return $menus;
}

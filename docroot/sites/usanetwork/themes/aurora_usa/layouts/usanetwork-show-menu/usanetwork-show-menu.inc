<?php

$plugin = array(
  'title' => t('Usanetwork: Show Menu'),
  'category' => t('Custom: USA'),
  'icon' => 'uasnetwork-show-menu.png',
  'theme' => 'usanetwork-show-menu',
  'admin css' => 'uasnetwork-show-menu.css',
  'regions function' => 'usanetwork_pl_show_menu_render',
  'weight' => 5,
);

function usanetwork_pl_show_menu_render() {
  $regions = array(
    'reg_ag' => t('Ad'),
    'reg_menu' => t('Menu'),
    'reg_mobile_menu' => t('Mobile menu'),
    'reg_tab_shows' => t('TAB: Shows'),
    'reg_tab_full_episodes' => t('TAB: Full Episodes'),
    'reg_tab_schedule' => t('TAB: Schedule'),
    'reg_tab_user_profile' => t('TAB: User Profile'),
  );

  return $regions;
}

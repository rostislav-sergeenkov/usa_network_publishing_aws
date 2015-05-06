<?php

$plugin = array(
  'title' => t('Usanetwork: Show Menu'),
  'category' => t('Custom: USA'),
  'icon' => 'uasnetwork-footer.png',
  'theme' => 'usanetwork-footer',
  'admin css' => 'usanetwork-footer.css',
  'regions function' => 'usanetwork_pl_footer_render',
  'weight' => 5,
);

function usanetwork_pl_footer_render() {
  $regions = array(
    'reg_footer_menu' => t('Footer menu'),
    'reg_legal_and_social' => t('Legal and social'),
  );

  return $regions;
}

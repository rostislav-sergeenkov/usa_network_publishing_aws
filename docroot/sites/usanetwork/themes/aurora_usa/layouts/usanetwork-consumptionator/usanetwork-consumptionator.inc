<?php

$plugin = array(
  'title' => t('Usanetwork: Consumptionator'),
  'category' => t('Custom: USA'),
  'icon' => 'uasnetwork-consumptionator.png',
  'theme' => 'usanetwork-consumptionator',
  'admin css' => 'usanetwork-consumptionator.css',
  'regions function' => 'usanetwork_pl_consumptionator_render',
  'weight' => 5,
);

function usanetwork_pl_consumptionator_render() {
  $regions = array(
    'reg_upper_elements' => t('Upper elements'),
    'reg_player_wrapper' => t('Player wrapper'),
    'reg_consumer_sidebar' => t('Consumer sidebar'),
    'reg_full_episodes' => t('Full episodes'),
    'reg_related_content' => t('Related content'),
    'reg_ymal_content' => t('You may also like'),
  );

  return $regions;
}

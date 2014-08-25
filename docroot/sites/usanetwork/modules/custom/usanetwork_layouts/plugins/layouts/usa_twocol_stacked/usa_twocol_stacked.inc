<?php
/**
 * @file   usa_twocol_stacked.inc
 *
 * @brief  Two column stacked layout.
 */
// Plugin definition
$plugin = array(
  'title' => t('USA Two column stacked'),
  'category' => t('Custom: USA'),
  'icon' => 'usa_twocol_stacked.png',
  'theme' => 'panels_usa_twocol_stacked',
  'css' => 'usa_twocol_stacked.css',
  'regions' => array(
    'left' => t('Left side'),
    'right' => t('Right side'),
    'right_ad' => t('Right side Ad'),
    'bottom' => t('Bottom')
  ),
);

<?php
/**
 * @file   twocol_nested_right_twocol.inc
 * @author António P. P. Almeida <appa@perusio.net>
 * @date   Sun Jul 24 20:41:58 2011
 *
 * @brief  The two column 30/70 stacked layout.
 *
 *
 */

// Plugin definition.
$plugin = array(
  'title' => t('Two column, Nested Right Column'),
  'category' => t('Custom: USA'),
  'icon' => 'twocol_nested_right_twocol.png',
  'theme' => 'twocol_nested_right_twocol',
  'css' => 'twocol_nested_right_twocol.css',
  'regions' => array(
    'one' => t('One'),
    'two' => t('Two'),
    'three' => t('Three'),
    'four' => t('Four'),
    'five' => t('Five'),
  ),
);

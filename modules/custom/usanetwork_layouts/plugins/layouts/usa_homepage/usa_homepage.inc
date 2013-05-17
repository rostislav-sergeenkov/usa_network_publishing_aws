<?php
/**
 * @file   usa_homepage.inc
 * @author suzi
 * @date   Thurs may 16 20:41:58 2013
 *
 * @brief  usa_homepage single column layout.
 *
 */

// Plugin definition.
$plugin = array(
  'title' => t('USA homepage'),
  'category' => t('Custom: USA'),
  'icon' => 'usa_homepage.png',
  'theme' => 'usa_homepage',
  'css' => 'usa_homepage.css',
  'regions' => array(
    'one' => t('One'),
    'two' => t('Two'),
    'three' => t('Three'),
  ),
);

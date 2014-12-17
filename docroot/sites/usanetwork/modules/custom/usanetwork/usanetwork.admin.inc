<?php

/**
 * USA Network settings form
 */
function usanetwork_settings_form() {
  $form = array();
  /* video related settings */
  $form['video'] = array(
    '#type' => 'fieldset',
    '#title' => t('Video Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['video']['usanetwork_theplatform_tve_feed_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com TVE video feed URL'),
    '#description' => t('Feed URL used to update TVE video content.'),
    '#default_value' => variable_get('usanetwork_theplatform_tve_feed_url', 'http://feed.theplatform.com/f/dCK2IC/lQ46POmX6zQC'),
  );
  $form['video']['usanetwork_theplatform_tve_player_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com TVE video player URL'),
    '#description' => t('Player URL used to play TVE videos.'),
    '#default_value' => variable_get('usanetwork_theplatform_tve_player_url', ''),
  );
  $form['video']['usanetwork_theplatform_mpx_feed_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com MPX video feed URL.'),
    '#description' => t('Feed URL used to update MPX video content'),
    '#default_value' => variable_get('usanetwork_theplatform_mpx_feed_url', 'http://feed.theplatform.com/f/OyMl-B/8IyhuVgUXDd_'),
  );
  $form['video']['usanetwork_theplatform_mpx_player_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com MPX video player URL'),
    '#description' => t('Player URL used to play MPX videos.'),
    '#default_value' => variable_get('usanetwork_theplatform_mpx_player_url', ''),
  );
  $form['video']['usanetwork_theplatform_twitter_card_player_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com MPX video player URL for twitter card'),
    '#default_value' => variable_get('usanetwork_theplatform_twitter_card_player_url', ''),
  );

  /* footer region settings */
  $form['footer'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['footer']['usanetwork_footer_message'] = array(
    '#type' => 'textfield',
    '#title' => t('Footer Message'),
    '#description' => t('YYYY will be replaced by current year'),
    '#default_value' => variable_get('usanetwork_footer_message', '&copy;YYYY NBCUniversal, Inc. All Rights Reserved. A Division of NBC Universal'),
  );
  /* ad choices html */
  $form['footer']['usanetwork_footer_ad_choices_text'] = array(
    '#type' => 'textarea',
    '#title' => t('Ad Choices HTML'),
    '#default_value' => variable_get('usanetwork_footer_ad_choices_text', ''),
  );

  /* more menu settings */
  $form['more_menu'] = array(
    '#type' => 'fieldset',
    '#title' => t('More Menu Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  
  $form['more_menu']['usanetwork_social_links'] = array(
    '#type' => 'textarea',
    '#title' => t('Social network bar'),
    '#description' => t('The HTML to include list of links to social network pages (Eg. ul, li tags)'),
    '#default_value' => variable_get('usanetwork_social_links', ''),
  );

  /* Global JS settings */
  $form['global_js'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global JS Code'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['global_js']['usanetwork_global_js_code'] = array(
    '#type' => 'textarea',
    '#title' => t('Global JS Code'),
    '#description' => t('The Global Js Code that added to all pages of the site'),
    '#default_value' => variable_get('usanetwork_global_js_code', ''),
  );

  $form['see_it'] = array(
    '#type' => 'fieldset',
    '#title' => t('See.it settings'),
    '#description' => t('The global settings for See.it service'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['see_it']['usanetwork_seeit_script_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Reminder JS URL'),
    '#description' => t('The URL to reminders URL'),
    '#default_value' => variable_get('usanetwork_seeit_script_url', USANETWORK_SEEIT_DEFAULT_URL),
  );
   
  return system_settings_form($form);
}

/**
 * Provides crossdomain xml handler
 */
function usanetwork_crossdomain_xml() {
  drupal_add_http_header('Content-Type', 'text/xml');
  $xml_path = drupal_get_path('module', 'usanetwork') . '/xml/crossdomain.xml';
  print file_get_contents($xml_path);
  die();
}


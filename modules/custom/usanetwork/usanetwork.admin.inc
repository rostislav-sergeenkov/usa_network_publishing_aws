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
  $form['more_menu']['usanetwork_more_menu_links'] = array(
    '#type' => 'textarea',
    '#title' => t('More Menu Raw HTML'),
    '#description' => t('The HTML to include in the "more" link on the primary navigation (Eg. ul, li tags)'),
    '#default_value' => variable_get('usanetwork_more_menu_links', ''),
  );
  
  return system_settings_form($form);
}



<?php

/**
 * USA Network settings form
 */
function usanetwork_settings_form() {
  $form = array();

  /* Video related settings */
  $form['usanetwork_theplatform_tve_feed_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com TVE video feed URL.'),
    '#description' => t('Feed URL used to update TVE video content.'),
    '#default_value' => variable_get('usanetwork_theplatform_tve_feed_url', 'http://feed.theplatform.com/f/dCK2IC/lQ46POmX6zQC'),
  );
  $form['usanetwork_theplatform_tve_player_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com TVE video player URL.'),
    '#description' => t('Player URL used to play TVE videos.'),
    '#default_value' => variable_get('usanetwork_theplatform_tve_player_url', ''),
  );
  $form['usanetwork_theplatform_mpx_feed_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com MPX video feed URL.'),
    '#description' => t('Feed URL used to update MPX video content.'),
    '#default_value' => variable_get('usanetwork_theplatform_mpx_feed_url', 'http://feed.theplatform.com/f/OyMl-B/8IyhuVgUXDd_'),
  );
  $form['usanetwork_theplatform_mpx_player_url'] = array(
    '#type' => 'textfield',
    '#title' => t('thePlatform.com MPX video player URL.'),
    '#description' => t('Player URL used to play MPX videos.'),
    '#default_value' => variable_get('usanetwork_theplatform_mpx_player_url', ''),
  );

  return system_settings_form($form);
}



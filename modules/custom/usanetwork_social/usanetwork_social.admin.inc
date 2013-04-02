<?php

/**
 * USA Network settings form
 */
function usanetwork_social_settings_form() {

  $form['twitter'] = array(
    '#type' => 'fieldset',
    '#title' => t('Twitter Settings'),
    '#collapsible' => TRUE, 
    '#collapsed' => FALSE,
  );
  $form['twitter']['usanetwork_social_twitter_echo_app_key'] = array(
    '#type' => 'textfield', 
    '#title' => t('Echo App Key'),
    '#default_value' => variable_get('usanetwork_social_twitter_echo_app_key', ''),
    '#description' => t(''),
  );
  $form['twitter']['usanetwork_social_twitter_childrenof'] = array(
    '#type' => 'textfield', 
    '#title' => t('CHILDRENOF'),
    '#default_value' => variable_get('usanetwork_social_twitter_childrenof', ''),
    '#description' => t('EQL Token'),
  );

  return system_settings_form($form);
}



<?php

/**
 * USA Network settings form
 */
function usanetwork_lyris_settings_form() {

  $form['lyris'] = array(
    '#type' => 'fieldset',
    '#title' => t('Lyris Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['lyris']['usanetwork_lyris_username'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyris Username'),
    '#default_value' => variable_get('usanetwork_lyris_username', ''),
  );
  $form['lyris']['usanetwork_lyris_password'] = array(
    '#type' => 'password',
    '#title' => t('Lyris Password'),
  );
  $form['lyris']['usanetwork_lyris_endpoint'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyris WSDL End Point'),
    '#default_value' => variable_get('usanetwork_lyris_endpoint', ''),
  );
  $form['lyris']['usanetwork_lyris_proxyhost'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyris Proxy Host'),
    '#default_value' => variable_get('usanetwork_lyris_proxyhost', ''),
  );
  $form['lyris']['usanetwork_lyris_proxyport'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyris Proxy Port'),
    '#default_value' => variable_get('usanetwork_lyris_proxyport', ''),
  );
  
  return system_settings_form($form);
}

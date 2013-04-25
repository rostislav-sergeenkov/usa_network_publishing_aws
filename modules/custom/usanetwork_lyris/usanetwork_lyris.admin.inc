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
    '#title' => t('lyris admin username'),
    '#default_value' => variable_get('usanetwork_lyris_username', ''),
  );
  $form['lyris']['usanetwork_lyris_password'] = array(
    '#type' => 'textfield',
    '#title' => t('lyris admin password'),
    '#default_value' => variable_get('usanetwork_lyris_password', ''),
  );
  $form['lyris']['usanetwork_lyris_endpoint'] = array(
    '#type' => 'textfield',
    '#title' => t('WSDL'),
    '#default_value' => variable_get('usanetwork_lyris_endpoint', ''),
    '#description' => t('End point WSDL'),
  );
  $form['lyris']['usanetwork_lyris_listname'] = array(
    '#type' => 'textfield',
    '#title' => t('List'),
    '#default_value' => variable_get('usanetwork_lyris_listname', ''),
    '#description' => t('Lyris List Name'),
  );
  $form['lyris']['usanetwork_lyris_proxyhost'] = array(
    '#type' => 'textfield',
    '#title' => t('Proxy Host'),
    '#default_value' => variable_get('usanetwork_lyris_proxyhost', ''),
  );
  $form['lyris']['usanetwork_lyris_proxyport'] = array(
    '#type' => 'textfield',
    '#title' => t('Proxy port'),
    '#default_value' => variable_get('usanetwork_lyris_proxyport', ''),
  );
  
  return system_settings_form($form);
}

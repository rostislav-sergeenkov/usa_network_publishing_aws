<?php

/**
 * USA Network settings form
 */



/**
* Lyris configuration
*/
function usanetwork_lyris_settings_form() {

/**
* Lyris/LyrisHQ configuration Option
*/
  $form['lyrisoption'] = array(
    '#type' => 'fieldset',
    '#title' => t('Option for Lyris Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $active = array(0 => t('Sparklist'), 1 => t('LyrisHQ'));
  $form['lyrisoption']['usanetwork_lyris_active'] = array(
    '#type' => 'radios',
    '#title' => t('Please Select The Option for Lyris Settings'),
    '#default_value' => variable_get('usanetwork_lyris_active', ''),    
    '#options' => $active,
  );

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

/**
* New LyrisHQ version configuration
*/
  $form['lyrishq'] = array(
    '#type' => 'fieldset',
    '#title' => t('Lyris HQ Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['lyrishq']['usanetwork_lyrishq_endpoint'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq End Point'),
    '#default_value' => variable_get('usanetwork_lyrishq_endpoint', ''),
  );
  $form['lyrishq']['usanetwork_lyrishq_password'] = array(
    '#type' => 'password',
    '#title' => t('Lyrishq Password'),
    '#default_value' => variable_get('usanetwork_lyrishq_password', ''),    
  );
  $form['lyrishq']['usanetwork_lyrishq_site_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq Site Id'),
    '#default_value' => variable_get('usanetwork_lyrishq_site_id', ''),    
  );
  $form['lyrishq']['usanetwork_lyrishq_mailing_list_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq Mailing List Id'),
    '#default_value' => variable_get('usanetwork_lyrishq_mailing_list_id', ''),
  );
  $form['lyrishq']['usanetwork_lyrishq_demographic_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq Demographic Id'),
    '#default_value' => variable_get('usanetwork_lyrishq_demographic_id', ''),
  );
  $form['lyrishq']['usanetwork_lyrishq_proxyhost'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq Proxy Host'),
    '#default_value' => variable_get('usanetwork_lyrishq_proxyhost', ''),
  );
  $form['lyrishq']['usanetwork_lyrishq_proxyport'] = array(
    '#type' => 'textfield',
    '#title' => t('Lyrishq Proxy Port'),
    '#default_value' => variable_get('usanetwork_lyrishq_proxyport', ''),
  );

  return system_settings_form($form);
}

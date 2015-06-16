<?php

/**
 * @file
 * Form callback for admin page for the TVE Adobe Pass module.
 *
 * @ingroup tve_adobe_pass
 */

/**
 * Form builder callback for Adobe Pass settings form.
 */
function _tve_adobe_pass_admin_form($form, &$form_state) {
  // Main settings.
  $form['tve_adobe_pass_accessenabler_loc'] = array(
    '#title' => t('Access Enabler Location'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_accessenabler_loc', TVE_ADOBE_PASS_ACCESS_ENABLER),
    '#required' => TRUE,
  );
  $form['tve_adobe_pass_timeout_length'] = array(
    '#title' => t('Request Timeout'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_timeout_length', TVE_ADOBE_PASS_TIMEOUT),
    '#required' => TRUE,
  );
  $form['tve_adobe_pass_flash_ver'] = array(
    '#title' => t('Adobe Flash Version'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_flash_ver', TVE_ADOBE_PASS_FLASH_VER),
  );
  $form['tve_adobe_pass_requestor_id'] = array(
    '#title' => t('Requestor ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_requestor_id'),
    '#required' => TRUE,
  );
  $form['tve_adobe_pass_resource_id'] = array(
    '#title' => t('Resource ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_resource_id'),
    '#required' => TRUE,
  );

  // Additional settings - error/notice messages.
  $form['tve_adobe_pass_default_messages'] = array(
    '#type' => 'fieldset',
    '#title' => t('Authz Status messages'),
  );
  $form['tve_adobe_pass_default_messages']['tve_adobe_pass_message_auth_err'] = array(
    '#title' => t('User not Authorized Error'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_message_auth_err', TVE_ADOBE_PASS_MESSAGE_AUTH_ERR),
    '#required' => TRUE,
  );
  $form['tve_adobe_pass_default_messages']['tve_adobe_pass_message_internal_err'] = array(
    '#title' => t('Internal Authorization Error'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_message_internal_err', TVE_ADOBE_PASS_MESSAGE_INTERNAL_ERR),
    '#required' => TRUE,
  );
  $form['tve_adobe_pass_default_messages']['tve_adobe_pass_message_generic_err'] = array(
    '#title' => t('Generic Authorization Error'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_adobe_pass_message_generic_err', TVE_ADOBE_PASS_MESSAGE_GENERIC_ERR),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}

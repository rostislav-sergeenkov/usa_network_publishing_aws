<?php

/**
 * @file
 * K2 Service Configuration form functions for the TVE K2 module.
 *
 * @ingroup tve_k2
 */

/**
 * Form builder callback for K2 Service Configuration.
 */
function tve_k2_admin_form($form, &$form_state) {
  // Main settings.
  $form['tve_k2_api_url'] = array(
    '#title' => t('K2 Service API Url'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_k2_api_url', ''),
    '#required' => TRUE,
  );

  $form['tve_k2_client_id'] = array(
    '#title' => t('K2 Client ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_k2_client_id', 'NBCUTV'),
    '#required' => TRUE,
  );

  $form['tve_k2_brand_id'] = array(
    '#title' => t('K2 Brand ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_k2_brand_id', 'usa'),
    '#required' => TRUE,
  );

  // Additional settings - error/notice messages.
  $form['tve_k2_messages_group'] = array(
    '#type' => 'fieldset',
    '#title' => t('Status messages'),
    '#tree' => TRUE,
  );

  // Default message.
  $form['tve_k2_messages_group']['default'] = array(
    '#type' => 'fieldset',
    '#title' => t('Default message'),
    '#tree' => TRUE,
  );

  $form['tve_k2_messages_group']['default']['tve_k2_default_message'] = array(
    '#type' => 'textarea',
    '#title' => t('Message'),
    '#default_value' => variable_get('tve_k2_default_message', TVE_K2_DEFAULT_ERROR_MESSAGE),
    '#description' => t('Human-understandable message for any unrecognized error code.'),
    '#required' => TRUE,
  );

  $messages = variable_get('tve_k2_messages', array(
    'ZIP-CODE-DOES-NOT-EXIST' => 'The zipcode you have entered does not exist.',
  ));

  foreach ($messages as $message_id => $message_value) {
    // Specific message for given status code.
    $form['tve_k2_messages_group'][$message_id] = array(
      '#type' => 'fieldset',
      '#title' => t('Status: @status', array('@status' => $message_id)),
      '#tree' => TRUE,
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    );

    $form['tve_k2_messages_group'][$message_id]['status'] = array(
      '#type' => 'textfield',
      '#title' => t('Status code'),
      '#default_value' => $message_id,
      '#description' => t('Unique status code returned from K2 service. Clear this value (or status message text) to remove current status item completely.'),
    );

    $form['tve_k2_messages_group'][$message_id]['message'] = array(
      '#type' => 'textarea',
      '#title' => t('Status message'),
      '#default_value' => $message_value,
      '#description' => t('Human-understandable message associated with this status code.'),
    );
  }

  if (empty($messages)) {
    $form['tve_k2_messages_group']['#description'] = t('No status messages added.');
  }

  // Elements to add new item (code => message).
  $form['new'] = array(
    '#type' => 'fieldset',
    '#title' => t('Add new status message'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['new']['status'] = array(
    '#type' => 'textfield',
    '#title' => t('Status code'),
    '#default_value' => '',
  );

  $form['new']['message'] = array(
    '#type' => 'textarea',
    '#title' => t('Status message'),
    '#default_value' => '',
  );

  return system_settings_form($form);
}

/**
 * Form validation and preparation data for saving.
 *
 * @see tve_k2_admin_form()
 */
function tve_k2_admin_form_validate($form, &$form_state) {
  $values = &$form_state['values'];
  $values['tve_k2_default_message'] = $values['tve_k2_messages_group']['default']['tve_k2_default_message'];

  unset($values['tve_k2_messages_group']['default']);

  // Process status code messages.
  $messages = array();
  if (isset($values['tve_k2_messages_group'])) {
    // Update existing code messages.
    foreach ($values['tve_k2_messages_group'] as $settings) {
      if ($settings['status'] !== '' && $settings['message'] !== '') {
        $messages[check_plain($settings['status'])] = check_plain($settings['message']);
      }
    }
  }
  // Add new code message if provided.
  if ($values['new']['status'] !== '' && $values['new']['message'] !== '') {
    $messages[check_plain($values['new']['status'])] = check_plain($values['new']['message']);
  }
  $values['tve_k2_messages'] = $messages;
  unset($values['tve_k2_messages_group']);
  unset($values['new']);
}

<?php

/**
 * USA Network settings form
 */
function usanetwork_settings_form() {

  $form['scheduler'] = array(
    '#type' => 'fieldset',
    '#title' => t('Scheduler settings'),
    '#collapsible' => TRUE, 
    '#collapsed' => FALSE,
  );
  $form['scheduler']['usanetwork_on_now_schedule'] = array(
    '#type' => 'textfield', 
    '#title' => t('USA "On Now" Schedule URL'),
    '#default_value' => variable_get('usanetwork_on_now_schedule', ''),
    '#description' => t('The URL for retrieving the schedule to populate the "On Now" block in JSON format.')
  );

  return system_settings_form($form);
}



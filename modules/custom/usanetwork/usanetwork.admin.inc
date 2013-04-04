<?php

/**
 * USA Network settings form
 */
function usanetwork_settings_form() {

  $form['tv_schedule'] = array(
    '#type' => 'fieldset',
    '#title' => t('TV Schedule Settings'),
    '#collapsible' => TRUE, 
    '#collapsed' => FALSE,
  );
  $form['tv_schedule']['usanetwork_on_now_schedule'] = array(
    '#type' => 'textfield', 
    '#title' => t('USA "On Now" Schedule URL'),
    '#default_value' => variable_get('usanetwork_on_now_schedule', ''),
    '#description' => t('The URL for retrieving the schedule to populate the "On Now" block in JSON format.')
  );
  $form['tv_schedule']['usanetwork_tv_schedule'] = array(
    '#type' => 'textfield', 
    '#title' => t('USA TV Schedule URL'),
    '#default_value' => variable_get('usanetwork_tv_schedule', ''),
    '#description' => t('The URL for retrieving the USA TV schedule in JSON format.')
  );

  return system_settings_form($form);
}



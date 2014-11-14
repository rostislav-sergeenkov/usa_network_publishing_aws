<?php

function usanetwork_schedule_settings_form($form, &$form_state) {
  $form = array();

  $form['usanetwork_schedule_data_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Data URL'),
    '#default_value' => variable_get('usanetwork_schedule_data_url', USANETWORK_SCHEDULE_SERVICE_DEFAULT_URL),
    '#description' => t('Enter the feed URL of the JSON data feed provided by the NBCU video team.'),
    '#required' => TRUE,
  );

  $form['usanetwork_schedule_update_interval'] = array(
    '#type' => 'select',
    '#title' => t('Update interval'),
    '#options' => drupal_map_assoc(array(1, 2, 4, 6, 8, 12, 24, 72, 168)),
    '#default_value' => variable_get('usanetwork_schedule_update_interval', 8),
    '#field_prefix' => t('Check for updated program data every'),
    '#field_suffix' => t('hours'),
  );

  $form['usanetwork_schedule_delete_after_interval'] = array(
    '#type' => 'select',
    '#title' => t('Delete interval'),
    '#options' => drupal_map_assoc(array(0, 7, 14, 30, 60, 90)),
    '#default_value' => variable_get('usanetwork_schedule_delete_after_interval', 0),
    '#field_prefix' => t('Delete programs that are'),
    '#field_suffix' => t('days old'),
  );

  $form['usanetwork_schedule_run_update'] = array(
    '#type' => 'select',
    '#title' => t('Manual update'),
    '#description' => t('Change it if you are going to update it manually'),
    '#options' => array(
      0 => t('Do not update'),
      1 => t('Update after saving'),
    ),
    '#default_value' => 0,
  );

  $form['program_guide_delete_after_interval']['#options'][0] = t('Never');
  $form['#submit'][] = 'usanetwork_schedule_settings_form_submit';

  return system_settings_form($form);
}

function usanetwork_schedule_settings_form_submit(&$form, &$form_state) {
  if (!empty($form_state['values']['usanetwork_schedule_run_update']) &&
    $form_state['values']['usanetwork_schedule_run_update'] == 1) {
    variable_set('usanetwork_schedule_last_update', 0);

    usanetwork_schedule_cron();
  }
}

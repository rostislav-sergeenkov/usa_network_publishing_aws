<?php

/**
 * USA Video configuration form.
 */
function usanetwork_mpx_video_admin($form, &$form_state) {
  $form['#tree'] = TRUE;
  $form['sync'] = array(
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#title' => t('Synchronize videos'),
    '#description' => t('Synchronize videos to affect changes in import rulesets.'),
  );
  $options = array();
  foreach (_pub_mpx_get_mpx_account_video_file_types() as $type => $info) {
    $options[$type] = $info->label;
  }
  $form['sync']['types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Video types'),
    '#options' => $options,
    '#default_value' => _pub_mpx_get_mpx_account_video_file_types(TRUE),
  );
  $form['sync']['start'] = array(
    '#type' => 'submit',
    '#value' => t('Sync Now'),
    '#submit' => array('usanetwork_mpx_video_sync_submit'),
    '#limit_validation_errors' => array(),
  );

  return $form;
}

/**
 * Submit callback for Sync Now button.
 */
function usanetwork_mpx_video_sync_submit($form, &$form_state) {
  $types = array_filter($form_state['input']['sync']['types']);
  if (!empty($types)) {
    $batch = usanetwork_mpx_video_sync_batch($types);
    batch_set($batch);
  }
  else {
    drupal_set_message(t('No video types where selected for update.'), 'error');
  }
}

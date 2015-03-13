<?php

/**
 * USA Network Umbel Tracking configuration form.
 */
function usanetwork_umbel_tracking_admin_settings($form, &$form_state) {
  $form['usanetwork_umbel_tracking_code'] = array(
    '#type' => 'textfield',
    '#title' => t('Umbel Tracking Code'),
    '#default_value' => variable_get('usanetwork_umbel_tracking_code', 'iwgdlxrtqfiiortz'),
  );
   
  return system_settings_form($form);
}

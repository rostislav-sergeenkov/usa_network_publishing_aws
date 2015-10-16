<?php

/**
 * USA Network Dynamic Tag Manager configuration form.
 */
function usanetwork_dtm_admin_settings_form($form, &$form_state) {
  $form['usanetwork_dtm_mirgation_array'] = array(
    '#type' => 'textarea',
    '#rows' => 70,
    '#title' => t('DTM Mirgation Array'),
    '#default_value' => variable_get('usanetwork_dtm_mirgation_array', _usanetwork_dtm_default_migaration_array()),
  );

  $form['usanetwork_dtm_codesnippet'] = array(
    '#type' => 'textarea',
    '#title' => t('JavaScript Code'),
    '#default_value' => variable_get('usanetwork_dtm_codesnippet', ''),
    '#rows' => 15,
  );

  return system_settings_form($form);
}

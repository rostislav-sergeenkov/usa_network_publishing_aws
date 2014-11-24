<?php

/**
 * Settings form for configuring images lazyloading for different devices.
 */
function usanetwork_lazyloader_settings_form($form, &$form_state) {
  $form = array();

  $form['usanetwork_lazyloader_mobile_using'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use images lazy loading for mobile devices'),
    '#description' => t('Mark this checkbox if you want to enable lazy loading for mobile devices'),
    '#default_value' => variable_get('usanetwork_lazyloader_mobile_using', 0),
  );

  $form['usanetwork_lazyloader_desktop_using'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use images lazy loading for desktop devices'),
    '#description' => t('Mark this checkbox if you want to enable lazy loading for mobile devices'),
    '#default_value' => variable_get('usanetwork_lazyloader_desktop_using', 0),
  );

  return system_settings_form($form);
}

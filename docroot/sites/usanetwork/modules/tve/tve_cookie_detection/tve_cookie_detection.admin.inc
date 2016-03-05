<?php

/**
 * @file
 * Administration page/form for the TVE Cookie Detection module.
 *
 * @ingroup tve_cookie_detection
 */

/**
 * Administration settings form builder.
 */
function tve_cookie_detection_admin_settings_form($form, &$form_state) {
  $form['tve_cookie_detection_domain'] = array(
    '#type' => 'textfield',
    '#title' => t('Alternative Domain'),
    '#default_value' => check_url(variable_get('tve_cookie_detection_domain', '')),
    '#description' => t('Alternative (or third-party) domain linked exactly to the same (this) site. Example: <em>http://some-3rd-party-domain.com</em>.'),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}

/**
 * Administration settings form validation callback.
 */
function tve_cookie_detection_admin_settings_form_validate($form, &$form_state) {
  if (!empty($form_state['values']['tve_cookie_detection_domain'])) {
    $form_state['values']['tve_cookie_detection_domain'] = rtrim($form_state['values']['tve_cookie_detection_domain'], '/');

    // Request for step #1.
    $url1 = $form_state['values']['tve_cookie_detection_domain'] . '/' . drupal_get_path('module', 'tve_cookie_detection') . '/' . TVE_COOKIE_DETECTION_FILE_STEP_1;
    $request1 = drupal_http_request($url1, array(
      'method' => 'HEAD',
      'timeout' => 10,
    ));
    // Request for step #2.
    $url2 = $form_state['values']['tve_cookie_detection_domain'] . '/' . drupal_get_path('module', 'tve_cookie_detection') . '/' . TVE_COOKIE_DETECTION_FILE_STEP_2;
    $request2 = drupal_http_request($url2, array(
      'method' => 'HEAD',
      'timeout' => 10,
    ));

    if (!empty($request1->error) || !empty($request2->error)) {
      form_set_error(
        'tve_cookie_detection_domain',
        t('Incorrect alternative domain %domain provided.', array('%domain' => $form_state['values']['tve_cookie_detection_domain']))
      );
    }
  }
}

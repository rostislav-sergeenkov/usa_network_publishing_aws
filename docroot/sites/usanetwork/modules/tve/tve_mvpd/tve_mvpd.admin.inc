<?php

/**
 * @file
 * Form callback for admin pages for the TVE MVPD module.
 *
 * @ingroup tve_mvpd
 */

/**
 * Form builder callback for MVPD connection settings form.
 *
 * @param array $form
 * @param array $form_state
 *
 * @return array $form
 */
function _tve_mvpd_admin_connection_form($form, &$form_state) {
  global $base_url;
  // Get "MVPD Admin" service url.
  $service_url = _tve_mvpd_get_service_url();
  if ($service_url) {
    $form['tve_mvpd_data_url_info'] = array(
      '#type' => 'item',
      '#title' => t('Internal MVPD Service URL'),
      '#markup' => l($base_url . '/' . TVE_MVPD_LOCAL_PATH, TVE_MVPD_LOCAL_PATH),
    );
    $form['tve_mvpd_service_url_info'] = array(
      '#type' => 'item',
      '#title' => t('MVPD Admin Service URL'),
      '#markup' => l($service_url, $service_url),
    );
  }
  else {
    drupal_set_message(t('MVPD service URL incorrect (or not provided).'), 'warning');
  }

  // MVPD service url.
  $form['tve_mvpd_service'] = array(
    '#title' => t('MVPD Service URL'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_mvpd_service', ''),
    '#required' => TRUE,
  );
  // Brand id.
  $form['tve_mvpd_brand_id'] = array(
    '#title' => t('Brand Requestor ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_mvpd_brand_id', ''),
    '#required' => TRUE,
  );
  // Brand instance (environment).
  $form['tve_mvpd_instance'] = array(
    '#title' => t('Brand Instance'),
    '#type' => 'select',
    '#options' => drupal_map_assoc(array(TVE_MVPD_INST_PROD, TVE_MVPD_INST_STAGE)),
    '#default_value' => variable_get('tve_mvpd_instance', ''),
    '#required' => TRUE,
  );
  // Generic "error" message.
  $form['tve_mvpd_error_message'] = array(
    '#title' => t('Generic Error Message'),
    '#type' => 'textarea',
    '#default_value' => variable_get('tve_mvpd_error_message', TVE_MVPD_ERROR_MESSAGE),
    '#required' => TRUE,
  );

  return system_settings_form($form);
}

/**
 * TVE MVPD connection settings form validation callback.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_mvpd_admin_connection_form_validate($form, &$form_state) {
  // MVPD service url.
  $service = &$form_state['values']['tve_mvpd_service'];
  $service = trim($service);

  // Brand id.
  $brand = &$form_state['values']['tve_mvpd_brand_id'];
  $brand = trim($brand);

  // Brand instance (environment).
  $instance = &$form_state['values']['tve_mvpd_instance'];

  // Generic "error" message.
  $generic_error_message = &$form_state['values']['tve_mvpd_error_message'];
  $generic_error_message = trim($generic_error_message);

  if (!valid_url($service)) {
    // Set error if url is not valid.
    form_set_error('tve_mvpd_service', t('Invalid MVPD Service URL'));
    return;
  }

  // Final url for MVPD service including brand and its environment.
  $form_state['values']['tve_mvpd_service_url'] = implode('/', array($service, $brand, $instance));

  // Check availability of MVPD data for final url.
  if (!_tve_mvpd_get_providers_from_service($form_state['values']['tve_mvpd_service_url'])) {
    form_set_error('', t('Could not retrieve MVPD data for %inst instance of %brand brand. Please check service URL and requestor ID.', array('%inst' => $instance, '%brand' => $brand)));
  }
}

/**
 * Form builder callback for MVPD settings form.
 *
 * @param array $form
 * @param array $form_state
 *
 * @return array $form
 */
function _tve_mvpd_admin_form($form, &$form_state) {
  // Retrieve all available MVPD providers.
  $providers = _tve_mvpd_get_providers();
  // Get providers with overriden settings.
  $defaults = variable_get('tve_mvpd_providers', array());
  if (!$providers) {
    // Providers not found.
    drupal_set_message(t('Providers (MVPDs) not found. Please check connection settings to MVPD service on the "MVPD Connection" page.'), 'warning');
    return;
  }

  // Create form elements for all providers.
  foreach ($providers as $provider) {
    // Prepare machine name for a form element.
    $mvpd_title = _tve_mvpd_get_clean_title($provider->field_mvpd_id);

    // Prepare default values for select (radios) inputs.
    if (isset($defaults[$mvpd_title])) {
      $default = $defaults[$mvpd_title];
    }
    else {
      $default = array(
        'mvpd_color' => TVE_MVPD_COLOR_LIGHT,
        'mvpd_logo' => TVE_MVPD_LOGO_LIGHT,
      );
    }

    // Personal fieldset for provider.
    $form[$mvpd_title] = array(
      '#type' => 'fieldset',
      '#title' => $provider->title,
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
      '#tree' => TRUE,
    );

    // Options for select (radios) inputs.
    $options = _tve_mvpd_get_mvpd_data($provider, $default);

    // "MVPD Logo" input.
    $form[$mvpd_title]['mvpd_logo'] = array(
      '#type' => 'radios',
      '#title' => t('MVPD Grid Logo Settings'),
      '#description' => t('Choose MVPD logo with alternative images. It will be used in the login window grid.'),
      '#options' => $options['mvpd_logo'],
      '#default_value' => isset($default['mvpd_logo']) ? $default['mvpd_logo'] : NULL,
      '#theme' => 'tve_mvpd_custom_radios',
    );

    // "MVPD Color" input.
    $form[$mvpd_title]['mvpd_color'] = array(
      '#type' => 'radios',
      '#title' => t('MVPD Header/Footer Logo Settings'),
      '#description' => t('Choose MVPD logo. It will be used in header and footer blocks.'),
      '#options' => $options['mvpd_color'],
      '#default_value' => isset($default['mvpd_color']) ? $default['mvpd_color'] : NULL,
      '#theme' => 'tve_mvpd_custom_radios',
    );
  }

  // Submit button.
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save configuration'),
  );

  return $form;
}

/**
 * Form submit callback for MVPD settings form.
 *
 * @param array $form
 * @param array $form_state
 *
 */
function _tve_mvpd_admin_form_submit($form, &$form_state) {
  $providers = array();
  foreach ($form_state['values'] as $name => $value) {
    // Collect all provider settings - each provider has its own
    // "[provider] => (array) [settings]" pair inside $form_state['values'].
    if (is_array($value)) {
      // Each provider has array of settings (at least two properties).
      $providers[$name] = $value;
    }
  }
  variable_set('tve_mvpd_providers', $providers);
}

/**
 * Checks mvpd data and compares with default settings.
 * Returns cleaned data.
 *
 * @param array $provider mvpd data
 * @param array $default default settings
 *
 * @return array
 *  Options for select inputs.
 */
function _tve_mvpd_get_mvpd_data($provider, &$default) {
  // "MVPD color" property.
  $mvpd_color = array();
  if (!empty($provider->{TVE_MVPD_COLOR_LIGHT})) {
    // Light color value (url to an image).
    $mvpd_color[TVE_MVPD_COLOR_LIGHT] = $provider->{TVE_MVPD_COLOR_LIGHT};
  }

  if (!empty($provider->{TVE_MVPD_COLOR_DARK})) {
    // Dark color value (url to an image).
    $mvpd_color[TVE_MVPD_COLOR_DARK] = $provider->{TVE_MVPD_COLOR_DARK};
  }

  if (!isset($default['mvpd_color'], $mvpd_color[$default['mvpd_color']])) {
    // Reset default (selected) option for "MVPD color" if stored one not found.
    $default['mvpd_color'] = key($mvpd_color);
  }

  // "MVPD logo" property.
  $mvpd_logos = array();
  if (!empty($provider->{TVE_MVPD_LOGO_LIGHT})) {
    // Light logo value (url to an image).
    $mvpd_logos[TVE_MVPD_LOGO_LIGHT] = $provider->{TVE_MVPD_LOGO_LIGHT};
  }

  if (!empty($provider->{TVE_MVPD_LOGO_DARK})) {
    // Dark logo value (url to an image).
    $mvpd_logos[TVE_MVPD_LOGO_DARK] = $provider->{TVE_MVPD_LOGO_DARK};
  }

  if (!empty($provider->{TVE_MVPD_LOGO_ALT})) {
    // Alternative logos (urls to an images).
    foreach ($provider->{TVE_MVPD_LOGO_ALT} as $logo_id => $logo_url) {
      $mvpd_logos[$logo_id] = $logo_url;
    }
  }

  if (!isset($default['mvpd_logo'], $mvpd_logos[$default['mvpd_logo']])) {
    // Reset default (selected) option for "MVPD logo" if stored one not found.
    $default['mvpd_logo'] = key($mvpd_logos);
  }

  return array(
    'mvpd_color' => $mvpd_color,
    'mvpd_logo' => $mvpd_logos,
  );
}

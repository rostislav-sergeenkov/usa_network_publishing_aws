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
function tve_mvpd_admin_connection_form($form, &$form_state) {
  // Get "MVPD Admin" service url.
  $service_url = _tve_mvpd_get_service_url();
  if ($service_url) {
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
    '#description' => t('Absolute URL to the MVPD service.'),
  );
  // Requestor id.
  $form['tve_mvpd_brand_id'] = array(
    '#title' => t('Requestor ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_mvpd_brand_id', ''),
    '#required' => TRUE,
    '#description' => t('Specify unique requestor id.'),
  );
  // Instance (environment).
  $form['tve_mvpd_instance'] = array(
    '#title' => t('Instance'),
    '#type' => 'select',
    '#options' => drupal_map_assoc(array(TVE_MVPD_INST_PROD, TVE_MVPD_INST_STAGE)),
    '#default_value' => variable_get('tve_mvpd_instance', ''),
    '#required' => TRUE,
    '#description' => t('Specify type of an instance.'),
  );
  // Generic "error" message.
  $form['tve_mvpd_error_message'] = array(
    '#title' => t('Generic Error Message'),
    '#type' => 'textarea',
    '#default_value' => variable_get('tve_mvpd_error_message', TVE_MVPD_ERROR_MESSAGE),
    '#required' => TRUE,
    '#description' => t('Provide text of a generic error message.'),
  );

  return system_settings_form($form);
}

/**
 * TVE MVPD connection settings form validation callback.
 *
 * @param array $form
 * @param array $form_state
 */
function tve_mvpd_admin_connection_form_validate($form, &$form_state) {
  // MVPD service url.
  $service = &$form_state['values']['tve_mvpd_service'];
  $service = trim($service);

  // Brand id.
  $brand = &$form_state['values']['tve_mvpd_brand_id'];
  $brand = trim($brand);

  // Brand instance (environment).
  $instance = &$form_state['values']['tve_mvpd_instance'];

  if (!valid_url($service)) {
    // Set error if url is not valid.
    form_set_error('tve_mvpd_service', t('Invalid MVPD Service URL'));
  }
  else {
    // Final url for MVPD service including brand and its environment.
    $form_state['values']['tve_mvpd_service_url'] = implode('/', array($service, $brand, $instance));

    // Check availability of MVPD data for final url.
    if (!_tve_mvpd_get_providers_from_service($form_state['values']['tve_mvpd_service_url'])) {
      form_set_error('', t('Could not retrieve MVPD data for %inst instance of %brand brand. Please check service URL and requestor ID.', array('%inst' => $instance, '%brand' => $brand)));
    }
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
function tve_mvpd_admin_form($form, &$form_state) {
  // Retrieve all available MVPD providers.
  $providers = _tve_mvpd_get_providers();
  if (NULL === $providers) {
    // Providers not found.
    drupal_set_message(t('Providers (MVPDs) not found. Please check connection settings to MVPD service on the "MVPD Connection" page.'), 'warning');
    return $form;
  }

  // Place featured providers to the top, sorted by weight,
  // and place non-featured providers below featured, sorted by title.
  usort($providers, '_tve_mvpd_compare_providers');

  // Get providers with overridden settings.
  $configured_providers = variable_get('tve_mvpd_providers', array());
  $default_settings = variable_get('tve_mvpd_default_settings', array());

  // Default global settings form.
  $form['default_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Default global settings'),
    '#collapsible' => FALSE,
    '#tree' => TRUE,
  );

  $form['default_settings']['mvpd_logo'] = array(
    '#type' => 'radios',
    '#title' => t('Grid Logo'),
    '#description' => t('Choose global MVPD grid logo settings between dark or light.'),
    '#options' => array(
      TVE_MVPD_LOGO_DARK => t('Dark'),
      TVE_MVPD_LOGO_LIGHT => t('Light'),
    ),
    '#default_value' => isset($default_settings['mvpd_logo']) ? $default_settings['mvpd_logo'] : TVE_MVPD_LOGO_DARK,
  );

  $form['default_settings']['mvpd_color'] = array(
    '#type' => 'radios',
    '#title' => t('Header/Footer Logo'),
    '#description' => t('Choose global MVPD header/footer logo settings between dark or light.'),
    '#options' => array(
      TVE_MVPD_COLOR_DARK => t('Dark'),
      TVE_MVPD_COLOR_LIGHT => t('Light'),
    ),
    '#default_value' => isset($default_settings['mvpd_color']) ? $default_settings['mvpd_color'] : TVE_MVPD_COLOR_LIGHT,
  );

  // "Reset" confirmation button.
  $form['default_settings']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Reset to defaults'),
    '#submit' => array('_tve_mvpd_reset_button_submit'),
  );

  // Create form elements for all providers.
  foreach ($providers as $provider) {
    // Prepare machine name for a form element.
    $mvpd_title = _tve_mvpd_get_clean_title($provider->field_mvpd_id);
    $messages = array(
      'overridden' => '',
      'conflict' => '',
    );

    // Prepare default values for select (radios) inputs.
    if (isset($configured_providers[$mvpd_title])) {
      $current_provider_data = $configured_providers[$mvpd_title];
      $messages['overridden'] = format_string(' (!status)', array(
        '!status' => t('Overridden'),
      ));

      // Using plain html because theme_html_tag adds "\n" symbol at the end,
      // which breaks layout in Chrome.
      $messages['overridden'] = '<span class="mvpd-overridden-logo">' . $messages['overridden'] . '</span>';
    }
    else {
      $current_provider_data = array(
        'mvpd_color' => TVE_MVPD_DEFAULT,
        'mvpd_logo' => TVE_MVPD_DEFAULT,
      );
    }

    // Options for select (radios) inputs.
    $options = _tve_mvpd_get_mvpd_data($provider, $current_provider_data);

    // Checks conflicts.
    $messages['conflict_color'] = _tve_mvpd_check_default_logos($options, $current_provider_data, $default_settings, 'mvpd_color');
    $messages['conflict_logo'] = _tve_mvpd_check_default_logos($options, $current_provider_data, $default_settings, 'mvpd_logo');
    if ($messages['conflict_color'] || $messages['conflict_logo']) {
      $messages['conflict'] = format_string(' (!status)', array(
        '!status' => t('Conflict with default settings'),
      ));

      // Using plain html because theme_html_tag adds "\n" symbol at the end,
      // which breaks layout in Chrome.
      $messages['conflict'] = '<span class="mvpd-conflict-logo">' . $messages['conflict'] . '</span>';
    }

    // Insert the "Featured MVPDs" label above them, once.
    if ($provider->featured && !isset($featured_mvpds_label_inserted)) {
      $featured_mvpds_label_inserted = TRUE;

      $form['featured_mvpds_label'] = array(
        '#type' => 'item',
        '#title' => format_string('!label:', array(
          '!label' => t('Featured MVPDs'),
        )),
      );
    }

    // Insert the "Other MVPDs" label above them, once.
    if (!$provider->featured && !isset($other_mvpds_label_inserted)) {
      $other_mvpds_label_inserted = TRUE;

      $form['other_mvpds_label'] = array(
        '#type' => 'item',
        '#title' => format_string('!label:', array(
          '!label' => t('Other MVPDs'),
        )),
      );
    }

    // Personal fieldset for provider.
    $form[$mvpd_title] = array(
      '#type' => 'fieldset',
      '#title' => $provider->title . $messages['overridden'] . $messages['conflict'],
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
      '#tree' => TRUE,
    );

    // "MVPD Logo" input.
    $form[$mvpd_title]['mvpd_logo'] = array(
      '#type' => 'radios',
      '#title' => t('MVPD Grid Logo Settings'),
      '#description' => t('Choose MVPD logo with alternative images. It will be used in the login window grid.') . $messages['conflict_logo'],
      '#options' => $options['mvpd_logo'],
      '#default_value' => isset($current_provider_data['mvpd_logo']) ? $current_provider_data['mvpd_logo'] : NULL,
      '#theme' => 'tve_mvpd_custom_radios',
    );

    // "MVPD Color" input.
    $form[$mvpd_title]['mvpd_color'] = array(
      '#type' => 'radios',
      '#title' => t('MVPD Header/Footer Logo Settings'),
      '#description' => t('Choose MVPD logo. It will be used in header and footer blocks.') . $messages['conflict_color'],
      '#options' => $options['mvpd_color'],
      '#default_value' => isset($current_provider_data['mvpd_color']) ? $current_provider_data['mvpd_color'] : NULL,
      '#theme' => 'tve_mvpd_custom_radios',
    );
  }

  // Submit for save all overridden MVPD logo.
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save configuration'),
  );

  return $form;
}

/**
 * Submit callback for 'Reset to defaults' button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_mvpd_reset_button_submit($form, &$form_state) {
  $form_state['redirect'] = 'admin/config/services/mvpd-reset';
}

/**
 * Confirmation form builder for 'Reset to defaults' action.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_mvpd_reset_confirm_form($form, &$form_state) {
  return confirm_form(
    $form,
    t('Reset MVPD settings'),
    'admin/config/services/mvpd',
    t('Are you sure you want to reset all MVPD settings to defaults?'),
    t('Reset'),
    t('Back')
  );
}

/**
 * Submit callback for 'Reset to defaults' action.
 *
 * @param array $form
 * @param array $form_state
 *
 */
function _tve_mvpd_reset_confirm_form_submit($form, &$form_state) {
  variable_del('tve_mvpd_providers');
  drupal_set_message(t('Default MVPD settings restored.'));

  $form_state['redirect'] = 'admin/config/services/mvpd';
}

/**
 * Form submit callback for MVPD settings form.
 *
 * @param array $form
 * @param array $form_state
 *
 */
function _tve_mvpd_admin_form_submit($form, &$form_state) {
  if (!empty($form_state['values']['default_settings'])) {
    variable_set('tve_mvpd_default_settings', $form_state['values']['default_settings']);
  }
  unset($form_state['values']['default_settings']);

  $providers = array();
  foreach ($form_state['values'] as $name => $value) {
    // Collect all provider settings - each provider has its own
    // "[provider] => (array) [settings]" pair inside $form_state['values'].
    if (is_array($value) &&
      ($value['mvpd_logo'] != TVE_MVPD_DEFAULT || $value['mvpd_color'] != TVE_MVPD_DEFAULT)) {
      // Each provider has array of settings (at least two properties).
      $providers[$name] = $value;
    }
  }
  variable_set('tve_mvpd_providers', $providers);
}

/**
 * Checks MVPD data and compares with default settings.
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
  $mvpd_color = array(
    TVE_MVPD_DEFAULT => 'Default global settings',
  );
  if (!empty($provider->{TVE_MVPD_COLOR_DARK})) {
    // Dark color value (url to an image).
    $mvpd_color[TVE_MVPD_COLOR_DARK] = $provider->{TVE_MVPD_COLOR_DARK};
  }

  if (!empty($provider->{TVE_MVPD_COLOR_LIGHT})) {
    // Light color value (url to an image).
    $mvpd_color[TVE_MVPD_COLOR_LIGHT] = $provider->{TVE_MVPD_COLOR_LIGHT};
  }

  if (!isset($default['mvpd_color'], $mvpd_color[$default['mvpd_color']])) {
    // Reset default (selected) option for "MVPD color" if stored one not found.
    $default['mvpd_color'] = key($mvpd_color);
  }

  // "MVPD logo" property.
  $mvpd_logos = array(
    TVE_MVPD_DEFAULT => 'Default global settings',
  );
  if (!empty($provider->{TVE_MVPD_LOGO_DARK})) {
    // Dark logo value (url to an image).
    $mvpd_logos[TVE_MVPD_LOGO_DARK] = $provider->{TVE_MVPD_LOGO_DARK};
  }

  if (!empty($provider->{TVE_MVPD_LOGO_LIGHT})) {
    // Light logo value (url to an image).
    $mvpd_logos[TVE_MVPD_LOGO_LIGHT] = $provider->{TVE_MVPD_LOGO_LIGHT};
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

/**
 * Checks default logo by logo type and if default logo settings does not exist
 * returns conflict text with html tag for form field description.
 *
 * @param $options
 * @param $provider
 * @param $settings
 * @param $logo_type
 *
 * @return string $conflict_text
 */
function _tve_mvpd_check_default_logos($options, $provider, $settings, $logo_type) {
  $conflict_text = '';
  if ($provider[$logo_type] == TVE_MVPD_DEFAULT && empty($options[$logo_type][$settings[$logo_type]])) {
    $conflict_text = theme('html_tag', array(
      'element' => array(
        '#tag' => 'div',
        '#value' => t("Default global logo doesn't exist here. You can choose logo for this MVPD or will use the first logo settings by default"),
        '#attributes' => array(
          'class' => array('mvpd-conflict-logo-desc'),
        ),
      ),
    ));
  }

  return $conflict_text;
}

/**
 * Compares providers by featured status, weight, or name.
 *
 * @param object $provider1
 * @param object $provider2
 *
 * @return int
 */
function _tve_mvpd_compare_providers($provider1, $provider2) {
  if ($provider1->featured && !$provider2->featured) {
    return -1;
  }

  if ($provider2->featured && !$provider1->featured) {
    return 1;
  }

  if (!$provider1->featured && !$provider2->featured) {
    return strnatcmp($provider1->title, $provider2->title);
  }

  if ($provider1->weight == $provider2->weight) {
    return 0;
  }

  return $provider1->weight < $provider2->weight ? -1 : 1;
}

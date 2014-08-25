<?php

/**
 * @file
 * TVE Watchwith administration forms.
 */

/**
 * Form builder callback for TVE Watchwith settings form.
 *
 * @param array $form
 * @param array $form_state
 *
 * @return array
 */
function _tve_watchwith_admin_form($form, &$form_state) {
  $form['tve_watchwith_enable'] = array(
    '#title' => t('Enable Watchwith Sidecar'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('tve_watchwith_enable', 1),
  );

  $form['tve_watchwith_widget_display_path'] = array(
    '#title' => t('Show watchwith on specific pages'),
    '#type' => 'textarea',
    '#default_value' => variable_get('tve_watchwith_widget_display_path', 'episode/*'),
    '#description' => t('Specify pages by using their paths. Enter one path per line. The * character is a wildcard. Example paths are episode detail page (episode/*).'),
    '#required' => TRUE,
  );

  $form['tve_watchwith_js_path'] = array(
    '#title' => t('Absolute path to watchwith sidecar javascript file'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_watchwith_js_path', ''),
    '#description' => t('Absolute path to the javascript file that needs to be included for sidecar.'),
    '#required' => TRUE,
    '#element_validate' => array('elements_validate_url'),
  );

  $form['tve_watchwith_css_path'] = array(
    '#title' => t('Absolute path to watchwith sidecar css file'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_watchwith_css_path', ''),
    '#description' => t('Absolute path to the css file that needs to be included for sidecar.'),
    '#required' => TRUE,
    '#element_validate' => array('elements_validate_url'),
  );

  $form['tve_watchwith_api_key'] = array(
    '#title' => t('Watchwith API Key'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_watchwith_api_key', ''),
    '#description' => t('Watchwith API Key.'),
    '#required' => TRUE,
  );

  $form['tve_watchwith_google_analytics_id'] = array(
    '#title' => t('Watchwith Google Analytics ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('tve_watchwith_google_analytics_id', ''),
    '#description' => t('Watchwith Google Analytics ID. The Google Analytics ID will be used for tracking.'),
  );

  $form['tve_watchwith_sidecar_layout'] = array(
    '#title' => t('Watchwith Sidecar Layout'),
    '#type' => 'select',
    '#options' => _tve_watchwith_get_sidecar_layout_options(),
    '#default_value' => variable_get('tve_watchwith_sidecar_layout', 'portrait'),
    '#description' => t('Watchwith Sidecar Layout options.'),
  );

  $form['tve_watchwith_show_all_events'] = array(
    '#title' => t('Show All Events'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('tve_watchwith_show_all_events', 0),
    '#description' => t('Check if we have to render all events even those sidecar does not support.'),
  );

  $form['tve_watchwith_hide_sidecar_tabs'] = array(
    '#title' => t('Hide Sidecar Tabs'),
    '#type' => 'checkbox',
    '#default_value' => variable_get('tve_watchwith_hide_sidecar_tabs', 1),
    '#description' => t('Check if we need to hide the tabs in case watchwith timeline events fail to load.'),
  );

  $default_no_content_message = variable_get('tve_watchwith_default_no_content_message', array());
  $form['tve_watchwith_default_no_content_message'] = array(
    '#title' => t('Watchwith default No content message'),
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#rows' => 15,
    '#default_value' => isset($default_no_content_message['value']) ? $default_no_content_message['value'] : '',
    '#format' => isset($default_no_content_message['format']) ? $default_no_content_message['format'] : '',
    '#description' => t('Message to be displayed when no content has been returned from watchwith.'),
    '#required' => TRUE,
  );

  $social_config = variable_get('tve_watchwith_social_configuration', array());
  $form['tve_watchwith_social_configuration'] = array(
    '#type' => 'fieldset',
    '#title' => t('Social configuration'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['tve_watchwith_social_configuration']['awesmkey'] = array(
    '#title' => t('Awesm Key'),
    '#type' => 'textfield',
    '#default_value' => isset($social_config['awesmkey']) ? $social_config['awesmkey'] : '',
    '#description' => t('API key of the project with which the created awe.sm link should be associated for awe.sm.'),
  );

  $form['tve_watchwith_social_configuration']['awesm_tool'] = array(
    '#title' => t('Awesm Tool'),
    '#type' => 'textfield',
    '#default_value' => isset($social_config['awesm_tool']) ? $social_config['awesm_tool'] : '',
    '#description' => t('A unique key representing the creation method of the awe.sm link.'),
  );

  $form['tve_watchwith_social_configuration']['facebook_app_id'] = array(
    '#title' => t('Facebook Application Id'),
    '#type' => 'textfield',
    '#default_value' => isset($social_config['facebook_app_id']) ? $social_config['facebook_app_id'] : '',
    '#description' => t('Facebook Application Id.'),
  );

  $form['tve_watchwith_social_configuration']['facebook_redirect_uri'] = array(
    '#title' => t('Facebook Redirect URI'),
    '#type' => 'textfield',
    '#default_value' => isset($social_config['facebook_redirect_uri']) ? $social_config['facebook_redirect_uri'] : '',
    '#description' => t('A valid redirect URI associated with your Facebook application ID.'),
  );

  return system_settings_form($form);
}

/**
 * Returns array of options for "Watchwith Sidecar Layout" select.
 *
 * @return array
 */
function _tve_watchwith_get_sidecar_layout_options() {
  return array(
    'portrait' => t('Portrait'),
    'landscape' => t('Landscape'),
  );
}

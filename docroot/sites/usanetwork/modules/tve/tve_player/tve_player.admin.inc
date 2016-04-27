<?php

/**
 * @file
 * Administration form for tve_player.
 */

/**
 * Form builder callback for TVE Player Admin Setting form.
 *
 * @param $form
 * @param $form_state
 *
 * @return mixed
 */
function tve_player_settings_form($form, &$form_state) {
  $config = tve_player_get_config(TRUE);

  // Gets the companion ad sizes from pub_ads module provided settings screen.
  $ad_size_options = _tve_player_get_companion_ad_sizes();

  $form['#tree'] = TRUE;

  // Settings for VOD Player Advertisement Settings Screen.
  $form['tve_player_ad_config'] = array(
    '#type' => 'fieldset',
    '#title' => t('Player configuration'),
  );

  // Global player settings (CPC).
  $form['tve_player_ad_config']['global'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global player configurations'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['tve_player_ad_config']['global']['cpc_location'] = array(
    '#title' => t('Cloud Path Player location'),
    '#type' => 'textfield',
    '#default_value' => $config['global']['cpc_location'],
    '#description' => t('The URL of the Cloud Path Player code.'),
    '#element_validate' => array('_tve_player_element_validate_url'),
  );

  $form['tve_player_ad_config']['global']['cpc_account'] = array(
    '#title' => t('CPC account'),
    '#type' => 'textfield',
    '#default_value' => $config['global']['cpc_account'],
  );

  // VOD player section.
  $form['tve_player_ad_config']['vod'] = array(
    '#type' => 'fieldset',
    '#title' => t('VOD player'),
    '#collapsible' => TRUE,
  );

  $form['tve_player_ad_config']['vod']['player_label'] = array(
    '#markup' => '<h3>' . t('Player Configuration') . '</h3>',
  );

  $form['tve_player_ad_config']['vod']['size'] = array(
    '#title' => t('Player size'),
    '#type' => 'select',
    '#options' => _tve_player_get_player_size_options(),
    '#default_value' => $config['vod']['size'],
  );

  $form['tve_player_ad_config']['vod']['hr'] = array(
    '#markup' => '<hr/><h3>' . t('Freewheel Advertising Configuration') . '</h3>',
  );

  $form['tve_player_ad_config']['vod']['lb_ad_status'] = array(
    '#title' => t('Enable leaderboard advertisement'),
    '#type' => 'checkbox',
    '#default_value' => $config['vod']['lb_ad_status'],
  );

  $form['tve_player_ad_config']['vod']['leaderboard_ad_dimension'] = array(
    '#title' => t('Leaderboard advertisement dimensions'),
    '#type' => 'select',
    '#options' => $ad_size_options,
    '#default_value' => $config['vod']['leaderboard_ad_dimension'],
    '#description' => t('Please select at least one size from the dropdown.'),
    '#states' => array(
      'invisible' => array(
        ':input#edit-tve-player-ad-config-vod-lb-ad-status' => array('checked' => FALSE),
      ),
    ),
  );

  $form['tve_player_ad_config']['vod']['dart_visibility'] = array(
    '#title' => t('DART ad visibility rule'),
    '#type' => 'select',
    '#options' => _tve_player_get_dart_ad_visibility_options(),
    '#default_value' => $config['vod']['dart_visibility'],
    '#description' => t('Please select visibility rule for DART ad.'),
  );

  $form['tve_player_ad_config']['vod']['cmp_ad_status'] = array(
    '#title' => t('Enable companion advertisement'),
    '#type' => 'checkbox',
    '#default_value' => $config['vod']['cmp_ad_status'],
  );

  $form['tve_player_ad_config']['vod']['companion_ad_dimension'] = array(
    '#title' => t('Companion advertisement dimensions'),
    '#type' => 'select',
    '#options' => $ad_size_options,
    '#default_value' => $config['vod']['companion_ad_dimension'],
    '#description' => t('Please select at least one size from the dropdown.'),
    '#states' => array(
      'invisible' => array(
        ':input#edit-tve-player-ad-config-vod-cmp-ad-status' => array('checked' => FALSE),
      ),
    ),
  );

  $form['tve_player_ad_config']['vod']['custom_player_ad_parameters'] = array(
    '#title' => t('Custom Player Ad Parameters'),
    '#type' => 'textfield',
    '#default_value' => $config['vod']['custom_player_ad_parameters'],
    '#description' => t(
      'Custom Player Advertisement Parameters. Example: %example',
      array('%example' => 'fw_site_section=tve_vod_detail_hub&site_section=vod_detail')
    ),
  );


  // Live player section.

  $form['tve_player_ad_config']['live'] = array(
    '#type' => 'fieldset',
    '#title' => t('Live player'),
    '#collapsible' => TRUE,
  );

  $form['tve_player_ad_config']['live']['hr'] = array(
    '#markup' => '<h3>' . t('Freewheel Advertising Configuration') . '</h3>',
  );

  $form['tve_player_ad_config']['live']['lb_ad_status'] = array(
    '#title' => t('Enable leaderboard advertisement'),
    '#type' => 'checkbox',
    '#default_value' => $config['live']['lb_ad_status'],
  );

  $form['tve_player_ad_config']['live']['leaderboard_ad_dimension'] = array(
    '#title' => t('Leaderboard advertisement dimensions'),
    '#type' => 'select',
    '#options' => $ad_size_options,
    '#default_value' => $config['live']['leaderboard_ad_dimension'],
    '#description' => t('Please select at least one size from the dropdown.'),
    '#states' => array(
      'invisible' => array(
        ':input#edit-tve-player-ad-config-live-lb-ad-status' => array('checked' => FALSE),
      ),
    ),
  );

  $form['tve_player_ad_config']['live']['dart_visibility'] = array(
    '#title' => t('DART ad visibility rule'),
    '#type' => 'select',
    '#options' => _tve_player_get_dart_ad_visibility_options(),
    '#default_value' => $config['live']['dart_visibility'],
    '#description' => t('Please select visibility rule for DART ad.'),
  );

  $form['tve_player_ad_config']['live']['cmp_ad_status'] = array(
    '#title' => t('Enable companion advertisement'),
    '#type' => 'checkbox',
    '#default_value' => $config['live']['cmp_ad_status'],
  );

  $form['tve_player_ad_config']['live']['companion_ad_dimension'] = array(
    '#title' => t('Companion advertisement dimensions'),
    '#type' => 'select',
    '#options' => $ad_size_options,
    '#default_value' => $config['live']['companion_ad_dimension'],
    '#description' => t('Please select at least one size from the dropdown.'),
    '#states' => array(
      'invisible' => array(
        ':input#edit-tve-player-ad-config-live-cmp-ad-status' => array('checked' => FALSE),
      ),
    ),
  );

  $form['tve_player_ad_config']['live']['custom_player_ad_parameters'] = array(
    '#title' => t('Custom Player Ad Parameters'),
    '#type' => 'textfield',
    '#default_value' => $config['live']['custom_player_ad_parameters'],
    '#description' => t(
      'Custom Player Advertisement Parameters. Example: %example',
      array('%example' => 'fw_site_section=tve_vod_detail_hub&site_section=vod_detail')
    ),
  );

  return system_settings_form($form);
}

/**
 * Validates URL textfield element.
 */
function _tve_player_element_validate_url($element, &$form_state, $form) {
  if (!empty($element['#value']) && !valid_url($element['#value'], TRUE)) {
    form_error($element, t('URL is not valid'));
  }
}

/**
 * Returns the configured companion ad sizes.
 *
 * @return array
 */
function _tve_player_get_companion_ad_sizes() {
  $ad_size_options = array();
  for ($i = 1; $i <= PUB_ADS_VIDEO_COMPANION_AD_COUNT; $i++) {
    $ad_value = variable_get('pub_ads_video_companion_ad_' . $i, '');
    if (!empty($ad_value) && preg_match("/[0-9]*x[0-9]*/", $ad_value, $matches)) {
      $ad_size_options[$matches[0]] = $matches[0];
    }
  }

  return $ad_size_options;
}

/**
 * Returns list of available options for DART ad visibility input.
 *
 * @return array
 */
function _tve_player_get_dart_ad_visibility_options() {
  return array(
    'dart-ad-anon' => t('Visible only for not authenticated visitors'),
    'dart-ad-all' => t('Visible for all'),
  );
}

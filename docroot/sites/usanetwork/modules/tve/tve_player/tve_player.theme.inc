<?php

/**
 * @file
 * tve_player module theming functions.
 */

/**
 * Renders Freewheel companion div.
 *
 * @param array $variables
 *
 * @return string
 */
function theme_tve_player_fw_companion_ad($variables) {
  if (empty($variables['width']) || empty($variables['height'])) {
    return '';
  }

  $delta = $variables['width'] . 'x' . $variables['height'];
  $fw_element_id = '';
  for ($i = 1; $i <= PUB_ADS_VIDEO_COMPANION_AD_COUNT; $i++) {
    if (strpos(variable_get('pub_ads_video_companion_ad_' . $i, ''), $delta) !== FALSE) {
      $fw_element_id = variable_get('pub_ads_video_companion_ad_' . $i, '');
    }
  }

  if (!$fw_element_id) {
    return '';
  }

  $div_tag = array();
  $div_tag['element']['#tag'] = 'div';
  $div_tag['element']['#value'] = '';
  $div_tag['element']['#attributes'] = array(
    'id' => $fw_element_id,
  );

  return theme('html_tag', $div_tag);
}

/**
 * Renders MPX video player.
 * Overrides "pub_mpx_video" theme function.
 *
 * @see pub_mpx module for more details.
 *
 * @param $variables
 *
 * @return string
 */
function theme_tve_player_mpx_video($variables) {
  _tve_player_add_custom_player_variables($variables, 'vod');

  $file = (object) $variables['file'];
  if (!isset($file->fid)) {
    return _tve_player_error('Could not render player: Invalid file object.');
  }

  $player_id = tve_mpx_player_selection_get_player_id_for_file($file);
  $player = media_theplatform_mpx_get_mpx_player_by_player_id($player_id);

  $player_pid = !empty($player['pid']) ? $player['pid'] : NULL;
  if (!$player_pid) {
    return _tve_player_error('Could not render player: Invalid player PID.');
  }

  $mpx_account_id = !empty($player['parent_account']) ? $player['parent_account'] : NULL;
  if (!$mpx_account_id) {
    return _tve_player_error('Could not render player: No MPX account id found.');
  }

  $mpx_account = _media_theplatform_mpx_get_account_data($mpx_account_id);
  $mpx_account_pid = isset($mpx_account->account_pid) ? $mpx_account->account_pid : NULL;
  if (!$mpx_account_pid) {
    return _tve_player_error('Could not render player: Invalid MPX account.');
  }

  $released_file_pid = NULL;
  if (!empty($file->field_mpx_main_released_file_pid[LANGUAGE_NONE][0]['value'])) {
    $released_file_pid = $file->field_mpx_main_released_file_pid[LANGUAGE_NONE][0]['value'];
  }
  elseif (!empty($file->field_mpx_main_released_file_pid[0]['value'])) {
    $released_file_pid = $file->field_mpx_main_released_file_pid[0]['value'];
  }

  if (!$released_file_pid) {
    return _tve_player_error('Could not render player: Released file pid not found.');
  }

  $released_url = '//link.theplatform.com/s/' . $mpx_account_pid . '/' . $released_file_pid;
  $player_source = '//player.theplatform.com/p/' . $mpx_account_pid . '/' . $player_pid;

  if (!_tve_player_get_player_template_config('use_set_release_url', FALSE)) {
    $player_source .= '/embed/select/' . $released_file_pid;
  }

  $player_tag = array(
    'element' => array(
      '#tag' => 'div',
      '#value' => '',
      '#attributes' => array(
        _tve_player_get_player_template_config('player_directive', TVE_PLAYER_DIRECTIVE) => 'pdk-player',
        'data-src' => url($player_source, array('external' => TRUE)),
        'data-release-url' => url($released_url, array(
            'external' => TRUE,
            'query' => array('mbr' => 'true'),
          )
        ),
        'data-id' => 'pdk-player',
        'data-mbr' => 'true',
      ),
    ),
  );
  if (isset($variables['pub_mpx_player_parameters']['FWsiteSection'])) {
    $player_tag['element']['#attributes']['data-fw-site-section'] = $variables['pub_mpx_player_parameters']['FWsiteSection'];
  }

  // Added to detect player existence on a page
  drupal_add_js(
    array(
      'tve_player' => array('containsPlayer' => 1),
    ),
    'setting'
  );

  // Emergency loophole.
  $pdk_controller_url = variable_get('tve_player_pdk_controller_url_vod', NULL);

  // Normal flow.
  if (NULL == $pdk_controller_url) {
    $pdk_controller_url = "http://player.theplatform.com/pdk/{$mpx_account_pid}/tpPdkController.js";
  }

  drupal_add_js($pdk_controller_url, 'external');

  return theme('html_tag', $player_tag);
}

/**
 * Renders live MPX video player.
 *
 * @param array $variables
 *
 * @return string
 */
function theme_tve_player_mpx_video_live($variables) {
  _tve_player_add_custom_player_variables($variables, 'live');

  $file = (object) $variables['file'];
  if (!isset($file->fid)) {
    return _tve_player_error('Could not render Live player: Invalid file object.');
  }

  $player_id = tve_mpx_player_selection_get_player_id_for_file($file);
  $player = media_theplatform_mpx_get_mpx_player_by_player_id($player_id);

  $player_pid = !empty($player['pid']) ? $player['pid'] : NULL;
  if (!$player_pid) {
    return _tve_player_error('Could not render Live player: Invalid player PID.');
  }

  $mpx_account_id = !empty($player['parent_account']) ? $player['parent_account'] : NULL;
  if (!$mpx_account_id) {
    return _tve_player_error('Could not render Live player: No MPX account id found.');
  }

  $mpx_account = _media_theplatform_mpx_get_account_data($mpx_account_id);
  $mpx_account_pid = isset($mpx_account->account_pid) ? $mpx_account->account_pid : NULL;
  if (!$mpx_account_pid) {
    return _tve_player_error('Could not render Live player: Invalid MPX account.');
  }

  $player_source = '//player.theplatform.com/p/' . $mpx_account_pid . '/' . $player_pid . '/embed';
  $player_tag = array(
    'element' => array(
      '#tag' => 'div',
      '#value' => '',
      '#attributes' => array(
        _tve_player_get_player_template_config('player_directive', TVE_PLAYER_DIRECTIVE) => 'pdk-player',
        'data-src' => url($player_source, array('external' => TRUE)),
        'data-id' => 'pdk-player',
        'data-mbr' => 'true',
        'data-account-pid' => $mpx_account_pid,
        'data-player-pid' => $player_pid,
      ),
    ),
  );

  if (isset($variables['pub_mpx_player_parameters']['FWsiteSection'])) {
    $player_tag['element']['#attributes']['data-fw-site-section'] = $variables['pub_mpx_player_parameters']['FWsiteSection'];
  }

  // Emergency loophole.
  $pdk_controller_url = variable_get('tve_player_pdk_controller_url_live', NULL);

  // Normal flow.
  if (NULL == $pdk_controller_url) {
    $pdk_controller_url = "http://player.theplatform.com/pdk/{$mpx_account_pid}/tpPdkController.js";
  }

  drupal_add_js($pdk_controller_url, 'external');

  return theme('html_tag', $player_tag);
}

/**
 * Renders CloudPath video player.
 *
 * @param array $variables
 *
 * @return string
 */

function theme_tve_player_mpx_video_live_cloudpath($variables) {
  _tve_player_add_custom_player_variables($variables, 'live');

  $file = (object) $variables['file'];
  if (!isset($file->fid)) {
    return _tve_player_error('Could not render Live player: Invalid file object.');
  }

  $player_tag = array(
    'element' => array(
      '#tag' => 'div',
      '#value' => '',
      '#attributes' => array(
        'data-tve-cpc-player' => 'pdk-player',
        'data-id' => 'pdk-player',
        'data-mbr' => 'true',
      ),
    ),
  );

  if (isset($variables['pub_mpx_player_parameters']['FWsiteSection'])) {
    $player_tag['element']['#attributes']['data-fw-site-section'] = $variables['pub_mpx_player_parameters']['FWsiteSection'];
  }

  return theme('html_tag', $player_tag);
}

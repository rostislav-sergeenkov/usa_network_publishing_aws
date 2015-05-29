<?php

/**
 * Returns configuration module form.
 */
function usanetwork_quiz_config_form($form, &$form_state) {
  $form['players'] = array(
    '#type' => 'fieldset',
    '#title' => t('Video players'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['players']['usanetwork_quiz_player'] = array(
    '#tree' => TRUE,
    '#type' => 'container',
  );

  $players = variable_get('usanetwork_quiz_player', array());
  $player_select = media_theplatform_mpx_get_players_select();
  foreach (_media_theplatform_mpx_get_account_data() as $account) {
    $account_name = rawurldecode($account->import_account);
    if (empty($player_select[$account_name])) {
      continue;
    }
    $default = isset($players[$account->id]) ? $players[$account->id] : $account->default_player;
    $form['players']['usanetwork_quiz_player'][ $account->id ] = array(
      '#type' => 'select',
      '#title' => t('Player for account @account:',
        array('@account' => '"' . urldecode($account->import_account) . '" (' . basename($account->account_id) . ')')),
      '#options' => $player_select[$account_name],
      '#empty_option' => t('- Select -'),
      '#required' => TRUE,
      '#default_value' => $default,
    );
  }

  return system_settings_form($form);
}

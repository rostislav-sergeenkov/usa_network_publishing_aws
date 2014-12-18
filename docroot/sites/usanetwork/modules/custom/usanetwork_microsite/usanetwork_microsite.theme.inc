<?php
/**
 * Theme callback for usanetwork_microsite_mpx_video
 */
function theme_usanetwork_microsite_mpx_video($vars) {
  $file = (object) $vars['file'];

  $mpx_account = _media_theplatform_mpx_get_account_data($file->mpx_video_data['parent_account']);
  $mpx_account_pid = $mpx_account->account_pid;
  $mpx_account_default_player = media_theplatform_mpx_get_mpx_player_by_player_id($mpx_account->default_player);
  $show_microsite_players = variable_get('usanetwork_microsite_player', array());
  $mpx_account_default_player = isset($show_microsite_players[$mpx_account->id]) ? media_theplatform_mpx_get_mpx_player_by_player_id($show_microsite_players[$mpx_account->id]) : $mpx_account_default_player;

  $player_id = !empty($vars['player_id']) ? $vars['player_id'] : $mpx_account_default_player['pid'];

  $released_file_pid = NULL;
  if (!empty($file->field_mpx_main_released_file_pid[ LANGUAGE_NONE ][0]['value'])) {
    $released_file_pid = $file->field_mpx_main_released_file_pid[ LANGUAGE_NONE ][0]['value'];
  }
  elseif (!empty($file->field_mpx_main_released_file_pid[0]['value'])) {
    $released_file_pid = $file->field_mpx_main_released_file_pid[0]['value'];
  }

  if (!isset($file->fid) || !$released_file_pid || !$mpx_account_pid || !$player_id) {
    return '';
  }

  // Example iframe provided within the MPX console.
  //   <iframe src="http://player.theplatform.com/p/vCBdGC/C4Urwvl8rU61/embed/select/XaFHqcNj3NFM" width="480" height="270" frameborder="0" allowfullscreen>Your browser does not support iframes.</iframe>

  // Add id attribute to player iframe and a option to pass in extra query
  // params to the iframe url.

  $player_source = '//player.theplatform.com/p/' . $mpx_account_pid . '/' . $player_id . '/select/' . $released_file_pid;
  $player_parameters = array(
    'query' => (isset($vars['pub_mpx_player_parameters']) ? $vars['pub_mpx_player_parameters'] : array()),
    'fragment' => 'playerurl=' . rawurlencode(isset($vars['pub_mpx_player_url']) ? $vars['pub_mpx_player_url'] : url(current_path(), array('absolute' => true))),
    'external' => TRUE,
  );
  $iframe_tag = array();
  $iframe_tag['element']['#tag'] = 'iframe';
  $iframe_tag['element']['#value'] = 'Your browser does not support iframes.';
  $iframe_tag['element']['#attributes'] = array(
    'data-src' => url($player_source, $player_parameters),
    'frameborder' => 0,
    'allowfullscreen' => '',
    'id' => 'pdk-player',
  );

  if (!empty($vars['width'])) {
    $iframe_tag['element']['#attributes']['width'] = $vars['width'];
  }
  if (!empty($vars['height'])) {
    $iframe_tag['element']['#attributes']['height'] = $vars['height'];
  }

  return theme('html_tag', $iframe_tag);
}

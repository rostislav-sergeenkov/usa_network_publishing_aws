<?php

module_load_include('install', 'usanetwork_mpx_video', 'usanetwork_mpx_video');
/*
 * Apply TVE development setting for stage server
 */
function usanetwork_tve_video_stage_settings() {
  //set TVE development setting
//  variable_set('tve_adobe_pass_accessenabler_loc', 'http://entitlement.auth-staging.adobe.com/entitlement/AccessEnablerDebug.swf');
//  variable_set('tve_mvpd_instance', 'stage');
//  variable_set('tve_mvpd_service', 'http://mvpd-admin.nbcuni.com/mvpd/service');
  
  $mpx_accounts = array(
    '3' => array(
      'theplatform_username' => 'mpx/drupal-mpx-usa-tve',
      'theplatform_password' => 'Pa55word',
      'theplatform_import_account' => rawurlencode('NBCU TVE Stage - USA Network'),
      'theplatform_default_player_id' => 'usa_hls_vod_stage',
    ),
  );
  
  _usanetwork_mpx_video_set_accounts($mpx_accounts);
  
  _usanetwork_mpx_video_set_players($mpx_accounts);
  
  drupal_goto('<front>');
}

<?php

/**
 * USA Network settings form
 */
function usanetwork_social_settings_form() {

// SOCIAL BUZZ
  $form['trend'] = array(
    '#type' => 'fieldset',
    '#title' => t('Social Buzz Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['trend']['usanetwork_social_trend_base_url'] = array(
    '#type' => 'textfield',
    '#title' => t('BASE URL'),
    '#default_value' => variable_get('usanetwork_social_trend_base_url', ''),
    '#description' => t('Ex: https://www.rebelmouse.com'),
  );

  $form['trend']['usanetwork_social_trend_url_params'] = array(
    '#type' => 'textfield',
    '#title' => t('URL PARAMS'),
    '#default_value' => variable_get('usanetwork_social_trend_url_params', ''),
    '#description' => t('Ex: embedded=1&flexible=0&scrollbar_theme=light-2'),
  );

// SYNC
  $form['sync'] = array(
    '#type' => 'fieldset',
    '#title' => t('Sync Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['sync']['usanetwork_social_sync_desktop_url'] = array(
    '#type' => 'textfield',
    '#title' => t('DESKTOP / TABLET URL'),
    '#default_value' => variable_get('usanetwork_social_sync_desktop_url', ''),
    '#description' => t('Ex: http://m.usanetwork.com/sync/?ww=OQFL9NEFSDD&show=&layout=web&partner=usa'),
  );

  $form['sync']['usanetwork_social_sync_phone_url'] = array(
    '#type' => 'textfield',
    '#title' => t('MOBILE URL'),
    '#default_value' => variable_get('usanetwork_social_sync_phone_url', ''),
    '#description' => t('Ex: http://m.usanetwork.com/sync/?ww=Q3FJIIQJ2AA&show=&layout=mobile&partner=usamobile'),
  );

  // CHAT WITH FANS
  $form['chat'] = array(
    '#type' => 'fieldset',
    '#title' => t('Chat with Fans Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['chat']['usanetwork_social_chat_echo_app_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo App Key'),
    '#default_value' => variable_get('usanetwork_social_chat_echo_app_key', ''),
    '#description' => t(''),
  );
  $form['chat']['usanetwork_social_chat_echo_query_template'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo Query Template'),
    '#default_value' => variable_get('usanetwork_social_chat_echo_query_template', ''),
    '#description' => t('The tokenized Echo query string. Values in the string will be replaced with the following Tokens.'),
    '#maxlength' => 512,
  );
  $form['chat']['usanetwork_social_chat_childrenof'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDRENOF'),
    '#default_value' => variable_get('usanetwork_social_chat_childrenof', ''),
    '#description' => t('CHILDRENOF Token'),
  );
  $form['chat']['usanetwork_social_chat_feed'] = array(
    '#type' => 'textfield',
    '#title' => t('FEED'),
    '#default_value' => variable_get('usanetwork_social_chat_feed', ''),
    '#description' => t('FEED Token'),
  );
  $form['chat']['usanetwork_social_chat_state'] = array(
    '#type' => 'textfield',
    '#title' => t('STATE'),
    '#default_value' => variable_get('usanetwork_social_chat_state', ''),
    '#description' => t('STATE Token'),
  );
  $form['chat']['usanetwork_social_chat_source'] = array(
    '#type' => 'textfield',
    '#title' => t('SOURCE'),
    '#default_value' => variable_get('usanetwork_social_chat_source', ''),
    '#description' => t('SOURCE Token'),
  );
  $form['chat']['usanetwork_social_chat_markers'] = array(
    '#type' => 'textfield',
    '#title' => t('MARKERS'),
    '#default_value' => variable_get('usanetwork_social_chat_markers', ''),
    '#description' => t('MARKERS Token'),
  );
  $form['chat']['usanetwork_social_chat_tags'] = array(
    '#type' => 'textfield',
    '#title' => t('TAGS'),
    '#default_value' => variable_get('usanetwork_social_chat_tags', ''),
    '#description' => t('TAGS Token'),
  );
  $form['chat']['usanetwork_social_chat_sortorder'] = array(
    '#type' => 'textfield',
    '#title' => t('SORTORDER'),
    '#default_value' => variable_get('usanetwork_social_chat_sortorder', ''),
    '#description' => t('SORTORDER Token'),
  );
  $form['chat']['usanetwork_social_chat_safehtml'] = array(
    '#type' => 'textfield',
    '#title' => t('SAFEHTML'),
    '#default_value' => variable_get('usanetwork_social_chat_safehtml', ''),
    '#description' => t('SAFEHTML Token'),
  );
  $form['chat']['usanetwork_social_chat_itemsperpage'] = array(
    '#type' => 'textfield',
    '#title' => t('ITEMSPERPAGE'),
    '#default_value' => variable_get('usanetwork_social_chat_itemsperpage', ''),
    '#description' => t('ITEMSPERPAGE Token'),
  );
  $form['chat']['usanetwork_social_chat_children'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDREN'),
    '#default_value' => variable_get('usanetwork_social_chat_children', ''),
    '#description' => t('CHILDREN Token'),
    '#maxlength' => 512,
  );
  $form['chat']['usanetwork_social_chat_submittargeturl'] = array(
    '#type' => 'textfield',
    '#title' => t('SUBMITTARGETURL'),
    '#default_value' => variable_get('usanetwork_social_chat_submittargeturl', ''),
    '#description' => t('SUBMITTARGETURL Template'),
    '#maxlength' => 512,
  );
  $form['chat']['usanetwork_social_chat_identitymanagerurl'] = array(
    '#type' => 'textfield',
    '#title' => t('IDENTITYMANAGERURL'),
    '#default_value' => variable_get('usanetwork_social_chat_identitymanagerurl', ''),
    '#description' => t('IDENTITYMANAGERURL'),
    '#maxlength' => 512,
  );

  // TWITTER
  $form['twitter'] = array(
    '#type' => 'fieldset',
    '#title' => t('Twitter Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['twitter']['usanetwork_social_twitter_echo_app_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo App Key'),
    '#default_value' => variable_get('usanetwork_social_twitter_echo_app_key', ''),
    '#description' => t(''),
  );
  $form['twitter']['usanetwork_social_twitter_echo_query_template'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo Query Template'),
    '#default_value' => variable_get('usanetwork_social_twitter_echo_query_template', ''),
    '#description' => t('The tokenized Echo query string. Values in the string will be replaced with the following Tokens.'),
    '#maxlength' => 512,
  );
  $form['twitter']['usanetwork_social_twitter_childrenof'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDRENOF'),
    '#default_value' => variable_get('usanetwork_social_twitter_childrenof', ''),
    '#description' => t('CHILDRENOF Token'),
  );
  $form['twitter']['usanetwork_social_twitter_feed'] = array(
    '#type' => 'textfield',
    '#title' => t('FEED'),
    '#default_value' => variable_get('usanetwork_social_twitter_feed', ''),
    '#description' => t('FEED Token'),
  );
  $form['twitter']['usanetwork_social_twitter_state'] = array(
    '#type' => 'textfield',
    '#title' => t('STATE'),
    '#default_value' => variable_get('usanetwork_social_twitter_state', ''),
    '#description' => t('STATE Token'),
  );
  $form['twitter']['usanetwork_social_twitter_source'] = array(
    '#type' => 'textfield',
    '#title' => t('SOURCE'),
    '#default_value' => variable_get('usanetwork_social_twitter_source', ''),
    '#description' => t('SOURCE Token'),
  );
  $form['twitter']['usanetwork_social_twitter_markers'] = array(
    '#type' => 'textfield',
    '#title' => t('MARKERS'),
    '#default_value' => variable_get('usanetwork_social_twitter_markers', ''),
    '#description' => t('MARKERS Token'),
  );
  $form['twitter']['usanetwork_social_twitter_tags'] = array(
    '#type' => 'textfield',
    '#title' => t('TAGS'),
    '#default_value' => variable_get('usanetwork_social_twitter_tags', ''),
    '#description' => t('TAGS Token'),
  );
  $form['twitter']['usanetwork_social_twitter_sortorder'] = array(
    '#type' => 'textfield',
    '#title' => t('SORTORDER'),
    '#default_value' => variable_get('usanetwork_social_twitter_sortorder', ''),
    '#description' => t('SORTORDER Token'),
  );
  $form['twitter']['usanetwork_social_twitter_safehtml'] = array(
    '#type' => 'textfield',
    '#title' => t('SAFEHTML'),
    '#default_value' => variable_get('usanetwork_social_twitter_safehtml', ''),
    '#description' => t('SAFEHTML Token'),
  );
  $form['twitter']['usanetwork_social_twitter_itemsperpage'] = array(
    '#type' => 'textfield',
    '#title' => t('ITEMSPERPAGE'),
    '#default_value' => variable_get('usanetwork_social_twitter_itemsperpage', ''),
    '#description' => t('ITEMSPERPAGE Token'),
  );
  $form['twitter']['usanetwork_social_twitter_children'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDREN'),
    '#default_value' => variable_get('usanetwork_social_twitter_children', ''),
    '#description' => t('CHILDREN Token'),
    '#maxlength' => 512,
  );

  // FACEBOOK
  $form['facebook'] = array(
    '#type' => 'fieldset',
    '#title' => t('facebook Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['facebook']['usanetwork_social_facebook_echo_app_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo App Key'),
    '#default_value' => variable_get('usanetwork_social_facebook_echo_app_key', ''),
    '#description' => t(''),
  );
  $form['facebook']['usanetwork_social_facebook_echo_query_template'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo Query Template'),
    '#default_value' => variable_get('usanetwork_social_facebook_echo_query_template', ''),
    '#description' => t('The tokenized Echo query string. Values in the string will be replaced with the following Tokens.'),
    '#maxlength' => 512,
  );
  $form['facebook']['usanetwork_social_facebook_childrenof'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDRENOF'),
    '#default_value' => variable_get('usanetwork_social_facebook_childrenof', ''),
    '#description' => t('CHILDRENOF Token'),
  );
  $form['facebook']['usanetwork_social_facebook_feed'] = array(
    '#type' => 'textfield',
    '#title' => t('FEED'),
    '#default_value' => variable_get('usanetwork_social_facebook_feed', ''),
    '#description' => t('FEED Token'),
  );
  $form['facebook']['usanetwork_social_facebook_state'] = array(
    '#type' => 'textfield',
    '#title' => t('STATE'),
    '#default_value' => variable_get('usanetwork_social_facebook_state', ''),
    '#description' => t('STATE Token'),
  );
  $form['facebook']['usanetwork_social_facebook_source'] = array(
    '#type' => 'textfield',
    '#title' => t('SOURCE'),
    '#default_value' => variable_get('usanetwork_social_facebook_source', ''),
    '#description' => t('SOURCE Token'),
  );
  $form['facebook']['usanetwork_social_facebook_markers'] = array(
    '#type' => 'textfield',
    '#title' => t('MARKERS'),
    '#default_value' => variable_get('usanetwork_social_facebook_markers', ''),
    '#description' => t('MARKERS Token'),
  );
  $form['facebook']['usanetwork_social_facebook_tags'] = array(
    '#type' => 'textfield',
    '#title' => t('TAGS'),
    '#default_value' => variable_get('usanetwork_social_facebook_tags', ''),
    '#description' => t('TAGS Token'),
  );
  $form['facebook']['usanetwork_social_facebook_sortorder'] = array(
    '#type' => 'textfield',
    '#title' => t('SORTORDER'),
    '#default_value' => variable_get('usanetwork_social_facebook_sortorder', ''),
    '#description' => t('SORTORDER Token'),
  );
  $form['facebook']['usanetwork_social_facebook_safehtml'] = array(
    '#type' => 'textfield',
    '#title' => t('SAFEHTML'),
    '#default_value' => variable_get('usanetwork_social_facebook_safehtml', ''),
    '#description' => t('SAFEHTML Token'),
  );
  $form['facebook']['usanetwork_social_facebook_itemsperpage'] = array(
    '#type' => 'textfield',
    '#title' => t('ITEMSPERPAGE'),
    '#default_value' => variable_get('usanetwork_social_facebook_itemsperpage', ''),
    '#description' => t('ITEMSPERPAGE Token'),
  );
  $form['facebook']['usanetwork_social_facebook_children'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDREN'),
    '#default_value' => variable_get('usanetwork_social_facebook_children', ''),
    '#description' => t('CHILDREN Token'),
    '#maxlength' => 512,
  );

  // PINTEREST
  $form['pinterest'] = array(
    '#type' => 'fieldset',
    '#title' => t('Pinterest Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['pinterest']['usanetwork_social_pinterest_url'] = array(
    '#type' => 'textfield',
    '#title' => t('URL'),
    '#default_value' => variable_get('usanetwork_social_pinterest_url', ''),
    '#description' => t('PINTEREST url'),
    '#maxlength' => 512,
  );

  // GETGLUE
  $form['getglue'] = array(
    '#type' => 'fieldset',
    '#title' => t('GetGlue Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['getglue']['usanetwork_social_getglue_show'] = array(
    '#type' => 'textfield',
    '#title' => t('URL'),
    '#default_value' => variable_get('usanetwork_social_getglue_show', ''),
    '#description' => t('GetGlue Show'),
    '#maxlength' => 512,
  );

  // INSTAGRAM
  $form['instagram'] = array(
    '#type' => 'fieldset',
    '#title' => t('Instagram Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['instagram']['usanetwork_social_instagram_show_id'] = array(
    '#type' => 'textfield',
    '#title' => t('Show ID'),
    '#default_value' => variable_get('usanetwork_social_instagram_show_id', ''),
    '#description' => t('Instagram show ID'),
  );

  // GLOBAL TWITTER
  $form['global_twitter'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global Twitter Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['global_twitter']['usanetwork_social_global_twitter_echo_query_template'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo Query Template'),
    '#default_value' => variable_get('usanetwork_social_global_twitter_echo_query_template', ''),
    '#description' => t('The tokenized Echo query string. Values in the string will be replaced with the following Tokens.'),
    '#maxlength' => 512,
  );
  $form['global_twitter']['usanetwork_social_global_twitter_path'] = array(
    '#type' => 'textfield',
    '#title' => t('PATH'),
    '#default_value' => variable_get('usanetwork_social_global_twitter_path', ''),
    '#description' => t('PATH Token'),
  );

  // GLOBAL SOCIAL BUZZ
  $form['global_trend'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global Social Buzz Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['global_trend']['usanetwork_social_trend_show_global'] = array(
    '#type' => 'checkbox',
    '#title' => t('SHOW GLOBAL SOCIAL BUZZ'),
    '#default_value' => variable_get('usanetwork_social_trend_show_global', ''),
    '#description' => t('Check to turn global trending on'),
  );

  $form['global_trend']['usanetwork_social_trend_global_base_url'] = array(
    '#type' => 'textfield',
    '#title' => t('BASE URL'),
    '#default_value' => variable_get('usanetwork_social_trend_global_base_url', ''),
    '#description' => t('Ex: https://www.rebelmouse.com'),
  );

  $form['global_trend']['usanetwork_social_trend_global_base_path'] = array(
    '#type' => 'textfield',
    '#title' => t('BASE PATH'),
    '#default_value' => variable_get('usanetwork_social_trend_global_base_path', ''),
    '#description' => t('Ex: USANetwork'),
  );

  $form['global_trend']['usanetwork_social_trend_global_url_params'] = array(
    '#type' => 'textfield',
    '#title' => t('URL PARAMS'),
    '#default_value' => variable_get('usanetwork_social_trend_global_url_params', ''),
    '#description' => t('Ex: embedded=1&flexible=0&scrollbar_theme=light-2&skip=also-on-rm'),
  );

// GLOBAL SYNC
  $form['global_sync'] = array(
    '#type' => 'fieldset',
    '#title' => t('Global Sync Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['global_sync']['usanetwork_social_sync_show_global'] = array(
    '#type' => 'checkbox',
    '#title' => t('SHOW GLOBAL SYNC'),
    '#default_value' => variable_get('usanetwork_social_sync_show_global', ''),
    '#description' => t('Check to turn global chat with fans on'),
  );

  $form['global_sync']['usanetwork_social_sync_global_desktop_url'] = array(
    '#type' => 'textfield',
    '#title' => t('DESKTOP / TABLET URL'),
    '#default_value' => variable_get('usanetwork_social_sync_global_desktop_url', ''),
    '#description' => t('Ex: http://m.usanetwork.com/sync/?ww=OQFL9NEFSDD&show=usa&layout=web&partner=usa'),
  );

  $form['global_sync']['usanetwork_social_sync_global_phone_url'] = array(
    '#type' => 'textfield',
    '#title' => t('MOBILE URL'),
    '#default_value' => variable_get('usanetwork_social_sync_global_phone_url', ''),
    '#description' => t('Ex: http://m.usanetwork.com/sync/?ww=Q3FJIIQJ2AA&show=usa&layout=mobile&partner=usamobile'),
  );

  // IDEAMELT SETTINGS
  $form['ideamelt'] = array(
    '#type' => 'fieldset',
    '#title' => t('IdeaMelt Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['ideamelt']['usanetwork_social_enable_ideamelt'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable IdeaMelt Notifications'),
    '#default_value' => variable_get('usanetwork_social_enable_ideamelt', 0),
  );

  $form['ideamelt']['usanetwork_social_ideamelt_api_key'] = array(
    '#type' => 'textfield',
    '#title' => t('IdeaMelt API Key'),
    '#default_value' => variable_get('usanetwork_social_ideamelt_api_key', ''),
  );

  return system_settings_form($form);
}
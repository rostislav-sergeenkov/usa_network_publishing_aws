<?php

/**
 * USA Network settings form
 */
function usanetwork_social_settings_form() {

	// TRENDING
  $form['trend'] = array(
    '#type' => 'fieldset',
    '#title' => t('Trending Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['trend']['usanetwork_social_trend_base_url'] = array(
    '#type' => 'textfield',
    '#title' => t('BASE URL'),
    '#default_value' => variable_get('usanetwork_social_trend_base_url', ''),
    '#description' => t('Base url'),
  );

  $form['trend']['usanetwork_social_trend_url_params'] = array(
    '#type' => 'textfield',
    '#title' => t('URL PARAMS'),
    '#default_value' => variable_get('usanetwork_social_trend_url_params', ''),
    '#description' => t('URL params'),
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

  return system_settings_form($form);
}



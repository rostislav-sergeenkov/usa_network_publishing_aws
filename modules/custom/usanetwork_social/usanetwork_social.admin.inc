<?php

/**
 * USA Network settings form
 */
function usanetwork_social_settings_form() {

  $form['twitter'] = array(
    '#type' => 'fieldset',
    '#title' => t('Twitter Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE
  );
  $form['twitter']['usanetwork_social_twitter_display'] = array(
    '#type' => 'checkbox',
    '#title' => t('Display Twitter page'),
    '#default_value' => variable_get('usanetwork_social_twitter_display', ''),
    '#description' => t('Check here if you want to show the Twitter page.')
  );
  $form['twitter']['usanetwork_social_twitter_echo_app_key'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo App Key'),
    '#default_value' => variable_get('usanetwork_social_twitter_echo_app_key', ''),
    '#description' => t('')
  );
  $form['twitter']['usanetwork_social_twitter_echo_query_template'] = array(
    '#type' => 'textfield',
    '#title' => t('Echo Query Template'),
    '#default_value' => variable_get('usanetwork_social_twitter_echo_query_template', ''),
    '#description' => t('The tokenized Echo query string. Values in the string will be replaced with the following Tokens.')
  );
  $form['twitter']['usanetwork_social_twitter_childrenof'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDRENOF'),
    '#default_value' => variable_get('usanetwork_social_twitter_childrenof', ''),
    '#description' => t('CHILDRENOF Token')
  );
  $form['twitter']['usanetwork_social_twitter_show'] = array(
    '#type' => 'textfield',
    '#title' => t('SHOW (for Echo queries)'),
    '#default_value' => variable_get('usanetwork_social_twitter_show', ''),
    '#description' => t('SHOW Token')
  );
  $form['twitter']['usanetwork_social_twitter_feed'] = array(
    '#type' => 'textfield',
    '#title' => t('FEED'),
    '#default_value' => variable_get('usanetwork_social_twitter_feed', ''),
    '#description' => t('FEED Token')
  );
  $form['twitter']['usanetwork_social_twitter_state'] = array(
    '#type' => 'textfield',
    '#title' => t('STATE'),
    '#default_value' => variable_get('usanetwork_social_twitter_state', ''),
    '#description' => t('STATE Token')
  );
  $form['twitter']['usanetwork_social_twitter_source'] = array(
    '#type' => 'textfield',
    '#title' => t('SOURCE'),
    '#default_value' => variable_get('usanetwork_social_twitter_source', ''),
    '#description' => t('SOURCE Token')
  );
  $form['twitter']['usanetwork_social_twitter_markers'] = array(
    '#type' => 'textfield',
    '#title' => t('MARKERS'),
    '#default_value' => variable_get('usanetwork_social_twitter_markers', ''),
    '#description' => t('MARKERS Token')
  );
  $form['twitter']['usanetwork_social_twitter_tags'] = array(
    '#type' => 'textfield',
    '#title' => t('TAGS'),
    '#default_value' => variable_get('usanetwork_social_twitter_tags', ''),
    '#description' => t('TAGS Token')
  );
  $form['twitter']['usanetwork_social_twitter_sortorder'] = array(
    '#type' => 'textfield',
    '#title' => t('SORTORDER'),
    '#default_value' => variable_get('usanetwork_social_twitter_sortorder', ''),
    '#description' => t('SORTORDER Token')
  );
  $form['twitter']['usanetwork_social_twitter_safehtml'] = array(
    '#type' => 'textfield',
    '#title' => t('SAFEHTML'),
    '#default_value' => variable_get('usanetwork_social_twitter_safehtml', ''),
    '#description' => t('SAFEHTML Token')
  );
  $form['twitter']['usanetwork_social_twitter_itemsperpage'] = array(
    '#type' => 'textfield',
    '#title' => t('ITEMSPERPAGE'),
    '#default_value' => variable_get('usanetwork_social_twitter_itemsperpage', ''),
    '#description' => t('ITEMSPERPAGE Token')
  );
  $form['twitter']['usanetwork_social_twitter_children'] = array(
    '#type' => 'textfield',
    '#title' => t('CHILDREN'),
    '#default_value' => variable_get('usanetwork_social_twitter_children', ''),
    '#description' => t('CHILDREN Token')
  );


  return system_settings_form($form);
}



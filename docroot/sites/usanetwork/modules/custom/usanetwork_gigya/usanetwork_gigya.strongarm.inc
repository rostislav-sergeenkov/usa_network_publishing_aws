<?php
/**
 * @file
 * usanetwork_gigya.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_gigya_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_APIKey';
  $strongarm->value = '2_p7HRGkwnEQpK0MzXUGXqWe-jZBb58hOsv9c3nJBa_riAktHijqVQmKrk2KLN_Ki6';
  $export['gigya_APIKey'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_af_scope';
  $strongarm->value = 'both';
  $export['gigya_comments_af_scope'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_categoryid';
  $strongarm->value = 'USA Blogs';
  $export['gigya_comments_categoryid'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_categoryid_post';
  $strongarm->value = 'USA Blogs';
  $export['gigya_comments_categoryid_post'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_container';
  $strongarm->value = 'comments';
  $export['gigya_comments_container'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_container_post';
  $strongarm->value = 'comments';
  $export['gigya_comments_container_post'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_enabled';
  $strongarm->value = 1;
  $export['gigya_comments_enabled'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_extra';
  $strongarm->value = array(
    'enabledShareProviders' => '"facebook,twitter,linkedin"',
    'showLoginBar' => 'true',
  );
  $export['gigya_comments_extra'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_extra_post';
  $strongarm->value = array();
  $export['gigya_comments_extra_post'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_hide_drupal_comments';
  $strongarm->value = 1;
  $export['gigya_comments_hide_drupal_comments'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_comments_override_default_post';
  $strongarm->value = 1;
  $export['gigya_comments_override_default_post'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_connect_extra';
  $strongarm->value = array();
  $export['gigya_connect_extra'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_connect_uiconfig_containerID';
  $strongarm->value = 'divConnect';
  $export['gigya_connect_uiconfig_containerID'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_debug';
  $strongarm->value = 0;
  $export['gigya_debug'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_global_extra';
  $strongarm->value = array();
  $export['gigya_global_extra'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_language';
  $strongarm->value = 'en';
  $export['gigya_language'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_buttons_style';
  $strongarm->value = 'standard';
  $export['gigya_login_buttons_style'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_enabled';
  $strongarm->value = 0;
  $export['gigya_login_enabled'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_extra';
  $strongarm->value = array();
  $export['gigya_login_extra'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_hide_title';
  $strongarm->value = 0;
  $export['gigya_login_hide_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_mode';
  $strongarm->value = 'gigya';
  $export['gigya_login_mode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_plugins_login';
  $strongarm->value = 'loginExistingUser';
  $export['gigya_login_plugins_login'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_plugin_height';
  $strongarm->value = '110';
  $export['gigya_login_plugin_height'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_plugin_size';
  $strongarm->value = 0;
  $export['gigya_login_plugin_size'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_plugin_width';
  $strongarm->value = '210';
  $export['gigya_login_plugin_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_uiconfig_containerID';
  $strongarm->value = 'divGigyaLogin';
  $export['gigya_login_uiconfig_containerID'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_uiconfig_terms';
  $strongarm->value = 0;
  $export['gigya_login_uiconfig_terms'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_login_uiconfig_urlredirect';
  $strongarm->value = '';
  $export['gigya_login_uiconfig_urlredirect'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_network_list';
  $strongarm->value = 'Facebook, Twitter';
  $export['gigya_network_list'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_SecretKey';
  $strongarm->value = 'iPtQGLlY5Q+0rv5UtN8nwoR3B0D+uv9dRr1qeJ1a8/I=';
  $export['gigya_SecretKey'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_advanced';
  $strongarm->value = array(
    'iconsOnly' => 'true',
  );
  $export['gigya_share_advanced'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_af_scope';
  $strongarm->value = 'external';
  $export['gigya_share_af_scope'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_buttons';
  $strongarm->value = 'facebook, twitter, tumblr, pinterest, share';
  $export['gigya_share_buttons'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_container_id';
  $strongarm->value = 'gigya-share';
  $export['gigya_share_container_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_desc';
  $strongarm->value = '[node:summary]';
  $export['gigya_share_desc'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_image_behavior';
  $strongarm->value = 'default';
  $export['gigya_share_image_behavior'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_image_url';
  $strongarm->value = '';
  $export['gigya_share_image_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_layout';
  $strongarm->value = 'horizontal';
  $export['gigya_share_layout'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_link_back';
  $strongarm->value = '[node:url:absolute]';
  $export['gigya_share_link_back'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_short_url';
  $strongarm->value = 0;
  $export['gigya_share_short_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_showcounts';
  $strongarm->value = 'none';
  $export['gigya_share_showcounts'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_title';
  $strongarm->value = '[node:title]';
  $export['gigya_share_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_social_analytics';
  $strongarm->value = 0;
  $export['gigya_social_analytics'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_validate';
  $strongarm->value = TRUE;
  $export['gigya_validate'] = $strongarm;

  return $export;
}

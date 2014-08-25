<?php
/**
 * @file
 * usanetwork_watchwith.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_watchwith_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_api_key';
  $strongarm->value = 'DD7SHE0C4WQ';
  $export['tve_watchwith_api_key'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_css_path';
  $strongarm->value = 'http://apps.watchwith.com/usa/sidecar/v2/sidecar.css';
  $export['tve_watchwith_css_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_default_no_content_message';
  $strongarm->value = array(
    'value' => 'There is no supplementary content for this video',
    'format' => 'plain_text',
  );
  $export['tve_watchwith_default_no_content_message'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_enable';
  $strongarm->value = 1;
  $export['tve_watchwith_enable'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_google_analytics_id';
  $strongarm->value = 'UA-43524714-1';
  $export['tve_watchwith_google_analytics_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_hide_sidecar_tabs';
  $strongarm->value = 1;
  $export['tve_watchwith_hide_sidecar_tabs'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_js_path';
  $strongarm->value = 'http://apps.watchwith.com/usa/sidecar/v2/sidecar.js';
  $export['tve_watchwith_js_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_show_all_events';
  $strongarm->value = 0;
  $export['tve_watchwith_show_all_events'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_sidecar_layout';
  $strongarm->value = 'portrait';
  $export['tve_watchwith_sidecar_layout'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_social_configuration';
  $strongarm->value = array(
    'awesmkey' => '',
    'awesm_tool' => '',
    'facebook_app_id' => '',
    'facebook_redirect_uri' => '',
  );
  $export['tve_watchwith_social_configuration'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_watchwith_widget_display_path';
  $strongarm->value = 'videos
*/videos/*';
  $export['tve_watchwith_widget_display_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_watchwith_show_settings';
  $strongarm->value = array(
    'graceland' => 'graceland',
    'playing-house' => 'playing-house',
    'burn-notice' => 0,
    'csi' => 0,
    'chrisley-knows-best' => 0,
    'covert-affairs' => 0,
    'daytime' => 0,
    'dig' => 0,
    'house' => 0,
    'law-order-criminal-intent' => 0,
    'law-order-svu' => 0,
    'modern-family' => 0,
    'ncis' => 0,
    'ncis-los-angeles' => 0,
    'necessary-roughness' => 0,
    'psych' => 0,
    'royal-pains' => 0,
    'rush' => 0,
    'satisfaction' => 0,
    'sirens' => 0,
    'suits' => 0,
    'summer-camp' => 0,
    'moment' => 0,
    'wwe-raw' => 0,
    'westminster-kennel-club-dog-show' => 0,
    'white-collar' => 0,
  );
  $export['usanetwork_watchwith_show_settings'] = $strongarm;

  return $export;
}

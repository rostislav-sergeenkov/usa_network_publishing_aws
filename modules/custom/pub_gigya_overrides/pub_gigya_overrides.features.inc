<?php
/**
 * @file
 * pub_gigya_overrides.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function pub_gigya_overrides_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_gigya_overrides_strongarm_alter(&$data) {
  if (isset($data['gigya_comments_enabled'])) {
    $data['gigya_comments_enabled']->value = 0; /* WAS: 1 */
  }
  if (isset($data['gigya_network_list'])) {
    $data['gigya_network_list']->value = 'Facebook, Twitter, Tumblr, Pinterest'; /* WAS: 'Facebook, Twitter' */
  }
  if (isset($data['gigya_share_buttons'])) {
    $data['gigya_share_buttons']->value = 'twitter-tweet, facebook-send, pinterest-pinit, Tumblr'; /* WAS: 'twitter-tweet, facebook-like' */
  }
}

<?php

/**
 * Define a Wysiwyg plugin.
 *
 * Supposed to be used for "Drupal plugins" (cross-editor plugins) only.
 *
 * @see hook_wysiwyg_plugin()
 *
 * @return
 *   Meta information about the buttons provided by this plugin.
 */
function usanetwork_social_plugin_usa_plugin() {
  drupal_add_library('system', 'ui.dialog');

  // Social media
  $plugins['social'] = array(
    'title' => t('USA Social Media plugin'),
    'icon file' => 'social.png',
    'icon title' => t('USA Social Media'),
    'settings' => array(),
  );

  return $plugins;
}

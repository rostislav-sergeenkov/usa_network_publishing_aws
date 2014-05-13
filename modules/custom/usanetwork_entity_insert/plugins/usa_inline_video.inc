<?php

/**
 * Implements hook_INCLUDE_plugin().
 */
function usanetwork_entity_insert_usa_inline_video_plugin() {
  drupal_add_js(drupal_get_path('module', 'usanetwork_entity_insert') . '/js/usanetwork_entity_insert.js');

  // Plugin definition.
  $node_class = 'usa-inline-video-element';
  $plugins['usa_inline_video'] = array(
    'title' => t('Inline video'),
    'vendor url' => 'http://usanetwork.com',
    'icon file' => 'video.png',
    'icon title' => t('Inline video'),
    'settings' => array(
      'type' => 'video',
      'placeholder' => theme('image', array(
        'path' => drupal_get_path('module', 'usanetwork_entity_insert') . '/images/placeholder/video.png',
        'attributes' => array(
          'class' => $node_class
        ),
      )),
      'node_class' => $node_class,
    ),
  );

  return $plugins;
}

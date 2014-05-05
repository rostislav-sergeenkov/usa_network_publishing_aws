<?php

/**
 * Implements hook_INCLUDE_plugin().
 */
function usanetwork_entity_insert_usa_inline_gallery_plugin() {
  drupal_add_js(drupal_get_path('module', 'usanetwork_entity_insert') . '/js/usanetwork_entity_insert.js');

  // Plugin definition.
  $node_class = 'usa-inline-gallery-element';
  $plugins['usa_inline_gallery'] = array(
    'title' => t('Inline media gallery'),
    'vendor url' => 'http://usanetwork.com',
    'icon file' => 'gallery.png',
    'icon title' => t('Inline media gallery'),
    'settings' => array(
      'type' => 'gallery',
      'placeholder' => theme('image', array(
        'path' => drupal_get_path('module', 'usanetwork_entity_insert') . '/images/placeholder/gallery.png',
        'attributes' => array(
          'class' => $node_class
        ),
      )),
      'node_class' => $node_class,
    ),
  );

  return $plugins;
}

<?php

/**
 * @file
 * Implements support for embedding mpx videos.
 */

$plugin = array(
  'title' => 'mpx Video',
  'description' => 'Embed a single video from mpx.',
  'category' => 'Multimedia',
  'configure_form' => 'pub_mpx_mpx_video_configure',
  'configure_form_validate' => 'pub_mpx_mpx_video_configure_validate',
  'render_callback' => 'pub_mpx_mpx_video_render',
  'arguments' => array(
    'required' => array('local_url'),
    'optional' => array(),
  ),
);

/**
 * Configuration form.
 */
function pub_mpx_mpx_video_configure(&$form_state, $form) {

  // @todo Replace this with mpx video file browser.
  $form['mpx_video_local_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Local mpx video URL'),
    '#description' => t('http://www.example.com/file/1781'),
    '#size' => 60,
    '#maxlength' => 1000,
    '#required' => TRUE,
    '#default_value' => !empty($form_state['configuration']->local_url) ? $form_state['configuration']->local_url : '',
  );

  return $form;
}

/**
 * Form validation handler for pub_mpx_mpx_video_configure().
 */
function pub_mpx_mpx_video_configure_validate(&$form_state, $form) {
  $fid = drupal_basename($form_state['values']['mpx_video_local_url']);
  $file = file_load($fid);
  if (!$file->mpx_video_data) {
    form_set_error('local url', "$fid is not a valid mpx file.");
  }
}

/**
 * Render callback for Embed External mpx_video plugin.
 */
function pub_mpx_mpx_video_render($html_dom, $attributes) {

  $fid = drupal_basename($attributes['local_url']);
  $file = file_load($fid);
  $iframe_url = _pub_mpx_file_entity_to_iframe_url($file);

  $container_element = $html_dom->createElement('div');
  $container_element->setAttribute('class', 'embed-external-mpx-video');

  $post_embed = $html_dom->createElement('iframe');
  $post_embed->setAttribute('id', 'pdk-player');
  $post_embed->setAttribute('class', 'mpx-video');
  $post_embed->setAttribute('width', 640);
  $post_embed->setAttribute('height', 360);
  $post_embed->setAttribute('frameborder', 0);
  $post_embed->setAttribute('allowfullscreen', '');
  $post_embed->setAttribute('src', $iframe_url);

  $container_element->appendChild($post_embed);

  return $container_element;
}

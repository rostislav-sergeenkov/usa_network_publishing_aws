<?php

/**
 * @file
 * Implements support for embedding YouTube videos.
 */

$plugin = array(
  'title' => 'YouTube Video',
  'description' => 'Embed a video from YouTube',
  'category' => 'Multimedia',
  'render_callback' => 'embed_external_youtube_video_render',
  'configure_form' => 'embed_external_youtube_video_configure',
  'configure_form_validate' => 'embed_external_youtube_video_configure_validate',
  'arguments' => array(
    'required' => array('video_url'),
    'optional' => array(),
  ),
);

/**
 * Configuration form.
 */
function embed_external_youtube_video_configure(&$form_state) {
  $form['youtube_video_video_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Video URL'),
    '#description' => t('Example: <em>https://www.youtube.com/watch?v=BROWqjuTM0g</em>'),
    '#size' => 60,
    '#maxlength' => 1000,
    '#required' => TRUE,
    '#default_value' => !empty($form_state['configuration']->video_url) ? $form_state['configuration']->video_url : '',
  );

  return $form;
}

/**
 * Render callback for YouTube Videos.
 */
function embed_external_youtube_video_render($html_dom, $attributes) {
  $container_element = $html_dom->createElement('div');
  $container_element->setAttribute('class', 'embed-external-youtube-video');

  $url_parts = parse_url($attributes['video_url']);
  // parse_str() is a dumb function.
  parse_str($url_parts['query'], $url_parts['query']);
  $video_id = $url_parts['query']['v'];
  $embed_url = '//www.youtube.com/embed/' . $video_id;

  $post_embed = $html_dom->createElement('iframe');
  $post_embed->setAttribute('type', 'text/html');
  $post_embed->setAttribute('height', "390");
  $post_embed->setAttribute('width', "640");
  $post_embed->setAttribute('frameborder', "0");
  $post_embed->setAttribute('allowfullscreen', "allowfullscreen");
  $post_embed->setAttribute('src', $embed_url);

  $container_element->appendChild($post_embed);

  return $container_element;
}

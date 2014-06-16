<?php

/**
 * Template process handler for 'flexslider_file_entity'.
 */
function template_process_flexslider_file_entity(&$vars) {
  $settings =& $vars['settings'];
  $options =& $settings['optionset'];

  $vars['flexslider'] += array(
    '#theme' => 'flexslider',
    '#items' => array(),
    '#settings' => $settings,
  );
  foreach (element_children($vars['entities']) as $delta) {
    $slide = $vars['entities'][$delta]['slide'];

    $vars['flexslider']['#items'][$delta] = array(
      'slide' => drupal_render($slide['entity']),
      'thumb' => drupal_render($vars['entities'][$delta]['thumb']),
    );
  }
}

/**
 * Default theme implementation for 'flexslider_file_entity'.
 */
function theme_flexslider_file_entity($vars) {
  $output = '';
  $output .= drupal_render($vars['flexslider']);
  return $output;
}
<?php

/**
 * Default theme implementation for 'flexslider_file_entity'.
 */
function theme_flexslider_file_entity($vars) {
  $element = $vars['element'];
  $langcode = $element['#language'];
  $settings = $element['#settings'];

  $output = array(
    '#theme' => 'flexslider',
    '#items' => array(),
    '#settings' => $settings,
  );

  foreach ($element['#items'] as $delta => $item) {
    $file = (object) $item;
    if (file_entity_access('view', $file)) {
      $build = entity_view('file', array($file->fid => $file), $settings['view_mode'], $langcode, FALSE);
      $output['#items'][$delta]['slide'] = drupal_render($build['files'][$file->fid]);
      if (!in_array($settings['view_mode_thumb'], array('_empty', '_image'))) {
        $thumb_build = entity_view('file', array($file->fid => $file), $settings['view_mode_thumb'], $langcode, FALSE);
        $output['#items'][$delta]['thumb'] = drupal_render($thumb_build['files'][$file->fid]);
      }
    } else if ($settings['view_mode_thumb'] == '_image') {
      if (module_exists('token')) {
        $output['#items'][$delta]['thumb'] = token_replace($settings['thumbnail_path'], array(
          'file' => $file,
        ));
      } else {
        $output['#items'][$delta]['thumb'] = $settings['thumbnail_path'];
      }
    }
  }

  $output = drupal_render($output);
  return $output;
}
<?php

/**
 * Theme callback for usanetwork_quiz_sidebar.
 */
function theme_usanetwork_quiz_sidebar($vars) {
  if (is_array($vars['content'])) {
    $vars['content'] = drupal_render($vars['content']);
  }
  return $vars['content'];
}

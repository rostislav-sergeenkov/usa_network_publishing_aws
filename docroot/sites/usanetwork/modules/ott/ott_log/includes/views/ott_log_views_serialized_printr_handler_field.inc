<?php

/**
 * @file
 * "Collapsible block" field handler for serialized values for OTT Log Views
 * integration.
 */
class ott_log_views_serialized_printr_handler_field extends views_handler_field {

  public function render($values) {
    $value = unserialize($this->get_value($values));
    $print_func = function_exists('kprint_r') ? 'kprint_r' : 'print_r';

    return theme(
      'ctools_collapsible',
      array(
        'handle' => t('Expand'),
        'content' => $print_func($value, TRUE),
        'collapsed' => TRUE,
      )
    );
  }
}

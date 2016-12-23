<?php

/**
 * @file
 * "Collapsible block" field handler for OTT Log Views integration.
 */
class ott_log_views_printr_handler_field extends views_handler_field {

  public function render($values) {
    return theme(
      'ctools_collapsible',
      array(
        'handle' => t('Expand'),
        'content' => print_r($this->get_value($values), TRUE),
        'collapsed' => TRUE,
      )
    );
  }
}

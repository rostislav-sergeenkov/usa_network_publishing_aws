<?php

/**
 * @file
 * "Serialized to simple" field handler for OTT Log Views integration.
 */
class ott_log_views_serialized_simple_handler_field extends views_handler_field {

  public function render($values) {
    $value = unserialize($this->get_value($values));
    if (empty($value)) {
      return;
    }

    $items = array();
    if (is_array($value)) {
      foreach ($value as $k => $v) {
        $items[] = '<b>' . $k . '</b>: ' . print_r($v, TRUE);
      }
    }

    return theme('item_list', array('items' => $items));
  }
}

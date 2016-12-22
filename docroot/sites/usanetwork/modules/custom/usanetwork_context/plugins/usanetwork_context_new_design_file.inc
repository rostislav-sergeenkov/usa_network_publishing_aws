<?php
/**
 * Implement new design for Consumptionators pages
 */
class usanetwork_context_new_design_file extends context_condition {
  function condition_values() {
    $values = array();

    foreach (file_type_get_enabled_types() as $type) {
      $values[$type->type] = check_plain($type->label . ' (' . $type->type . ')');
    }
    return $values;
  }

  function execute($file, $view_mode) {
    if ($this->condition_used()) {
      $new_design = _usanetwork_tv_shows_is_new_design_entity('file', $file);

      foreach ($this->get_contexts($file->type) as $context) {
        if ($new_design == '1' && $view_mode == 'full') {
          $this->condition_met($context, $file->type);
        }
      }
    }
  }
}

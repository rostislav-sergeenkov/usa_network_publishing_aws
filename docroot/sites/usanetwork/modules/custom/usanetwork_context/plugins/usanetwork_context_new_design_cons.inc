<?php
/**
 * Implement new design for Consumptionators pages
 */
class usanetwork_context_new_design_cons extends context_condition {
  function condition_values() {
    $values = array();
    foreach (node_type_get_types() as $type) {
      $values[$type->type] = check_plain($type->name);
    }
    return $values;
  }

  function execute($node, $view_mode) {
    if ($this->condition_used()) {
      $new_design = _usanetwork_tv_shows_is_new_design_entity('node', $node);

      foreach ($this->get_contexts($node->type) as $context) {
        if ($new_design == '1' && $view_mode == 'full') {
          $this->condition_met($context, $node->type);
        }
      }
    }
  }
}

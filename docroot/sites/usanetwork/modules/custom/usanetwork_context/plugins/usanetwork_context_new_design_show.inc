<?php
/**
 * Implement new design for all landing pages
 */
class usanetwork_context_new_design_show extends context_condition {
  function condition_values() {
    return array(1 => t('Enable this context.'));
  }

  function execute($node) {
    if ($this->condition_used()) {
      $new_design = _usanetwork_get_field_item('node', $node, 'field_new_design', 'value');

      foreach ($this->get_contexts() as $context) {
        $is_new_design = $this->fetch_from_context($context, 'values');
        if ($new_design == $is_new_design[1]) {
          $this->condition_met($context);
        }
      }
    }
  }
}

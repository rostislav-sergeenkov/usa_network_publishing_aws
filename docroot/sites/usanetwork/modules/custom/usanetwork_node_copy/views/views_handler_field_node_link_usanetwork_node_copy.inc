<?php

/**
* Field handler to present a copy node link.
*
* Closely modeled after views/modules/node/views_handler_field_node_link_edit.inc
*/
class views_handler_field_node_link_usanetwork_node_copy extends views_handler_field_node_link {
  /**
   * Renders the link.
   */
  function render_link($node, $values) {

    if (!usanetwork_node_copy_is_copy($node->type)) {
      return;
    }

    $this->options['alter']['make_link'] = TRUE;
    $this->options['alter']['path'] = "node/{$node->nid}/copy";
    $this->options['alter']['query'] = drupal_get_destination();

    $text = !empty($this->options['text']) ? $this->options['text'] : t('copy');
    return $text;
  }
}

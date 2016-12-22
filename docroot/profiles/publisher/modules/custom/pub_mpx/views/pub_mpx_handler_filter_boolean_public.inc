<?php

/**
 * @file
 * Definition of pub_mpx_handler_filter_boolean_public.
 */

/**
 * Simple filter to handle matching of boolean values with custom values.
 *
 * This filter exposes default views_handler_filter_boolean_operator to use
 * public/not public values for TRUE/FALSE.
 *
 * @see views_handler_filter_boolean_operator.inc
 */

class pub_mpx_handler_filter_boolean_public extends views_handler_filter_boolean_operator {

  /**
  * Return the possible options for this filter.
  */
  function get_value_options() {
    if (isset($this->definition['type']) && $this->definition['type'] == 'public-notpublic') {
      $this->value_options = array(1 => t('Public'), 0 => t('Not public'));
    }
  }

}

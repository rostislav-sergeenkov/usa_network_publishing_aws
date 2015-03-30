<?php

/*
 * Filter handler to provide simple filter for thePlatform categories.
 */
class pub_theplatform_views_handler_filter_title extends views_handler_filter {
  /**
   * Provide the form for choosing a category.
   */
  function value_form(&$form, &$form_state) {
    $form['value'] = array(
      '#type' => 'textfield',
      '#title' => t('Title'),
      '#default_value' => (!empty($this->value)) ? $this->value : '',
    );
    if (!empty($form_state['exposed'])) {
      $identifier = $this->options['expose']['identifier'];
      if (!isset($form_state['input'][$identifier])) {
        $form_state['input'][$identifier] = $this->value;
      }
    }
  }

  /**
   * Provide simple equality operator
   */
  function operator_options() {
    return array(
      'starts' => t('Starts with'),
    );
  }

  /**
   * Add this filter to the request.
   */
  function query() {
    if(is_array($this->value)) {
      $this->value = array_pop($this->value);
    }
    if(strlen($this->value) > 0) {
      $this->query->theP->addArg('byTitlePrefix', $this->value);
    }
  }
}

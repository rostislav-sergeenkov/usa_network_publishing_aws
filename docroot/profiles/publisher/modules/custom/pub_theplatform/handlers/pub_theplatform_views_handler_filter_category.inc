<?php

/*
 * Filter handler to provide simple filter for thePlatform categories.
 */
class pub_theplatform_views_handler_filter_category extends views_handler_filter {
  /**
   * Provide the form for choosing a category.
   */
  function value_form(&$form, &$form_state) {
    $theP = new pubThePlatformAPIRequest(variable_get('theplatform_feed_url', ''));  //  Get the categories that exist in our feed.
    $categories = $theP->getCategories()->addField('plcategory$fullTitle')->execute();

    $options = array('' => 'Any'); // Make them options
    foreach($categories as $c) {
      $options[$c->{'plcategory$fullTitle'}] = $c->{'plcategory$fullTitle'};
    }

    $form['value'] = array(
      '#type' => 'select',
      '#title' => t('Category'),
      '#default_value' => (!empty($this->value)) ? $this->value : '',
      '#options' => $options,
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
      'is' => t('Is'),
    );
  }

  /**
   * Add this filter to the request.
   */
  function query() {
    if(is_array($this->value)) {
      $this->value = implode(',', $this->value);
    }
    if(strlen($this->value) > 0) {
      $this->query->theP->addArg('byCategories', $this->value);
    }
  }
}

<?php

/**
 * Menu callback to configure module settings.
 */
function copy_settings_form($form, &$form_state) {

  $types = node_type_get_names();
  
  $form['usanetwork_node_type_copy'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Content type for copy:'),
    '#default_value' => variable_get('usanetwork_node_type_copy', array('usanetwork_aspot' => 'usanetwork_aspot', 'usanetwork_promo' => 'usanetwork_promo')),
    '#options' => $types,
    '#description' => t('Select node types which can be copied.'),
  );

  return system_settings_form($form);
}

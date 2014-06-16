<?php

/**
 * USA WatchWith configuration form.
 */
function _usanetwork_watchwith_admin_form($form, &$form_state) {

  module_load_include('inc', 'pathauto', 'pathauto');
  
  $db_select = db_select('node', 'n')
          ->fields('n', array('title'))
          ->condition('type', 'tv_show')
          ->condition('status', '1');
  $shows = $db_select->execute()->fetchCol();
 
  foreach ($shows as $key => $show) {
    $shows_display[pathauto_cleanstring($show)] = $show;
  }
  
  asort($shows_display);
  
  $form['usanetwork_watchwith_show_settings'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Content type for copy:'),
    '#default_value' => variable_get('usanetwork_watchwith_show_settings', array('playing-house' => 'playing-house', 'graceland' => 'graceland')),
    '#options' => $shows_display,
    '#description' => t('Select show on which WatchWith will be shown.'),
  );

  return system_settings_form($form);

}

<?php

/**
 * USA Network TV schedule settings form
 */
function usanetwork_tv_schedule_settings_form() {

  $form['usanetwork_tv_schedule_xml_feed'] = array(
    '#type' => 'textfield', 
    '#title' => t('USA TV Schedule XML Feed URL'),
    '#default_value' => variable_get('usanetwork_tv_schedule_xml_feed', ''),
    '#description' => t('The URL for retrieving the USA TV schedule in XML format.')
  );

  return system_settings_form($form);
}



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

  $form['navigation'] = array(
    '#type' => 'fieldset',
    '#title' => t('Navigation'),
  );
  $form['navigation']['usanetwork_tv_schedule_past_weeks'] = array(
    '#type' => 'textfield',
    '#title' => t('Weeks in past'),
    '#default_value' => variable_get('usanetwork_tv_schedule_past_weeks', 4),
    '#description' => t('Number of weeks to show past schedule.'),
  );
  $form['navigation']['usanetwork_tv_schedule_future_weeks'] = array(
    '#type' => 'textfield',
    '#title' => t('Weeks in future'),
    '#default_value' => variable_get('usanetwork_tv_schedule_future_weeks', 1),
    '#description' => t('Number of weeks to show future schedule.'),
  );

  $usanetwork_tv_schedule_accessibility = variable_get('usanetwork_tv_schedule_accessibility_text', array('value' => variable_get('usanetwork_tv_schedule_accessibility_text',''), 'format' => NULL));
  
  $form['usanetwork_tv_schedule_accessibility_text'] = array(
    '#type'=>'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Text for Page "Accessibility"'),
    '#format'=> $usanetwork_tv_schedule_accessibility['format'],
		'#default_value' => $usanetwork_tv_schedule_accessibility['value'],
  );

  return system_settings_form($form);
}



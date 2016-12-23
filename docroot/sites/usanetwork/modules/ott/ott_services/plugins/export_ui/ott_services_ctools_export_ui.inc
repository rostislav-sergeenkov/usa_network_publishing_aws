<?php

/**
 * @file
 * Export UI plugin for OTT Services module.
 */

$plugin = array(
  'schema' => 'ott_services_instance',
  'access' => 'administer api services instances',
  'menu' => array(
    'menu prefix' => 'admin/config/services',
    'menu item' => 'api-services-instances',
    'menu title' => 'TVE Service instances',
    'menu description' => 'Administer TVE Services.',
  ),
  'handler' => array(
    'class' => 'ott_services_instance_ui',
    'parent' => 'ctools_export_ui',
  ),
  'title singular' => t('instance'),
  'title plural' => t('instances'),
  'title singular proper' => t('TVE Service instance'),
  'title plural proper' => t('TVE Service instances'),
  'form' => array(
    'settings' => 'ott_services_ctools_export_ui_form',
  ),
);

/**
 * Form builder callback for "TVE Services instance" objects.
 */
function ott_services_ctools_export_ui_form(&$form, &$form_state) {
  $services_instance = $form_state['item'];

  $form['environment'] = array(
    '#type' => 'textfield',
    '#title' => t('Environment'),
    '#description' => t('Site environment. Examples: dev, qa etc.'),
    '#default_value' => isset($services_instance->environment) ?
      $services_instance->environment : ott_services_get_environment(),
    '#required' => TRUE,
    '#attributes' => [
      'disabled' => 'disabled',
    ],
  );

  $form['instance_type'] = array(
    '#type' => 'select',
    '#options' => ott_services_get_instance_types(),
    '#title' => t('Type'),
    '#description' => t('Type of the instance.'),
    '#default_value' => $services_instance->instance_type,
    '#required' => TRUE,
  );

  $form['url'] = array(
    '#type' => 'textfield',
    '#title' => t('Address'),
    '#description' => t('Instance address. Examples: endpoint base URL; queue name for message queuing systems.'),
    '#default_value' => $services_instance->url,
    '#required' => TRUE,
  );

  $form['api_key'] = array(
    '#type' => 'textfield',
    '#title' => t('API key'),
    '#description' => t('Secret API key.'),
    '#default_value' => $services_instance->api_key,
    '#required' => FALSE,
  );

  $form['secondary_instance_name'] = array(
    '#type' => 'select',
    '#options' => ott_services_get_secondary_instances($services_instance->name),
    '#title' => t('Secondary instance'),
    '#empty_option' => ' - ' . t('None') . ' - ',
    '#empty_value' => 0,
    '#description' => t('Secondary instance containing configuration of endpoint used for publishing after the publishing to the primary instance.'),
    '#default_value' => !empty($services_instance->secondary_instance_name) ?
      $services_instance->secondary_instance_name : '',
    '#required' => FALSE,
  );
}

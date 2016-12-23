<?php

/**
 * @file
 * Provide views data and handlers for ott_log.
 */

/**
 * Implements hook_views_data().
 */
function ott_log_views_data_alter(&$data) {
  $data['ott_log']['date'] = [
    'title' => t('Log date'),
    'help' => t('Log date'),
    'field' => [
      'handler' => 'views_handler_field_date',
    ],
    'filter' => [
      'handler' => 'views_handler_filter_date',
    ],
  ];

  $data['ott_log']['request_options'] = array(
    'title' => t('Request Options'),
    'help' => t('Request options: http headers and data.'),
    'field' => array(
      'handler' => 'ott_log_views_serialized_printr_handler_field',
    ),
  );
  $data['ott_log']['response_data'] = array(
    'title' => t('Response Data'),
    'help' => t('Response data.'),
    'field' => array(
      'handler' => 'ott_log_views_printr_handler_field',
    ),
  );
  $data['ott_log']['info'] = array(
    'title' => t('Info'),
    'help' => t('Additional information about request.'),
    'field' => array(
      'handler' => 'ott_log_views_serialized_simple_handler_field',
    ),
  );
}

<?php

/**
 * @file
 * API Services related functionality.
 */

/**
 * Creates and sends a request to API Services.
 *
 * @param string $data
 * @param array $context
 *
 * @return array
 *
 * @see ott_services_ott_publishing_instance_type_info
 */
function ott_services_api_services_send_callback($data, $context) {
  $instance = $context['instance'];

  $request_options = [
    'headers' => [
      'api_key' => $instance->api_key,
      'Content-Type' => 'application/json',
    ],
    'method' => 'POST',
    'data' => $data,
  ];

  $response = drupal_http_request($context['address'], $request_options);
  $success = isset($response->code) && $response->code >= 200 && $response->code < 300;

  return [
    'request_address' => $context['address'],
    'request_options' => $request_options,
    'response' => $response,
    'response_status' => $response->code,
    'response_message' => $response->status_message,
    'response_data' => $response->data,
    'success' => $success,
    'fallback_publishing' => TRUE,
  ];
}

/**
 * Allows to alter data just before it is being sent.
 *
 * @param string $data
 *  JSON data to be sent
 * @param array $context
 *
 * @return array $data
 *
 * @see ott_services_ott_publishing_instance_type_info
 */
function ott_services_api_services_presend_callback($data, $context) {
  // Decode "data" value from JSON string into an object/array.
  $data_decoded = drupal_json_decode($data);
  if (json_last_error()) {
    watchdog('ott_services', 'Can\'t decode JSON string.', [], WATCHDOG_WARNING);
    return NULL;
  }

  // Set (or update if exists) "dateModified" value.
  $datetime = new DateTime('now', new DateTimeZone('UTC'));
  $datetime->setTimestamp(REQUEST_TIME);
  $data_decoded['dateModified'] = $datetime->format('Y-m-d\TH:i:s\Z');

  // Convert "data" value back to JSON string and attach to the request.
  return drupal_json_encode($data_decoded);
}

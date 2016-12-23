<?php

/**
 * @file
 * Amazon SQS related functionality.
 */

// Since Amazon SQS has no specific "success" status code - declare custom one.
define('OTT_SERVICES_AMAZON_SQS_SUCCESS_STATUS_CODE', 'success');

/**
 * Creates and sends a request to Amazon SQS.
 *
 * @param string $data
 * @param array $context
 *
 * @return array
 *
 * @see ott_services_ott_publishing_instance_type_info
 */
function ott_services_amazon_sqs_send_callback($data, $context) {
  $instance = $context['instance'];
  $queue_name = $instance->url;

  try {
    /** @var OttAwsSqsQueue $aws_queue */
    $aws_queue = OttAwsSqsQueue::get($queue_name);
    // Send message to Amazon SQS.
    $success = $aws_queue->createItem($data, $context);
    $message = $aws_queue->getMessage();
  }
  catch (\Aws\Sqs\Exception\SqsException $e) {
    $response_message = format_string(
      '@message Error type: @type.',
      [
        '@message' => $e->getMessage(),
        '@type' => $e->getAwsErrorType(),
      ]
    );
    $response_code = $e->getAwsErrorCode();
    $response_raw = $e->getResponse();
  }
  catch (Exception $e) {
    $response_message = $e->getMessage();
    $response_code = $e->getCode();
  }

  return [
    'request_address' => $queue_name,
    'request_options' => [
      'data' => $data,
      'attributes' => isset($message['MessageAttributes']) ? $message['MessageAttributes'] : '',
    ],
    'success' => !empty($success),
    'response_status' => isset($response_code) ? $response_code : OTT_SERVICES_AMAZON_SQS_SUCCESS_STATUS_CODE,
    'response_message' => isset($response_message) ? $response_message : NULL,
    'response_data' => isset($response_raw) ? $response_raw : NULL,
  ];
}

/**
 * Alters Amazon SQS queue message content.
 *
 * @todo for future refactoring: this entire mapping should be moved to the profile_info hook.
 *
 * @param array $message
 * @param array $context
 */
function ott_services_aws_sqs_queue_send_message_alter(&$message, $context) {
  // Every AWS message should have post attribute.
  $message += array(
    'MessageAttributes' => array(
      'action' => array(
        'StringValue' => $context['operation'] == 'delete' ? 'delete' : 'post',
        // DataType is required.
        'DataType' => 'String',
      ),
    ),
  );

  if (empty($context['profile']) || !$context['profile'] instanceof OttPublishingProfile) {
    return;
  }

  $entityType = NULL;
  /** @var OttPublishingProfile $profile */
  $profile = $context['profile'];

  switch ($profile->getId()) {
    case 'node_ott_program':
    case 'series':
      $entityType = 'series';
      break;

    case 'ott_app':
      $entityType = 'platforms';
      break;

    case 'season':
      $entityType = 'seasons';
      break;

    case 'episode':
      $entityType = 'episodes';
      break;

    case 'node_ott_video':
      $entityType = 'videos';
      break;

    case 'role':
      $entityType = 'roles';
      break;

    case 'person':
      $entityType = 'persons';
      break;

    case 'node_tve_event':
      $entityType = 'event';
      break;

    case 'post':
      $entityType = 'posts';
      break;

    case 'file_image':
    case 'file_ios_image':
      $entityType = 'images';
      break;

    case 'node_tve_media_gallery':
      $entityType = 'mediaGallery';
      break;

    case 'collection_group':
      $entityType = 'lists';
      break;

    case 'tve_cast_collection':
      $entityType = 'castCredit';
      break;

    case 'taxonomy_term':
      $entityType = 'taxonomyTerms';
      break;

    case 'node_ott_promo':
      $entityType = 'promos';
      break;

    case 'collection':
    case 'ott_module_shelf':
    case 'ott_module_feature_carousel':
    case 'ott_module_feature_shows':
    case 'ott_module_void':
    case 'ott_page':
    case 'ott_page_editor':
      $entityType = 'lists';
      break;
  }

  if ($entityType) {
    // Add entity type message attribute.
    $message['MessageAttributes']['entityType'] = array(
      'StringValue' => $entityType,
      // DataType is required.
      'DataType' => 'String',
    );
  }
}

<?php

/**
 * @file
 * OttPublishingItemHandler class.
 */

/**
 * Class OttPublishingItemHandler
 *
 * Handles publishing-related operations.
 * Works with the item, its publishing profile and a API Services instance.
 */
class OttPublishingItemHandler {
  /**
   * The entity or any other object that is published.
   *
   * @var object|array
   */
  protected $item;

  /**
   * Item label for logs and messages.
   *
   * @var string
   */
  protected $itemLabel;

  /**
   * Publishing profile.
   *
   * @var OttPublishingProfile
   */
  protected $profile;

  /**
   * API Services instance.
   *
   * @var object
   */
  protected $instance;


  /**
   * Handler constructor.
   *
   * Protected, use OttPublishingItemHandler::getHandler to instantiate.
   *
   * @param object $item
   * @param OttPublishingProfile $profile
   * @param object $instance
   *
   * @throws Exception
   */
  protected function __construct($item, $profile, $instance) {
    $this->item = $item;
    $this->profile = $profile;
    $this->instance = $instance;

    if (!$this->isCompatibleInstanceType()) {
      throw new Exception(
        t(
          '@profile profile does not support @type instance type',
          [
            '@profile' => $profile->getLabel(),
            '@type' => $instance->instance_type,
          ]
        )
      );
    }
  }

  /**
   * Instantiates and returns handler.
   *
   * @param object $item
   * @param OttPublishingProfile $profile
   * @param object $instance
   *
   * @return OttPublishingItemHandler
   */
  public static function getHandler($item, $profile, $instance) {
    $handlerClassName = self::getHandlerClassName($profile);

    try {
      return new $handlerClassName($item, $profile, $instance);
    }
    catch (Exception $e) {
      $message_args = [
        '!class' => $handlerClassName,
        '!error' => $e->getMessage(),
      ];

      $message = t(
        'Could not instantiate publishing handler !class: !error.',
        $message_args
      );

      watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_NOTICE);

      return NULL;
    }
  }

  /**
   * Returns class name for handler instantiation.
   *
   * Default class is OttPublishingItemHandler.
   * A module can define a custom handler class and extend default one.
   * This method will be looking for a class named like this:
   * OttPublishingItemHandler{CustomHandlerClassName}
   * Where CustomHandlerClassName is camel-case version of the profile ID.
   * For example if profile ID is "mpx_video_file", custom class must be named
   * OttPublishingItemHandlerMpxVideoFile.
   *
   * @param OttPublishingProfile $profile
   *
   * @return string
   */
  protected static function getHandlerClassName($profile) {
    $handlerClassName = 'OttPublishingItemHandler';

    $customHandlerClassName = str_replace('_', ' ', $profile->getId());
    $customHandlerClassName = ucwords($customHandlerClassName);
    $customHandlerClassName = str_replace(' ', '', $customHandlerClassName);
    $customHandlerClassName = $handlerClassName . $customHandlerClassName;

    return class_exists($customHandlerClassName) ?
      $customHandlerClassName :
      $handlerClassName;
  }

  /**
   * Verifies whether instance type is compatible with the publishing profile.
   *
   * @return bool
   */
  protected function isCompatibleInstanceType() {
    /** @var OttPublishingProfile $profile */
    $profile = $this->getProfile();

    $allowed_instance_types = $profile->getInstanceTypes();
    if (!$allowed_instance_types) {
      // All instance types are allowed.
      return TRUE;
    }

    $instance_type = $this->getInstance()->instance_type;
    if (in_array($instance_type, $allowed_instance_types)) {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * Publishes item to API Services.
   *
   * @return bool
   */
  public function publishItem() {
    $args = $this->getCommonMessageArgs();

    $data = $this->getItemData();

    if (empty($data)) {
      $message = t("Failed to publish !label to !instance: could not prepare data or item doesn't support publishing to !instance.", $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_WARNING);

      drupal_set_message($message, 'warning');

      return FALSE;
    }

    $trackingData = $this->getTrackingData($data);
    $isDataTracked = $this->getProfile()->isTrackingDisabled() ?
      FALSE :
      OttPublishingTracker::isTracked($trackingData);

    if ($isDataTracked) {
      $message = t('Current state of !label has been already published to !instance - skipping data sending.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message);
    }
    else {
      if (module_exists('tve_debug_log')) {
        TveDebugLogger::logPublish([
          'node' => $this->getItemLabel(),
          'mpx_id' => $this->getProfile()->getItemMpxId($this->getItem()),
          'mpx_guid' => $this->getProfile()->getItemMpxGuid($this->getItem()),
          'object_id' => $this->getProfile()->getItemId($this->getItem()),
          'address' => $this->getInstanceUrl(),
          'event' => 'publish_data_started',
        ]);
      }

      $result = $this->sendData($data, $this->getOperation());

      if (module_exists('tve_debug_log')) {
        TveDebugLogger::logPublish([
          'node' => $this->getItemLabel(),
          'mpx_id' => $this->getProfile()->getItemMpxId($this->getItem()),
          'mpx_guid' => $this->getProfile()->getItemMpxGuid($this->getItem()),
          'object_id' => $this->getProfile()->getItemId($this->getItem()),
          'address' => $this->getInstanceUrl(),
          'event' => 'publish_data_finished',
        ]);
      }

      if (!$result['success'] && !empty($result['fallback_publishing']) && $this->getProfile()->shouldRetryInverseOperation($result['response'])) {
        $result = $this->sendData($data, $this->getInvertedOperation());
      }

      if (!$result['success']) {
        $message = t('Failed to publish !label to !instance: API Services returned error.', $args);
        watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);

        return FALSE;
      }

      $message = t('Successfully published !label to !instance.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message);

      if (!$this->getProfile()->isTrackingDisabled()) {
        OttPublishingTracker::trackItem($trackingData);
      }
    }

    if ($this->getProfile()->isEntity()) {
      $this->getProfile()->setItemInstanceRevision($this->getItem(), $this->getInstance());
    }

    return $this->getProfile()->onPublishingSuccess(
      $this->getItem(),
      $this->getProfile(),
      $this->getInstance()
    );
  }

  /**
   * Removes item from API Services.
   */
  public function unpublishItem() {
    $args = $this->getCommonMessageArgs();

    $instance_type = $this->getInstance()->instance_type;
    // Only apply this logic for AmazonSQS publishing profiles.
    if ($instance_type == 'amazon_sqs') {
      $data = $this->getItemDeleteData();

      if (is_null($data)) {
        $message = t('!label returned no delete request data.', $args);
        watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_NOTICE);
        return FALSE;
      }

      // Send delete request.
      $result = $this->sendData($data, 'delete');

      if (!$result['success']) {
        $message = t('Failed to delete !label from !instance: API Services returned error.', $args);
        watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);

        return FALSE;
      }

      $message = t('Successfully sent !label delete request to !instance.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message);

      return $this->getProfile()->onDeleteSuccess(
        $this->getItem(),
        $this->getProfile(),
        $this->getInstance()
      );
    }
  }

  /**
   * Reverts item to instance published revision.
   */
  public function revertItem() {
    $args = $this->getCommonMessageArgs();

    if (!$this->getProfile()->isEntity()) {
      $message = t('Cannot revert !label - it is not an entity.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);
      drupal_set_message($message, 'error');

      return FALSE;
    }

    $instance_revision = $this->getItemInstanceRevision();
    if (!$instance_revision) {
      $message = t('Cannot revert !label - no published revision found for !instance.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);
      drupal_set_message($message, 'error');

      return FALSE;
    }

    $entity_type = $this->getProfile()->getItemType();
    $entity_id = $this->getProfile()->getItemId($this->getItem());
    $revision_key = $this->getProfile()->getRevisionKey();

    $entities = entity_load(
      $entity_type,
      [$entity_id],
      [$revision_key => $instance_revision['vid']]
    );

    if (empty($entities[$entity_id])) {
      $message = t('Cannot load !label !instance revision.', $args);
      watchdog(OTT_PUBLISHING_WATCHDOG, $message, [], WATCHDOG_ERROR);
      drupal_set_message($message, 'error');

      $this->getProfile()->removeItemInstanceRevision($this->getItem(), $this->getInstance());

      return FALSE;
    }

    $item = $entities[$entity_id];

    $new_revision_key = $this->getProfile()->getNewRevisionFormKey();
    $item->{$new_revision_key} = 1;
    $item->default_revision = 1;
    $item->log = t('TVE Publishing: Reverted to !instance revision.', $args);

    entity_save($entity_type, $item);

    $this->getProfile()->setItemInstanceRevision($item, $this->getInstance());

    $this->item = $item;

    drupal_set_message(t('Successfully reverted !label to !instance revision.', $args));

    return TRUE;
  }

  /**
   * Sends the data to API Services.
   *
   * Returns array containing request and response information.
   *
   * @param mixed $data
   * @param string $operation
   *
   * @return array
   */
  protected function sendData($data, $operation) {
    // Start publishing session.
    ott_publishing_start_session();
    $started = microtime(TRUE);

    $context = [
      'address' => $this->getAddress($operation),
      'instance' => $this->getInstance(),
      'profile' => $this->getProfile(),
      'operation' => $operation,
    ];

    $send_callback = $this->getSendCallback();
    if (is_null($send_callback)) {
      watchdog(
        'ott_publishing',
        '"Send callback" is not available for @profile profile.',
        ['@profile' => $this->getProfile()->getLabel()],
        WATCHDOG_ERROR
      );

      return ['success' => FALSE];
    }

    // Give the ability to alter "message" being sent to an endpoint.
    $presend_callback = $this->getPresendCallback();
    if (!is_null($presend_callback)) {
      $data = $presend_callback($data, $context);
    }

    // Execute "send callback".
    $result = $send_callback($data, $context);

    $result['time_spent'] = sprintf('%.2f', microtime(TRUE) - $started);

    $logInfo = $this->getLogInfo($result);
    module_invoke_all(
      'ott_publishing_process_log_info',
      $logInfo
    );

    return $result;
  }

  /**
   * Get send callback from instance configuration.
   *
   * @return null|callable
   */
  protected function getSendCallback() {
    $type = $this->getInstance()->instance_type;
    $instance_types = module_invoke_all('ott_publishing_instance_type_info');

    if (!isset($instance_types[$type]['send callback'])) {
      // "Send callback" is not specified (or instance type is not found).
      return NULL;
    }

    if (isset($instance_types[$type]['file'])) {
      include_once $instance_types[$type]['file'];
    }

    if (!is_callable($instance_types[$type]['send callback'])) {
      // Send callback not found.
      return NULL;
    }

    return $instance_types[$type]['send callback'];
  }

  /**
   * Get pre send callback from instance configuration.
   *
   * @return null|callable
   */
  protected function getPresendCallback() {
    $type = $this->getInstance()->instance_type;
    $instance_types = module_invoke_all('ott_publishing_instance_type_info');

    if (!isset($instance_types[$type]['presend callback'])) {
      // "Presend callback" is not specified (or instance type is not found).
      return NULL;
    }

    if (isset($instance_types[$type]['file'])) {
      include_once $instance_types[$type]['file'];
    }

    if (!is_callable($instance_types[$type]['presend callback'])) {
      // Send callback not found.
      return NULL;
    }

    return $instance_types[$type]['presend callback'];
  }

  /**
   * Returns publishing profile.
   *
   * @return OttPublishingProfile
   */
  protected function getProfile() {
    return $this->profile;
  }

  /**
   * Returns item.
   *
   * @return array|object
   */
  protected function getItem() {
    return $this->item;
  }

  /**
   * Returns API Services instance.
   *
   * @return object
   */
  protected function getInstance() {
    return $this->instance;
  }

  /**
   * Returns instance machine name.
   *
   * @return string
   */
  protected function getInstanceId() {
    return $this->getInstance()->name;
  }

  /**
   * Returns instance title.
   *
   * @return string
   */
  protected function getInstanceTitle() {
    return $this->getInstance()->admin_title;
  }

  /**
   * Returns instance type.
   *
   * @return string
   */
  protected function getInstanceType() {
    return $this->getInstance()->instance_type;
  }

  /**
   * Returns instance URL.
   *
   * @return string
   */
  protected function getInstanceUrl() {
    return $this->getInstance()->url;
  }

  /**
   * Returns instance API key.
   *
   * @return string
   */
  protected function getInstanceApiKey() {
    return $this->getInstance()->api_key;
  }

  /**
   * Returns information on item revision that is published to instance.
   *
   * @return array|null
   */
  protected function getItemInstanceRevision() {
    return $this->getProfile()->getItemInstanceRevision(
      $this->getItem(),
      $this->getInstance()
    );
  }

  /**
   * Returns common arguments for all logs and messages.
   *
   * @return array
   */
  protected function getCommonMessageArgs() {
    return [
      '!label' => $this->getItemLabel(),
      '!instance' => $this->getInstanceTitle(),
    ];
  }

  /**
   * Returns item label for logs and messages.
   *
   * @return string
   */
  protected function getItemLabel() {
    if (NULL === $this->itemLabel) {
      $this->itemLabel = $this->getProfile()->getItemLabel($this->getItem());
    }

    return $this->itemLabel;
  }

  /**
   * Returns item output prepared to be sent in the request to the server.
   *
   * @return mixed
   */
  protected function getItemData() {
    $item = $this->getItem();
    $instance = $this->getInstance();
    $profile = $this->getProfile();
    $output = $profile->prepareItemOutput($item, $instance);

    return $output;
  }

  /**
   * Returns item delete request to be sent to API Services.
   *
   * @return mixed
   */
  protected function getItemDeleteData() {
    $item = $this->getItem();
    $instance = $this->getInstance();

    return $this->getProfile()->prepareItemDeleteOutput($item, $instance);
  }

  /**
   * Returns endpoint URLs.
   *
   * @return array|null
   */
  protected function getEndpointUrls() {
    return $this->getProfile()->endpointCallback($this->getItem());
  }

  /**
   * Returns operation endpoint URL.
   *
   * @param string $operation
   *
   * @return string|null
   */
  protected function getOperationUrl($operation) {
    $endpointUrls = $this->getEndpointUrls();
    return isset($endpointUrls[$operation]) ?
      $endpointUrls[$operation] :
      NULL;
  }

  /**
   * Returns complete operation address (endpoint).
   *
   * @param string $operation
   *
   * @return string
   */
  protected function getAddress($operation) {
    $instanceUrl = trim($this->getInstanceUrl(), '/');
    $operationUrl = trim($this->getOperationUrl($operation), '/');

    $address = $instanceUrl;
    if (!is_null($operationUrl)) {
      $address .= '/' . $operationUrl;
    }

    return $address;
  }

  /**
   * Returns operation name for API Services calls.
   *
   * @return string
   */
  protected function getOperation() {
    if ($this->getProfile()->isEntity()) {
      $isCurrentRevisionPublished = $this->getProfile()
        ->isCurrentRevisionPublished(
          $this->getItem(),
          $this->getInstance()
        );

      return $isCurrentRevisionPublished ? 'update' : 'create';
    }

    /**
     * For non-revisioned items, always assume item is already published - to
     * decrease request traffic.
     */
    return 'update';
  }

  /**
   * Returns inverted operation name.
   *
   * Returns 'create' if $this->getOperation() == 'update' and vice-versa.
   *
   * @return string
   */
  protected function getInvertedOperation() {
    return str_replace($this->getOperation(), '', 'createupdate');
  }

  /**
   * Prepares and returns tracking data.
   *
   * This data is used to uniquely identify object and the state of its
   * contents.
   *
   * @param mixed $data
   *
   * @return array
   */
  protected function getTrackingData($data) {
    return [
      'data_id' => $this->getAddress('update'),
      'data_hash' => hash('sha256', $data),
      'instance' => $this->getInstanceId(),
    ];
  }

  /**
   * Prepares and returns information that can be used by logging features.
   *
   * @param array $result
   *
   * @return array
   */
  protected function getLogInfo($result) {
    return [
      'date' => REQUEST_TIME,
      'instance' => $this->getInstanceTitle(),
      'endpoint' => isset($result['request_address']) ? $result['request_address'] : NULL,
      'object_type' => $this->getProfile()->getItemType(),
      'object_id' => $this->getProfile()->getItemId($this->getItem()),
      'request_options' => isset($result['request_options']) ? $result['request_options'] : NULL,
      'response_status' => $result['response_status'],
      'response_message' => $result['response_message'],
      'response_data' => $result['response_data'],
      'info' => [
        'time_spent' => $result['time_spent'],
        'object_label' => $this->getItemLabel(),
      ],
    ];
  }
}


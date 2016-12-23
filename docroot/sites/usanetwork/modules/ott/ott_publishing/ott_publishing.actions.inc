<?php

/**
 * @file
 * TVE Publishing actions.
 */

/**
 * Implements hook_action_info().
 */
function ott_publishing_action_info() {
  $actions = array();
  if (user_access('allow publishing')) {
    $actions['ott_publishing_republish_action'] = array(
      'type' => 'node',
      'label' => t('Publish to Services'),
      'configurable' => TRUE,
      'vbo_configurable' => FALSE,
      'permissions' => array('allow publishing'),
      'behavior' => array('views_property'),
    );
  }
  return $actions;
}

/**
 * Republish action form.
 */
function ott_publishing_republish_action_form($context) {
  $form = array();
  $instances = ott_services_get_instances(ott_services_get_active_instances());
  if ($instances) {
    $options = array();
    foreach ($instances as $instance) {
      $options[$instance->name] = $instance->admin_title;
    }
    $form['instance'] = array(
      '#type' => 'select',
      '#title' => t('Choose API Service instance'),
      '#options' => $options,
      '#required' => TRUE,
      '#default_value' => isset($context['settings']['instance']) ? $context['settings']['instance'] : key($options),
    );
  }
  return $form;
}

/**
 * Republish form validation.
 */
function ott_publishing_republish_action_validate($form, &$form_state) {
  $instance = ott_services_get_instance($form_state['values']['instance']);
  if (!$instance) {
    form_set_error('instance', t('Selected instance not found, please try again'));
  }
}

/**
 * Republish action form submit handler.
 */
function ott_publishing_republish_action_submit($form, $form_state) {
  return array(
    'instance' => ott_services_get_instance($form_state['values']['instance']),
  );
}

/**
 * Bulk operation callback, publishes node to services.
 *
 * @param object $node
 * @param array $context
 */
function ott_publishing_republish_action(&$node, $context) {
  $instance = $context['instance'];

  try {
    $profile = OttPublishingProfile::getProfileByEntity($node, 'node');
    if (!$profile) {
      throw new Exception(
        t(
          'No profile found for @title node',
          ['@title' => $node->title]
        )
      );
    }

    $tracking_var_name = "ott_publishing_tracking_disable_{$profile->getId()}";
    $tracking_var_value = (bool) variable_get($tracking_var_name, 0);
    // If data tracking is enabled, shut it down temporarily.
    if (!$tracking_var_value) {
      // Disable tracking for the current profile. Unwanted in bulk operations.
      variable_set($tracking_var_name, 1);
      // Flag to restore original value later.
      $tracking_var_changed = TRUE;
    }

    foreach ($instance as $instance_item) {
      $handler = OttPublishingItemHandler::getHandler($node, $profile, $instance_item);

      if (!$handler) {
        throw new Exception(
          t(
            'Profile !profile does not support service instances of !type type',
            ['!profile' => $profile->getLabel(), '!type' => $instance_item->instance_type]
          )
        );
      }

      if (module_exists('tve_debug_log')) {
        $media_item = OttMediaItem::getItemByNode($node);
        $mpx_id = $media_item->getFileWrapper()->getFieldValue('field_mpx_id');
        $mpx_guid = $media_item->getFileWrapper()->getFieldValue('field_mpx_guid');

        TveDebugLogger::logPublish([
          'mpx_id' => $mpx_id,
          'mpx_guid' => $mpx_guid,
          'event' => 'bulk_content_publish',
          'progress' => $context['progress']['current'] . '/' . $context['progress']['total'],
        ]);
      }

      $handler->publishItem();
    }
  }
  catch (Exception $e) {
    $item_label = $profile ? $profile->getItemLabel($node) : $node->title;
    $message = t('Publishing failed for !title.', array(
      '!title' => l($item_label, 'node/' . $node->nid . '/edit', array('attributes' => array('target' => '_blank')))
    ));
    drupal_set_message($message, 'warning');

    $log_message = 'Publishing failed. %node. Exception message: %exception.';
    $watchdog_args = array('%node' => $item_label, '%exception' => $e->getMessage());
    watchdog(OTT_PUBLISHING_WATCHDOG, $log_message, $watchdog_args, WATCHDOG_ERROR);
  }

  $context['progress']['finished'] = (1 === ($context['progress']['current'] / $context['progress']['total']));
  // Display log message if we are done.
  if ($context['progress']['finished'] && module_exists('ott_log')) {
    // Restore profile original tracking value.
    if (isset($tracking_var_changed)) {
      variable_set($tracking_var_name, $tracking_var_value);
    }
  }
}

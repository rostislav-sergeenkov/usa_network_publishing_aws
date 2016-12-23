<?php

/**
 * @file
 * Administration forms and related functions.
 */

/**
 * Adds default control to entity form.
 *
 * @param array $form
 *   Array of parent form.
 * @param array $instances
 *   Array of available instances.
 * @param OttPublishingProfile $profile
 *   Publishing profile object.
 * @param object $entity
 *   Entity object.
 */
function ott_publishing_add_default_control(&$form, $instances, $profile, $entity) {
  // Wrapper.
  $_form = [
    '#weight' => 9999,
    '#tree' => FALSE,
  ];

  $_form['_title'] = [
    '#type' => 'item',
    '#title' => t('TVE Publishing'),
  ];

  $_form['_container'] = [
    '#type' => 'vertical_tabs',
    '#attached' => [
      'js' => [drupal_get_path('module', 'ott_publishing') . '/js/ott_publishing.admin.js'],
    ],
  ];

  $button_submit = [];
  if (!empty($form['submit']['#submit'])) {
    $button_submit = &$form['submit']['#submit'];
  }
  elseif (!empty($form['actions']['submit']['#submit'])) {
    $button_submit = &$form['actions']['submit']['#submit'];
  }

  array_unshift($button_submit, 'ott_publishing_entity_form_submit');

  // Merge original submit callbacks to use them in "Save and publish" button.
  $original_submit = array_unique(array_merge(
    $button_submit,
    $form['#submit']
  ));

  foreach (ott_publishing_get_primary_instances($instances) as $instance) {
    // Prepare fieldset id.
    $fieldset_id = 'ott-publishing-' . $instance->name;

    // Instance wrapper fieldset.
    $_form[$fieldset_id] = [
      '#type' => 'fieldset',
      '#title' => $instance->admin_title,
      '#group' => '_container',
      '#attributes' => ['class' => ['ott-publishing-instance']],
    ];

    // "Publish" button.
    $_form[$fieldset_id]['publish'] = [
      '#name' => $instance->name . '---publish',
      '#type' => 'submit',
      '#value' => t('Publish to !instance', ['!instance' => $instance->admin_title]) . ' →',
      '#submit' => ['ott_publishing_entity_publishing_controls_form_submit'],
      '#prefix' => '<div class="form-item ott-publish-button">',
    ];

    // Additional info for "Publish" button.
    $_form[$fieldset_id]['publish_info'] = [
      '#prefix' => '<div class="description">',
      '#markup' => t('Current revision will be marked as !instance, all current values will be published to !instance.', ['!instance' => $instance->admin_title]),
      '#suffix' => '</div></div>',
    ];

    // "Save and publish" button.
    $_form[$fieldset_id]['save_publish'] = [
      '#name' => $instance->name . '---save_publish',
      '#type' => 'submit',
      '#value' => t('Save and publish to !instance', ['!instance' => $instance->admin_title]) . ' →',
      '#submit' => array_merge($original_submit, ['ott_publishing_entity_publishing_controls_form_submit']),
      '#prefix' => '<div class="form-item ott-save-publish-button">',
      '#ief_submit_all' => TRUE,
    ];

    // Additional info for "Save and publish" button.
    $_form[$fieldset_id]['save_publish_info'] = [
      '#prefix' => '<div class="description">',
      '#markup' => t('Entity will be saved as new revision, this revision will be marked as !instance, all saved values will be published to !instance.', ['!instance' => $instance->admin_title]),
      '#suffix' => '</div></div>',
    ];

    // "Revert" button.
    $_form[$fieldset_id]['revert'] = [
      '#name' => $instance->name . '---revert',
      '#type' => 'submit',
      '#value' => '↩ ' . t('Revert to !instance revision', ['!instance' => $instance->admin_title]),
      '#submit' => ['ott_publishing_entity_publishing_controls_form_submit'],
      '#prefix' => '<div class="form-item ott-revert-button">',
    ];

    // Additional info for "Revert" button.
    $_form[$fieldset_id]['revert_info'] = [
      '#prefix' => '<div class="description">',
      '#markup' => t('A new revision will be created, replicating current !instance revision.', ['!instance' => $instance->admin_title]),
      '#suffix' => '</div></div>',
    ];

    // Current state information and controls availability update.
    if (!$profile->getItemInstanceRevision($entity, $instance)) {
      $_form[$fieldset_id]['revert']['#disabled'] = TRUE;
      $_form[$fieldset_id]['published_status'] = [
        '#type' => 'hidden',
        '#value' => '<b>✗</b> ' . t('No revision was published to !instance', ['!instance' => $instance->admin_title]),
      ];
    }
    elseif ($profile->isCurrentRevisionPublished($entity, $instance)) {
      $_form[$fieldset_id]['revert']['#disabled'] = TRUE;
      $_form[$fieldset_id]['publish']['#disabled'] = TRUE;
      $_form[$fieldset_id]['published_status'] = [
        '#type' => 'hidden',
        '#value' => '<b>✓</b> ' . t('Current revision is published to !instance', ['!instance' => $instance->admin_title]),
      ];
    }
    else {
      $_form[$fieldset_id]['published_status'] = [
        '#type'  => 'hidden',
        '#value' => '<b>≠</b> ' . t('Current revision differs from revision published to !instance', ['!instance' => $instance->admin_title]),
      ];
    }
  }

  drupal_add_js(['ott_publishing_form_id' => $form['#id']], 'setting');
  drupal_alter('ott_publishing_controls_form', $_form, $form);

  $form['ott_publishing'] = $_form;
}

/**
 * Returns array of primary instances.
 *
 * @param array $instances
 *
 * @return array
 */
function ott_publishing_get_primary_instances($instances) {
  $primary_instances = array();
  $secondary_instances = array();

  // Get secondary instances.
  foreach ($instances as $instance => $value) {
    if (!empty($value->secondary_instance_name) && !in_array($value->secondary_instance_name, $secondary_instances)) {
      $secondary_instances[] = $value->secondary_instance_name;
    }
  }

  // Get primary instances.
  foreach ($instances as $instance => $value) {
    if (!in_array($instance, $secondary_instances)) {
      $primary_instances[$instance] = $value;
    }
  }

  return $primary_instances;
}

/**
 * Adds advanced control to entity form.
 *
 * @param array $form
 *   Array of parent form.
 * @param array $instances
 *   Array of available instances.
 * @param OttPublishingProfile $profile
 *   Publishing profile object.
 * @param object $entity
 *   Entity object.
 */
function ott_publishing_add_advanced_control(&$form, $instances, $profile, $entity) {
  // Publish button.
  $form['actions']['publish'] = [
    '#type' => 'submit',
    '#value' => t('Publish'),
    '#submit' => ['ott_publishing_entity_publish_submit_callback'],
    '#weight' => 41,
  ];

  $form['actions']['submit']['#value'] = t('Save as Draft');

  // If Service API instances (publishing endpoints) less then two - call
  // publishing directly without confirmation.
  if (count($instances) < 2) {
    // Get the first instance.
    $instance = reset($instances);

    $form['actions']['publish']['#name'] = $instance->name . '---publish';
    $form['actions']['publish']['#submit'] = ['ott_publishing_entity_publishing_controls_form_submit'];
  }
  else {
    $form['actions']['publish']['#name'] = 'publish';
  }
}

/**
 * Form builder callback for entity_publishing_controls form.
 *
 * @param array $form
 * @param OttPublishingProfile $profile
 */
function ott_publishing_add_entity_publishing_controls_form(&$form, $profile) {
  // Get active API Services instances.
  $instance_types = $profile->getInstanceTypes();
  $instances = ott_services_get_active_instances($instance_types);

  if (empty($instances)) {
    return;
  }

  /** @var Entity $entity */
  $entity = $form['#entity'];

  // Conditions for checking if entity is new and do not allow to add
  // publish controls to it's form.
  $is_empty_id = is_callable(array($entity, 'internalIdentifier')) && !$entity->internalIdentifier();
  $is_new_node = isset($form['#node']) && empty($form['#node']->nid);

  // If the property "#ott_add_controls_force" is TRUE means publish controls
  // will be added anyway.
  if (empty($form['#ott_add_controls_force']) && ($is_empty_id || $is_new_node)) {
    return;
  }

  // No publishing for entities that explicitly defined this key in their form.
  if (!empty($entity->ott_publishing_disabled)) {
    $form['ott_publishing_disabled'] = [
      '#markup' => $entity->ott_publishing_disabled,
      '#weight' => 9999,
    ];

    return;
  }

  // Pass publishing profile info to submit callback.
  $form['ott_publishing_profile'] = [
    '#type' => 'value',
    '#value' => $profile,
  ];

  // Detect all submit callback to execute before "Save and publish" submit.
  $form_submit = &$form['#submit'];
  array_unshift($form_submit, 'ott_publishing_entity_form_submit');

  // Call the function for build the form controls.
  $control_func = 'ott_publishing_add_' . $profile->getControlType() . '_control';
  if (is_callable($control_func)) {
    $control_func($form, $instances, $profile, $entity);
  }
}

/**
 * Collects the API Services Instances.
 *
 * @param array $pages
 *   Array of entity page objects.
 *
 * @return array
 *   Array of used apps for pages in arguments.
 */
function ott_publishing_get_apps($pages) {
  $apps = [];
  foreach ($pages as $page) {
    $app_machine_name = ott_page_get_page_app_machine_name($page);
    $app = ott_app_load_by_machine_name($app_machine_name);
    if ($app) {
      $apps[$app->service_instance] = $app;
    }
  }
  return $apps;
}

/**
 * Submit callback for entity_publishing_controls form.
 */
function ott_publishing_entity_publishing_controls_form_submit($form, &$form_state) {
  /** @var OttPublishingProfile $profile */
  $profile = $form_state['values']['ott_publishing_profile'];

  $profile->loadModuleIncludes();

  // Get entity.
  $entity = $form['#entity'];
  $item = $profile->loadItem($entity);

  // Get all apps which are used for page, pages include modules.
  // @todo Add ability to choose the instance type for all published content
  // (ott_program, ott_video and etc.) to avoid hardcoded values
  // (amazon_sqs, serial_api) in *.publishing.inc files. For content type
  // options for choosing instance type should be on Content Type edit page.
  $apps = [];
  switch (get_class($entity)) {
    case 'OttModuleEntityShelf':
    case 'OttModuleEntityFeatureCarousel':
      $apps = ott_publishing_get_apps($item->getRelatedPages());
      break;

    case 'OttPageEntity':
      $apps = ott_publishing_get_apps([$entity]);
      break;

    case 'stdClass':
      if (isset($entity->type) && $entity->type == 'ott_promo') {
        $apps['amazon_sqs'] = 'amazon_sqs';
      }
      break;
  }

  // Get endpoint id and operation.
  list($instance_name, $operation) = explode('---', $form_state['triggering_element']['#name']);

  // Get instance object.
  $instance = ott_services_get_instance($instance_name);

  // Perform the operation.
  switch ($operation) {
    case 'save_publish':
    case 'publish':
    case 'unpublish':
      // Publish to instance.
      $instances = (array) $instance;

      foreach ($instances as $obj) {
        // Check if apps are not empty and service
        // instance type is included in $apps array.
        if (!empty($apps) && !isset($apps[$obj->instance_type])) {
          continue;
        }

        $status = ott_publishing_publish_item($item, $profile, $obj);
        $app_name = ott_services_get_app_name($obj);
        $form_state['ott_publish_status'] = $status;

        // Skip publishing if status NULL.
        if (is_null($status)) {
          continue;
        }
        elseif ($status) {
          if (ott_publishing_is_session_started()) {
            $message = t(
              'Changes for @label <b>@title</b> are published to @app.',
              array(
                '@label' => $profile->getLabel(),
                '@title' => $item->title,
                '@app' => $app_name,
              )
            );
          }
          else {
            $message = t(
              'Current state of @title has been already published to @app - skipping data sending.',
              array(
                '@title' => $profile->getItemLabel($item),
                '@app' => $app_name,
              )
            );
          }

          drupal_set_message($message);
        }
        else {
          drupal_set_message(t('One or more changes were not published to @app.',
            array('@app' => $app_name)), 'warning');
        }
      }
      break;

    case 'revert':
      // Revert to instance revision.
      ott_publishing_revert_item($item, $profile, $instance);
      break;
  }

  module_invoke_all('ott_publishing_status_trigger');
  //ott_core_set_content_redirect_callback($form, $form_state);
}

/**
 * Custom submit callback for entity forms.
 *
 * Forces creating new revision on saving entity if current revision is
 * published to any instance.
 *
 * @param array $form
 * @param array $form_state
 */
function ott_publishing_entity_form_submit($form, &$form_state) {
  // Get entity.
  $entity = $form['#entity'];
  if (!empty($entity->is_new)) {
    return;
  }

  if (!isset($form_state['values']['ott_publishing_profile'])) {
    return;
  }

  if (is_array($entity)) {
    return;
  }

  /** @var OttPublishingProfile $profile */
  $profile = $form_state['values']['ott_publishing_profile'];

  // Get new revision form key.
  $new_revision_key = $profile->getNewRevisionFormKey();
  if (!isset($form_state['values'][$new_revision_key])) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'New revision flag not found in the !label edit form, please attack developer.',
      array('!label' => $profile->getItemLabel($entity)),
      WATCHDOG_ALERT
    );

    return;
  }

  // New revision is already being created.
  if ($form_state['values'][$new_revision_key]) {
    return;
  }

  if ($profile->isCurrentRevisionPublished($entity)) {
    $form_state['values'][$new_revision_key] = 1;
    $form_state['values']['default_revision'] = 1;
    $form_state['values']['log'] = t('TVE Publishing: Creating new revision after published one.');
  }
}

/**
 * Form builder callback for "ott_publishing_settings_form".
 *
 * @param array $form
 * @param array $form_state
 *
 * @return array
 */
function ott_publishing_settings_form($form, &$form_state) {
  $form['#tree'] = TRUE;

  $form['tracking'] = array(
    '#type' => 'fieldset',
    '#title' => t('Data tracking settings'),
    '#description' => t('Data tracking system prevents sending unchanged data to API Services.'),
  );

  $form['tracking']['disable'] = array(
    '#type' => 'fieldset',
    '#title' => t('Custom data tracking settings'),
  );

  /** @var OttPublishingProfile $profile */
  foreach (OttPublishingProfile::getProfiles() as $id => $profile) {
    $form['tracking']['disable'][$id] = array(
      '#type' => 'checkbox',
      '#title' => t('Skip data tracking check when publishing %label', array(
        '%label' => $profile->getLabel(),
      )),
      '#default_value' => variable_get("ott_publishing_tracking_disable_{$id}", 0),
    );
  }

  $form['tracking']['cleanup'] = array(
    '#type' => 'submit',
    '#submit' => array('ott_publishing_settings_form_submit_cleanup'),
    '#value' => t('Remove tracking data completely'),
    '#suffix' => '<div class="description">' .
      t('When there are no tracking data publishing will occur like it is happening the first time. Use this button if API Services database has been wiped.') .
      '</div>',
  );

  $form['actions'] = array(
    '#type' => 'actions',
  );

  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save settings'),
  );

  return $form;
}

/**
 * Form submit callback for "ott_publishing_settings_form".
 *
 * Executes on "Save settings" button.
 *
 * @param array $form
 * @param array $form_state
 */
function ott_publishing_settings_form_submit($form, &$form_state) {
  foreach ($form_state['values']['tracking']['disable'] as $profile_id => $disabled) {
    variable_set("ott_publishing_tracking_disable_{$profile_id}", $disabled);
  }

  drupal_set_message(t('Settings has been saved.'));
}

/**
 * Form submit callback for "ott_publishing_settings_form".
 *
 * Executes on "Remove tracking data completely" button.
 *
 * @param array $form
 * @param array $form_state
 */
function ott_publishing_settings_form_submit_cleanup($form, &$form_state) {
  OttPublishingTracker::cleanup(-1);

  drupal_set_message(t('All tracking data has been removed.'));
}

/**
 * Submit callback for publishing entity.
 */
function ott_publishing_entity_publish_submit_callback($form, &$form_state) {
  $form_id = $form_state['values']['form_id'];
  $form_state['no_redirect'] = FALSE;
  $operation = $form_state['triggering_element']['#name'];
  $form_state['redirect'] = ['admin/ott/publishing/confirmation', [
    'query' => [
      'destination' => current_path(),
      'form_id' => $form_id,
      'operation' => $operation,
    ],
  ]];

  // Remove destination parameter for avoiding to override the redirect path.
  if (isset($_GET['destination'])) {
    unset($_GET['destination']);
  }
}

/**
 * Confirmation form for choosing publishing endpoints.
 */
function ott_publishing_confirmation_form($form, $form_state) {
  // Get url query params.
  $query = drupal_get_query_parameters();
  if (!isset($query['destination']) || !isset($query['form_id'])) {
    return [];
  }

  $item = menu_get_item($query['destination']);
  if (!isset($item['page_arguments'])) {
    return [];
  }

  $arg_number = key($item['load_functions']);
  $entity = NULL;
  if (isset($item['map'][$arg_number]) && is_object($item['map'][$arg_number])) {
    $entity = $item['map'][$arg_number];
    $form['entity'] = [
      '#type'  => 'value',
      '#value' => $entity,
    ];
  }
  // Get the profile.
  $profile = OttPublishingProfile::getProfileByFormId($query['form_id']);

  // Get active API Services instances.
  $instance_types = $profile->getInstanceTypes();
  $instances = ott_publishing_get_primary_instances($instance_types);

  $options = [];
  foreach ($instances as $instance) {
    $options[$instance->name] = $instance->admin_title;
  }

  // Select for available endpoints.
  $form['instance'] = [
    '#type' => 'select',
    '#title' => t('Choose API Service instance'),
    '#options' => $options,
  ];

  // Pass profile object to submit callback.
  $form['ott_publishing_profile'] = [
    '#type'  => 'value',
    '#value' => $profile,
  ];

  $operation = ott_publishing_get_operation_from_query();

  return confirm_form($form, t('Please choose the API Service instance'), drupal_get_destination(), NULL, ucfirst($operation));
}

/**
 * Submit callback for confirmation page.
 */
function ott_publishing_confirmation_form_submit($form, &$form_state) {
  $values = $form_state['values'];
  $operation = ott_publishing_get_operation_from_query();
  $form_state['triggering_element']['#name'] = $values['instance'] . '---' . $operation;
  if (!isset($form['#entity']) && isset($values['entity'])) {
    $form['#entity'] = $values['entity'];
  }
  ott_publishing_entity_publishing_controls_form_submit($form, $form_state);
}

/**
 * Get operation string from query parameters.
 *
 * @return string
 */
function ott_publishing_get_operation_from_query() {
  $query = drupal_get_query_parameters();
  $operation = 'publish';
  if (isset($query['operation'])) {
    if ($query['operation'] == 'unpublish') {
      $operation = $query['operation'];
    }
  }
  return $operation;
}

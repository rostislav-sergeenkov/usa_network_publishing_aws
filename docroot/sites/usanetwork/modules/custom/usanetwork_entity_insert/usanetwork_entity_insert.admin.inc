<?php

/**
 * Form callback for configuration page.
 */
function usanetwork_entity_insert_config($form, &$form_state) {
  $form['#tree'] = true;
  foreach (_usanetwork_entity_insert_types() as $type => $type_info) {
    $form[$type] = array(
      '#type' => 'fieldset',
      '#title' => $type_info['name'],
      '#description' => $type_info['description'],
      '#collapsible' => true,
    );

    $form[$type]['entity_type'] = array(
      '#type' => 'fieldset',
      '#title' => t('Enabled entity types and bundles'),
      '#description' => t('Select entity types and bundles that will be available for inline inserting.'),
      '#collapsible' => true,
    );

    $entities = entity_get_info();
    $renderable = _usanetwork_entity_insert_renderable_entities();
    $enabled = _usanetwork_entity_insert_enabled_entities($type);

    $view_modes = array();
    foreach ($renderable as $entity_type) {
      $entity_info = $entities[$entity_type];
      $view_modes = array_merge($view_modes, $entity_info['view modes']);
      if (in_array($entity_type, $renderable)) {
        $options = array();
        foreach ($entity_info['bundles'] as $bundle => $bundle_info) {
          $options[$bundle] = $bundle_info['label'];
        }
        $form[$type]['entity_type'][$entity_type] = array(
          '#type' => 'checkboxes',
          '#title' => $entity_info['label'],
          '#options' => $options,
          '#default_value' => $enabled[$entity_type],
        );
      }
    }

    $options = array();
    foreach ($view_modes as $view_mode => $view_mode_info) {
      $options[$view_mode] = $view_mode_info['label'];
    }
    $options['full'] = t('Full content');
    $form[$type]['view_modes'] = array(
      '#type' => 'checkboxes',
      '#title' => t('View modes'),
      '#description' => t('View modes available for rendering inline entities.'),
      '#options' => $options,
      '#default_value' => array_keys(_usanetwork_entity_insert_view_modes($type)),
    );
    $form[$type]['default_view_mode'] = array(
      '#type' => 'select',
      '#title' => t('Default view mode'),
      '#description' => t('Default view mode for rendering inline entities. Will be used if user has no permission to select view mode.'),
      '#options' => $options,
      '#default_value' => _usanetwork_entity_insert_default_view_mode($type),
    );
    if (_usanetwork_entity_insert_is_embed_video($type)){
      $form[$type]['auto_play'] = array(
        '#type' => 'checkbox',
        '#title' => t('Set default value for autoplay as checked'),
        '#description' => t('Default Autoplay parameter for player.'),
        '#default_value' => _usanetwork_entity_insert_autoplay_values($type),
      );
    }
  }

  $form['actions'] = array('#type' => 'actions');
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
  );
  return $form;
}

/**
 * Validation callback for configuration form.
 */
function usanetwork_entity_insert_config_validate($form, &$form_state) {
  $entity_info = entity_get_info();
  foreach (_usanetwork_entity_insert_types() as $type => $type_info) {
    $enabled = array();
    foreach ($form_state['values'][$type]['entity_type'] as $entity_type => $enabled_bundles) {
      foreach ($enabled_bundles as $bundle) {
        if (!empty($bundle)) {
          $enabled[$entity_type][] = $bundle;
        }
      }
    }
    $form_state['config'][$type]['enabled'] = $enabled;

    // validate view modes
    if (!empty($enabled)) {
      $selected_view_modes = array();
      $view_modes = $form_state['values'][$type]['view_modes'];
      $default_view_mode = $form_state['values'][$type]['default_view_mode'];

      foreach ($view_modes as $view_mode) {
        if (!empty($view_mode)) {
          $selected_view_modes[$view_mode] = $view_mode;

          foreach ($enabled as $entity_type => $bundles) {
            if (empty($entity_info[$entity_type]['view modes'][$view_mode])) {
              form_set_error($type . '][view_modes', t('Entity type %entity_type does not have view mode %view_mode', array(
                '%entity_type' => $entity_info[$entity_type]['label'],
                '%view_mode' => $view_mode,
              )));
            }
          }
        }
      }

      if (empty($selected_view_modes)) {
        form_set_error($type . '][view_modes', t('Please select at least one allowed view mode.'));
      }
      else {
        if (!in_array($default_view_mode, $selected_view_modes)) {
          form_set_error($type . '][default_view_mode', t('Default view mode should be one of the allowed.'));
        }
      }

      $form_state['config'][$type]['view_modes'] = $selected_view_modes;
      $form_state['config'][$type]['default_view_mode'] = $default_view_mode;
      if (_usanetwork_entity_insert_is_embed_video($type)) {
        $form_state['config'][$type]['auto_play'] = $form_state['values'][$type]['auto_play'];
      }
    }
  }
}

/**
 * Submit callback for configuration form.
 */
function usanetwork_entity_insert_config_submit($form, &$form_state) {
  foreach ($form_state['config'] as $type => $config) {
    foreach ($config as $key => $value) {
      variable_set(USANETWORK_ENTITY_INSERT_CONFIG_NAMESPACE . $type . '_' . $key, $value);
    }
  }
}


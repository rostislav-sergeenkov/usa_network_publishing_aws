<?php

/**
 * Implements hook_form_FORM_ID_alter().
 */
function usanetwork_ads_form_node_form_alter(&$form, &$form_state) {
  $node = $form_state['node'];
  if (!isset($node->nid)) {
    return;
  }

  $defaults = _usanetwork_ads_node_settings($node);
  if (!empty($defaults) && !isset($defaults['is_sponsored'])) {
    $defaults['is_sponsored'] = _usanetwork_ads_is_node_sponsored($node);
  }

  $form['usanetwork_ads'] = array(
    '#tree' => true,
    '#type' => 'fieldset',
    '#title' => t('Site Metrics'),
    '#group' => 'additional_settings',
    '#weight' => 5,
    '#access' => user_access('administer usanetwork dart settings'),
    '#collapsible' => true,
    '#collapsed' => true,
  );

  $form['usanetwork_ads']['default'] = array(
    '#type' => 'checkbox',
    '#title' => t('Use defaults'),
    '#default_value' => empty($defaults) ? 1 : (isset($defaults['default']) ? $defaults['default'] : 0),
  );

  $form['usanetwork_ads']['variables'] = array(
    '#type' => 'fieldset',
    '#title' => t('Variables'),
    '#states' => array(
      'invisible' => array(
        ':input[name="usanetwork_ads[default]"]' => array('checked' => true),
      ),
    ),
  );

  _usanetwork_ads_dart_elements($form['usanetwork_ads']['variables'], $defaults);

  $id = drupal_html_id('usanetwork-ads-' . $node->type . '-' . $node->nid);
  $form['usanetwork_ads']['variables']['omniture'] = array(
    '#type' => 'fieldset',
    '#tree' => TRUE,
    '#title' => t('Omniture Variables'),
  );

  $items_count = isset($form_state['usanetwork_ads']['omniture']['items_count']) ? $form_state['usanetwork_ads']['omniture']['items_count'] : count($defaults['omniture']['variables']);
  _usanetwork_ads_omniture_elements($id, $form['usanetwork_ads']['variables']['omniture'], $defaults['omniture'], $items_count);
  $form_state['usanetwork_ads']['omniture']['items_count'] = $items_count;
  $form['usanetwork_ads']['variables']['omniture']['variables']['#attributes']['id'] = $id . '-omniture-values';

  $form['#submit'][] = 'usanetwork_ads_form_node_form_submit';
}

/**
 * Node save submit callback
 * Saves settings
 */
function usanetwork_ads_form_node_form_submit($form, &$form_state) {
  if (!isset($form_state['input']['usanetwork_ads']) || !isset($form_state['node']) || !isset($form_state['node']->nid)) {
    return;
  }

  $node = $form_state['node'];
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $node_settings = $form_state['input']['usanetwork_ads']['variables'];
  $node_settings['default'] = $form_state['input']['usanetwork_ads']['default'];

  // remove empty omniture variables
  $variables = array();
  if (isset($node_settings['omniture']['variables']) && is_array($node_settings['omniture']['variables'])) {
    foreach ($node_settings['omniture']['variables'] as $item) {
      if (!empty($item['key'])) {
        $variables[] = $item;
      }
    }
  }
  $node_settings['omniture']['variables'] = $variables;

  $settings['node'][$node->type][$node->nid] = $node_settings;
  variable_set('usanetwork_ads_site_metric_settings', $settings);
}

/**
 * Implements hook_form_FORM_ID_alter().
 */
function usanetwork_ads_form_node_type_form_alter(&$form, &$form_state) {
  if (!isset($form['#node_type'])) {
    return;
  }

  $node_type = $form['#node_type'];
  $defaults = _usanetwork_ads_content_type_settings($node_type->type);

  $form['usanetwork_ads'] = array(
    '#tree' => true,
    '#type' => 'fieldset',
    '#title' => t('Site Metrics'),
    '#group' => 'additional_settings',
    '#weight' => 5,
    '#access' => user_access('administer usanetwork dart settings'),
    '#collapsible' => true,
    '#collapsed' => true,
  );

  _usanetwork_ads_dart_elements($form['usanetwork_ads'], $defaults);
  unset($form['usanetwork_ads']['is_sponsored']);
  unset($form['usanetwork_ads']['sect']['#description']);

  $id = drupal_html_id('usanetwork-ads-' . $node_type->type);
  $form['usanetwork_ads']['omniture'] = array(
    '#type' => 'fieldset',
    '#tree' => TRUE,
    '#title' => t('Omniture Variables'),
  );

  $items_count = isset($form_state['usanetwork_ads']['omniture']['items_count']) ? $form_state['usanetwork_ads']['omniture']['items_count'] : count($defaults['omniture']['variables']);
  _usanetwork_ads_omniture_elements($id, $form['usanetwork_ads']['omniture'], $defaults['omniture'], $items_count);
  $form_state['usanetwork_ads']['omniture']['items_count'] = $items_count;
  $form['usanetwork_ads']['omniture']['variables']['#attributes']['id'] = $id . '-omniture-values';

  $form['#submit'][] = 'usanetwork_ads_form_node_type_form_submit';
}

/**
 * Node type save submit callback
 * Saves settings
 */
function usanetwork_ads_form_node_type_form_submit($form, &$form_state) {
  if (!isset($form_state['input']['usanetwork_ads']) || !isset($form['#node_type'])) {
    return;
  }

  $node_type = $form['#node_type'];
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $type_settings = $form_state['input']['usanetwork_ads'];

  // remove empty omniture variables
  $variables = array();
  foreach ($type_settings['omniture']['variables'] as $item) {
    if (!empty($item['key'])) {
      $variables[] = $item;
    }
  }
  $type_settings['omniture']['variables'] = $variables;

  $settings['node'][$node_type->type]['default'] = $type_settings;
  variable_set('usanetwork_ads_site_metric_settings', $settings);
}


/**
 * Submit callback for add omniture variable
 */
function usanetwork_ads_add_omniture_submit($form, &$form_state) {
  $button = $form_state['triggering_element'];

  // Increment the items count.
  $form_state['usanetwork_ads']['omniture']['items_count']++;

  $form_state['rebuild'] = TRUE;
}

/**
 * Ajax callback for add omniture variable.
 */
function usanetwork_ads_add_omniture_ajax_submit(&$form, &$form_state) {
  $button = $form_state['triggering_element'];

  // Go one level up in the form, to the widgets container.
  $element = drupal_array_get_nested_value($form, array_slice($button['#array_parents'], 0, -1));
  return $element;
}

/**
 * Returns dart form elements
 */
function _usanetwork_ads_dart_elements(&$parent, $defaults = array()) {
  $parent['is_sponsored'] = array(
    '#type' => 'radios',
    '#title' => t('Is Sponsored'),
    '#options' => array(
      -1 => t('Inherited'),
      0 => t('No'),
      1 => t('Yes'),
    ),
    '#default_value' => isset($defaults['is_sponsored']) && $defaults['is_sponsored'] !== false ? $defaults['is_sponsored'] : -1,
  );
  $parent['sect'] = array(
    '#type' => 'textfield',
    '#title' => t('"sect" value'),
    '#default_value' => isset($defaults['sect']) ? $defaults['sect'] : '',
    '#description' => t('Setting a "sect" value here will over-ride value set for any associated TV Show.'),
  );
  $parent['sub'] = array(
    '#type' => 'textfield',
    '#title' => t('"sub" value'),
    '#default_value' => isset($defaults['sub']) ? $defaults['sub'] : '',
  );
  $parent['sub2'] = array(
    '#type' => 'textfield',
    '#title' => t('"sub2" value'),
    '#default_value' => isset($defaults['sub2']) ? $defaults['sub2'] : '',
  );
}

/**
 * Returns omniture form elements
 */
function _usanetwork_ads_omniture_elements($id, &$parent, $defaults = array(), $items_count = null) {
  $parent['disable'] = array(
    '#type' => 'checkbox',
    '#title' => t('Disable omniture variables'),
    '#default_value' => isset($defaults['disable']) ? $defaults['disable'] : 0,
  );


  $parent['variables'] = array(
    '#type' => 'container',
  );

  if (isset($items_count)) {
    for ($delta = 0; $delta < $items_count; $delta++) {
      $parent['variables'][$delta] = _usanetwork_ads_omniture_variable_elements(isset($defaults['variables'][$delta]) ? $defaults['variables'][$delta] : array());
    }
  }
  else {
    foreach ($defaults['variables'] as $delta => $values) {
      $parent['variables'][$delta] = _usanetwork_ads_omniture_variable_elements($values);
    }
  }

  // Add the "Add more" button.
  $parent['variables']['add_more'] = array(
    '#type' => 'submit',
    '#value' => t('Add variable'),
    '#submit' => array('usanetwork_ads_add_omniture_submit'),
    '#ajax' => array(
      'callback' => 'usanetwork_ads_add_omniture_ajax_submit',
      'wrapper' => $id . '-omniture-values',
      'effect' => 'fade',
    ),
  );
}

/**
 * Return omniture variable elements.
 */
function _usanetwork_ads_omniture_variable_elements($defaults = array()) {
  $form = array(
    '#type' => 'fieldset',
    '#tree' => TRUE,
  );;
  $form['key'] = array(
    '#type' => 'textfield',
    '#title' => t('Variable Name'),
    '#default_value' => $defaults['key'],
  );
  $form['value'] = array(
    '#type' => 'textfield',
    '#title' => t('Value'),
    '#default_value' => $defaults['value'],
  );

  return $form;
}

/**
 * Returns node specific settings.
 */
function _usanetwork_ads_node_settings($node) {
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $node_settings = isset($settings['node'][$node->type][$node->nid]) ? $settings['node'][$node->type][$node->nid] : array();

  return $node_settings;
}

/**
 * Returns node specific settings.
 */
function _usanetwork_ads_content_type_settings($type) {
  $settings = variable_get('usanetwork_ads_site_metric_settings', array());
  $node_settings = isset($settings['node'][$type]['default']) ? $settings['node'][$type]['default'] : array();

  return $node_settings;
}

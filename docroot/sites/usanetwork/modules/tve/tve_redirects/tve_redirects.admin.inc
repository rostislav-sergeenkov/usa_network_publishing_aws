<?php

/**
 * @file
 * Admin page callbacks for the TVE Redirects module.
 *
 * @ingroup tve_redirects
 */

/**
 * Form builder callback for "TVE Redirects" settings form.
 */
function tve_redirects_admin_form($form, &$form_state) {
  $form['#tree'] = TRUE;
  $config = _tve_redirects_get_config();

  $form['tve_redirects']['general'] = array(
    '#type' => 'fieldset',
    '#title' => t('General settings'),
  );

  $path_prefix = isset($config['general']['path']) ? $config['general']['path'] : TVE_REDIRECTS_PATH_PREFIX;
  $form['tve_redirects']['general']['path'] = array(
    '#type' => 'textfield',
    '#title' => t('Path prefix'),
    '#description' => t('The first part of the redirect url. Pattern for redirect urls is: %pattern', array(
      '%pattern' => url($path_prefix, array('absolute' => TRUE)) . '/{redirect type}/{identifier}',
    )),
    '#default_value' => $path_prefix,
    '#required' => TRUE,
  );

  $info = module_invoke_all('tve_redirects_info');
  foreach ($info as $type => $settings) {
    $form['tve_redirects'][$type] = array(
      '#type' => 'fieldset',
      '#title' => $settings['title'],
      '#description' => $settings['description'],
    );

    $form['tve_redirects'][$type]['enable'] = array(
      '#title' => t('Enable redirect'),
      '#type' => 'checkbox',
      '#default_value' => isset($config[$type]['enable']) ? $config[$type]['enable'] : 0,
    );

    $redirect_type_path =  isset($config[$type]['path']) ? $config[$type]['path'] : $type;
    $form['tve_redirects'][$type]['path'] = array(
      '#title' => t('Path'),
      '#description' => t('The second part of the redirect url. Pattern for redirect urls is: %pattern', array(
        '%pattern' => url($path_prefix. '/' .$redirect_type_path, array('absolute' => TRUE)) . '/{identifier}',
      )),
      '#type' => 'textfield',
      '#default_value' => $redirect_type_path,
      '#states' => array(
        'invisible' => array(
          ':input#edit-tve-redirects-' . drupal_html_id($type) . '-enable' => array('checked' => FALSE),
        ),
        'required' => array(
          ':input#edit-tve-redirects-' . drupal_html_id($type) . '-enable' => array('checked' => TRUE),
        ),
      ),
    );
  }

  $form = system_settings_form($form);
  $form['#submit'][] = 'tve_redirects_admin_form_submit';

  return $form;
}

/**
 * Form validation callback for "TVE Redirects" settings form.
 *
 * @param array $form
 * @param array $form_state
 */
function tve_redirects_admin_form_validate($form, &$form_state) {
  $values = $form_state['values']['tve_redirects'];

  if (!valid_url($values['general']['path'])) {
    form_set_error('tve_redirects][general][path', t('Please enter a valid path.'));
  }

  $menu_item = menu_get_item($values['general']['path']);
  if (isset($menu_item['page_callback']) && '_tve_redirects_page_redirect' != $menu_item['page_callback']) {
    form_set_error('tve_redirects][general][path', t(
      'General path %path already taken by another module. Please enter an unique general path.',
      array('%path' => $values['general']['path'])
    ));
  }

  $unique_pathes = array();
  foreach ($values as $type => $config) {
    if ('general' == $type || empty($config['enable'])) {
      continue;
    }

    if (isset($unique_pathes[$config['path']])) {
      form_set_error('tve_redirects][' . $type . '][path', t(
        'Duplicate path value %path for %type redirects.',
        array('%path' => $config['path'], '%type' => $type)
      ));
    }
    else {
      $unique_pathes[$config['path']] = $config['path'];
    }
  }
}

/**
 * Additional form submit callback for "TVE Redirects" settings form.
 *
 * @param array $form
 * @param array $form_state
 */
function tve_redirects_admin_form_submit($form, &$form_state) {
  menu_rebuild();
}

<?php
/**
 * @file
 * Admin page callbacks for the TVE Auth 2 module.
 *
 * @ingroup tve_auth2
 */

/**
 * Form builder callback for "Auth Flow" settings form.
 */
function _tve_auth2_admin_form($form, &$form_state) {
  // Draft values for all variables.
  $draft_variables = _tve_auth2_get_draft_variables();
  // Published values for all variables.
  $published_variables = _tve_auth2_get_published_variables();
  // Default values for all auth options.
  $defaults = _tve_auth2_get_default_variables();
  if (!empty($draft_variables)) {
    // Override default values by draft ones.
    $defaults = array_merge($defaults, $draft_variables);
  }

  // Welcome modal.
  _tve_auth2_modal_form_welcome_window($form, $defaults);
  // Login window - step #1.
  _tve_auth2_modal_form_login_window($form, $defaults);
  // Additional auth settings.
  _tve_auth2_modal_form_auth_flow($form, $defaults);
  // Allow to add more form sections.
  drupal_alter('tve_auth2_settings_form', $form, $defaults);

  if (empty($draft_variables)) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages error">' . TVE_AUTH2_STATUS_NOT_SAVED . '</div>',
      '#weight' => -100,
    );
  }
  elseif (empty($published_variables)) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages error">' . TVE_AUTH2_STATUS_NOT_PUBLISHED . '</div>',
      '#weight' => -100,
    );
  }
  elseif ($draft_variables == $published_variables) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages status">' . TVE_AUTH2_STATUS_EQUAL . '</div>',
      '#weight' => -100,
    );
  }
  else {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages warning">' . TVE_AUTH2_STATUS_DIFFERENT . '</div>',
      '#weight' => -100,
    );

    $diff = _tve_auth2_get_diff($draft_variables, $published_variables);
    $published_values = _tve_auth2_get_diff_published_values($diff, $published_variables);

    _tve_auth2_append_published_values_info_fieldsets($form, $published_values);
    _tve_auth2_append_published_values_info_fields($form, $published_values);
  }

  $publish_button_disabled = empty($draft_variables) || $draft_variables == $published_variables;
  $reset_button_disabled = empty($published_variables) || $draft_variables == $published_variables;

  $form['save'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
    '#submit' => array('_tve_auth2_admin_form_submit_save'),
    '#weight' => 10,
  );

  $form['cancel'] = array(
    '#type' => 'submit',
    '#value' => t('Cancel'),
    '#submit' => array('_tve_auth2_admin_form_submit_cancel'),
    '#weight' => 20,
  );

  $form['publish'] = array(
    '#type' => 'submit',
    '#value' => t('Publish'),
    '#disabled' => $publish_button_disabled,
    '#submit' => array('_tve_auth2_admin_form_submit_publish'),
    '#weight' => 30,
  );

  $form['reset'] = array(
    '#type' => 'submit',
    '#value' => t('Reset to Published'),
    '#disabled' => $reset_button_disabled,
    '#submit' => array('_tve_auth2_admin_form_submit_reset'),
    '#weight' => 40,
  );

  _tve_auth2_modal_form_prepare_preview($form);

  return $form;
}

/**
 * Form builder callback for "Welcome Window" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth2_modal_form_welcome_window(&$form, $defaults) {
  $form['welcome_window'] = array(
    '#type' => 'fieldset',
    '#title' => t('Modal Window: Welcome'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  // Brand logo image.
  $form['welcome_window']['brand_logo']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Brand Logo'),
    '#description' => t('Branding logo image. Allowed file types: gif, jpg, png, svg.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://tve_auth2/',
    '#default_value' => $defaults['welcome_window']['brand_logo']['fid'],
    '#upload_validators' => array(
      'file_validate_extensions' => array('gif png jpg jpeg svg'),
    ),
  );

  // Get available CSS styles (classes) from the default theme.
  $text_styles = _tve_auth2_modal_text_styles();

  // Top text.
  $form['welcome_window']['text_top'] = array(
    '#type' => 'fieldset',
    '#title' => t('Top'),
    '#collapsible' => FALSE,
    '#description' => t('First information copy line.'),
  );
  $form['welcome_window']['text_top']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['welcome_window']['text_top']['text'],
    '#description' => t('Text to be shown on the first line of the modal window.'),
  );
  $form['welcome_window']['text_top']['style'] = array(
    '#type' => 'select',
    '#title' => t('Style'),
    '#options' => $text_styles,
    '#empty_value' => '',
    '#default_value' => $defaults['welcome_window']['text_top']['style'],
    '#description' => t('Tip: You can get styles (CSS classes) from default theme (just declare specific variable in info file like "settings[tve_auth2_styles][class-name] = Style name".'),
  );

  // Center text.
  $form['welcome_window']['text_center'] = array(
    '#type' => 'fieldset',
    '#title' => t('Center'),
    '#collapsible' => FALSE,
    '#description' => t('Second information copy line.'),
  );
  $form['welcome_window']['text_center']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['welcome_window']['text_center']['text'],
    '#description' => t('Text to be shown on the second line of the modal window.'),
  );
  $form['welcome_window']['text_center']['style'] = array(
    '#type' => 'select',
    '#title' => t('Style'),
    '#options' => $text_styles,
    '#empty_value' => '',
    '#default_value' => $defaults['welcome_window']['text_center']['style'],
    '#description' => t('Tip: You can get styles (CSS classes) from default theme (just declare specific variable in info file like "settings[tve_auth2_styles][class-name] = Style name".'),
  );

  // Bottom text.
  $form['welcome_window']['text_bottom'] = array(
    '#type' => 'fieldset',
    '#title' => t('Bottom'),
    '#collapsible' => FALSE,
    '#description' => t('Third information copy line.'),
  );
  $form['welcome_window']['text_bottom']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['welcome_window']['text_bottom']['text'],
    '#description' => t('Text to be shown on the third line of the modal window.'),
  );
  $form['welcome_window']['text_bottom']['style'] = array(
    '#type' => 'select',
    '#title' => t('Style'),
    '#options' => $text_styles,
    '#empty_value' => '',
    '#default_value' => $defaults['welcome_window']['text_bottom']['style'],
    '#description' => t('Tip: You can get styles (CSS classes) from default theme (just declare specific variable in info file like "settings[tve_auth2_styles][class-name] = Style name".'),
  );

  // "Yes/No" buttons.
  $form['welcome_window']['buttons'] = array(
    '#type' => 'fieldset',
    '#title' => t('Buttons'),
    '#collapsible' => FALSE,
    '#description' => t('Settings for "Yes/No" buttons.'),
  );
  $form['welcome_window']['buttons']['yes_title'] = array(
    '#type' => 'textfield',
    '#title' => t('Yes: Title'),
    '#default_value' => $defaults['welcome_window']['buttons']['yes_title'],
    '#description' => t('Title for the "Yes" button.'),
    '#size' => 10,
    '#maxlength' => 14,
  );
  $form['welcome_window']['buttons']['yes_description'] = array(
    '#type' => 'textfield',
    '#title' => t('Yes: Description'),
    '#default_value' => $defaults['welcome_window']['buttons']['yes_description'],
    '#description' => t('Description for the "Yes" button.'),
  );
  $form['welcome_window']['buttons']['no_title'] = array(
    '#type' => 'textfield',
    '#title' => t('No: Title'),
    '#default_value' => $defaults['welcome_window']['buttons']['no_title'],
    '#description' => t('Title for the "No" button.'),
    '#size' => 10,
    '#maxlength' => 14,
  );
  $form['welcome_window']['buttons']['no_description'] = array(
    '#type' => 'textfield',
    '#title' => t('No: Description'),
    '#default_value' => $defaults['welcome_window']['buttons']['no_description'],
    '#description' => t('Description for the "No" button.'),
  );
  $form['welcome_window']['buttons']['no_url'] = array(
    '#type' => 'textfield',
    '#title' => t('No: URL'),
    '#default_value' => $defaults['welcome_window']['buttons']['no_url'],
    '#description' => t('Link for the "No" button. Use internal relative path to a page.'),
    '#element_validate' => array('_tve_auth2_validate_url'),
  );
  $form['welcome_window']['buttons']['no_url_target'] = array(
    '#type' => 'checkbox',
    '#title' => t('No: URL - open link in a new tab.'),
    '#default_value' => !empty($defaults['welcome_window']['buttons']['no_url_target']),
    '#description' => t('Open "No" link in a new tab.'),
  );


  // "Preview" button.
  $form['welcome_window']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'welcome_window_preview',
    '#value' => t('Preview "Welcome Modal Window"'),
    '#submit' => array('_tve_auth2_modal_form_preview'),
  );
}

/**
 * Validates relative path (URL).
 *
 * @param $element
 * @param $form_state
 * @param $form
 */
function _tve_auth2_validate_url($element, &$form_state, $form) {
  if (!empty($element['#value']) && !drupal_valid_path($element['#value'])) {
    form_error($element, t('Can\'t find page %path.', array('%path' => $element['#value'])));
  }
}

/**
 * Form builder callback for "Login Window One" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth2_modal_form_login_window(&$form, $defaults) {
  $form['login_window'] = array(
    '#type' => 'fieldset',
    '#title' => t('Modal Window: Login'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  // Text line 1.
  $form['login_window']['text_line_1'] = array(
    '#type' => 'fieldset',
    '#title' => t('Text line #1'),
    '#collapsible' => FALSE,
    '#description' => t('First information copy line.'),
  );
  $form['login_window']['text_line_1']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['login_window']['text_line_1']['text'],
    '#description' => t('Text to be shown on the line #1.'),
  );

  // Text line 2 (with WYSIWYG support).
  $form['login_window']['text_line_2'] = array(
    '#type' => 'fieldset',
    '#title' => t('Text line #2'),
    '#collapsible' => FALSE,
    '#description' => t('Second information copy line.'),
  );
  $form['login_window']['text_line_2']['text'] = array(
    '#title' => t('Content'),
    '#type' => 'text_format',
    '#format' => (isset($defaults['login_window']['text_line_2']['text']['format'])) ? $defaults['login_window']['text_line_2']['text']['format'] : TVE_AUTH2_WISYWYG_FORMAT,
    '#rows' => 5,
    '#default_value' => $defaults['login_window']['text_line_2']['text']['value'],
    '#description' => t('Text to be shown on the line #2.'),
  );

  // Text line 3.
  $form['login_window']['text_line_3'] = array(
    '#type' => 'fieldset',
    '#title' => t('Text line #3'),
    '#collapsible' => FALSE,
    '#description' => t('Third information copy line.'),
  );
  $form['login_window']['text_line_3']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['login_window']['text_line_3']['text'],
    '#description' => t('Text to be shown on the line #3.'),
  );

  // Text line 4.
  $form['login_window']['text_line_4'] = array(
    '#type' => 'fieldset',
    '#title' => t('Text line #4'),
    '#collapsible' => FALSE,
    '#description' => t('Fourth information copy line.'),
  );
  $form['login_window']['text_line_4']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['login_window']['text_line_4']['text'],
    '#description' => t('Text to be shown on the line #4.'),
  );
  $form['login_window']['text_line_4']['zendesk_url'] = array(
    '#type' => 'checkbox',
    '#title' => t('Zendesk Form'),
    '#default_value' => module_exists('tve_zendesk') && $defaults['login_window']['text_line_4']['zendesk_url'],
    '#description' => t('Open Zendesk Form by clicking on the link.'),
    '#disabled' => !module_exists('tve_zendesk'),
  );
  $form['login_window']['text_line_4']['url'] = array(
    '#type' => 'textfield',
    '#title' => t('URL'),
    '#default_value' => $defaults['login_window']['text_line_4']['url'],
    '#description' => t('Relative path to a help page.'),
    '#element_validate' => array('_tve_auth2_validate_url'),
    '#states' => array(
      'visible' => array(
        'input[name*="[text_line_4][zendesk_url]"]' => array('checked' => FALSE),
      ),
    ),
  );

  // Text line 5.
  $form['login_window']['text_line_5'] = array(
    '#type' => 'fieldset',
    '#title' => t('Text line #5'),
    '#collapsible' => FALSE,
    '#description' => t('Fifth information copy line.'),
  );
  $form['login_window']['text_line_5']['text'] = array(
    '#type' => 'textfield',
    '#title' => t('Content'),
    '#default_value' => $defaults['login_window']['text_line_5']['text'],
    '#description' => t('Text to be shown on the line #5.'),
  );

  // "Preview" submit button.
  $form['login_window']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'login_window_preview',
    '#value' => t('Preview "Login Modal Window"'),
    '#submit' => array('_tve_auth2_modal_form_preview'),
  );
}

/**
 * Form builder callback for additional settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth2_modal_form_auth_flow(&$form, $defaults) {
  $form['additional'] = array(
    '#type' => 'fieldset',
    '#title' => t('Additional settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
    '#weight' => 5,
  );

  $form['additional']['behavior'] = array(
    '#type' => 'radios',
    '#title' => t('First visit modal window'),
    '#description' => t('Select original welcome modal, MVPD Picker, or neither (no welcome modal) for new visitors.'),
    '#options' => array(
      TVE_AUTH2_BEHAVIOR_NONE => t('No Welcome Modal'),
      TVE_AUTH2_BEHAVIOR_ORIG => t('Launch Welcome Modal'),
      TVE_AUTH2_BEHAVIOR_AUTH => t('Launch MVPD Picker'),
    ),
    '#default_value' => $defaults['additional']['behavior'],
  );

  $form['additional']['error_configs'] = array(
    '#type' => 'fieldset',
    '#title' => t('Errors'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  // Add form inputs for each "error" type.
  $error_sections = array(
    'general' => t('General'),
    'flash' => t('Flash'),
    'adobepass' => t('Adobe Pass'),
    'macsafari' => t('Mac Safari'),
    'private_browsing' => t('Private Browsing'),
  );
  foreach ($error_sections as $section => $label) {
    _tve_auth2_error_form_section($form['additional']['error_configs'], $section, $defaults['additional']['error_configs'][$section], $label);
  }
}

/**
 * Prepares preview JS if required.
 *
 * @param array $form
 */
function _tve_auth2_modal_form_prepare_preview(&$form) {
  $preview_steps = array(
    'welcome_window_preview' => 1,
    'login_window_preview' => 2,
  );

  $preview_step = isset($_SESSION['tve_auth2_preview_step']) ?
    $_SESSION['tve_auth2_preview_step'] :
    NULL;

  unset($_SESSION['tve_auth2_preview_step']);

  if (isset($preview_steps[$preview_step])) {
    $preview_step = $preview_steps[$preview_step];

    global $base_path;

    $path = '';
    $options = array(
      'query' => array(
        'view_mode' => 'preview',
        'preview_step' => $preview_step,
      ),
    );

    drupal_alter('tve_auth2_preview_url', $path, $options);

    $preview_url = url($path, $options);

    drupal_add_js(
      array(
        'tve_auth2' => array(
          'preview_url' => $preview_url,
          'preview_step' => $preview_step,
        )
      ),
      'setting'
    );

    $form['#attached']['js'][] = drupal_get_path('module', 'tve_auth2') . '/js/tve_auth2.js';
  }
}

/**
 * Form submit callback for "Save" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth2_admin_form_submit_save($form, &$form_state) {
  _tve_auth2_modal_form_process_files($form_state['values']);
  _tve_auth2_save_variables($form_state['values'], TVE_AUTH2_PREFIX_DRAFT);

  drupal_set_message(t('TVE Auth configuration has been saved.'));
  $form_state['redirect'] = 'admin/tve/auth/auth-flow2';
}

/**
 * Form submit callback for "Cancel" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth2_admin_form_submit_cancel($form, &$form_state) {
  drupal_set_message(t('Auth Flow configuration changes has been canceled.'));
  $form_state['redirect'] = 'admin/tve/auth/auth-flow2';
}

/**
 * Form submit callback for "Publish" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth2_admin_form_submit_publish($form, &$form_state) {
  _tve_auth2_modal_form_process_files($form_state['values']);
  _tve_auth2_save_variables($form_state['values'], TVE_AUTH2_PREFIX_DRAFT);
  _tve_auth2_publish_variables();

  drupal_set_message(t('Auth Flow configuration has been published.'));
  $form_state['redirect'] = 'admin/tve/auth/auth-flow2';
}

/**
 * Form submit callback for "Reset To Published" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth2_admin_form_submit_reset($form, &$form_state) {
  _tve_auth2_delete_unpublished_files();
  _tve_auth2_reset_variables();

  drupal_set_message(t('Auth Flow configuration has been reset to published state.'));
  $form_state['redirect'] = 'admin/tve/auth/auth-flow2';
}

/**
 * Form submit callback for preview buttons.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth2_modal_form_preview($form, &$form_state) {
  _tve_auth2_modal_form_process_files($form_state['values']);
  _tve_auth2_save_variables($form_state['values'], TVE_AUTH2_PREFIX_DRAFT);

  $preview_step = $form_state['triggering_element']['#name'];
  $preview_name = $form_state['triggering_element']['#value'];

  $_SESSION['tve_auth2_preview_step'] = $preview_step;

  drupal_set_message(t('%preview_name should now open in a new tab.', array('%preview_name' => $preview_name)));
  $form_state['redirect'] = 'admin/tve/auth/auth-flow2';
}

/**
 * Finds and processes files from submitted values.
 *
 * @param array $values
 * @param string $var_name
 */
function _tve_auth2_modal_form_process_files(&$values, $var_name = '') {
  foreach ($values as $field => $value) {
    if (is_array($value)) {
      // Search for "fid" key recursively.
      _tve_auth2_modal_form_process_files($value, "{$var_name}_{$field}");
    }
    elseif ('fid' == $field) {
      // Process a file.
      _tve_auth2_modal_form_process_file($value, "{$var_name}_{$field}");
    }
  }
}

/**
 * Processes a submitted file.
 *
 * @param int $fid
 *  File id.
 * @param string $var_name
 *  Variable name.
 */
function _tve_auth2_modal_form_process_file($fid, $var_name) {
  if ($fid) {
    $file = file_load($fid);
    if ($file && $file->status == 0) {
      // Set correct status to a file.
      $file->status = FILE_STATUS_PERMANENT;
      file_save($file);
      // Add "usage" record to file_usage table.
      file_usage_add($file, 'tve_auth2', 'file', $fid);
      // Save fid value to variable.
      variable_set($var_name, $fid);
    }
  }
  else {
    // Load current fid value from variable before delete (disable) action.
    $fid_old = variable_get($var_name, 0);
    $file = file_load($fid_old);
    if ($file) {
      // "Disable" file and remove "usage" record from file_usage table.
      $file->status = 0;
      file_save($file);
      file_usage_delete($file, 'tve_auth2');
    }
  }
}

/**
 * Form build helper function.
 *
 * Builds a section of the "errors" form.
 *
 * @param array $form
 *   Form array.
 * @param string $section
 *   Form section name.
 * @param array $section_variables
 *   Form section variables such as section title, modal window header text and etc.
 */
function _tve_auth2_error_form_section(&$form, $section, $section_variables, $section_label) {
  // "Error" settings.
  $form[$section] = array(
    '#type' => 'fieldset',
    '#title' => $section_label,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form[$section]['title'] = array(
    '#type' => 'textfield',
    '#title' => t('Title'),
    '#description' => t('Primary text message at the top of the modal window.'),
    '#default_value' => $section_variables['title'],
    '#required' => TRUE,
  );

  $form[$section]['description'] = array(
    '#title' => t('Description'),
    '#type' => 'text_format',
    '#format' => (isset($section_variables['description']['format'])) ? $section_variables['description']['format'] : TVE_AUTH2_WISYWYG_FORMAT,
    '#rows' => 5,
    '#default_value' => $section_variables['description']['value'],
    '#description' => t('Descriptive text message about error.'),
  );
}

/**
 * Returns array of predefined CSS styles taken from theme settings.
 *
 * @return array
 */
function _tve_auth2_modal_text_styles() {
  $style_presets = theme_get_setting('tve_auth2_styles', variable_get('theme_default'));
  if (empty($style_presets)) {
    return array(
      'tve-auth2-default-style-1' => t('Default style #1'),
      'tve-auth2-default-style-2' => t('Default style #2'),
      'tve-auth2-default-style-3' => t('Default style #3'),
      'tve-auth2-default-style-4' => t('Default style #4'),
    );
  }

  return $style_presets;
}

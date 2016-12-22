<?php
/**
 * @file
 * Admin page callbacks for the TVE Auth module.
 *
 * @ingroup tve_auth
 */

/**
 * Form builder callback for "Auth Flow" settings form.
 */
function _tve_auth_admin_form($form, &$form_state) {
  // Draft values for all variables.
  $draft_variables = _tve_auth_get_draft_variables();
  // Published values for all variables.
  $published_variables = _tve_auth_get_published_variables();
  // Default values for all auth options.
  $defaults = _tve_auth_get_default_variables();
  if (!empty($draft_variables)) {
    // Override default values by draft ones.
    $defaults = array_merge($defaults, $draft_variables);
  }

  // Welcome modal.
  _tve_auth_modal_form_welcome_window($form, $defaults);
  // Login window - step #1.
  _tve_auth_modal_form_login_window_1($form, $defaults);
  // Login window - step #2.
  _tve_auth_modal_form_login_window_2($form, $defaults);
  // Login window - step #3.
  _tve_auth_modal_form_login_window_3($form, $defaults);
  // Login link image.
  _tve_auth_modal_form_login_link($form, $defaults);
  // Other auth settings.
  _tve_auth_modal_form_auth_flow($form, $defaults);

  if (empty($draft_variables)) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages error">' . TVE_AUTH_STATUS_NOT_SAVED . '</div>',
      '#weight' => -100,
    );
  }
  elseif (empty($published_variables)) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages error">' . TVE_AUTH_STATUS_NOT_PUBLISHED . '</div>',
      '#weight' => -100,
    );
  }
  elseif ($draft_variables == $published_variables) {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages status">' . TVE_AUTH_STATUS_EQUAL . '</div>',
      '#weight' => -100,
    );
  }
  else {
    $form['published_status_message'] = array(
      '#markup' => '<div class="messages warning">' . TVE_AUTH_STATUS_DIFFERENT . '</div>',
      '#weight' => -100,
    );

    $diff = _tve_auth_get_diff($draft_variables, $published_variables);
    $published_values = _tve_auth_get_diff_published_values($diff, $published_variables);

    _tve_auth_append_published_values_info_fieldsets($form, $published_values);
    _tve_auth_append_published_values_info_fields($form, $published_values);
  }

  $publish_button_disabled = empty($draft_variables) || $draft_variables == $published_variables;
  $reset_button_disabled = empty($published_variables) || $draft_variables == $published_variables;


  $form['save'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
    '#submit' => array('_tve_auth_admin_form_submit_save'),
    '#weight' => 10,
  );

  $form['cancel'] = array(
    '#type' => 'submit',
    '#value' => t('Cancel'),
    '#submit' => array('_tve_auth_admin_form_submit_cancel'),
    '#weight' => 20,
  );

  $form['publish'] = array(
    '#type' => 'submit',
    '#value' => t('Publish'),
    '#disabled' => $publish_button_disabled,
    '#submit' => array('_tve_auth_admin_form_submit_publish'),
    '#weight' => 30,
  );

  $form['reset'] = array(
    '#type' => 'submit',
    '#value' => t('Reset to Published'),
    '#disabled' => $reset_button_disabled,
    '#submit' => array('_tve_auth_admin_form_submit_reset'),
    '#weight' => 40,
  );

  _tve_auth_modal_form_prepare_preview($form);

  return $form;
}

/**
 * Form builder callback for "Welcome Window" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_welcome_window(&$form, $defaults) {
  $form['welcome_window'] = array(
    '#type' => 'fieldset',
    '#title' => t('Welcome window'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['welcome_window']['title'] = array(
    '#type' => 'textfield',
    '#title' => t('Welcome window title text'),
    '#description' => t('This text for the window title.'),
    '#default_value' => $defaults['welcome_window']['title'],
  );

  $form['welcome_window']['more_details_link_text'] = array(
    '#type' => 'textfield',
    '#title' => t('More details link text'),
    '#description' => t('This text is for more details link text.'),
    '#default_value' => $defaults['welcome_window']['more_details_link_text'],
  );

  $form['welcome_window']['block_1_image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the first block'),
    '#description' => t('Uploaded image will be used in the first block.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['welcome_window']['block_1_image']['fid'],
  );

  $form['welcome_window']['block_1_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Welcome window block text one'),
    '#description' => t('The first block of the text.'),
    '#rows' => 10,
    '#default_value' => $defaults['welcome_window']['block_1_text']['value'],
    '#format' => $defaults['welcome_window']['block_1_text']['format'],
  );

  $form['welcome_window']['block_2_image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the second block'),
    '#description' => t('Uploaded image will be used in the second block.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['welcome_window']['block_2_image']['fid'],
  );

  $form['welcome_window']['block_2_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Welcome window block text two'),
    '#description' => t('The second block of the text.'),
    '#rows' => 10,
    '#default_value' => $defaults['welcome_window']['block_2_text']['value'],
    '#format' => $defaults['welcome_window']['block_2_text']['format'],
  );

  $form['welcome_window']['block_3_image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the third block'),
    '#description' => t('Uploaded image will be used in the third block.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['welcome_window']['block_3_image']['fid'],
  );

  $form['welcome_window']['block_3_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Welcome window block text three'),
    '#description' => t('The third block of the text.'),
    '#rows' => 10,
    '#default_value' => $defaults['welcome_window']['block_3_text']['value'],
    '#format' => $defaults['welcome_window']['block_3_text']['format'],
  );

  $form['welcome_window']['start_button_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Start button text'),
    '#description' => t('Text for "Get Started" button.'),
    '#default_value' => $defaults['welcome_window']['start_button_text'],
  );

  $form['welcome_window']['big_image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the right side'),
    '#description' => t('Uploaded image will be used in the right part of the window.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['welcome_window']['big_image']['fid'],
  );

  $form['welcome_window']['footer_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Window footer text'),
    '#description' => t('This text is for window footer.'),
    '#default_value' => $defaults['welcome_window']['footer_text'],
  );

  $form['welcome_window']['footer_link_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Window footer link text'),
    '#description' => t('This text is for window footer link.'),
    '#default_value' => $defaults['welcome_window']['footer_link_text'],
  );

  $form['welcome_window']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'welcome_window_preview',
    '#value' => t('Preview "Welcome window"'),
    '#submit' => array('_tve_auth_modal_form_preview'),
  );
}

/**
 * Form builder callback for "Login Window One" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_login_window_1(&$form, $defaults) {
  $form['login_window_1'] = array(
    '#type' => 'fieldset',
    '#title' => t('Login window step 1'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['login_window_1']['image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the first step of authentication'),
    '#description' => t('The first image in window header.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_1']['image']['fid'],
  );

  $form['login_window_1']['left_block_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Login window left block'),
    '#description' => t('Template for the left block of login window.'),
    '#rows' => 10,
    '#default_value' => $defaults['login_window_1']['left_block_text']['value'],
    '#format' => $defaults['login_window_1']['left_block_text']['format'],
  );

  $form['login_window_1']['right_block_header_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Right block header text'),
    '#description' => t('This is the right block header text.'),
    '#default_value' => $defaults['login_window_1']['right_block_header_text']['value'],
    '#format' => $defaults['login_window_1']['right_block_header_text']['format'],
  );

  $form['login_window_1']['footer_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Window footer text'),
    '#description' => t('This text for window footer text.'),
    '#default_value' => $defaults['login_window_1']['footer_text'],
  );

  $form['login_window_1']['footer_link_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Window footer link text'),
    '#description' => t('This text for window footer link.'),
    '#default_value' => $defaults['login_window_1']['footer_link_text'],
  );

  $form['login_window_1']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'login_window_1_preview',
    '#value' => t('Preview "Login window step 1"'),
    '#submit' => array('_tve_auth_modal_form_preview'),
  );
}

/**
 * Form builder callback for "Login Window Two" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_login_window_2(&$form, $defaults) {
  $form['login_window_2'] = array(
    '#type' => 'fieldset',
    '#title' => t('Login window step 2'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['login_window_2']['image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the second step of authentication'),
    '#description' => t('The second image in window header.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_2']['image']['fid'],
  );

  $form['login_window_2']['left_block_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Login window left block text'),
    '#description' => t('Template for the left block of login window.'),
    '#rows' => 10,
    '#default_value' => $defaults['login_window_2']['left_block_text']['value'],
    '#format' => $defaults['login_window_2']['left_block_text']['format'],
  );

  $form['login_window_2']['footer_link_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Footer link text'),
    '#description' => t('This text for window footer link.'),
    '#default_value' => $defaults['login_window_2']['footer_link_text'],
  );

  $form['login_window_2']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'login_window_2_preview',
    '#value' => t('Preview "Login window step 2"'),
    '#submit' => array('_tve_auth_modal_form_preview'),
  );
}

/**
 * Form builder callback for "Login Window Three" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_login_window_3(&$form, $defaults) {
  $form['login_window_3'] = array(
    '#type' => 'fieldset',
    '#title' => t('Login window step 3'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['login_window_3']['image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image for the third step of authentication'),
    '#description' => t('The third image in window header.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_3']['image']['fid'],
  );

  $form['login_window_3']['image_left']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Big image for the left side'),
    '#description' => t('Big image for the left side of step three window.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_3']['image_left']['fid'],
  );

  $form['login_window_3']['title'] = array(
    '#type' => 'textfield',
    '#title' => t('Title text'),
    '#description' => t('This text for the title on right side.'),
    '#default_value' => $defaults['login_window_3']['title'],
  );

  $form['login_window_3']['start_button_text'] = array(
    '#type' => 'textfield',
    '#title' => t('"Start Watching" button text'),
    '#description' => t('Text for "Start Watching" button.'),
    '#default_value' => $defaults['login_window_3']['start_button_text'],
  );

  $form['login_window_3']['mobile_apps_text'] = array(
    '#type' => 'textfield',
    '#title' => t('"Mobile Apps" text'),
    '#description' => t('Description of mobile apps.'),
    '#default_value' => $defaults['login_window_3']['mobile_apps_text'],
  );

  $form['login_window_3']['image_store_1']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('First store image'),
    '#description' => t('Image for the first app store (default: Apple Apps Store).'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_3']['image_store_1']['fid'],
  );

  $form['login_window_3']['image_store_2']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Second store image'),
    '#description' => t('Image for the second app store (default: Google Play Store).'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://modal_windows/',
    '#default_value' => $defaults['login_window_3']['image_store_2']['fid'],
  );

  $form['login_window_3']['preview'] = array(
    '#type' => 'submit',
    '#name' => 'login_window_3_preview',
    '#value' => t('Preview "Login window step 3"'),
    '#submit' => array('_tve_auth_modal_form_preview'),
  );
}

/**
 * Form builder callback for "Login Link" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_login_link(&$form, $defaults) {
  $form['login_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Sign In Auth Image'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['login_link']['image']['fid'] = array(
    '#type' => 'managed_file',
    '#title' => t('Sign In Auth Image'),
    '#description' => t('Image for the Login link.'),
    '#progress_indicator' => 'bar',
    '#upload_location' => 'public://login/',
    '#default_value' => $defaults['login_link']['image']['fid'],
  );
}

/**
 * Form builder callback for "Auth Flow" settings.
 *
 * @param array $form
 * @param array $defaults
 */
function _tve_auth_modal_form_auth_flow(&$form, $defaults) {
  $form['auth_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Authentication settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['auth_settings']['auth_flow'] = array(
    '#type' => 'radios',
    '#title' => t('Selection of Authentication Flow'),
    '#description' => t('Choose between IDX registration (using SURF) or the simple MVPD only authentication flow.'),
    '#options' => array(
      TVE_AUTH_AUTH_FLOW_WITH_IDX => t('Stepped Authentication Flow (includes IDX registration using SURF)'),
      TVE_AUTH_AUTH_FLOW_WITHOUT_IDX => t('MVPD only'),
    ),
    '#default_value' => $defaults['auth_settings']['auth_flow'],
    '#disabled' => !tve_auth_is_user_allowed_to_configure_auth_flow(),
  );

  $form['welcome_modal'] = array(
    '#type' => 'fieldset',
    '#title' => t('Welcome modal window settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#tree' => TRUE,
  );

  $form['welcome_modal']['variant'] = array(
    '#type' => 'radios',
    '#title' => t('Selection of Welcome Modal'),
    '#description' => t('Select the Original Welcome Modal for new users, Step 1 of the authentication flow, or neither.'),
    '#options' => array(
      'none' => t('None'),
      TVE_AUTH_WELCOME_WINDOW_ORIGINAL_TYPE => t('Original Welcome Modal for new users'),
      TVE_AUTH_WELCOME_WINDOW_AUTH_TYPE => t('Step 1 of the authentication flow'),
    ),
    '#default_value' => $defaults['welcome_modal']['variant'],
  );
}

/**
 * Prepares preview js if required.
 *
 * @param array $form
 */
function _tve_auth_modal_form_prepare_preview(&$form) {
  $preview_steps = array(
    'welcome_window_preview' => 1,
    'login_window_1_preview' => 2,
    'login_window_2_preview' => 3,
    'login_window_3_preview' => 4,
  );

  $preview_step = isset($_SESSION['tve_auth_preview_step']) ?
    $_SESSION['tve_auth_preview_step'] :
    NULL;

  unset($_SESSION['tve_auth_preview_step']);

  if (isset($preview_steps[$preview_step])) {
    $preview_step = $preview_steps[$preview_step];

    global $base_path;

    $url = url('', array(
      'query' => array(
        'view_mode' => 'preview',
        'preview_step' => $preview_step,
      ),
    ));

    $preview_url = $base_path . '#' . $url;

    drupal_add_js(
      array(
        'tveAdminUIPrevieRedirect' => $preview_url,
        'tveAdminUIPreviewStep' => $preview_step,
      ),
      'setting'
    );

    $form['#attached']['js'][] = drupal_get_path('module', 'tve_auth') . '/js/tve_auth_preview_redirect.js';
  }
}

/**
 * Form submit callback for "Save" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth_admin_form_submit_save($form, &$form_state) {
  _tve_auth_modal_form_process_files($form_state['values']);
  _tve_auth_save_variables($form_state['values'], TVE_AUTH_PREFIX_DRAFT);

  drupal_set_message(t('Auth Flow configuration has been saved.'));
  $form_state['redirect'] = 'admin/tve/modal-windows';
}

/**
 * Form submit callback for "Cancel" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth_admin_form_submit_cancel($form, &$form_state) {
  drupal_set_message(t('Auth Flow configuration changes has been canceled.'));
  $form_state['redirect'] = 'admin/tve/modal-windows';
}

/**
 * Form submit callback for "Publish" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth_admin_form_submit_publish($form, &$form_state) {
  _tve_auth_modal_form_process_files($form_state['values']);
  _tve_auth_save_variables($form_state['values'], TVE_AUTH_PREFIX_DRAFT);
  _tve_auth_publish_variables();

  drupal_set_message(t('Auth Flow configuration has been published.'));
  $form_state['redirect'] = 'admin/tve/modal-windows';
}

/**
 * Form submit callback for "Reset To Published" button.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth_admin_form_submit_reset($form, &$form_state) {
  _tve_auth_delete_unpublished_files();
  _tve_auth_reset_variables();

  drupal_set_message(t('Auth Flow configuration has been reset to published state.'));
  $form_state['redirect'] = 'admin/tve/modal-windows';
}

/**
 * Form submit callback for preview buttons.
 *
 * @param array $form
 * @param array $form_state
 */
function _tve_auth_modal_form_preview($form, &$form_state) {
  _tve_auth_modal_form_process_files($form_state['values']);
  _tve_auth_save_variables($form_state['values'], TVE_AUTH_PREFIX_DRAFT);

  $preview_step = $form_state['triggering_element']['#name'];
  $preview_name = $form_state['triggering_element']['#value'];

  $_SESSION['tve_auth_preview_step'] = $preview_step;

  drupal_set_message(t('%preview_name should now open in a new tab.', array('%preview_name' => $preview_name)));
  $form_state['redirect'] = 'admin/tve/modal-windows';
}

/**
 * Finds and processes files from submitted values.
 *
 * @param array $values
 * @param string $var_name
 */
function _tve_auth_modal_form_process_files(&$values, $var_name = '') {
  foreach ($values as $field => $value) {
    if (is_array($value)) {
      _tve_auth_modal_form_process_files($value, "{$var_name}_{$field}");
    }
    elseif ('fid' == $field) {
      _tve_auth_modal_form_process_file($value, "{$var_name}_{$field}");
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
function _tve_auth_modal_form_process_file($fid, $var_name) {
  if ($fid) {
    $file = file_load($fid);
    if ($file && $file->status == 0) {
      // Set correct status to a file.
      $file->status = FILE_STATUS_PERMANENT;
      file_save($file);
      // Add "usage" record to file_usage table.
      file_usage_add($file, 'tve_auth', 'file', $fid);
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
      file_usage_delete($file, 'tve_auth');
    }
  }
}

/**
 * Form builder for errors pages.
 *
 * Adds form settings for errors modal windows.
 */
function _tve_auth_errors_modal_windows_admin_form($form, &$form_state) {
  // Adobe Pass/Flash/Generic errors settings - error/notice messages.
  $errors_defaults = array(
    'generic_section' => array(
      'title' => t('Generic Errors'),
      'header_title' => variable_get('tve_auth_generic_section_header_title', TVE_AUTH_GENERIC_ERROR_HEADER),
      'body_text' => variable_get('tve_auth_generic_section_body_text', array('value' => TVE_AUTH_GENERIC_ERROR_TEXT)),
    ),
    'flash' => array(
      'title' => t('Flash Errors'),
      'header_title' => variable_get('tve_auth_flash_header_title', TVE_AUTH_FLASH_HEADER_TITLE),
      'body_text' => variable_get('tve_auth_flash_body_text', array('value' => TVE_AUTH_FLASH_BODY_TEXT)),
      'error_image' => variable_get('tve_auth_flash_error_image', TVE_AUTH_FLASH_ERROR_IMAGE),
    ),
    'adobe_pass' => array(
      'title' => t('Adobe Pass Errors'),
      'header_title' => variable_get('tve_auth_adobe_pass_header_title', TVE_AUTH_FLASH_HEADER_TITLE),
      'body_text' => variable_get('tve_auth_adobe_pass_body_text', array('value' => TVE_AUTH_FLASH_BODY_TEXT)),
      'error_image' => variable_get('tve_auth_adobe_pass_error_image', TVE_AUTH_ADOBE_ERROR_IMAGE),
    ),
  );

  // Add form by error type.
  foreach ($errors_defaults as $error_type => $error_values) {
    _tve_auth_error_form_section($form, $error_type, $error_values);
  }

  return system_settings_form($form);
}

/**
 * Form build helper function.
 *
 * Builds a section of the errors form.
 *
 * @param array $form
 *   Form array.
 * @param string $section
 *   Form section name.
 * @param array $section_variables
 *   Form section variables such as section title, modal window header text and etc.
 */
function _tve_auth_error_form_section(&$form, $section, $section_variables) {
  // Error settings.
  $form[$section] = array(
    '#type' => 'fieldset',
    '#title' => $section_variables['title'],
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#required' => TRUE,
  );

  $form[$section]['tve_auth_' . $section . '_header_title'] = array(
    '#type' => 'textfield',
    '#title' => t('Error header title'),
    '#description' => t("Fill a text of a header title."),
    '#default_value' => $section_variables['header_title'],
  );

  $form[$section]['tve_auth_' . $section . '_body_text'] = array(
    '#type' => 'text_format',
    '#base_type' => 'textarea',
    '#title' => t('Error body'),
    '#description' => t('The body text of the error message.'),
    '#rows' => 15,
    '#default_value' => $section_variables['body_text']['value'],
    '#required' => TRUE,
    '#format' => TVE_AUTH_WISYWYG_FORMAT,
  );

  if (isset($section_variables['error_image'])) {
    $form[$section]['tve_auth_' . $section . '_error_image'] = array(
      '#type' => 'managed_file',
      '#title' => t('Window image'),
      '#description' => t('This image will be used for decoration image in the modal window. The image size should be !image_dimension pixels. Valid file extensions gif, jpg, jpeg, png',
        array('!image_dimension' => TVE_AUTH_IMAGE_DIMENSION)
      ),
      '#progress_indicator' => 'bar',
      '#upload_location' => 'public://modal_windows/',
      '#default_value' => $section_variables['error_image'],
      '#upload_validators' => array(
        'file_validate_extensions' => array('gif jpg jpeg png'),
        'file_validate_image_resolution' => array(
          0,
          TVE_AUTH_IMAGE_DIMENSION
        ),
      ),
    );
  }

}

/**
 * Page callback function for errors windows.
 *
 * @param string $type
 *   Type of an error.
 *
 * @return array
 */
function _tve_auth_error_modal_page_callback($type) {
  switch ($type) {
    case 'flash':
      $fid = variable_get('tve_auth_flash_error_image', TVE_AUTH_FLASH_ERROR_IMAGE);
      $vars = array(
        'header_title' => variable_get('tve_auth_flash_header_title', TVE_AUTH_FLASH_HEADER_TITLE),
        'body_text' => variable_get('tve_auth_flash_body_text', array('value' => TVE_AUTH_FLASH_BODY_TEXT)),
        'error_image' => _tve_auth_get_error_image_url($fid),
      );
      break;

    case 'adobe':
      $fid = variable_get('tve_auth_adobe_pass_error_image', TVE_AUTH_ADOBE_ERROR_IMAGE);
      $vars = array(
        'header_title' => variable_get('tve_auth_adobe_pass_header_title', TVE_AUTH_ADOBE_HEADER_TITLE),
        'body_text' => variable_get('tve_auth_adobe_pass_body_text', array('value' => TVE_AUTH_ADOBE_BODY_TEXT)),
        'error_image' => _tve_auth_get_error_image_url($fid),
      );
      break;

    case 'general':
      $vars = array(
        'header_title' => variable_get('tve_auth_generic_section_header_title', TVE_AUTH_GENERIC_ERROR_HEADER),
        'body_text' => variable_get('tve_auth_generic_section_body_text', array('value' => TVE_AUTH_GENERIC_ERROR_TEXT)),
      );
      break;

    default:
      $vars = array();
      break;
  }

  return $vars;
}

/**
 * Saves image files for adobe pass and flash errors.
 *
 * @param $form
 * @param $form_state
 */
function _tve_auth_errors_modal_windows_admin_form_submit($form, &$form_state) {
  _tve_auth_modal_form_process_file($form_state['values']['tve_auth_adobe_pass_error_image'], 'tve_auth_adobe_pass_error_image');
  _tve_auth_modal_form_process_file($form_state['values']['tve_auth_flash_error_image'], 'tve_auth_flash_error_image');
}

/**
 * Returns url string if file exists by file's fid.
 *
 * @param int $fid
 *
 * @return string
 */
function _tve_auth_get_error_image_url($fid) {
  if (!$fid) {
    return '';
  }

  $file = file_load($fid);
  if ($file) {
    return file_create_url($file->uri);
  }

  return '';
}

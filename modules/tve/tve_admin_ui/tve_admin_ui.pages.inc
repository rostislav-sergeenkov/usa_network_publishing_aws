<?php

/**
 * @file
 * Page callbacks for the TVE Admin UI module.
 *
 * @ingroup tve_admin_ui
 */

/**
 * Page callback for TVE Admin UI section.
 *
 * @param string $section
 *   unique section id
 *
 * @return array
 *   array of form elements
 */
function _tve_admin_ui_section_callback($section) {
  // Get all admin UI sections (invokes).
  $admin_sections = _tve_admin_ui_admin_sections();
  if (empty($admin_sections[$section])) {
    // Section not found.
    return;
  }
  $info = $admin_sections[$section];
  // Prepare invoked info array.
  _tve_admin_ui_prepare_info($info, $section);
  // Set title according to a "title" value.
  drupal_set_title($info['title']);
  $form = array();
  // Invoke form builder callback.
  if (isset($info['form callback']) && function_exists($info['form callback'])) {
    // Get stored setting values from DB
    $defaults = _tve_admin_ui_variables_get($info);
    $form = drupal_get_form('_tve_admin_ui_section_form', $defaults, $info);
  }

  return $form;
}

/**
 * Admin UI form builder.
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 * @param array $defaults
 *   variable values taken from database before being updated
 * @param array $info
 *   array of section settings (form callbacks etc.)
 *
 * @return array
 */
function _tve_admin_ui_section_form($form, &$form_state, $defaults, $info) {
  if (!function_exists($info['form callback'])) {
    // Include all my_module.tve_admin_ui_info.inc files if form callback not
    // found due to AJAX usage.
    // Required for form elements with AJAX support.
    foreach (module_implements('tve_admin_ui_info') as $module) {
      module_load_include('inc', $module, $module . '.tve_admin_ui');
      if (function_exists($info['form callback'])) {
        break;
      }
    }
  }
  // "Invoke" form callback function.
  $form = call_user_func_array($info['form callback'], array($form, &$form_state, $defaults));

  // Add submit handler callbacks
  $form['#submit'] = array();
  // Custom form submit function.
  if (isset($info['form submit callback']) && function_exists($info['form submit callback'])) {
    $form['#submit'][] = $info['form submit callback'];
  }
  // Admin UI form submit callback function.
  $form['#submit'][] = '_tve_admin_ui_section_form_submit';
  // Post submit callback executes at the latest phase of form processing.
  if (isset($info['form post submit callback']) && function_exists($info['form post submit callback'])) {
    $form['#submit'][] = $info['form post submit callback'];
  }

  // Add validate handler callbacks
  $form['#validate'] = array();
  // Custom form validate callback.
  if (isset($info['form validate callback']) && function_exists($info['form validate callback'])) {
    $form['#validate'][] = $info['form validate callback'];
  }

  // Section info (added for reference).
  $form['#admin_ui'] = $info;

  if (empty($info['no submit'])) {
    // Submit button ("Save").
    $form['submit'] = array(
      '#type' => 'submit',
      '#name' => 'save',
      '#value' => t('Save'),
    );
  }

  return $form;
}

/**
 * Submit handler for section settings form.
 * Called after $info['form submit callback'] callback function but before
 * $info['form post submit callback'].
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 */
function _tve_admin_ui_section_form_submit($form, &$form_state) {
  // Section info.
  $info = $form['#admin_ui'];
  // Prepare values before saving to database.
  $values = _tve_admin_ui_prepare_values($form_state);
  // Save data to variables table with prefixed keys.
  foreach ($values as $key => $value) {
    _tve_admin_ui_variable_set($key, $value, $info['variable prefix']);
  }
  // Render "success" message to a user.
  drupal_set_message(t('%section configuration has been updated.', array('%section' => $info['title'])));
}

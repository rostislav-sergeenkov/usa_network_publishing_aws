<?php
/**
 * @file
 * file for tve_admin_ui module
 *
 * help generate tve errors page
 */

/**
 * Implements hook_tve_admin_ui_info().
 */
function tve_errors_tve_admin_ui_info() {
  $sections = array(
    'errors' => array(
      'path' => 'tve/errors',
      'title' => t('Errors'),
      'description' => t('TVE Errors windows settings'),
      'weight' => 21,
      'form callback' => '_tve_errors_settings_form',
      'form submit callback' => '_tve_errors_settings_form_submit',
      'variable prefix' => TVE_ERRORS_VARIABLE_PREFIX,
      'variables' => array(
        'flash_section' => array(
          'header_title' => "Oops! Your device isn't currently configured to play our videos.",
          'body_text' => array(
            'value' => 'Our native app is coming soon.',
            'format' => 'wysiwyg_full',
          ),
          'error_image' => array('fid' => 0),
        ),
        'adobe_section' => array(
          'header_title' => "Sorry! There's a problem.",
          'body_text' => array(
            'value' => 'Sorry about that! The login is not available now. Please try again later.',
            'format' => 'wysiwyg_full',
          ),
          'error_image' => array('fid' => 0),
        ),
      ),
    )
  );

  return $sections;
}

/**
 * Form submit callback for errors section.
 * All variables will be saved after.
 * So any changes to form_state['values'] are acceptable.
 * Saving process is handled by tve_admin_ui module.
 *
 * @param array $form
 *   A form array.
 * @param array $form_state
 *   A form state array.
 */
function _tve_errors_settings_form_submit($form, &$form_state) {

  foreach ($form_state['values'] as $field => $value) {
    if (is_array($value)) {
      foreach ($value as $key => $val) {
        $form_state['values'][$field][$key]
          = _tve_admin_ui_image_helper($key, $val, $field, TVE_ERRORS_VARIABLE_PREFIX, TVE_ERRORS_IMAGE_DIMENSION);
      }
    }
    else {
      $form_state['values'][$field]
        = _tve_admin_ui_image_helper($field, $value, NULL, TVE_ERRORS_VARIABLE_PREFIX, TVE_ERRORS_IMAGE_DIMENSION);
    }
  }
}

/**
 * Form builder callback for errors section.
 *
 * @param array $form
 *   A form array.
 * @param array $form_state
 *   A form state array.
 * @param array $defaults
 *   Variable values taken from database before being updated.
 *
 * @return array $form
 */
function _tve_errors_settings_form($form, &$form_state, $defaults) {

  $error_types = array(
    'flash_section' => t('Flash Errors'),
    'adobe_section' => t('Adobe Pass Errors'),
  );
  // Add form by error type.
  foreach ($error_types as $error_type => $error_title) {
    _tve_errors_custom_error_form($form, $defaults, $error_type, $error_title);
  }
  return $form;
}

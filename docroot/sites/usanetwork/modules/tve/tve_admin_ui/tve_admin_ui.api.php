<?php

/**
 * @file
 * Hooks and helpers provided by the TVE Admin UI.
 *
 * @ingroup tve_admin_ui
 */

/**
 * Determines admin ui sections: pages, forms and form callbacks.
 *
 * @return
 *   An array whose keys are sections (actually separate pages) and values are
 *   configs for these pages.
 */
function hook_tve_admin_ui_info() {
  $sections = array(
    'section1' => array(
      'path' => 'page1',
      'title' => 'Section #1',
      'description' => t('Example settings section named #1'),
      'weight' => 0,
      // Declare all variables and its default values explicitly.
      'variables' => array(
        'text1' => NULL,
        'text2' => 'default text',
      ),
      // Prefix will be added automatically for all variables.
      // So text1 turns to test_text1 in "variable" table.
      // Omit this option if prefix not needed.
      'variable prefix' => 'test_',
      'form callback' => '_mymodule_sample_form',
      'form validate callback' => '_mymodule_sample_form_validate',
      'form submit callback' => '_mymodule_sample_form_submit',
      // Post submit callback executes at the latest phase of form processing.
      // Helps to trigger such final operations as clearing cache, menu rebuild.
      'form post submit callback' => '_mymodule_sample_form__post_submit',
      // Set "no submit" value to omit default sumbit button ("Save").
      'no submit' => FALSE,
      // Includes for specific module's files.
      // Helpful if "form callback" (or validate/submit) callback function
      // located outside my_module_name.tve_admin_ui.inc file.
      'includes' => array(
        'my_module_name' => 'myfile.test.inc',
      ),

    )
  );

  return $sections;
}

/**
 * Form builder callback.
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 * @param array $defaults
 *   variable values taken from database before being updated
 *
 * @return form array
 */
function _mymodule_sample_form($form, &$form_state, $defaults) {
  $form['text1'] = array(
    '#title' => t('Text #1'),
    '#type' => 'textfield',
    '#default_value' => $defaults['text1'],
  );
  $form['text2'] = array(
    '#title' => t('Text #2'),
    '#type' => 'textfield',
    '#default_value' => $defaults['text2'],
  );

  return $form;
}

/**
 * Form validate callback.
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 */
function _mymodule_sample_form_validate($form, &$form_state) {
  if ($form_state['values']['text1'] == 'error') {
    form_set_error('text1', t('Invalid value!'));
  }
}

/**
 * Form submit callback.
 * All variables will be saved after.
 * So any changes to form_state['values'] are acceptable.
 * Saving process is handled by tve_admin_ui module.
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 */
function _mymodule_sample_form_submit($form, &$form_state) {
  $form_state['values']['text2'] .= t(' (second update)');
}

/**
 * Alters admin ui form.
 * Use hook_form_FORM_ID_alter standard hook, where FORM_ID
 * is "_tve_admin_ui_section_form"
 *
 * @param array $form
 *   form array
 * @param array $form_state
 *   form state array
 * @param array $defaults
 *   variable values taken from database before being updated
 */
function hook_form_tve_admin_ui_section_form_alter(&$form, &$form_state, $defaults) {
  $form_state['values']['text2'] .= t(', (first update)');
}

/*
 * Get value for saved property "border_size" declared by some module.
 *
 * Simple usage
 *  $border_size = _tve_admin_ui_variable_get('border_size');
 *
 * With default value provided
 *  $border_size = _tve_admin_ui_variable_get('border_size', '1px');
 *
 * With variable prefix
 *  $border_size = _tve_admin_ui_variable_get('border_size', '1px', 'prefix_');
 *
 */

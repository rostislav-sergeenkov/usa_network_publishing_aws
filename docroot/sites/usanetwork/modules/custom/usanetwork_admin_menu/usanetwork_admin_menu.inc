<?php

/**
 *  Confirmation form for disabling development modules.
 */
function usanetwork_admin_menu_toggle_modules($form, &$form_state) {
  if (!isset($_GET['token']) || !drupal_valid_token($_GET['token'], current_path())) {
    return MENU_ACCESS_DENIED;
  }

  $saved_state = variable_get('admin_menu_devel_modules_enabled', NULL);

  if (isset($saved_state)) {
    $action = t('enable');
  }
  else {
    $action = t('disbale');
  }

  return confirm_form(
    $form,
    t('Are you sure you want to !action development modules?', array('!action' => $action)),
    '<front>'
  );
}

/**
 * Submit handler for usanetwork_admin_menu_toggle_modules.
 */
function usanetwork_admin_menu_toggle_modules_submit($form, &$form_state) {
  module_load_include('inc', 'admin_menu', 'admin_menu');
  admin_menu_toggle_modules();
}

<?php
/**
 * @file
 * usanetwork_webform.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function usanetwork_webform_user_default_permissions() {
  $permissions = array();

  // Exported permission: skip CAPTCHA.
  $permissions['skip CAPTCHA'] = array(
    'name' => 'skip CAPTCHA',
    'roles' => array(
      'administrator' => 'administrator',
      'authenticated user' => 'authenticated user',
      'contributor' => 'contributor',
      'editor' => 'editor',
      'moderator' => 'moderator',
      'previewer' => 'previewer',
    ),
    'module' => 'captcha',
  );

  return $permissions;
}

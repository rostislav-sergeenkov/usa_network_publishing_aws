<?php
/**
 * @file
 * usanetwork_instagram.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function usanetwork_instagram_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'use text format wysiwyg_social'.
  $permissions['use text format wysiwyg_social'] = array(
    'name' => 'use text format wysiwyg_social',
    'roles' => array(
      'administrator' => 'administrator',
      'contributor' => 'contributor',
      'editor' => 'editor',
      'moderator' => 'moderator',
      'previewer' => 'previewer',
    ),
    'module' => 'filter',
  );

  return $permissions;
}

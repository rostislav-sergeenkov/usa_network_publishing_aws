<?php
/**
 * @file
 * usanetwork_mpx_video.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function usanetwork_mpx_video_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'edit any video_mpx_queue queue'.
  $permissions['edit any video_mpx_queue queue'] = array(
    'name' => 'edit any video_mpx_queue queue',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'queues',
  );

  return $permissions;
}

<?php
/**
 * @file
 * usanetwork_user_permissions.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function usanetwork_user_permissions_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'access draggableviews'.
  $permissions['access draggableviews'] = array(
    'name' => 'access draggableviews',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'draggableviews',
  );

  // Exported permission: 'administer SiteCatalyst configuration'.
  $permissions['administer SiteCatalyst configuration'] = array(
    'name' => 'administer SiteCatalyst configuration',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'sitecatalyst',
  );

  // Exported permission: 'administer usanetwork'.
  $permissions['administer usanetwork'] = array(
    'name' => 'administer usanetwork',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'usanetwork',
  );

  // Exported permission: 'administer usanetwork dart settings'.
  $permissions['administer usanetwork dart settings'] = array(
    'name' => 'administer usanetwork dart settings',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'usanetwork_ads',
  );

  // Exported permission: 'create media_gallery content'.
  $permissions['create media_gallery content'] = array(
    'name' => 'create media_gallery content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create person content'.
  $permissions['create person content'] = array(
    'name' => 'create person content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create tv_episode content'.
  $permissions['create tv_episode content'] = array(
    'name' => 'create tv_episode content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create tv_season content'.
  $permissions['create tv_season content'] = array(
    'name' => 'create tv_season content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create tv_show content'.
  $permissions['create tv_show content'] = array(
    'name' => 'create tv_show content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create usa_homepage content'.
  $permissions['create usa_homepage content'] = array(
    'name' => 'create usa_homepage content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create usanetwork_aspot content'.
  $permissions['create usanetwork_aspot content'] = array(
    'name' => 'create usanetwork_aspot content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create usanetwork_promo content'.
  $permissions['create usanetwork_promo content'] = array(
    'name' => 'create usanetwork_promo content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create usanetwork_static_page content'.
  $permissions['create usanetwork_static_page content'] = array(
    'name' => 'create usanetwork_static_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any usa_homepage content'.
  $permissions['delete any usa_homepage content'] = array(
    'name' => 'delete any usa_homepage content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own media_gallery content'.
  $permissions['delete own media_gallery content'] = array(
    'name' => 'delete own media_gallery content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own person content'.
  $permissions['delete own person content'] = array(
    'name' => 'delete own person content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own tv_episode content'.
  $permissions['delete own tv_episode content'] = array(
    'name' => 'delete own tv_episode content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own tv_season content'.
  $permissions['delete own tv_season content'] = array(
    'name' => 'delete own tv_season content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own tv_show content'.
  $permissions['delete own tv_show content'] = array(
    'name' => 'delete own tv_show content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own usa_homepage content'.
  $permissions['delete own usa_homepage content'] = array(
    'name' => 'delete own usa_homepage content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own usanetwork_aspot content'.
  $permissions['delete own usanetwork_aspot content'] = array(
    'name' => 'delete own usanetwork_aspot content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own usanetwork_promo content'.
  $permissions['delete own usanetwork_promo content'] = array(
    'name' => 'delete own usanetwork_promo content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own usanetwork_static_page content'.
  $permissions['delete own usanetwork_static_page content'] = array(
    'name' => 'delete own usanetwork_static_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any usa_homepage content'.
  $permissions['edit any usa_homepage content'] = array(
    'name' => 'edit any usa_homepage content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own media_gallery content'.
  $permissions['edit own media_gallery content'] = array(
    'name' => 'edit own media_gallery content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own person content'.
  $permissions['edit own person content'] = array(
    'name' => 'edit own person content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own tv_episode content'.
  $permissions['edit own tv_episode content'] = array(
    'name' => 'edit own tv_episode content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own tv_season content'.
  $permissions['edit own tv_season content'] = array(
    'name' => 'edit own tv_season content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own tv_show content'.
  $permissions['edit own tv_show content'] = array(
    'name' => 'edit own tv_show content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own usa_homepage content'.
  $permissions['edit own usa_homepage content'] = array(
    'name' => 'edit own usa_homepage content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own usanetwork_aspot content'.
  $permissions['edit own usanetwork_aspot content'] = array(
    'name' => 'edit own usanetwork_aspot content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own usanetwork_promo content'.
  $permissions['edit own usanetwork_promo content'] = array(
    'name' => 'edit own usanetwork_promo content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own usanetwork_static_page content'.
  $permissions['edit own usanetwork_static_page content'] = array(
    'name' => 'edit own usanetwork_static_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'post comments'.
  $permissions['post comments'] = array(
    'name' => 'post comments',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
    ),
    'module' => 'comment',
  );

  // Exported permission: 'use add another'.
  $permissions['use add another'] = array(
    'name' => 'use add another',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'addanother',
  );

  // Exported permission: 'view the administration theme'.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      'administrator' => 'administrator',
      'editor' => 'editor',
    ),
    'module' => 'system',
  );

  return $permissions;
}

<?php
/**
 * @file
 * tve_auth.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function tve_auth_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'imce_profiles';
  $strongarm->value = array(
    1 => array(
      'name' => 'Superadmin Profile',
      'usertab' => 0,
      'filesize' => '0',
      'quota' => '0',
      'tuquota' => '0',
      'extensions' => '*',
      'dimensions' => '1200x1200',
      'filenum' => '0',
      'directories' => array(
        0 => array(
          'name' => 'imce_images/%uid',
          'subnav' => 1,
          'browse' => 1,
          'upload' => 1,
          'thumb' => 1,
          'delete' => 1,
          'resize' => 1,
        ),
      ),
      'thumbnails' => array(
        0 => array(
          'name' => 'Tiny',
          'dimensions' => '90x90',
          'prefix' => 'tiny_',
          'suffix' => '',
        ),
        1 => array(
          'name' => 'Small',
          'dimensions' => '120x120',
          'prefix' => 'small_',
          'suffix' => '',
        ),
        2 => array(
          'name' => 'Medium',
          'dimensions' => '180x180',
          'prefix' => 'medium_',
          'suffix' => '',
        ),
        3 => array(
          'name' => 'Large',
          'dimensions' => '240x240',
          'prefix' => 'large_',
          'suffix' => '',
        ),
        4 => array(
          'name' => 'XLarge',
          'dimensions' => '320x320',
          'prefix' => 'xlarge_',
          'suffix' => '',
        ),
      ),
    ),
    2 => array(
      'name' => 'TVE IMCE Profile',
      'usertab' => 0,
      'filesize' => '0',
      'quota' => '0',
      'tuquota' => '0',
      'extensions' => 'gif png jpg jpeg',
      'dimensions' => '1800x1800',
      'filenum' => '0',
      'directories' => array(
        0 => array(
          'name' => 'imce_images/%uid',
          'subnav' => 0,
          'browse' => 1,
          'upload' => 1,
          'thumb' => 1,
          'delete' => 1,
          'resize' => 1,
        ),
      ),
      'thumbnails' => array(
        0 => array(
          'name' => 'Small',
          'dimensions' => '90x90',
          'prefix' => 'small_',
          'suffix' => '',
        ),
        1 => array(
          'name' => 'Medium',
          'dimensions' => '120x120',
          'prefix' => 'medium_',
          'suffix' => '',
        ),
        2 => array(
          'name' => 'Large',
          'dimensions' => '180x180',
          'prefix' => 'large_',
          'suffix' => '',
        ),
      ),
    ),
  );
  $export['imce_profiles'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'imce_roles_profiles';
  $strongarm->value = array(
    3 => array(
      'weight' => '0',
      'mpx_pid' => '2',
      'public_pid' => '2',
      'private_pid' => '2',
    ),
    5 => array(
      'weight' => '0',
      'mpx_pid' => '2',
      'public_pid' => '2',
      'private_pid' => '2',
    ),
    4 => array(
      'weight' => '0',
      'mpx_pid' => '2',
      'public_pid' => '2',
      'private_pid' => '2',
    ),
    6 => array(
      'weight' => '0',
      'mpx_pid' => '2',
      'public_pid' => '2',
      'private_pid' => '2',
    ),
    2 => array(
      'weight' => 11,
      'mpx_pid' => 0,
      'public_pid' => 0,
      'private_pid' => 0,
    ),
    1 => array(
      'weight' => 12,
      'mpx_pid' => 0,
      'public_pid' => 0,
      'private_pid' => 0,
    ),
  );
  $export['imce_roles_profiles'] = $strongarm;

  return $export;
}

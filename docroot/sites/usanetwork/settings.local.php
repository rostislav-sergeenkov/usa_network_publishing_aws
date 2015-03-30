<?php

$conf['pub_site_shortname'] = 'usanetwork';  // <--- This should match the folder name under sites

/**
 * Set the path to drush as a conf variable so it doesn't get overridden every
 * time you copy down the database from production.
 */
$conf['pub_utilities_drush_bin'] = '/usr/bin/drush';

// Define the current environment.
$_ENV['AH_SITE_ENVIRONMENT'] = 'local';

$databases['default'] = array ('default' =>
  array (
    'database' => 'publisher7_usanetwork',  // <--- Typically "publisher7_<sitename>"
    'username' => 'root',
    'password' => 'sleep',
    'host' => '127.0.0.1',
    'port' => '',
    'driver' => 'mysql',
    'prefix' => '',
  ),
);

// Replace the hostname below with the hostname of an upstream instance of your
// site. All resources will be fetched from it as needed for the files
// directory as long as the stage_file_proxy module is enabled.
$conf['stage_file_proxy_origin'] = 'http://publisher7dev.prod.acquia-sites.com'; // no trailing slash

/**
 * Don't automatically change permissions on our sites directory and
 * settings.php.
 */
$conf['ignore_site_directory_permissions'] = TRUE;
$base_url = 'http://local.usanetwork';

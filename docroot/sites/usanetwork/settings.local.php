<?php

/**
 * Set the path to drush as a conf variable so it doesn't get overridden every
 * time you copy down the database from production.
 */
$conf['pub_utilities_drush_bin'] = '/path/to/drush';

// Define the current environment.
$_ENV['AH_SITE_ENVIRONMENT'] = 'local';

$databases['default'] = array ('default' =>
  array (
    'database' => 'new_dev',  // <--- Typically "publisher7_<sitename>"
    'username' => 'root',
    'password' => '',
    'host' => '127.0.0.1',
    'port' => '',
    'driver' => 'mysql',
    'prefix' => '',
  ),
);

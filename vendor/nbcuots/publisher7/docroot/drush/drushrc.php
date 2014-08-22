<?php

/**
 * This drushrc file is included for all drush commands by all Publisher 7
 * sites.
 */

# Remove the memory limit from all drush commands.
ini_set('memory_limit', '-1');

// Drush default settings.
$options['include'] = array(__DIR__ . '/commands');
$options['alias-path'] = array(__DIR__ . '/aliases');


# Define environment-specific settings.
$dev_settings = array(
  // The list of modules to enable (1) or disable (0).
  'modules' => array(
    'autologout' => 0,
    'email_login' => 0,
    'devel' => 1,
    'devel_generate' => 1,
    'dblog' => 1,
    'environment_indicator' => 1,
    'masquerade' => 1,
    'update' => 1,
    'views_ui' => 1,
  ),
  // The list of variables to configure.
  'settings' => array(
    'preprocess_css' => '0',
    'preprocess_js' => '0',
  ),
  // The list of roles to grant (0) and revoke (0).
  'permissions' => array(
    'authenticated user' => array(
      'grant' => array('access environment indicator'),
      'revoke' => array(),
    ),
  ),
);

$stage_settings = array(
  // The list of modules to enable (1) or disable (0).
  'modules' => array(
    'devel' => 0,
    'dblog' => 0,
    'environment_indicator' => 0,
    'update' => 0,
  ),
  // The list of variable to configure
  'settings' => array(
    'preprocess_css' => '1',
    'preprocess_js' => '1',
  ),
  // The list of roles to grant and revoke.
  'permissions' => array(
    'authenticated user' => array(
      'grant' => array(),
      'revoke' => array('access devel information', 'execute php code', 'display source code', 'access environment indicator'),
    ),
  ),
);

$prod_settings = array(
  // The list of modules to enable (1) or disable (0).
  'modules' => array(
    'devel' => 0,
    'dblog' => 0,
    'environment_indicator' => 0,
    'update' => 0,
  ),
  // The list of variable to configure
  'settings' => array(
    'preprocess_css' => '1',
    'preprocess_js' => '1',
  ),
  // The list of roles to grant and revoke.
  'permissions' => array(
    'authenticated user' => array(
      'grant' => array(),
      'revoke' => array('access devel information', 'execute php code', 'display source code', 'access environment indicator'),
    ),
  ),
);

$options['environments'] = array(
  'local' => $dev_settings,
  'dev'   => $dev_settings,
  'qa'    => $dev_settings,
  'stage' => $stage_settings,
  'test'  => $stage_settings,
  'prod'  => $prod_settings,
);

/**
 * List of tables whose *data* is skipped by the 'sql-dump' and 'sql-sync'
 * commands when the "--structure-tables-key=common" option is provided.
 * You may add specific tables to the existing array or add a new element.
 */
$options['structure-tables']['common'] = array(
  'cache',
  'cache_block',
  'cache_bootstrap',
  'cache_field',
  'cache_filter',
  'cache_form',
  'cache_image',
  'cache_menu',
  'cache_page',
  'cache_path',
  'history',
  'sessions'
);
$options['structure-tables-key'] = 'common';

/**
 * Create some shell aliases for each site to use.
 */
$sites = array();
$files = scandir(__DIR__ . '/aliases');
foreach ($files as $file) {
  if (strpos($file, '.aliases.drushrc.php') !== FALSE) {
    $parts = explode('.', $file);
    $sites[] = $parts[0];
  }
}

foreach ($sites as $site) {
  $options['shell-aliases']['pull-files'] = '!drush -y -v rsync @' . $site . '.prod:%files/ @' . $site . '.local:%files';
  $options['shell-aliases']['sync-db'] = '!drush sql-sync @' . $site . '.prod @' . $site . '.local --create-db --no-cache --structure-tables-key=common --sanitize --sanitize-password=pa55word -y';
  if (file_exists(__DIR__ .'/../../'. $site .'/drush/commands')) {
    $options['include'][] = __DIR__ .'/../../'. $site .'/drush/commands';
  }
  if (file_exists(__DIR__ .'/../../'. $site .'/drush/aliases')) {
    array_unshift($options['alias-path'], __DIR__ .'/../../'. $site .'/drush/aliases');
  }
}

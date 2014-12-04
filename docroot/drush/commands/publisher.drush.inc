<?php

/**
 * @file
 *
 * Used for Publisher Based commands.
 */


/**
 * Implementation of hook_drush_help().
 */
function publisher_drush_help($section) {
  switch ($section) {
    case 'meta:publisher:title':
      return dt("Publisher commands");
      break;
  }
}

/**
 * Implementation of hook_drush_command().
 */
function publisher_drush_command() {

  $items['pub-site-install'] = array(
    'description' => 'Install Publisher along with modules/themes/configuration using the specified Publisher profile. This allows some shortcuts such as ent, blog, vanilla',
    'arguments' => array(
      'profile' => 'the install profile you wish to run. Defaults to pub_vanilla.',
      'key=value...' => 'By default Division is set to Operations and the brand is NBCUOTS. You can overwrite the default form values. Ex: [form name].[parameter name].',
    ),
    'options' => array(
      'db-url' => array(
        'description' => 'A Drupal 6 style database URL. Only required for initial install - not re-install.',
        'example-value' => 'mysql://root:pass@127.0.0.1/db',
      ),
      'db-prefix' => 'An optional table prefix to use for initial install.  Can be a key-value array of tables/prefixes in a drushrc file (not the command line).',
      'db-su' => array(
        'description' => 'Account to use when creating a new database. Must have Grant permission (mysql only). Optional.',
        'example-value' => 'root',
      ),
      'db-su-pw' => array(
        'description' => 'Password for the "db-su" account. Optional.',
        'example-value' => 'pass',
      ),
      'account-name' => 'uid1 name. Defaults to admin',
      'account-pass' => 'uid1 pass. Defaults to a randomly generated password. If desired, set a fixed password in drushrc.php.',
      'account-mail' => 'uid1 email. Defaults to admin@publisher.nbcuni.com',
      'locale' => array(
        'description' => 'A short language code. Sets the default site language. Language files must already be present. You may use download command to get them.',
        'example-value' => 'en-GB',
      ),
      'clean-url' => 'Defaults to 1',
      'site-name' => 'Defaults to Site-Install',
      'site-mail' => 'From: for system mailings. Defaults to admin@publisher.nbcuni.com',
      'sites-subdir' => array(
        'description' => "Name of directory under 'sites' which should be created. Only needed when the subdirectory does not already exist. Defaults to 'default'",
        'value' => 'required',
        'example-value' => 'directory_name',
      ),
    ),
    'examples' => array(
      "drush pub-site-install pub'" => 'Install the publisher profile.',
      "drush psi publisher'" => 'Install the publisher profile.',
      "drush psi'" => 'Install the publisher profile.',
    ),
    'bootstrap' => DRUSH_BOOTSTRAP_DRUPAL_ROOT,
    'aliases' => array('psi'),
  );

  $items['cache-kill'] = array(
    'description' => 'Kill stubborn caches multiple times with fire, knives, starvation and a bomb.',
    'bootstrap' => DRUSH_BOOTSTRAP_DRUPAL_DATABASE,
    'aliases' => array('ck'),
  );

  return $items;
}

/**
 * Implements hook_drush_help_alter().
 *
 * For CI purposes we need to be able to set uri from the command line ( instead
 * of setting it in aliases file ) when running sql-sync.
 */
function publisher_drush_help_alter(&$command){
  if ($command['command'] == 'sql-sync') {
    $command['options']['source-uri'] = 'Allows the user to properly set the uri parameter.';
  }
}

/**
 * Implements drush_hook_COMMAND().
 *
 * Publisher Site Install.
 */
function drush_publisher_pub_site_install($profile = NULL) {
  $args = func_get_args();

  // Set up our default options.
  $profile = 'publisher';
  $form_options = array();
  $form_options['install_configure_form.site_mail'] = drush_get_option('site-mail', 'admin@publisher.nbcuni.com');
  $form_options['install_configure_form.account.mail'] = drush_get_option('account-mail', 'admin@publisher.nbcuni.com');
  $form_options['install_configure_form.division'] = 'Operations';
  $form_options['install_configure_form.brand'] = 'NBCUOTS';

  // We are lazy so we allow profile short names.
  $short_name = array(
    'pub' => 'publisher',
  );

  // Actual profile name.
  $valid_names = array('publisher');

  if ($args) {
    // The first argument is the profile.
    $profile = array_shift($args);
    if (!in_array($profile, $valid_names)) {
      // If it's not a valid profile then lets check out shortnames.
      if (isset($short_name[$profile])) {
        $profile = $short_name[$profile];
      }
      else {
        // If we got here then lets error out.
        $error = dt('Sorry, !profile is not a valid profile.', array('!profile' => $profile));
        drush_set_error('pub_invalid_profile', $error);
      }
    }

    // Subsequent arguments are additional form values.
    foreach ($args as $arg) {
      list($key, $value) = explode('=', $arg);
      $form_options[$key] = $value;
    }
  }

  drush_include_engine('drupal', 'site_install', drush_drupal_major_version());
  drush_core_site_install_version($profile, $form_options);
}

/**
 * Implements drush_hook_COMMAND().
 *
 * Cache killer.
 */
function drush_publisher_cache_kill($type = 1) {
  $loop = 4;
  while ($loop > 0) {
    try {
      drush_db_delete('cache');
      drush_print('Cache Killed!');
    }
    catch (Exception $e) {
      echo 'catch';
      db_delete('cache')
        ->condition('cid', 'entity_info:en')
        ->execute();
    }
    $loop--;
  }
}

/**
 * Implements drush_hook_COMMAND_validate().
 */
function drush_publisher_pub_site_install_validate() {
  drush_core_site_install_validate();
}

/**
 * Implements drush_hook_pre_COMMAND().
 */
function drush_publisher_pre_pub_site_install($profile = NULL) {
  if (!$db_spec = _drush_sql_get_db_spec()) {
    drush_set_error(dt('Could not determine database connection parameters. Pass --db-url option.'));
    return;
  }
  $default_sites_subdir = drush_get_context('DRUSH_DRUPAL_SITE', 'default');
  $sites_subdir = drush_get_option('sites-subdir', $default_sites_subdir);

  $conf_path = "sites/$sites_subdir";
  $files = "$conf_path/files";
  $settingsfile = "$conf_path/settings.php";

  if (drush_sql_db_exists($db_spec)) {
    $msg[] = dt("DROP all tables in your '@db' database.", array('@db' => $db_spec['database']));
  }
  else {
    $msg[] = dt("CREATE  the '@db' database.", array('@db' => $db_spec['database']));
  }

  if (!drush_confirm(dt('You are about to ') . implode(dt(' and '), $msg) . ' Do you want to continue?')) {
    return drush_user_abort();
  }

  // Can't install without sites directory and settings.php.
  if (!file_exists($conf_path)) {
    if (!drush_mkdir($conf_path) && !drush_get_context('DRUSH_SIMULATE')) {
      drush_set_error(dt('Failed to create directory @conf_path', array('@conf_path' => $conf_path)));
      return;
    }
  }
  else {
    drush_log(dt('Sites directory @subdir already exists - proceeding.', array('@subdir' => $conf_path)));
  }

  // We need to be at least at DRUSH_BOOTSTRAP_DRUPAL_SITE to select the site uri to install to
  define('MAINTENANCE_MODE', 'install');
  if ($sites_subdir != 'default') {
    drush_bootstrap(DRUSH_BOOTSTRAP_DRUPAL_SITE);
  }

  drush_sql_empty_db($db_spec);
  return TRUE;
}

/**
 * Implements drush_hook_post_COMMAND().
 */
function drush_publisher_post_pub_site_install($profile = NULL) {
  if (module_exists('features')) {
    drush_set_option('invoke', TRUE);
    drush_set_option('strict', FALSE);
    drush_invoke('features-revert-all');
  }
}

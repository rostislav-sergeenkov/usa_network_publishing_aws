<?php
/**
 * @file
 * Entry point settings file, used in all environments.
 *
 * THIS FILE IS VERY CAREFULLY ORCHESTRATED, AND SHOULD ONLY BE MODIFIED IN
 * EXTREME CIRCUMSTANCES.
 *
 * See docroot/.p7settings/README.settings.php.md for more information.
 */

// Set $site to the string shortname of the current multisite.
$conf['pub_site_shortname'] = 'usanetwork';

// Include the environment-agnostic file from Publisher7 core.
require_once dirname(__FILE__) . "/../../.p7settings/settings.p7core.php";

// Include the local settings file if we're on a local machine. This
// is still included conditionally because Jenkins clones lack a settings.local.
// $local is populated by settings.p7core.php.
if ($local && file_exists(dirname(__FILE__) . "/settings.local.php")) {
  require_once dirname(__FILE__) . "/settings.local.php";
}

// Next, include the environment-agnostic file owned by this project.
//require_once dirname(__FILE__) . "/settings.site.php";
if (file_exists('/var/www/site-php')) {
  require('/var/www/site-php/usanetwork/usanetwork-settings.inc');
}

// Next, determine the environment we're in.  Environment types (qa, acceptance,
// stage and prod) are defined in project-config.yml.
$conf['environment_indicator_overwrite'] = TRUE;
switch ($_ENV['AH_SITE_ENVIRONMENT']) {
  case 'local':
    if (empty($override_defaults)) {
      // Envronment indicator settings.
      $conf['environment_indicator_overwritten_name'] = 'LOCAL SERVER';
      $conf['environment_indicator_overwritten_color'] = '#339999';
      $conf['environment_indicator_overwritten_position'] = 'top';
      $conf['environment_indicator_overwritten_fixed'] = FALSE;

      // File path settings.
      $conf['file_temporary_path'] = '/tmp/php';
      $conf['file_public_path'] = 'sites/usanetwork/files/public';
      $conf['file_private_path'] = 'sites/usanetwork/files/private';
    }
    // Turn on display PHP errors
    error_reporting(E_ALL);
    ini_set('display_errors', TRUE);
    ini_set('display_startup_errors', TRUE);
    break;

  case 'dev':
    // Envronment indicator settings.
    $conf['environment_indicator_overwritten_name'] = 'DEV SERVER';
    $conf['environment_indicator_overwritten_color'] = '#0000CC';
    $conf['environment_indicator_overwritten_position'] = 'top';
    $conf['environment_indicator_overwritten_fixed'] = FALSE;

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'dev/sites/default/files-private';

    // Memchache settings.
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "GMWX-32384";
    $conf["acquia_key"] = "1166f38ec6b5d664b8fb6b085fde8232";
    $conf["apachesolr_path"] = "/solr/GMWX-32384";
    $conf['apachesolr_read_only'] = "1";

    // Turn on display PHP errors
    error_reporting(E_ALL);
    ini_set('display_errors', TRUE);
    ini_set('display_startup_errors', TRUE);
    break;

  case 'test':
  case 'stage':
    // Envronment indicator settings.
    $conf['environment_indicator_overwritten_name'] = 'STAGE SERVER';
    $conf['environment_indicator_overwritten_color'] = '#990099';
    $conf['environment_indicator_overwritten_position'] = 'top';
    $conf['environment_indicator_overwritten_fixed'] = FALSE;

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'stg/sites/default/files-private';

    // Memchache settings.
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "GMWX-32384";
    $conf["acquia_key"] = "1166f38ec6b5d664b8fb6b085fde8232";
    $conf["apachesolr_path"] = "/solr/GMWX-32384";
    $conf['apachesolr_read_only'] = "0";
    break;

  case 'acceptance':
    // Envronment indicator settings.
    $conf['environment_indicator_overwritten_name'] = 'ACCEPTANCE';
    $conf['environment_indicator_overwritten_color'] = '#009933';
    $conf['environment_indicator_overwritten_position'] = 'top';
    $conf['environment_indicator_overwritten_fixed'] = FALSE;

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'dev/sites/default/files-private';

    // Memchache settings.
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "GMWX-32384";
    $conf["acquia_key"] = "1166f38ec6b5d664b8fb6b085fde8232";
    $conf["apachesolr_path"] = "/solr/GMWX-32384";
    $conf['apachesolr_read_only'] = "0";

    // Turn on display PHP errors
    error_reporting(E_ALL);
    ini_set('display_errors', TRUE);
    ini_set('display_startup_errors', TRUE);
    break;

  case 'prod':
    // Envronment indicator settings.
    $conf['environment_indicator_overwritten_name'] = 'LIVE';
    $conf['environment_indicator_overwritten_color'] = '#990000';
    $conf['environment_indicator_overwritten_position'] = 'top';
    $conf['environment_indicator_overwritten_fixed'] = FALSE;

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . '/sites/default/files-private';

    // Memchache settings.
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "CGJK-32328";
    $conf["acquia_key"] = "dc2bfa15286aedc061f759dfd20e2f9a";
    $conf["apachesolr_path"] = "/solr/CGJK-32328";
    $conf['apachesolr_read_only'] = "0";

    // www redirect
    default_site_request_handler();

    break;

}

// Now, include the environment-specific file provided by Publisher7 core, if one exists.
//$core_env_file = dirname(__FILE__) . "/../../.p7settings/settings.p7core-$env.php";
//if (file_exists($core_env_file)) {
//  require_once $core_env_file;
//}

// Next, include the environment-specific file owned by the project, if one exists.
//$site_env_file = dirname(__FILE__) . "/settings.site-$env.php";
//if (file_exists($site_env_file)) {
//  require_once $site_env_file;
//}

// Trigger the fast 404 logic.
drupal_fast_404();

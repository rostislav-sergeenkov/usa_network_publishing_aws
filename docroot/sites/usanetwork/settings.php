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
/**
 * Start with a reasonable minimum php memory limit.
 */
ini_set('memory_limit', '512M');

// Set $site to the string shortname of the current multisite.
$conf['pub_site_shortname'] = 'usanetwork';

// Include the environment-agnostic file from Publisher7 core.
//require_once dirname(__FILE__) . "/../../.p7settings/settings.p7core.php";
require_once dirname(__FILE__) . "/../../profiles/publisher/settings.publisher.php";

// Include the local settings file if we're on a local machine. This
// is still included conditionally because Jenkins clones lack a settings.local.
// $local is populated by settings.p7core.php.
if ($local && file_exists(dirname(__FILE__) . "/settings.local.php")) {
  require_once dirname(__FILE__) . "/settings.local.php";
}

/**
 * Salt for one-time login links and cancel links, form tokens, etc.
 */
$drupal_hash_salt = 'VhC_M3wWSOR6dftNjYBSSbbrPYZ-vK---neaUejCozE';

// Disable Acquia SA-2014-005 mitigation.  Remove when updated to Drupal 7.32
$conf['acquia_hosting_disable_sa_2014_005_fix'] = TRUE;

// Next, include the environment-agnostic file owned by this project.
//require_once dirname(__FILE__) . "/settings.site.php";

if ($_ENV['AH_SITE_ENVIRONMENT'] == 'edit') {
  $prod_include = '/var/www/site-php/usanetwork/D7-usanetwork-settings.inc';
  if (file_exists($prod_include)) {
    include($prod_include);
  }
  else {
    // fallback behavior, e.g., a 404 page
  }
}
elseif (file_exists('/var/www/site-php')) {
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

    // Memchache settings
    $conf['cache_backends'][] = './includes/cache-install.inc';
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';
    $conf['cache_class_cache_page'] = 'DrupalFakeCache';
    
    # Add in stampede protection
    $conf['memcache_stampede_protection'] = TRUE;
    # Move semaphore out of the database and into memory for performance purposes
    $conf['lock_inc'] = './profiles/publisher/modules/contrib/memcache/memcache-lock.inc';

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

    // Memchache settings
    $conf['cache_backends'][] = './includes/cache-install.inc';
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';
    $conf['cache_class_cache_page'] = 'DrupalFakeCache';
    
    # Add in stampede protection
    $conf['memcache_stampede_protection'] = TRUE;
    # Move semaphore out of the database and into memory for performance purposes
    $conf['lock_inc'] = './profiles/publisher/modules/contrib/memcache/memcache-lock.inc';

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
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'acc/sites/default/files-private';

    // Memchache settings
    $conf['cache_backends'][] = './includes/cache-install.inc';
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';
    $conf['cache_class_cache_page'] = 'DrupalFakeCache';
    
    # Add in stampede protection
    $conf['memcache_stampede_protection'] = TRUE;
    # Move semaphore out of the database and into memory for performance purposes
    $conf['lock_inc'] = './profiles/publisher/modules/contrib/memcache/memcache-lock.inc';

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
  case 'edit':
    // Envronment indicator settings.
    $conf['environment_indicator_overwritten_name'] = 'LIVE';
    $conf['environment_indicator_overwritten_color'] = '#990000';
    $conf['environment_indicator_overwritten_position'] = 'top';
    $conf['environment_indicator_overwritten_fixed'] = FALSE;

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . '/sites/default/files-private';
    $conf['plupload_temporary_uri'] = $conf['file_private_path'] . '/tmp';

    // Memchache settings
    $conf['cache_backends'][] = './includes/cache-install.inc';
    $conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_cache_form'] = 'DrupalDatabaseCache';
    $conf['cache_class_cache_page'] = 'DrupalFakeCache';
    
    # Add in stampede protection
    $conf['memcache_stampede_protection'] = TRUE;
    # Move semaphore out of the database and into memory for performance purposes
    $conf['lock_inc'] = './profiles/publisher/modules/contrib/memcache/memcache-lock.inc';

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

/**
* Redirection rules for default Drupal site
*
* This drop-in for the default site's settings.php provides HTTP 301
* redirection rules for any request which does not already have a Drupal
* site folder assigned. Redirect rules are located in the global
* default_redirect array.
*
* Redirects are selected in the following manner:
* 1. HTTP_HOST and REQUEST_URI combined to look for an exact match in
*    default_redirect
* 2. If not found, look for the full HTTP_HOST in default_redirect
* 3. Then iterate through progressively more abstract hostname parts until
*    match is found.
* 4. Default site redirect is used if no other is found.
*
* Example Request: http://aa.bb.example.localhost/some/path
*
* - looks for match to 'aa.bb.example.localhost/some/path'
* - looks for match to 'aa.bb.example.localhost'
* - looks for match to 'bb.example.localhost'
* - looks for match to 'example.localhost'
* - looks for match to 'localhost'
*
* To use this file to redirect traffic, append or include this file at the
* bottom of sites/default/settings.php. For example:
*
*   require_once('default-site-redirect.settings.php');
*
* Edit the following defined variables as needed.
*
* DEFAULT_SITE_REDIRECT - if this is blank, the default drupal site will load
* DEFAULT_SITE_DRY_RUN - when true, adds mock-headers instead of redirecting
*
* Note: in all cases, the SERVER_PORT is dropped from the request's HTTP_HOST
*/

/**
* Select the most specific matching pattern for the given hostname
*/
function default_site_select_redirect() {

  $default_redirect = array (
    'usanetwork.com' => 'www.usanetwork.com',
    'beta.usanetwork.com' => 'www.usanetwork.com',
    'usanetwork.prod.acquia-sites.com' => 'www.usanetwork.com',
    'burnnotice.usanetwork.com ' => 'www.usanetwork.com/burnnotice',
    'covertaffairs.usanetwork.com' => 'www.usanetwork.com/covertaffairs',
    'csi.usanetwork.com' => 'www.usanetwork.com/csi',
    'graceland.usanetwork.com' => 'www.usanetwork.com/graceland',
    'house.usanetwork.com' => 'www.usanetwork.com/house',
    'svu.usanetwork.com' => 'www.usanetwork.com/svu',
    'themoment.usanetwork.com' => 'www.usanetwork.com/themoment',
    'ncis.usanetwork.com' => 'www.usanetwork.com/ncis',
    'ncisla.usanetwork.com' => 'www.usanetwork.com/ncisla',
    'necessaryroughness.usanetwork.com' => 'www.usanetwork.com/necessaryroughness',
    'psych.usanetwork.com' => 'www.usanetwork.com/psych',
    'royalpains.usanetwork.com' => 'www.usanetwork.com/royalpains',
    'suits.usanetwork.com' => 'www.usanetwork.com/suits',
    'summercamp.usanetwork.com' => 'www.usanetwork.com/summercamp',
    'whitecollar.usanetwork.com' => 'www.usanetwork.com/whitecollar',
    'raw.usanetwork.com' => 'www.usanetwork.com/wwe',
  );
  $location = '';

  // Sanitize and trim the HTTP_HOST
  $http_host = preg_match('/^([a-zA-Z0-9_\-\.]+)(\.)?(:[0-9]+)?$/', $_SERVER['HTTP_HOST'], $matches) ? $matches[1] : 'default';
  // check against $http_host so drush aliases continue to work
  if (isset($http_host)) {
    $location = (isset($default_redirect[$http_host])) ? $default_redirect[$http_host] . $_SERVER['REQUEST_URI']: FALSE;
  }
  else {
    exit;
  }
  return $location;
}

/**
* Handle default site requests
*/
function default_site_request_handler() {
  $location = default_site_select_redirect();
  $cli = (php_sapi_name() == 'cli');
  if ($location && !$cli) {
    drupal_add_http_header('Location', 'http://' . $location);
    drupal_add_http_header('Status', '301 Moved Permanently');
    exit;
  }
}

$conf['admin_menu_cache_client'] = FALSE;

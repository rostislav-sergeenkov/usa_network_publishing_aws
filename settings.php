<?php

/**
 * First we require the default settings.php file so that global settings can
 * be set in one place for all sites. PLEASE REFERENCE ../default/settings.php
 * TO SEE WHAT SETTINGS ARE AVAILABLE TO BE OVERRIDDEN.
 */
require('sites/default/default.settings.php');

/**
 * Salt for one-time login links and cancel links, form tokens, etc.
 */
$drupal_hash_salt = 'VhC_M3wWSOR6dftNjYBSSbbrPYZ-vK---neaUejCozE';

/**
 * Include files that contain the database settings and other environment
 * specific settings. We store the database settings in an external file so they
 * can be different per environment and because they should never exist in a
 * file that exists in a git/svn repository for extra security.
 */
if (file_exists('../settings.usanetwork.php')) {
  require('../settings.usanetwork.php');
}

if (file_exists('/var/www/site-php')) {
  require('/var/www/site-php/' . $_ENV["AH_SITE_GROUP"] . '/' . $_ENV["AH_SITE_GROUP"] . '-settings.inc');
}

/**
 * Add environment specific settings. These settings must come after the
 * inclusion of environment specific settings file(s) above in order to give the
 * environment a chance to identify itself by setting the global
 * $_ENV['AH_SITE_ENVIRONMENT'] variable. To override any of the settings
 * below, you must add $override_defaults = TRUE to your local settings file.
 */

switch ($_ENV['AH_SITE_ENVIRONMENT']) {
  case 'local':
    if (empty($override_defaults)) {
      // Envronment indicator settings.
      $conf['environment_indicator_text'] = 'LOCAL SERVER';
      $conf['environment_indicator_color'] = '#339999';

      // File path settings.
      $conf['file_temporary_path'] = '/tmp/php';
      $conf['file_public_path'] = 'sites/default/files';
      $conf['file_private_path'] = 'sites/default/files-private';
    }
    break;

  case 'dev':
    // Envronment indicator settings.
    $conf['environment_indicator_text'] = 'DEV SERVER';
    $conf['environment_indicator_color'] = '#0000CC';

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'dev/sites/default/files-private';

    // Memchache settings.
    //$conf['cache_backends'][] = './profiles/all/modules/contrib/memcache/memcache.inc';
    //$conf['cache_default_class'] = 'MemCacheDrupal';
    //$conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "GMWX-32384";
    $conf["acquia_key"] = "1166f38ec6b5d664b8fb6b085fde8232";
    $conf["apachesolr_path"] = "/solr/GMWX-32384";
    $conf['apachesolr_read_only'] = "1";
    break;

  case 'test':
  case 'stage':
    // Envronment indicator settings.
    $conf['environment_indicator_text'] = 'STAGE SERVER';
    $conf['environment_indicator_color'] = '#990099';

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . 'stg/sites/default/files-private';

    // Memchache settings.
    //$conf['cache_backends'][] = './profiles/all/modules/contrib/memcache/memcache.inc';
    //$conf['cache_default_class'] = 'MemCacheDrupal';
    //$conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "GMWX-32384";
    $conf["acquia_key"] = "1166f38ec6b5d664b8fb6b085fde8232";
    $conf["apachesolr_path"] = "/solr/GMWX-32384";
    $conf['apachesolr_read_only'] = "0";
    break;

  case 'prod':
    // Envronment indicator settings.
    $conf['environment_indicator_text'] = 'LIVE';
    $conf['environment_indicator_color'] = '#990000';

    // File path settings. Acquia automatically figures our the public and tmp
    // file paths, however we have to set the private path manually.
    $conf['file_private_path'] = '/mnt/files/' . $_ENV["AH_SITE_GROUP"] . '/sites/default/files-private';

    // Memchache settings.
    $conf['cache_backends'][] = './profiles/all/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

    //Acquia Search settings
    $conf["acquia_identifier"] = "CGJK-32328";
    $conf["acquia_key"] = "dc2bfa15286aedc061f759dfd20e2f9a";
    $conf["apachesolr_path"] = "/solr/CGJK-32328";
    $conf['apachesolr_read_only'] = "0";
    break;
}

/**
 * By default, fast 404s are returned as part of the normal page request
 * process, which will properly serve valid pages that happen to match and will
 * also log actual 404s to the Drupal log. Alternatively you can choose to
 * return a 404 now by uncommenting the following line. This will reduce server
 * load, but will cause even valid pages that happen to match the pattern to
 * return 404s, rather than the actual page. It will also prevent the Drupal
 * system log entry. Ensure you understand the effects of this before enabling.
 *
 * To enable this functionality, remove the leading hash sign below.
 */
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

// commenting out the memory changes
/**
 * Use the page_memory_limit module to increase the page memory limit on admin
 * pages only.
 */
 /*
$conf['page_memory_limit']['admin/*'] = '256M';
$conf['page_memory_limit']['devel/*'] = '256M';
$conf['page_memory_limit']['batch'] = '256M';
if (isset($_SERVER['argv'][0]) && strrpos($_SERVER['argv'][0], 'drush.php') !== FALSE) {
  ini_set('memory_limit', '256M');
}
*/
/**
 * Setting a reasonable minimum php memory limit.
 */
//ini_set('memory_limit', '256M');

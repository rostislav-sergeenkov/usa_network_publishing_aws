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
    $conf['cache_backends'][] = './profiles/all/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

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
    $conf['cache_backends'][] = './profiles/all/modules/contrib/memcache/memcache.inc';
    $conf['cache_default_class'] = 'MemCacheDrupal';
    $conf['cache_class_form'] = 'DrupalDatabaseCache';

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
 * Use the page_memory_limit module to increase the page memory limit on admin
 * pages only.
 */
$conf['page_memory_limit']['admin/*'] = '256M';
$conf['page_memory_limit']['devel/*'] = '256M';
$conf['page_memory_limit']['batch'] = '256M';
if (isset($_SERVER['argv'][0]) && strrpos($_SERVER['argv'][0], 'drush.php') !== FALSE) {
    ini_set('memory_limit', '256M');
}

/**
 * Setting a reasonable minimum php memory limit.
 */
ini_set('memory_limit', '256M');

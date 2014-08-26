<?php
/**
 * @file
 * Site-specific settings file that is included on 'dev'-type environments.
 *
 * See README.settings.php.md for information about how this should be used.
 */
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'DEV SERVER';
$conf['environment_indicator_overwritten_color'] = '#0000CC';
$conf['environment_indicator_overwritten_position'] = 'top';

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

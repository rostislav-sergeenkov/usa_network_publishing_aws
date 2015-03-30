<?php
/**
 * @file
 * Pub7 core settings file for 'di'-type environments.
 *
 * Dev integration environments are used for automated testing only.
 *
 * See README.settings.php.md for information about how this should be used.
 */

// Environment indicator settings.
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'AUTOMATED DEV INTEGRATION SERVER';
$conf['environment_indicator_overwritten_color'] = '#0000CC';  // @todo pick a new color for me

// File path settings. Acquia automatically figures out the public and tmp
// file paths, however we have to set the private path manually.
$conf['file_private_path'] = "/mnt/files/{$_ENV["AH_SITE_GROUP"]}.{$_ENV["AH_SITE_ENVIRONMENT"]}/sites/{$conf['pub_site_shortname']}/files-private";

// Memcache settings.
$conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
$conf['cache_default_class'] = 'MemCacheDrupal';
$conf['cache_class_form'] = 'DrupalDatabaseCache';

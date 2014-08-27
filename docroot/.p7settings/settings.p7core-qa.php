<?php
/**
 * @file
 * Pub7 core Settings file for 'qa' environments.
 *
 * QA environments are where human QA teams evaluate and certify code before
 * moving it along towards production.
 *
 * See README.settings.php.md for information about how this should be used.
 */

// Environment indicator settings.
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'QA SERVER';
$conf['environment_indicator_overwritten_color'] = '#0000CC';

// File path settings. Acquia automatically figures out the public and tmp
// file paths, however we have to set the private path manually.
$conf['file_private_path'] = "/mnt/files/{$_ENV["AH_SITE_GROUP"]}.{$_ENV["AH_SITE_ENVIRONMENT"]}/sites/{$conf['pub_site_shortname']}/files-private";

// Memchache settings.
$conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
$conf['cache_default_class'] = 'MemCacheDrupal';
$conf['cache_class_form'] = 'DrupalDatabaseCache';

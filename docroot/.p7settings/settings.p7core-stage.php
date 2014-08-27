<?php
/**
 * @file
 * Pub7 core settings file for stage.
 *
 * Stage's primary purpose is as the environment where deployments are tested
 * to ensure that production deployments will go smoothly.
 *
 * See README.settings.php.md for information about how this should be used.
 */

// Environment indicator settings.
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'STAGE SERVER';
$conf['environment_indicator_overwritten_color'] = '#990099';

// File path settings. Acquia automatically figures out the public and tmp
// file paths, however we have to set the private path manually.
$conf['file_private_path'] = "/mnt/files/{$_ENV["AH_SITE_GROUP"]}.{$_ENV["AH_SITE_ENVIRONMENT"]}/sites/{$conf['pub_site_shortname']}/files-private";

// Memchache settings.
$conf['cache_backends'][] = './profiles/publisher/modules/contrib/memcache/memcache.inc';
$conf['cache_default_class'] = 'MemCacheDrupal';
$conf['cache_class_form'] = 'DrupalDatabaseCache';

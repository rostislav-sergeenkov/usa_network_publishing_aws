<?php
/**
 * @file
 * Site-specific settings file that is included on 'dev'-type environments.
 *
 * See README.settings.php.md for information about how this should be used.
 */
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'LOCAL SERVER';
$conf['environment_indicator_overwritten_color'] = '#339999';
$conf['environment_indicator_overwritten_position'] = 'top';

// File path settings.
$conf['file_temporary_path'] = '/tmp/php';
$conf['file_public_path'] = 'sites/default/files';
$conf['file_private_path'] = 'sites/default/files-private';

    // Turn on display PHP errors
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
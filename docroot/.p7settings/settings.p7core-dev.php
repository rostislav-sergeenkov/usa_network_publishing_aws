<?php
/**
 * @file
 * Pub7 core settings file for 'dev' environments.
 *
 * Dev environments are developers' local environments, or any otherwise
 * unidentified environment.
 *
 * See README.settings.php.md for information about how this should be used.
 */

// Environment indicator settings.
$conf['environment_indicator_overwrite'] = TRUE;
$conf['environment_indicator_overwritten_name'] = 'LOCAL DEV SERVER';
$conf['environment_indicator_overwritten_color'] = '#339999';

// File path settings.
if (!is_dir("/mnt/tmp/{$_ENV['AH_SITE_GROUP']}")) {
  mkdir("/tmp/{$conf['pub_site_shortname']}");
  chmod("/tmp/{$conf['pub_site_shortname']}", 0777);
}
$conf['file_temporary_path'] = "/mnt/tmp/{$_ENV['AH_SITE_GROUP']}";
$conf['file_public_path'] = "sites/{$conf['pub_site_shortname']}/files";
$conf['file_private_path'] = "/mnt/sites/{$_ENV['AH_SITE_GROUP']}/sites/default/files-private";

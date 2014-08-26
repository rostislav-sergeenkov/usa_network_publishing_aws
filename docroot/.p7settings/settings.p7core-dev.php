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
if (!is_dir("/tmp/{$conf['pub_site_shortname']}")) {
  mkdir("/tmp/{$conf['pub_site_shortname']}");
  chmod("/tmp/{$conf['pub_site_shortname']}", 0777);
}
$conf['file_temporary_path'] = "/tmp/{$conf['pub_site_shortname']}";
$conf['file_public_path'] = "sites/{$conf['pub_site_shortname']}/files";
$conf['file_private_path'] = "sites/{$conf['pub_site_shortname']}/files-private";

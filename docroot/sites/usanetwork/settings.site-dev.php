<?php
/**
 * @file
 * Site-specific settings file that is included on 'dev'-type environments.
 *
 * See README.settings.php.md for information about how this should be used.
 */

// File path settings.
if (!is_dir("/tmp/{$conf['pub_site_shortname']}")) {
  mkdir("/tmp/{$conf['pub_site_shortname']}");
  chmod("/tmp/{$conf['pub_site_shortname']}", 0777);
}
$conf['file_temporary_path'] = "/tmp/{$conf['pub_site_shortname']}";
$conf['file_public_path'] = "sites/{$conf['pub_site_shortname']}/files";

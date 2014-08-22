<?php

/*
 * @file
 *
 * Determine context information so we can include the appropriate SSO settings 
 * file.
 *
 * @see config.inc
 * @see authsources.inc
 * @see saml20-idp-remote.inc
 */

$environment_info = array(
  'site_dir' => conf_path(),
  'environment' => '',
  'parsed_server' => array(),
  'protocol' => 'http',
);

// Determine which site directory we should use.
$server = explode('.', implode('.', array_reverse(explode(':', rtrim($_SERVER['HTTP_HOST'], '.')))));
$environment_info['parsed_server'] = $server;

// Determine the environment.
if (file_exists('/var/www/site-scripts/site-info.php')) {
  $local = FALSE;

  // Extract environment info using Acquia's own tool for it.
  require_once '/var/www/site-scripts/site-info.php';
  list($ah_site_name, $ah_site_group, $ah_site_env, ) = ah_site_info();

  if (!isset($_ENV['AH_SITE_ENVIRONMENT'])) {
    $_ENV['AH_SITE_ENVIRONMENT'] = $ah_site_env;
  }
}
else {
  $local = TRUE;
}

if (empty($_ENV['AH_SITE_ENVIRONMENT'])) {
  if ($local) {
    $environment_info['environment'] = 'local';
  }
  else {
    $environment_info['environment']= 'dev';
  }
  $_ENV['AH_SITE_ENVIRONMENT'] = $environment_info['environment'];
}
elseif (strpos($_ENV['AH_SITE_ENVIRONMENT'], 'dev-integration') !== FALSE) {
  $environment_info['environment'] = 'di';
}
elseif (in_array($_ENV['AH_SITE_ENVIRONMENT'], array('qa1', 'qa2', 'qa3', 'qa4', 'qa5', 'hotfix-qa'))) {
  $environment_info['environment'] = 'qa';
}
elseif (in_array($_ENV['AH_SITE_ENVIRONMENT'], array('stage', 'hotfix-stage', 'tmp', 'test'))) {
  $environment_info['environment'] = 'stage';
}
elseif (in_array($_ENV['AH_SITE_ENVIRONMENT'], array('prod'))) {
  $environment_info['environment'] = 'prod';
}

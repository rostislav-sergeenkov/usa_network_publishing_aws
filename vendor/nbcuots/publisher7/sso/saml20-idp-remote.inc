<?php
/**
 * @file
 * Set up some basic configurations for the remote.  These can be updated in the
 * site-specific idp-remote files.
 */

if (!defined('DRUPAL_ROOT')) {
  define('DRUPAL_ROOT', dirname(__FILE__) . '/../docroot');
}
include_once DRUPAL_ROOT . '/includes/bootstrap.inc';

// Determine the relevant environment.
include_once dirname(__FILE__) . '/env.inc';

// Set up some defaults for authsource config values.
$environment_config = array(
  'logout_referrer' => $_SERVER['SERVER_NAME'],
  'metadata.key' => 'nbcufssstg',
  'metadata.name' => 'Publisher Stage',
  'metadata.signonservice' => 'https://fss.external.stg.nbcuni.com/fss/idp/SSO.saml2',
  'metadata.logoutservice' => 'https://ssologin.external.stg.nbcuni.com/ssologin/logoff.jsp',
  'certificate' => 'sso.crt',
  'protocol' => 'http',
);
if (isset($_SERVER['HTTPS']) && strcasecmp($_SERVER['HTTPS'], 'off') != 0) {
  $environment_config['protocol'] = 'https';
}

if ($environment_info['environment'] === 'prod') {
  $environment_config['metadata.key'] = 'nbcufssprod';
  $environment_config['metadata.name'] = 'Publisher Prod';
  $environment_config['metadata.signonservice'] = 'https://fss.external.nbcuni.com/fss/idp/SSO.saml2';
  $environment_config['metadata.logoutservice'] = 'https://ssologin.external.nbcuni.com/ssologin/logoff.jsp';
  $environment_config['certificate'] = 'sso.crt';
}

<?php
/**
 * @file
 * Set up some basic authsource configurations.  These can be updated in the
 * site-specific authsources files.
 */

if (!defined('DRUPAL_ROOT')) {
  define('DRUPAL_ROOT', dirname(__FILE__) . '/../docroot');
}
include_once DRUPAL_ROOT . '/includes/bootstrap.inc';

// Determine the relevant environment.
include_once dirname(__FILE__) . '/env.inc';

// Set up some defaults for authsource config values.
$environment_config = array(
  'entityID' => 'publisher7-stage',
  'idp' => 'nbcufssstg',
  'authentication-source.key' => '',  // Will be determined below, within domains.inc.
);

if ($environment_info['environment'] === 'prod') {
  $environment_config['entityID'] = 'publisher7-prod';
  $environment_config['idp'] = 'nbcufssprod';
}

// The list of authentication sources keys.
include_once dirname(__FILE__) . '/domains.inc';

if (array_key_exists($_SERVER['SERVER_NAME'], $domains)) {
  $environment_config['authentication-source.key'] = $domains[$_SERVER['SERVER_NAME']];
}

<?php
/**
 * @file
 * Set up some basic authsource configurations.  These can be updated in the
 * site-specific authsources files.
 */

include_once DRUPAL_ROOT . '/includes/bootstrap.inc';

// Determine the relevant environment.
include dirname(__FILE__) . '/env.inc';

// Set up some defaults for authsource config values.
$environment_config = array(
  'entityID' => $environment_info['entity_id'],
  'idp' => $environment_info['metadata.key'],
  'authentication-source.key' => $environment_info['authentication-source.key'],
  'public.key' => $conf['pub_sso_server'] . '.pub.crt',
  'private.key' => $conf['pub_sso_server'] . '.prv.pem',
);

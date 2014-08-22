<?php
/**
 * SAML 2.0 remote IdP metadata for simpleSAMLphp.
 *
 * Remember to remove the IdPs you don't use from this file.
 *
 * See: https://rnd.feide.no/content/idp-remote-metadata-reference
 */

/**
 * Include environment settings.
 */
include_once dirname(__FILE__) . '/../../sso/saml20-idp-remote.inc';

$metadata[$environment_config['metadata.key']] = array(
  'name' => array('en' => $environment_config['metadata.name']),
  'SingleSignOnService' => $environment_config['metadata.signonservice'],
  'SingleLogoutService' => sprintf('%s?referrer=%s://%s', $environment_config['metadata.logoutservice'], $environment_config['protocol'], $environment_config['logout_referrer']),
  'certificate' => $environment_config['certificate'], // * This is provided by SSO team, put in 'certs' directory of simplesamlphp install
);

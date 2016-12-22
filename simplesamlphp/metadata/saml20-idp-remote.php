<?php
/**
 * @file
 * SAML 2.0 remote IdP metadata for simpleSAMLphp.
 *
 * Remember to remove the IdPs you don't use from this file.
 *
 * See: https://rnd.feide.no/content/idp-remote-metadata-reference
 */

/**
 * Include environment settings.
 */
if (!defined('DRUPAL_ROOT')) {
  define('DRUPAL_ROOT', dirname(__FILE__) . '/../../docroot');
}
include_once DRUPAL_ROOT . '/profiles/publisher/modules/custom/pub_sso/lib/saml20-idp-remote.inc';

$metadata[$environment_config['metadata.key']] = array(
  'name' => array('en' => $environment_config['metadata.name']),
  'SingleSignOnService' => array(
    array(
      'Binding' => "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST",
      'Location' => $environment_config['metadata.signonservice'],
    ),
    array(
      'Binding' => "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect",
      'Location' => $environment_config['metadata.signonservice'],
    ),
  ),
  'SingleLogoutService' => sprintf('%s?referrer=%s://%s',
    $environment_config['metadata.logoutservice'],
    $environment_config['protocol'],
    $environment_config['logout_referrer']),
  // This is provided by SSO team, put in 'certs' directory of
  // simplesamlphp install.
  'certificate' => $environment_config['certificate'],
);

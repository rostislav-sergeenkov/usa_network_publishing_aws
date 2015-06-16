<?php

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site usanetwork, environment acceptance
$aliases['acceptance'] = array(
  'root' => '/var/www/html/usanetwork.acceptance/docroot',
  'ac-site' => 'usanetwork',
  'ac-env' => 'acceptance',
  'ac-realm' => 'prod',
  'uri' => 'usanetworkacc.prod.acquia-sites.com',
  'remote-host' => 'staging-4868.prod.hosting.acquia.com',
  'remote-user' => 'usanetwork.acceptance',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);
$aliases['acceptance.livedev'] = array(
  'parent' => '@usanetwork.acceptance',
  'root' => '/mnt/gfs/usanetwork.acceptance/livedev/docroot',
);

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site usanetwork, environment dev
$aliases['dev'] = array(
  'root' => '/var/www/html/usanetwork.dev/docroot',
  'ac-site' => 'usanetwork',
  'ac-env' => 'dev',
  'ac-realm' => 'prod',
  'uri' => 'usanetworkdev.prod.acquia-sites.com',
  'remote-host' => 'staging-4009.prod.hosting.acquia.com',
  'remote-user' => 'usanetwork.dev',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);
$aliases['dev.livedev'] = array(
  'parent' => '@usanetwork.dev',
  'root' => '/mnt/gfs/usanetwork.dev/livedev/docroot',
);

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site usanetwork, environment prod
$aliases['prod'] = array(
  'root' => '/var/www/html/usanetwork.prod/docroot',
  'ac-site' => 'usanetwork',
  'ac-env' => 'prod',
  'ac-realm' => 'prod',
  'uri' => 'usanetwork.prod.acquia-sites.com',
  'remote-host' => 'web-4003.prod.hosting.acquia.com',
  'remote-user' => 'usanetwork.prod',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);
$aliases['prod.livedev'] = array(
  'parent' => '@usanetwork.prod',
  'root' => '/mnt/gfs/usanetwork.prod/livedev/docroot',
);

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}
// Site usanetwork, environment test
$aliases['test'] = array(
  'root' => '/var/www/html/usanetwork.test/docroot',
  'ac-site' => 'usanetwork',
  'ac-env' => 'test',
  'ac-realm' => 'prod',
  'uri' => 'usanetworkstg.prod.acquia-sites.com',
  'remote-host' => 'staging-4009.prod.hosting.acquia.com',
  'remote-user' => 'usanetwork.test',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);
$aliases['test.livedev'] = array(
  'parent' => '@usanetwork.test',
  'root' => '/mnt/gfs/usanetwork.test/livedev/docroot',
);

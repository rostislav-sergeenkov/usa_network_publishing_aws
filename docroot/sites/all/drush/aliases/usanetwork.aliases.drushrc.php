<?php

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}

// Site usanetwork, environment dev
$aliases['dev'] = array(
  'root' => '/var/www/html/usadev/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'dev.usanetwork.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment stage
$aliases['stage'] = array(
  'root' => '/var/www/html/usastg/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'stage.usanetwork.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment qa
$aliases['qa'] = array(
  'root' => '/var/www/html/usaqa/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'qa.usanetwork.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment prod
$aliases['prod'] = array(
  'root' => '/var/www/html/usa/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'www.usanetwork.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);


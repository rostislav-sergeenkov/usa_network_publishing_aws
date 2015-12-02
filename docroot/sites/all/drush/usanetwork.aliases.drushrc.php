<?php

if (!isset($drush_major_version)) {
  $drush_version_components = explode('.', DRUSH_VERSION);
  $drush_major_version = $drush_version_components[0];
}

// Site usanetwork, environment dev
$aliases['dev'] = array(
  'root' => '/var/www/html/usadev/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'usadev.apps.nbcuni.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment stage
$aliases['stage'] = array(
  'root' => '/var/www/html/usastg/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'usastg.apps.nbcuni.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment qa
$aliases['qa'] = array(
  'root' => '/var/www/html/usaqa/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'usaqa.apps.nbcuni.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);

// Site usanetwork, environment prod
$aliases['prod'] = array(
  'root' => '/var/www/html/usa/docroot',
  'ac-site' => 'usanetwork',
  'uri' => 'usanetwork.apps.nbcuni.com',
  'path-aliases' => array(
    '%drush-script' => 'drush' . $drush_major_version,
  )
);


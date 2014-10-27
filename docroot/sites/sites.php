<?php

$multisites = array(
  'usanetwork' => 'usanetwork.com'
);

foreach ($multisites as $sitename => $domain) {
  $sites[$sitename . 'dev.prod.acquia-sites.com'] = $sitename;
  $sites[$sitename . 'stg.prod.acquia-sites.com'] = $sitename;
  $sites[$sitename . 'acc.prod.acquia-sites.com'] = $sitename;
  $sites[$sitename . '.prod.acquia-sites.com'] = $sitename;
  $sites['local.' . $sitename] = $sitename;
  $sites[$sitename . '.local'] = $sitename;
  $sites['origin.' . $domain] = $sitename;
  $sites['dev.' . $domain] = $sitename;
  $sites['stage.' . $domain] = $sitename;
  $sites['qa.' . $domain] = $sitename;
  $sites[$sitename] = $sitename;

  // $domain may have been empty; if so, do not add it.
  if (!empty($domain)) {
    $sites[$domain] = $sitename;
    $sites['local.' . $domain] = $sitename;
  }
}

// Allow users to define their own $sites aliases with a sites.local.php, if desired.
if (file_exists(__DIR__ . '/sites.local.php')) {
  require_once __DIR__ . '/sites.local.php';
}

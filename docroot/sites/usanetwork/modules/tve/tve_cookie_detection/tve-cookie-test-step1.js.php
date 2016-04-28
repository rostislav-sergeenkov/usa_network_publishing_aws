<?php

header('Content-Type: application/javascript; charset=UTF-8');
header('Cache-Control: no-cache, must-revalidate, post-check=0, pre-check=0');

setcookie('tve_3rdpc', 1, time() + 3600 * 24 * 7);

echo 'tve.cookieDetection.addScriptTag(tve.cookieDetection.checkCookieUrl);';
exit;

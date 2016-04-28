<?php

header('Content-Type: application/javascript; charset=UTF-8');
header('Cache-Control: no-cache, must-revalidate, post-check=0, pre-check=0');

$status = !empty($_COOKIE['tve_3rdpc']);
setcookie('tve_3rdpc', 0, time() - 3600);

echo 'tve.cookieDetection.thirdPartyCookieCheck(' . ($status ? 'true' : 'false') . ');';
exit;

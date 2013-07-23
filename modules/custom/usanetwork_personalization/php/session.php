<?php
// session.php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

if (!session_id())
{
  session_start();
}

function setSession($user)
{
  $_COOKIE[''] = setcookie();
}

function removeSession()
{

}

switch ($method) {
  // user should be logged in already
  // check for session and / or cookies
  // and return user info
  case 'GET':
    // get user session info and return it
    if (!empty($_SESSION))
    {
      echo '<pre>SESSION: '.print_r($_SESSION, true).'</pre><br>'; die();
      return session_id();
    }
    elseif (array_key_exists('PHPSESSID', $_COOKIE))
    {
      return $_COOKIE['PHPSESSID'];
    }
    else
    {

    }
    break;
  // login or register the user
  // set up session and cookies
  case 'POST':
    // set up user session
    $user = isset($_POST['user']) ? $_POST['user'] : '';
    setSession($user);
    break;
  // user is logging out
  // destroy session and cookies
  case 'DELETE':
    // delete user session info
    removeSession();
    session_destroy();
    break;
  default:
    // do nothing
    break;
}


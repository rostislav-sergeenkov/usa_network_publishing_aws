<?php
// session.php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
$userId = (strlen($_GET['userId']) > 0) ? $_GET['userId'] : null;
$auth = (strlen($_GET['auth']) > 0) ? $_GET['auth'] : null;
$token = (strlen($_GET['token']) > 0) ? $_GET['token'] : null;
$salt = 'st58ccsoe#548gshoehuii8^245sh';

function setHash($token)
{
  $hash = md5($token . '_usanework.com_'.$salt);
  return $hash;
}

function checkSession($token)
{
  $temp = explode('|||', $token);
  $userId = $temp[0];
  $hash = $temp[1];
  if (setHash($userId) == $hash)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function setSession($user)
{
  if (isset($user['_id']))
  {
    // set cookies
    $person = array();
    $person['_id'] = $user['_id'];
    $person['username'] = isset($user['username']) ? $user['username'] : '';
    $person['loggedIn'] = 1;
    $person['points'] = 0;
    $person['avatar'] = isset($user['avatar']) ? $user['avatar'] : '/sites/usanetwork/files/styles/default_avatar_125x125.jpg';
    if (isset($user['_gigya_login_provider']) && $user['_gigya_login_provider'] != '')
    {
      $person['fbLoggedIn'] = ($user['_gigya_login_provider'] == 'facebook' && isset($user['_provider']['facebook']) && $user['_provider']['facebook'] != '') ? $user['_provider']['facebook'] : 0;
      $person['twLoggedIn'] = ($user['_gigya_login_provider'] == 'twitter' && isset($user['_provider']['twitter']) && $user['_provider']['twitter'] != '') ? $user['_provider']['twitter'] : 0;
    }
    else
    {
      $person['fbLoggedIn'] = 0;
      $person['twLoggedIn'] = 0;
    }
    $personStr = json_encode($person);
    setcookie('usa_idx', $user['_id'].'|||'.setHash($user['_id']), 0, '/', '.usanetwork.com');
    setcookie('usa_idx_id', $personStr, 0, '/', '.usanetwork.com');
    $_COOKIE['usa_idx'] = $user['_id'].'|||'.setHash($user['_id']);
    $_COOKIE['usa_idx_id'] = $personStr;
  }
  else
  {
    // remove / expire cookies
    setcookie('usa_idx', '', time()-60000, '/', '.usanetwork.com');
    setcookie('usa_idx_id', '', time()-60000, '/', '.usanetwork.com');
    $_COOKIE['usa_idx'] = '';
    $_COOKIE['usa_idx_id'] = '';
  }
}

function removeSession()
{
  // remove / expire cookies
  setcookie('usa_idx', '', time()-60000, '/', '.usanetwork.com');
  setcookie('usa_idx_id', '', time()-60000, '/', '.usanetwork.com');
  $_COOKIE['usa_idx'] = '';
  $_COOKIE['usa_idx_id'] = '';
}

switch ($method) {
  // GET: user should be logged in already
  // check for session and / or user cookies
  // and return user info
  case 'GET':
    // get user session info and return it
    if (isset($_COOKIE) && array_key_exists('usa_idx', $_COOKIE) && checkSession($_COOKIE['usa_idx']))
    {
      if (array_key_exists('usa_idx_id', $_COOKIE))
      {
        echo $_COOKIE['usa_idx_id'];
        return true;
      }
      else
      {
        return null;
      }
    }
    else
    {
      return null;
    }
    break;
  // POST: login or register the user
  // set up session and cookies
  case 'POST':
    // set up user session
    if (isset($_POST)) setSession($_POST);
    break;
  // DELETE: user is logging out
  // remove / expire cookies
  case 'DELETE':
    removeSession();
    break;
  default:
    // do nothing
    break;
}

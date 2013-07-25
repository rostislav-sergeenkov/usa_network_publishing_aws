<?php
// session.php
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
$userId = (strlen($_GET['userId']) > 0) ? $_GET['userId'] : null;
$auth = (strlen($_GET['auth']) > 0) ? $_GET['auth'] : null;
$token = (strlen($_GET['token']) > 0) ? $_GET['token'] : null;

function setHash($token)
{
  $hash = md5($token . '_usanework.com');
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
/*
echo '<pre>user: '.print_r($user, true).'</pre><br>'; die();
<pre>user: Array
(
    [_updated] => 2013-07-25T14:59:01.098000
    [username] => devDonnaCP4
    [_logged_in] => true
    [_last_login] => 2013-07-25T14:59:01.088000
    [status] => active
    [avatar] => http://graph.facebook.com/100000235895439/picture?type=square
    [_created] => 2012-09-27T21:00:09.398000
    [_id] => aaf46ef20d5a456098c7f385ff1a6aec
    [_provider] => Array
        (
            [twitter] => 180130658
            [facebook] => 100000235895439
        )

    [_gigya_login_provider] => twitter
    [_auth_signature] => 486df597eb833c3cf923671fadfc24ee
    [_login_token] => mZTkCwYK/MH8hrX1DlRiwOSZ8XoDCBXMORfAJ8SUMgtG
    [firstname] =>
    [lastname] =>
)
</pre><br>
*/
  if (isset($user['_id']))
  {
    // set cookies
    $person = array();
    $person['_id'] = $user['_id'];
    $person['username'] = isset($user['username']) ? $user['username'] : '';
    $person['loggedIn'] = 1;
    $person['points'] = 0;
    $person['avatar'] = '';
    $person['fbLoggedIn'] = (isset($user['_gigya_login_provider']) && $user['_gigya_login_provider'] == 'facebook' && isset($user['_provider']['facebook']) && $user['_provider']['facebook'] != '') ? $user['_provider']['facebook'] : 0;
    $person['twLoggedIn'] = (isset($user['_gigya_login_provider']) && $user['_gigya_login_provider'] == 'twitter' && isset($user['_provider']['twitter']) && $user['_provider']['twitter'] != '') ? $user['_provider']['twitter'] : 0;
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

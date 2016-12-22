<?php
// usa_session.php
// CONFIG
$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
$userId = (strlen($_GET['userId']) > 0) ? $_GET['userId'] : null;
$auth = (strlen($_GET['auth']) > 0) ? $_GET['auth'] : null;
$token = (strlen($_GET['token']) > 0) ? $_GET['token'] : null;
$salt = 'st58ccsoe#548gshoehuii8^245sh';
$baseUserIdentityUrl = 'http://www.usanetwork.com/profile';
$bpBusName = 'usanetwork';
$bpSecret = 'c4a5d631abfc82c5084801bfbd6bd146';


// CURL
function usa_curl($url, $dataStr = '')
{
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_PROXY, 'localhost:1540');
  $data = array();
  if ($dataStr != '') parse_str($dataStr, $data);

  curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

  //make the request
  $result = curl_exec($ch);
  $info = curl_getinfo($ch);

echo '<pre>result: '.print_r($result, true).'</pre><br>';
echo '<pre>info: '.print_r($info, true).'</pre><br>';

  // Close the curl session
  curl_close($ch);
die();
}


// TWITTER AVATAR
function usa_getTwitterAvatar($twUserId)
{
  require_once('twitteroauth.php');

  $consumer_key = 'rn6Pqk5yW3NYzLG79j6ug';
  $consumer_secret = 'vlyxy9XXeiD9WwGzFXVQQqdnP6Mg2Iyy0EZKWY0NaY';
  $host = 'http://'.$_SERVER['HTTP_HOST'];

  if(!isset($_SESSION['access_token']))
  {
    $connection = new TwitterOAuth($consumer_key, $consumer_secret);
    $callbackUrl = $host.'/surf/test';
    $request_token = $connection->getRequestToken($callbackUrl);

    // Save temporary credentials to session
    $_SESSION['oauth_token'] = $token = $request_token['oauth_token'];
    $_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];
    // If last connection failed don't display authorization link

    switch ($connection->http_code)
    {

      case 200:
        // Build authorize URL and redirect user to Twitter.
        $url = $connection->getAuthorizeURL($token);
        echo json_encode($url);
        exit;
        break;
      default:
        // Show notification if something went wrong.
        echo 'Could not connect to Twitter. Refresh the page or try again later.';
        break;
    }

    if(!isset($_REQUEST['denied']))
    {
      echo 'Comming Here';
      exit;
      $connection = new TwitterOAuth($consumer_key, $consumer_secret, $_SESSION['oauth_token'], $_SESSION['oauth_token_secret']);

      //request acess token from twitter
      $access_token = $connection->getAccessToken($_REQUEST['oauth_verifier']);
      $_SESSION['access_token'] = $access_token;
    }
  }

  $response = usa_curl('https://api.twitter.com/1.1/users/show.json', 'user_id='.$twUserId);
//  $response = drupal_http_request('https://api.twitter.com/1.1/users/show.json?user_id='.$twUserId);
//  $response = curl_http_request('https://api.twitter.com/1.1/users/show.json?user_id='.$twUserId);
echo '<pre>response: '.print_r($response, true).'</pre><br>'; die();
}

// SESSION HANDLING
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


// BACKPLANE
include('backplane.php');
function setBackplaneSession($username, $avatar)
{
  global $bpBusName, $bpSecret, $baseUserIdentityUrl;
  $channel = $_COOKIE['bp_channel_id'];

  // send message to BP server
  $bp = new Backplane($bpBusName, $bpSecret);
  $rsp = $bp->send(array(
    "source" => "http://usanetwork.com",
    "type" => "identity/login",
    "channel" => $channel,
    "user_id_url" => $baseUserIdentityUrl.'/'.$username,
    "display_name" => $username,
    "photo" => $avatar
  ));
  //echo '<pre>rsp: '.print_r($rsp, true).'</pre>'."\n";
}

function removeBackplaneSession()
{
  global $bpBusName, $bpSecret, $baseUserIdentityUrl;

  if (isset($_COOKIE['bp_channel_id']) && $_COOKIE['bp_channel_id'] != '')
  {
    $channel = $_COOKIE['bp_channel_id'];
    $userObj = (!empty($_COOKIE['usa_idx_id'])) ? json_decode($_COOKIE['usa_idx_id']) : null;
    if ($userObj)
    {
      $username = $userObj->username;
      $avatar = $userObj->avatar;
      // send message to BP server
      $bp = new Backplane($bpBusName, $bpSecret);
      $rsp = $bp->send(array(
        "source" => "http://usanetwork.com",
        "type" => "identity/logout",
        "channel" => $channel,
        "user_id_url" => $baseUserIdentityUrl.'/'.$username,
        "display_name" => $username,
        "photo" => $avatar
      ));
      //echo '<pre>rsp: '.print_r($rsp, true).'</pre>'."\n";
    }
  }
}

function setSession($user)
{
  $defaultAvatar = 'http://'.$_SERVER['HTTP_HOST'].'/sites/usanetwork/modules/custom/usanetwork_personalization/images/default_avatar_125x125.jpg';

  if (isset($user['_id']))
  {
    // set cookies
    $person = array();
    $person['_id'] = $user['_id'];
    $person['_auth_signature'] = $user['_auth_signature'];
    $person['username'] = isset($user['username']) ? $user['username'] : '';
    $person['loggedIn'] = 1;
    $person['points'] = 0;
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

    // set avatar
    if (isset($user['avatar']))
    {
      $person['avatar'] = $user['avatar'];
    }
    elseif($person['fbLoggedIn'] != 0)
    {
      $fbAvatar = 'https://graph.facebook.com/'.$person['fbLoggedIn'].'/picture?width=200&height=200';
      $person['avatar'] = $fbAvatar;
    }
    elseif($person['twLoggedIn'] != 0)
    {
      //echo '<pre>';
      //print_r($_COOKIE);
      $twAvatar = $_COOKIE['socialavatar'];
      $person['avatar'] = $twAvatar;
    }
    else
    {
      $person['avatar'] = $defaultAvatar;
    }

/*    $person['avatar'] = isset($user['avatar']) ? $user['avatar'] : $defaultAvatar;
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
*/
    $personStr = json_encode($person);
    setcookie('usa_idx', $user['_id'].'|||'.setHash($user['_id']), 0, '/', '.usanetwork.com');
    setcookie('usa_idx_id', $personStr, 0, '/', '.usanetwork.com');
    $_COOKIE['usa_idx'] = $user['_id'].'|||'.setHash($user['_id']);
    $_COOKIE['usa_idx_id'] = $personStr;
  }
  else
  {
    removeBackplaneSession();
    // remove / expire cookies
    setcookie('usa_idx', '', time()-60000, '/', '.usanetwork.com');
    setcookie('usa_idx_id', '', time()-60000, '/', '.usanetwork.com');
    $_COOKIE['usa_idx'] = '';
    $_COOKIE['usa_idx_id'] = '';
  }
}

function removeSession()
{
  removeBackplaneSession();
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
    // if this is Backplane login
    if (isset($_GET) && array_key_exists('bpLogin', $_GET)
      && array_key_exists('username', $_GET)
      && array_key_exists('avatar', $_GET)
    )
    {
      // @TODO: add some clean input functionality to the following to prevent hacking
      $username = $_GET['username'];
      $avatar = $_GET['$avatar'];
      setBackplaneSession($username, $avatar);
    }
    // else get user session info and return it
    elseif (isset($_COOKIE) && array_key_exists('usa_idx', $_COOKIE) && checkSession($_COOKIE['usa_idx']))
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
    elseif(isset($_REQUEST['oauth_token']) && isset($_REQUEST['oauth_verifier']))
    {
     echo 'Cookie values <br>';
     echo "usa_idx_id => " . $_COOKIE['usa_idx_id']."<br>";
     echo "usa_idx => " . $_COOKIE['usa_idx']."<br>";
     //exit;
      setSession($_GET);
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

<?php
/*
 * This is a simple PHP file that uses a PHP class to send an email based on some input params
 */
require_once('class.email.php');
require_once('validate-email.php');

function sanitizeInput($input)
{
	if (get_magic_quotes_gpc())
	{
		$output = trim(stripslashes($input));
	}
	else
	{
		$output = trim($input);
	}

	return $output;
}

$returnData = array('success'=>'0', 'errors'=>array());

// configuration

/*
$config = array(
	'validReferers' => array(
		'http://test.usanetwork.com/videos/email/index.html',
		'http://test.usanetwork.com/videos/',
		'http://test.usanetwork.com/videos-dev/',
		'http://www.usanetwork.com/videos/',
		'http://origin-www.usanetwork.com/videos/'
	),
	'emailSubject' => 'Your friend just sent you a link to a video on USA Network!',
	'emailHTMLBody' => '<html><head></head><body>Hi %friendsName%,<br>Your friend, %yourName%, thought you\'d like to see this video on USANetwork.com:<br>%link%</body></html>',
	'emailPlainTextBody' => 'Hi %friendsName%,\n\nYour friend, %yourName%, thought you\'d like to see this video on USANetwork.com:\n\n%link%',
	'emailReplyToAddress' => '',
	'emailCc' => '',
	'emailBcc' => ''
);
*/

$config = array(
	'validReferers' => array(
		'http://test.usanetwork.com/videos/',
		'http://test.usanetwork.com/videos-dev/',
		'http://www.usanetwork.com/videos/',
		'http://origin-www.usanetwork.com/videos/',
		'http://www2.usanetwork.com/videos/',
		'http://stage.usanetwork.com/videos/',
		'http://dev.usanetwork.com/videos/',
		'http://player.theplatform.com/'
	),
	'emailSubject' => 'Your friend just sent you a link to a video on USA Network!',
	'emailHTMLBody' => '<html><head></head><body>Hi %friendsName%,<br>Your friend, %yourName%, thought you\'d like to see this video on USANetwork.com:<br>%link%</body></html>',
	'emailPlainTextBody' => 'Hi %friendsName%,\n\nYour friend, %yourName%, thought you\'d like to see this video on USANetwork.com:\n\n%link%',
	'emailReplyToAddress' => '',
	'emailCc' => '',
	'emailBcc' => ''
);



// check for POST
if (strtolower($_SERVER['REQUEST_METHOD']) == 'post')
{
	// make sure request comes from the same domain
	$referer = strtolower($_SERVER['HTTP_REFERER']);
	
	$count = 0;
	foreach($config['validReferers'] as $configvalue)
	{
		$pos = strpos($referer, $configvalue);
		if($pos === 0)
		{
			$count++;
		}
	}

	if ($count == 0)
	{
		$returnData['errors'][] = array('id'=>'2', 'description'=>'Invalid referer');
	}	


/*	
	if (!in_array($referer, $config['validReferers']))
	{
		$returnData['errors'][] = array('id'=>'2', 'description'=>'Invalid referer');
	}
*/
	
	// get params
	$params = array();
	$params['friendsName'] = sanitizeInput($_POST['friendsName']);
	$params['friendsEmail'] = sanitizeInput($_POST['friendsEmail']);
	$params['yourName'] = sanitizeInput($_POST['yourName']);
	$params['yourEmail'] = sanitizeInput($_POST['yourEmail']);
	$params['message'] = sanitizeInput($_POST['message']);
	$params['link'] = sanitizeInput($_POST['link']);
	
	// validate params, empty vals
	if (strlen($params['friendsName']) == 0)
	{
		$returnData['errors'][] = array('id'=>'3', 'description'=>'"Friend\'s Name" parameter required.');
	}
	if (strlen($params['friendsEmail']) == 0)
	{
		$returnData['errors'][] = array('id'=>'4', 'description'=>'"Friend\'s Email" parameter required.');
	}
	if (strlen($params['yourName']) == 0)
	{
		$returnData['errors'][] = array('id'=>'5', 'description'=>'"Your Name" parameter required.');
	}
	if (strlen($params['yourEmail']) == 0)
	{
		$returnData['errors'][] = array('id'=>'6', 'description'=>'"Your Email" parameter required.');
	}
	if (strlen($params['link']) == 0)
	{
		$returnData['errors'][] = array('id'=>'12', 'description'=>'"Link" parameter required.');
	}
	
	// validate params, param max length
	if (strlen($params['friendsName']) > 100)
	{
		$returnData['errors'][] = array('id'=>'7', 'description'=>'"Friend\'s Name" parameter too long.');
	}
	if (strlen($params['friendsEmail']) > 100)
	{
		$returnData['errors'][] = array('id'=>'8', 'description'=>'"Friend\'s Email" parameter too long.');
	}
	if (strlen($params['yourName']) > 100)
	{
		$returnData['errors'][] = array('id'=>'9', 'description'=>'"Your Name" parameter too long.');
	}
	if (strlen($params['yourEmail']) > 100)
	{
		$returnData['errors'][] = array('id'=>'10', 'description'=>'"Your Email" parameter too long.');
	}
	if (strlen($params['message']) > 500)
	{
		$returnData['errors'][] = array('id'=>'11', 'description'=>'"Message" parameter too long.');
	}
	if (strlen($params['link']) > 1000)
	{
		$returnData['errors'][] = array('id'=>'13', 'description'=>'"Link" parameter too long.');
	}
	
	// validate email addresses
	if (is_rfc3696_valid_email_address($params['friendsEmail']) == 0)
	{
		$returnData['errors'][] = array('id'=>'14', 'description'=>'Invalid email address for "Friend\s Email" parameter.');
	}
	
	if (is_rfc3696_valid_email_address($params['yourEmail']) == 0)
	{
		$returnData['errors'][] = array('id'=>'15', 'description'=>'Invalid email address for "Your Email" parameter.');
	}
	
	
	// send email
	$to = $params['friendsName'] . ' <' . $params['friendsEmail'] . '>';
	$from = $params['yourName'] . ' <' . $params['yourEmail'] . '>';
	$cc = $config['emailCc'];
	$bcc = $config['emailBcc'];
	$subject = $config['emailSubject'];
	
	$emailBodyFind = array(
		'%friendsName%',
		'%friendsEmail%',
		'%yourName%',
		'%yourEmail%',
		'%message%',
		'%link%'
	);
	$emailBodyReplace = array();
	$emailBodyReplace[] = $params['friendsName'];
	$emailBodyReplace[] = $params['friendsEmail'];
	$emailBodyReplace[] = $params['yourName'];
	$emailBodyReplace[] = $params['yourEmail'];
	$emailBodyReplace[] = $params['message'];
	$emailBodyReplace[] = $params['link'];
	
	$plainText = str_replace($emailBodyFind, $emailBodyReplace, $config['emailPlainTextBody']);
	$htmlText = str_replace($emailBodyFind, $emailBodyReplace, $config['emailHTMLBody']);
	
	/*
	echo '$to: '. $to . '<br>';
	echo '$cc: '. $cc . '<br>';
	echo '$bcc: '. $bcc . '<br>';
	echo '$from: '. $from . '<br>';
	echo '$subject: '. $subject . '<br>';
	echo '$replyTo: '. $replyTo . '<br>';
	echo '$plainText: '. $plainText . '<br>';
	echo '$htmlText: '. $htmlText . '<br>';
	die();
	*/
	
	if (empty($returnData['errors']))
	{
		$emailObj = new Email();
		$response = $emailObj->send($to, $cc, $bcc, $from, $subject, $replyTo, $plainText, $htmlText);
		
		// set return data
		if (!$response)
		{
			$returnData['errors'][] = array('id'=>'1', 'description'=>'There was an unkown error sending the email');
		}
		else
		{
			$returnData['success'] = '1';
		}
	}
}
else
{
	// we only allow POST here folks!
	$returnData['errors'][] = array('id'=>'0', 'description'=>'Only POST method is allowed');
}

// return our php array as a json string
header("Content-type: text/javascript;\n");
echo json_encode($returnData);
die();
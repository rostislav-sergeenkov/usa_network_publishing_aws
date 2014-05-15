<?php
define('SITE_NAME', 'www.usanetwork.com');

class Email
{
	public function __construct() 
    {
		
    }
	
	public function send($to, $cc, $bcc, $from, $subject, $replyTo, $plainText, $htmlText) 
	{	
		if (get_magic_quotes_gpc()) 
		{
			$plainText = stripslashes($plainText);
			$htmlText = stripslashes($htmlText);			
		}
		
		$semi_rand = md5(time());
		$mime_boundary = "==MULTIPART_BOUNDARY_$semi_rand";
		$mime_boundary_header = chr(34) . $mime_boundary . chr(34);
		
		$body = "\n";
		
		//////// PLAIN TEXT
		if ($plainText) 
		{   
			if ($htmlText != '') 
			{
				$body .= "\n";	
				$body .= "--$mime_boundary\n";
				$body .= "Content-Type: text/plain; charset=us-ascii\n";
				$body .= "Content-Transfer-Encoding: 7bit\n";
				$body .= "\n";
			}
			$body .= $plainText;
		}
		
		//////// HTMLTEXT
		if ($htmlText) 
		{    
			if ($plainText != '') 
			{
				$body .= "\n";
				$body .= "--$mime_boundary\n";
				$body .= "Content-Type: text/html; charset=us-ascii\n";
				$body .= "Content-Transfer-Encoding: 7bit\n";
				$body .= "\n";
				$body .= $htmlText;
				$body .= "\n";
				$body .= "--$mime_boundary--\n";
			}
			else
			{
			 	$body .= $htmlText;
			}
		}
		
		$header = "From: " . $from . "\n";
		$header.= "cc: " . $cc . "\n";
		$header.= "bcc: " . $bcc . "\n";
		if ($replyTo)
		{
			$header.= "Reply-To: " . $replyTo . "\n";
		}
		$header.= "MIME-Version: 1.0\n";

		if (isset($_SERVER['SERVER_NAME']))
		{
			$serverName = $_SERVER['SERVER_NAME'];
		} 
		else
		{
			$serverName = SITE_NAME;
		}
		
		$header .= "Message-ID: <".time().SITE_NAME."@".$serverName.">\n";
		$header .= "X-Mailer: PHP v".phpversion()."\n";          // These two to help avoid spam-filters
		
		if ($htmlText && $plainText) 
		{

			$header.= "Content-Type: multipart/alternative;\n";
			$header.= "     boundary=" . $mime_boundary_header;
		}
		else 
		{
			if ($htmlText) 
			{
				$header .= "Content-Type: text/html; charset=us-ascii\n";
				$header .= "Content-Transfer-Encoding: 7bit\n";	
			}
			else 
			{
				$header .= "Content-Type: text/plain; charset=us-ascii\n";
				$header .= "Content-Transfer-Encoding: 7bit\n";
			}
		}

		if (@mail($to, $subject, $body, $header))
		{
			// Success
		    return true;
		} 
		else
		{
			// Fail
			// log error using your site's error log function
			return false;
		}
	}
}
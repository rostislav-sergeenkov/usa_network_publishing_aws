<?php
/**
 * @file
 * usanetwork_tve_video.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_tve_video_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_adobe_pass_accessenabler_loc';
  $strongarm->value = 'http://entitlement.auth.adobe.com/entitlement/AccessEnabler.swf';
  $export['tve_adobe_pass_accessenabler_loc'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_adobe_pass_requestor_id';
  $strongarm->value = 'usa';
  $export['tve_adobe_pass_requestor_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_adobe_pass_resource_id';
  $strongarm->value = 'usa';
  $export['tve_adobe_pass_resource_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_cookies';
  $strongarm->value = array(
    'header' => 'COOKIES MUST BE ENABLED TO USE THIS SITE HERE’S HOW TO DO IT:',
    'desktop_ie' => array(
      'body' => array(
        'value' => '1. Open Internet Explorer by clicking the Start button Picture of the Start button, and then clicking Internet Explorer.
2. Click the Tools button, and then click Internet Options.
3. Click the Privacy tab, and then, under Settings, move the slider to the top to block all cookies or to the bottom to allow all cookies, and then click OK.
4. Reload the page',
        'format' => 'plain_text',
      ),
    ),
    'desktop_safari' => array(
      'body' => array(
        'value' => '1. Click on the "Cog" icon in Safari.
2. Safari cookies - Tools>Preferences
3. Click Preferences...
4. Change to the Security tab.
5. Safari cookies - Security / Allow cookies
6. Select "Only from sites I visit" or "Always".
7. Reload the page',
        'format' => 'plain_text',
      ),
    ),
    'desktop_chrome' => array(
      'body' => array(
        'value' => '1. Select the Chrome menu icon from the top right of your browser; the icon looks like three horizontal bars
2. Select Settings
3. At the bottom of the page select Show advanced settings
4. Scroll down to the Privacy section and select Content settings
5. Select "Allow local data to be set (recommended)"
6. Uncheck the box for “Block third-party cookies and site data”
7. Select Done to save
8. Reload the page',
        'format' => 'plain_text',
      ),
    ),
    'desktop_ff' => array(
      'body' => array(
        'value' => '1. Click the menu button and choose Options.
2. Select the Privacy panel.
3. Set Firefox will: to Use custom settings for history. 
4. Check mark Accept cookies from sites to enable Cookies.
5. Reload the page',
        'format' => 'plain_text',
      ),
    ),
    'desktop_other' => array(
      'body' => array(
        'value' => 'Cookies must be enabled to use this site',
        'format' => 'plain_text',
      ),
    ),
    'mobile_safari' => array(
      'body' => array(
        'value' => 'Cookies must be enabled to use this site',
        'format' => 'plain_text',
      ),
    ),
    'mobile_chrome' => array(
      'body' => array(
        'value' => 'Cookies must be enabled to use this site',
        'format' => 'plain_text',
      ),
    ),
    'mobile_other' => array(
      'body' => array(
        'value' => 'Cookies must be enabled to use this site',
        'format' => 'plain_text',
      ),
    ),
  );
  $export['tve_auth2_cookies'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_draft_additional';
  $strongarm->value = array(
    'behavior' => 'none',
    'error_configs' => array(
      'general' => array(
        'title' => 'Sorry! There\'s a problem.',
        'description' => array(
          'value' => 'Sorry about that! We seem to be experiencing a technical issue right now. Please try again later.',
          'format' => 'plain_text',
        ),
      ),
      'flash' => array(
        'title' => 'Sorry! Your device isn\'t currently configured to play our videos.',
        'description' => array(
          'value' => 'To watch USA Live or Video Full Episodes:
Adobe Flash is required to play our videos. You can get it at <a href="http://get.adobe.com/flashplayer/" title="adobe.com" target="_blank">adobe.com</a>.
On an iOS or Android device, you need to download our USA NOW app.
<a href="http://www.usanetwork.com/app">See the full list of our Apps available for download here.</a>',
          'format' => 'plain_text',
        ),
      ),
      'adobepass' => array(
        'title' => 'Sorry! There\'s a problem.',
        'description' => array(
          'value' => 'Sorry about that! The login is not available now. Please try again later.',
          'format' => 'plain_text',
        ),
      ),
      'macsafari' => array(
        'title' => 'Sorry! There\'s a problem with your flash version.',
        'description' => array(
          'value' => 'Please update to the latest flash version.',
          'format' => 'plain_text',
        ),
      ),
      'private_browsing' => array(
        'title' => 'You are in Private Browsing Mode.',
        'description' => array(
          'value' => 'We noticed you are attempting to use our site in a private or incognito browsing mode which interferes with cookies.  To utilize this site you must be in a normal browser mode with cookies enabled.',
          'format' => 'plain_text',
        ),
      ),
    ),
  );
  $export['tve_auth2_draft_additional'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_draft_login_window';
  $strongarm->value = array(
    'text_line_1' => array(
      'text' => 'Watch USA Network Shows and movies from anywhere',
    ),
    'text_line_2' => array(
      'text' => array(
        'value' => 'Select your TV provider:',
        'format' => 'plain_text',
      ),
    ),
    'text_line_3' => array(
      'text' => 'or find your provider below & login',
    ),
    'text_line_4' => array(
      'text' => 'Need help? Visit our FAQs',
      'zendesk_url' => FALSE,
      'url' => 'http://www.usanetwork.com/help-faq',
    ),
    'text_line_5' => array(
      'text' => 'NBCUniversal does not collect any of your account information',
    ),
    'preview' => 'Preview "Login Modal Window"',
  );
  $export['tve_auth2_draft_login_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_draft_third_party_cookies';
  $strongarm->value = array(
    'header' => '',
    'desktop_ie' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_safari' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_chrome' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_ff' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_other' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_safari' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_chrome' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_other' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
  );
  $export['tve_auth2_draft_third_party_cookies'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_draft_welcome_window';
  $strongarm->value = array(
    'brand_logo' => array(
      'fid' => 0,
    ),
    'text_top' => array(
      'text' => '',
      'style' => '',
    ),
    'text_center' => array(
      'text' => '',
      'style' => '',
    ),
    'text_bottom' => array(
      'text' => '',
      'style' => '',
    ),
    'buttons' => array(
      'yes_title' => '',
      'yes_description' => '',
      'no_title' => '',
      'no_description' => '',
      'no_url' => '',
      'no_url_target' => 0,
    ),
    'preview' => 'Preview "Welcome Modal Window"',
  );
  $export['tve_auth2_draft_welcome_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_published_additional';
  $strongarm->value = array(
    'behavior' => 'none',
    'error_configs' => array(
      'general' => array(
        'title' => 'Sorry! There\'s a problem.',
        'description' => array(
          'value' => 'Sorry about that! We seem to be experiencing a technical issue right now. Please try again later.',
          'format' => 'plain_text',
        ),
      ),
      'flash' => array(
        'title' => 'Sorry! Your device isn\'t currently configured to play our videos.',
        'description' => array(
          'value' => 'To watch USA Live or Video Full Episodes:
Adobe Flash is required to play our videos. You can get it at <a href="http://get.adobe.com/flashplayer/" title="adobe.com" target="_blank">adobe.com</a>.
On an iOS or Android device, you need to download our USA NOW app.
<a href="http://www.usanetwork.com/app">See the full list of our Apps available for download here.</a>',
          'format' => 'plain_text',
        ),
      ),
      'adobepass' => array(
        'title' => 'Sorry! There\'s a problem.',
        'description' => array(
          'value' => 'Sorry about that! The login is not available now. Please try again later.',
          'format' => 'plain_text',
        ),
      ),
      'macsafari' => array(
        'title' => 'Sorry! There\'s a problem with your flash version.',
        'description' => array(
          'value' => 'Please update to the latest flash version.',
          'format' => 'plain_text',
        ),
      ),
      'private_browsing' => array(
        'title' => 'You are in Private Browsing Mode.',
        'description' => array(
          'value' => 'We noticed you are attempting to use our site in a private or incognito browsing mode which interferes with cookies.  To utilize this site you must be in a normal browser mode with cookies enabled.',
          'format' => 'plain_text',
        ),
      ),
    ),
  );
  $export['tve_auth2_published_additional'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_published_login_window';
  $strongarm->value = array(
    'text_line_1' => array(
      'text' => 'Watch USA Network Shows and movies from anywhere',
    ),
    'text_line_2' => array(
      'text' => array(
        'value' => 'Select your TV provider:',
        'format' => 'plain_text',
      ),
    ),
    'text_line_3' => array(
      'text' => 'or find your provider below & login',
    ),
    'text_line_4' => array(
      'text' => 'Need help? Visit our FAQs',
      'zendesk_url' => FALSE,
      'url' => 'http://www.usanetwork.com/help-faq',
    ),
    'text_line_5' => array(
      'text' => 'NBCUniversal does not collect any of your account information',
    ),
    'preview' => 'Preview "Login Modal Window"',
  );
  $export['tve_auth2_published_login_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_published_third_party_cookies';
  $strongarm->value = array(
    'header' => '',
    'desktop_ie' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_safari' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_chrome' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_ff' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'desktop_other' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_safari' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_chrome' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
    'mobile_other' => array(
      'body' => array(
        'value' => '',
        'format' => 'plain_text',
      ),
    ),
  );
  $export['tve_auth2_published_third_party_cookies'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth2_published_welcome_window';
  $strongarm->value = array(
    'brand_logo' => array(
      'fid' => 0,
    ),
    'text_top' => array(
      'text' => '',
      'style' => '',
    ),
    'text_center' => array(
      'text' => '',
      'style' => '',
    ),
    'text_bottom' => array(
      'text' => '',
      'style' => '',
    ),
    'buttons' => array(
      'yes_title' => '',
      'yes_description' => '',
      'no_title' => '',
      'no_description' => '',
      'no_url' => '',
      'no_url_target' => 0,
    ),
    'preview' => 'Preview "Welcome Modal Window"',
  );
  $export['tve_auth2_published_welcome_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_service';
  $strongarm->value = 'http://mvpd-admin.nbcuni.com/mvpd/service';
  $export['tve_mvpd_service'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_service_url';
  $strongarm->value = 'http://mvpd-admin.nbcuni.com/mvpd/service/usa/prod';
  $export['tve_mvpd_service_url'] = $strongarm;

  return $export;
}

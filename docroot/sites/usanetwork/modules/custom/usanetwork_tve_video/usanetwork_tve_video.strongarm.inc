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
  $strongarm->name = 'sitecatalyst_tve_report_suite_id';
  $strongarm->value = 'nbcutve';
  $export['sitecatalyst_tve_report_suite_id'] = $strongarm;

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
  $strongarm->name = 'tve_auth_adobe_pass_body_text';
  $strongarm->value = array(
    'value' => '<p>Oops! Looks like you need to upgrade your Flash Player.</p>
<p><a href="http://get.adobe.com/flashplayer/" target="_blank">Download the latest version</a>&nbsp;and try again.</p>',
    'format' => 'wysiwyg_full_html',
  );
  $export['tve_auth_adobe_pass_body_text'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_adobe_pass_header_title';
  $strongarm->value = 'Sorry there is a problem';
  $export['tve_auth_adobe_pass_header_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_draft_login_window_1';
  $strongarm->value = array(
    'image' => array(
      'fid' => 0,
    ),
    'left_block_text' => array(
      'value' => '<h1>Select your TV provider</h1>
<h2>Here\'s what you\'ll get:</h2>
<ul class="bullet-list">
<li><span>Your favorite USA shows the day after they air</span></li>
<li><span>A cinematic experience across your devices</span></li>
</ul>',
      'format' => 'wysiwyg_basic',
    ),
    'right_block_header_text' => array(
      'value' => '<h2>Select your provider and sign in</h2>',
      'format' => 'wysiwyg_basic',
    ),
    'footer_text' => 'Do not see your provider?',
    'footer_link_text' => 'Search by zip',
    'preview' => 'Preview "Login window step 1"',
  );
  $export['tve_auth_draft_login_window_1'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_draft_welcome_modal';
  $strongarm->value = array(
    'variant' => 'none',
  );
  $export['tve_auth_draft_welcome_modal'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_draft_welcome_window';
  $strongarm->value = array(
    'title' => 'Welcome to USA Now',
    'more_details_link_text' => 'More Details Please',
    'block_1_image' => array(
      'fid' => 0,
    ),
    'block_1_text' => array(
      'value' => '<h2 class="sub-head">Select your TV provider</h2>
<p class="feature-copy">Verify your provider to watch your favorite shows the day after they air.</p>',
      'format' => 'wysiwyg_basic',
    ),
    'block_2_image' => array(
      'fid' => 0,
    ),
    'block_2_text' => array(
      'value' => '<h2 class="sub-head">Watch TV anywhere</h2>
<p class="feature-copy"><span class="hideOnMobile">Watch on all your devices, anywhere life takes you.</span></p>',
      'format' => 'wysiwyg_basic',
    ),
    'block_3_image' => array(
      'fid' => 0,
    ),
    'block_3_text' => array(
      'value' => '',
      'format' => 'wysiwyg_basic',
    ),
    'start_button_text' => 'Get Started',
    'big_image' => array(
      'fid' => 0,
    ),
    'footer_text' => 'Skip this step,',
    'footer_link_text' => 'I just want to browse.',
    'preview' => 'Preview "Welcome window"',
  );
  $export['tve_auth_draft_welcome_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_flash_body_text';
  $strongarm->value = array(
    'value' => '<p>Oops! Looks like you need to upgrade your Flash Player.</p>
<p><a href="http://get.adobe.com/flashplayer/" target="_blank">Download the latest version</a>&nbsp;and try again.</p>',
    'format' => 'wysiwyg_full_html',
  );
  $export['tve_auth_flash_body_text'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_flash_header_title';
  $strongarm->value = 'Sorry there is a problem';
  $export['tve_auth_flash_header_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_generic_section_body_text';
  $strongarm->value = array(
    'value' => '<p>Oops! Looks like you need to upgrade your Flash Player.</p>
<p><a href="http://get.adobe.com/flashplayer/" target="_blank">Download the latest version</a> and try again.</p>',
    'format' => 'wysiwyg_full_html',
  );
  $export['tve_auth_generic_section_body_text'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_generic_section_header_title';
  $strongarm->value = 'Sorry there is a problem';
  $export['tve_auth_generic_section_header_title'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_published_login_window_1';
  $strongarm->value = array(
    'image' => array(
      'fid' => 0,
    ),
    'left_block_text' => array(
      'value' => '<h1>Select your TV provider</h1>
<h2>Here\'s what you\'ll get:</h2>
<ul class="bullet-list">
<li><span>Your favorite USA shows the day after they air</span></li>
<li><span>A cinematic experience across your devices</span></li>
</ul>',
      'format' => 'wysiwyg_basic',
    ),
    'right_block_header_text' => array(
      'value' => '<h2>Select your provider and sign in</h2>',
      'format' => 'wysiwyg_basic',
    ),
    'footer_text' => 'Do not see your provider?',
    'footer_link_text' => 'Search by zip',
    'preview' => 'Preview "Login window step 1"',
  );
  $export['tve_auth_published_login_window_1'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_published_welcome_modal';
  $strongarm->value = array(
    'variant' => 'none',
  );
  $export['tve_auth_published_welcome_modal'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_auth_published_welcome_window';
  $strongarm->value = array(
    'title' => 'Welcome to USA Now',
    'more_details_link_text' => 'More Details Please',
    'block_1_image' => array(
      'fid' => 0,
    ),
    'block_1_text' => array(
      'value' => '<h2 class="sub-head">Select your TV provider</h2>
<p class="feature-copy">Verify your provider to watch your favorite shows the day after they air.</p>',
      'format' => 'wysiwyg_basic',
    ),
    'block_2_image' => array(
      'fid' => 0,
    ),
    'block_2_text' => array(
      'value' => '<h2 class="sub-head">Watch TV anywhere</h2>
<p class="feature-copy"><span class="hideOnMobile">Watch on all your devices, anywhere life takes you.</span></p>',
      'format' => 'wysiwyg_basic',
    ),
    'block_3_image' => array(
      'fid' => 0,
    ),
    'block_3_text' => array(
      'value' => '',
      'format' => 'wysiwyg_basic',
    ),
    'start_button_text' => 'Get Started',
    'big_image' => array(
      'fid' => 0,
    ),
    'footer_text' => 'Skip this step,',
    'footer_link_text' => 'I just want to browse.',
    'preview' => 'Preview "Welcome window"',
  );
  $export['tve_auth_published_welcome_window'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_k2_api_url';
  $strongarm->value = 'http://nbcutve.viewerlink.tv/';
  $export['tve_k2_api_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_k2_brand_id';
  $strongarm->value = 'usa';
  $export['tve_k2_brand_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_k2_client_id';
  $strongarm->value = 'NBCUTV';
  $export['tve_k2_client_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_brand_id';
  $strongarm->value = 'usa';
  $export['tve_mvpd_brand_id'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_instance';
  $strongarm->value = 'prod';
  $export['tve_mvpd_instance'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'tve_mvpd_providers';
  $strongarm->value = array(
    'comcast-sso' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dtv' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dish' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'twc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'verizon' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'att' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cox' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'charter-direct' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cablevision' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'brighthouse' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'suddenlink' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mediacom' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wow' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'rcn' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-armstrongmywire-com' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'com140' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'acecommunications' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'acm010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'acc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'algona' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'allwest' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'spl010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'all070' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'alpine' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hun015' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'antietam' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'arkwest' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'arvig' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nttcash010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'astound' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dix030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'ara010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-atlanticbb-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'atmc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'baldwin' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bay030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'baycreek' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bektel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bra020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'vol040-01' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bend' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'www-websso-mybrctv-com' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bte010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'annearundel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'btc010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'buckeye' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'burlington-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'but010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bvu' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tel160-csp' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'csicable' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'phe030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cab140' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cableamerica' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-camtel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'car030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'canbytel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'crt020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'car050' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cas' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'casscomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cccomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cfunet' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dem010-01' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dem010-02' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dem010-03' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dem010-04' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dem010-05' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-centurylink-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cha060' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dur010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cimtel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cbt' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cit180' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cit210' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cit040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'war040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wadsworth' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cla010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'clearcreek' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'clickcabletv-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cli030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cml010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cns' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'coa030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'col090' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'col070' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'com020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cat020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'consolidatedcable' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'consolidated-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'conwaycorp' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'crestview' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cross' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cro030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'ctcommunications' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'ctc040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cun010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dak030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tel160-del' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'guam' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'eagle' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-east' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'easton-utilities' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'eatel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'emerytelcom' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'endeavor' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sun045' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mid030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'enventis-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'epb-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fbc-tele' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fal010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fid010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fli020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fbcomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tel160-fra' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'frontier' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'fullchannel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gardenvalley' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gbt010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gci-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'clr010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gla010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gle010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gra060' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'goldenwest' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'googlefiber-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'grande' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gpcom' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gta-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'gvtc-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hargray-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'har005' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'har020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-hawaiiantel-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hbc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hea040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'htc020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hometowncable-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hometel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hometelecom-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hoodcanal' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-hope' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'horizoncable' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'hotwirecommunications-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'harrison-telco' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'htccomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'htc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'imon' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'stc020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'car100' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'icc010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'int050' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'itv-bitwise' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'jea' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'kal030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'kmt010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'kpu010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'kuh010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'lau020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'liberty-cable' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bra010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'lit020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'loc010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'longlines-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-longview' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'lns010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'lumos' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'lus-fiber' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'madison' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'man060' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mctv' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'merrimac' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-metrocast-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'metronet' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mhtc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'miconnection' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'midhudson' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'midrivers' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'msauth-midco-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mid045' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mil080' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'morrisbroadband-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mtacomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'med040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'musfiber' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mpw' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nctc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'dur010-nel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nem010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nwcable-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nextech-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nor240' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cic010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nktelco' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nortex' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nor140' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'northstate' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nor030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nor125' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'net010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'new045' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nulink' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'onesource' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'openband-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'daltonutilities' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'orbitel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'ote010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'otter' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'paulbunyan' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'pem020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'mck010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'phonoscope' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-pine' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'pioncomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'pioneer' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'pottawatomie' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'premiercomm' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'psc010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'rai030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'myrtu-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-resort' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'riv030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'rma' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'rockportcable' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'rtc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sav010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'selco' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'service-electric-bb' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'service-electric' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'serviceelectric-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'she010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'she030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sjoberg' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sky050' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sou075' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sou035' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'spe010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'srt010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'summit-broadband' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sum010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-surewest-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sweetwater' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-talequah' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tct' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tds-auth-gateway-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'com050' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tcc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tro010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'auth-truvista-net' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tsc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cit220' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'tvtinc' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'uis010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'unitedtel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'uss020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cab060' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'she005' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'val025' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'valunet' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'sul015' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'ver025' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-vicksburg' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'vis070' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'volcanotel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'vol040-02' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bci010-02' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'waitsfield' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wal010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wavebroadband' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'carolinata' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wct010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wes110' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'westianet' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'nttcwhi010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'weh010-white' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'win090' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wcta' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wtc010' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wil040' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'yadtel' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cou060' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'col080' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'res020' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'bra050' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'val030' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'wal005' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
    'cit230' => array(
      'mvpd_logo' => 'field_mvpd_logo_dark',
      'mvpd_color' => 'field_mvpd_light_color',
    ),
  );
  $export['tve_mvpd_providers'] = $strongarm;

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

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

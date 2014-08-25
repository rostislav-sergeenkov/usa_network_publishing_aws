<?php
/**
 * @file
 * usanetwork_strongarm.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_strongarm_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'jquery_update_compression_type';
  $strongarm->value = 'min';
  $export['jquery_update_compression_type'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'jquery_update_jquery_admin_version';
  $strongarm->value = '';
  $export['jquery_update_jquery_admin_version'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'jquery_update_jquery_cdn';
  $strongarm->value = 'none';
  $export['jquery_update_jquery_cdn'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'jquery_update_jquery_version';
  $strongarm->value = '1.7';
  $export['jquery_update_jquery_version'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'subpathauto_depth';
  $strongarm->value = '2';
  $export['subpathauto_depth'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_footer_ad_choices_text';
  $strongarm->value = '<a id="_bapw-link" ><img id="_bapw-icon" style="display:inline !important;vertical-align:middle !important"/> <span style="vertical-align:middle !important">AdChoices</span></a><script>(function(){var e=document,b,a=(e.location.protocol=="https:"?"https":"http"),c=(a=="https"?"https://info.evidon.com/c/betrad/pub/":"http://cdn.betrad.com/pub/");e.getElementById("_bapw-icon").src=c+"icon1.png";e.getElementById("_bapw-link").onclick=function(){var f=this;function d(i,l){var j=e.getElementsByTagName("head")[0]||e.documentElement,h=false,g=e.createElement("script");function k(){g.onload=g.onreadystatechange=null;j.removeChild(g);l()}g.src=i;g.onreadystatechange=function(){if(!h&&(this.readyState=="loaded"||this.readyState=="complete")){h=true;k()}};g.onload=k;j.insertBefore(g,j.firstChild)}this.onclick="return false";d(a+"://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js",function(){d(c+"pub1.js",function(){BAPW.i(f,{pid:204,ocid:908},false)})});return false};b=new Image();b.src=a+"://l.betrad.com/pub/p.gif?pid=204&ocid=908&ii=1&r="+Math.random()}());</script>';
  $export['usanetwork_footer_ad_choices_text'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_footer_message';
  $strongarm->value = '&copy;YYYY NBCUniversal, Inc. All Rights Reserved. A Division of NBC Universal';
  $export['usanetwork_footer_message'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_lyris_endpoint';
  $strongarm->value = 'http://usa.sparklist.com:82/?wsdl';
  $export['usanetwork_lyris_endpoint'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_lyris_password';
  $strongarm->value = 'trix4kids';
  $export['usanetwork_lyris_password'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_lyris_proxyhost';
  $strongarm->value = 'usushproxy01.udh.unistudios.com';
  $export['usanetwork_lyris_proxyhost'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_lyris_proxyport';
  $strongarm->value = '';
  $export['usanetwork_lyris_proxyport'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_lyris_username';
  $strongarm->value = 'websupport@nbcuni.com';
  $export['usanetwork_lyris_username'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_tv_schedule_accessibility_text';
  $strongarm->value = array(
    'value' => '<div class="accessibility-left">
<h1>Accessibility at USA Network</h1>
<p>USA Network is proud to offer the blind and visually impaired video description of its original and acquired programming. Beginning July 1, 2012, USA will describe at least 50 hours of programming per quarter including hit shows such as Covert Affairs, Common Law, Suits, Royal Pains, Psych, Law &amp; Order: SVU and NCIS, along with select movies.</p>
<p>USA and its Characters Unite public service campaign to combat prejudice and discrimination have a longstanding commitment to accessibility and the Network will continue to build on this initiative to make its programming available to all.</p>
</div>
<div class="accessibility-right">
<h1>Directions for Accessing Video Description</h1>
<ul class="list">
<li>Select the SAP (secondary audio) feature through your television or set top box. The television manual and customer service department can assist in activating this feature.</li>
<li>When activated, the video description will provide explanations of the program\'s visuals during the natural pauses in the dialogue.</li>
<li>Go to <a href="/accessibility">usanetwork.com/accessibility</a> or call 212- 664-7010 for up-to-date listings and schedule information.</li>
</ul>
</div>',
    'format' => 'plain_text',
  );
  $export['usanetwork_tv_schedule_accessibility_text'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_tv_schedule_xml_feed';
  $strongarm->value = 'http://www.usanetwork.com/compassfeeds/USA_Network_YYYY_MM_DD.xml';
  $export['usanetwork_tv_schedule_xml_feed'] = $strongarm;

  return $export;
}

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
  $strongarm->name = 'usanetwork_more_menu_links';
  $strongarm->value = '<div class="more-title">More on USA</div>
<div class="item-list">
  <ul>
    <li class="">  
      <span>        <a href="/law-order-svu" title="LAW &amp; ORDER: SVU " class="mega-sub-nav-link"><span class="flagged">New!</span> LAW &amp; ORDER: SVU</a>  </span>
    </li>
    <li class="">  
      <span>        <a href="/xfiles" title="XFiles " class="mega-sub-nav-link">XFiles</a>  </span>
    </li>
    <li class="">  
      <span>        <a href="/psych" title="Psych " class="mega-sub-nav-link">Psych</a>  </span>
    </li>
    <li class="">  
      <span>        <a href="/new-show-0514" title="New Show - 05/14 " class="mega-sub-nav-link">New Show - 05/14</a>  </span>
    </li>
    <li class="">  
      <span>        <a href="/common-law" title="Common Law " class="mega-sub-nav-link">Common Law</a>  </span>
    </li>
    <li class="">  
      <span>        <a href="/new-show-58" title="New Show 5/8 " class="mega-sub-nav-link">New Show 5/8</a>  </span>
    </li>
  </ul>
</div>';
  $export['usanetwork_more_menu_links'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_tv_schedule_xml_feed';
  $strongarm->value = 'http://www.usanetwork.com/compassfeeds/USA_Network_YYYY_MM_DD.xml';
  $export['usanetwork_tv_schedule_xml_feed'] = $strongarm;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_blocks.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_blocks_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_social_links';
  $strongarm->value = '<div class="footer-social-bar">
<a class="facebook" data-name="facebook" href="https://www.facebook.com/USANetwork"></a>
<a class="twitter" data-name="twitter" href="https://twitter.com/usa_network"></a>
<a class="instagram" data-name="instagram" href="http://instagram.com/USANetwork"></a>
</div>';
  $export['usanetwork_social_links'] = $strongarm;

  return $export;
}

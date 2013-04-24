<?php
/**
 * @file
 * pub_gigya_overrides.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function pub_gigya_overrides_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_APIKey';
  $strongarm->value = '2_p7HRGkwnEQpK0MzXUGXqWe-jZBb58hOsv9c3nJBa_riAktHijqVQmKrk2KLN_Ki6';
  $export['gigya_APIKey'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_SecretKey';
  $strongarm->value = 'iPtQGLlY5Q+0rv5UtN8nwoR3B0D+uv9dRr1qeJ1a8/I=';
  $export['gigya_SecretKey'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'gigya_share_showcounts';
  $strongarm->value = 'none';
  $export['gigya_share_showcounts'] = $strongarm;

  return $export;
}

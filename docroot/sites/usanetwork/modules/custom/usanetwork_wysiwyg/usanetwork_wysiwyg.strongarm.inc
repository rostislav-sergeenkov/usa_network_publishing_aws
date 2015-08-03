<?php
/**
 * @file
 * usanetwork_wysiwyg.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_wysiwyg_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_gallery_default_view_mode';
  $strongarm->value = 'inline_content';
  $export['usanetwork_entity_insert_gallery_default_view_mode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_gallery_enabled';
  $strongarm->value = array(
    'node' => array(
      0 => 'media_gallery',
    ),
  );
  $export['usanetwork_entity_insert_gallery_enabled'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_gallery_view_modes';
  $strongarm->value = array(
    'inline_content' => 'inline_content',
  );
  $export['usanetwork_entity_insert_gallery_view_modes'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_video_default_view_mode';
  $strongarm->value = 'inline_content';
  $export['usanetwork_entity_insert_video_default_view_mode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_video_enabled';
  $strongarm->value = array(
    'file' => array(
      0 => 'mpx_video_1',
    ),
  );
  $export['usanetwork_entity_insert_video_enabled'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'usanetwork_entity_insert_video_view_modes';
  $strongarm->value = array(
    'inline_content' => 'inline_content',
  );
  $export['usanetwork_entity_insert_video_view_modes'] = $strongarm;

  return $export;
}

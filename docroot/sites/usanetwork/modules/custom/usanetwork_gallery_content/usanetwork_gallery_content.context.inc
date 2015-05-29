<?php
/**
 * @file
 * usanetwork_gallery_content.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_gallery_content_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'media_gallery';
  $context->description = '';
  $context->tag = 'node';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'media_gallery' => 'media_gallery',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_menu-usanetwork_menu_consumptionator' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_consumptionator',
          'region' => 'header',
          'weight' => '-10',
        ),
        'mps-topbanner' => array(
          'module' => 'mps',
          'delta' => 'topbanner',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
        'usanetwork_media_gallery-usa_gallery_consumptionator_main' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_consumptionator_main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_mpx_video-usanetwork_social_content' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usanetwork_social_content',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_media_gallery-usa_gallery_cons_related' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_cons_related',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('node');
  $export['media_gallery'] = $context;

  return $export;
}

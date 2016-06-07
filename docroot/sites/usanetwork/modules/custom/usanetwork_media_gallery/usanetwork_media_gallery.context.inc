<?php
/**
 * @file
 * usanetwork_media_gallery.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_media_gallery_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'photos_landing';
  $context->description = 'Show Photos Landing Page';
  $context->tag = 'shows';
  $context->conditions = array(
    'context' => array(
      'values' => array(
        '~photos_landing_newdesign' => '~photos_landing_newdesign',
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/photos' => 'node/*/photos',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_media_gallery-usa_gallery_show_gallery_lmb' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_show_gallery_lmb',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_media_gallery-usa_gallery_show_gallery_all' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_show_gallery_all',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('Show Photos Landing Page');
  t('shows');
  $export['photos_landing'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'photos_landing_newdesign';
  $context->description = 'Show Photos Landing Page of New Design';
  $context->tag = 'shows';
  $context->conditions = array(
    'new_design_show' => array(
      'values' => array(
        1 => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/photos' => 'node/*/photos',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_media_gallery-usa_gallery_show_gallery_filters' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_show_gallery_filters',
          'region' => 'header',
          'weight' => '0',
        ),
        'usanetwork_media_gallery-usa_gallery_show_gallery_lmb' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_show_gallery_lmb',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_media_gallery-usa_gallery_show_gallery_all' => array(
          'module' => 'usanetwork_media_gallery',
          'delta' => 'usa_gallery_show_gallery_all',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('Show Photos Landing Page of New Design');
  t('shows');
  $export['photos_landing_newdesign'] = $context;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_site_map.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_site_map_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usanetwork_site_map';
  $context->description = 'Ads for page site map';
  $context->tag = 'Site map';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'sitemap' => 'sitemap',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'dart-dart-tag-728x90_970x66_scr' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-728x90_970x66_scr',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
        'dart-dart-tag-300x250_scr' => array(
          'module' => 'dart',
          'delta' => 'dart-tag-300x250_scr',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Ads for page site map');
  t('Site map');
  $export['usanetwork_site_map'] = $context;

  return $export;
}

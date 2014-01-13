<?php
/**
 * @file
 * usanetwork_search.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_search_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'search';
  $context->description = '';
  $context->tag = 'search';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'search' => 'search',
        'search/*' => 'search/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_tv_schedule-usa_on_now_block' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_block',
          'region' => 'head_general',
          'weight' => '-10',
        ),
        'usanetwork_tv_schedule-usa_on_now_panel' => array(
          'module' => 'usanetwork_tv_schedule',
          'delta' => 'usa_on_now_panel',
          'region' => 'on_now',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('search');
  $export['search'] = $context;

  return $export;
}

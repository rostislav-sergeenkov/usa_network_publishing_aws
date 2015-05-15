<?php
/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_episodes_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'episodes_landing';
  $context->description = 'Show Episodes Landing Page';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/show-episodes' => 'node/*/show-episodes',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_episodes-usa_landing_tvep_list_block' => array(
          'module' => 'usanetwork_episodes',
          'delta' => 'usa_landing_tvep_list_block',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Show Episodes Landing Page');
  t('shows');

  $export['episodes_landing'] = $context;

  return $export;
}

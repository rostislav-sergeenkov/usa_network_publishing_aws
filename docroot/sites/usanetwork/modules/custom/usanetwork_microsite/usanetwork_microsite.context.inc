<?php
/**
 * @file
 * usanetwork_microsite.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_microsite_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'microsite';
  $context->description = 'microsites';
  $context->tag = 'microsite';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'show_microsite' => 'show_microsite',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('microsite');
  t('microsites');
  $export['microsite'] = $context;

  return $export;
}

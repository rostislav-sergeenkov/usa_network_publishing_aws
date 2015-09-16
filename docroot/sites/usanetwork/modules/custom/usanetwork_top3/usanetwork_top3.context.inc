<?php
/**
 * @file
 * usanetwork_top3.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_top3_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'top3_node';
  $context->description = '';
  $context->tag = 'node';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'top3_gallery' => 'top3_gallery',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_top3-usanetwork_top3_main_block' => array(
          'module' => 'usanetwork_top3',
          'delta' => 'usanetwork_top3_main_block',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('node');
  $export['top3_node'] = $context;

  return $export;
}

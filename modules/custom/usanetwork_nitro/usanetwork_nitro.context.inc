<?php
/**
 * @file
 * usanetwork_nitro.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_nitro_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usa_nitro';
  $context->description = 'Adds code to page to allow Nitro rewards';
  $context->tag = 'nitro pages';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'media_gallery' => 'media_gallery',
        'person' => 'person',
        'tv_episode' => 'tv_episode',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_nitro-usa_nitro' => array(
          'module' => 'usanetwork_nitro',
          'delta' => 'usa_nitro',
          'region' => 'header',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adds code to page to allow Nitro rewards');
  t('nitro pages');
  $export['usa_nitro'] = $context;

  return $export;
}

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
  $context->name = 'usanetwork_microsite';
  $context->description = '';
  $context->tag = 'node';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/microsite' => 'node/*/microsite',
        'node/*/microsite/*' => 'node/*/microsite/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_menu-usanetwork_menu_sm_menu' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_sm_menu',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_menu-usanetwork_menu_consumptionator' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_consumptionator',
          'region' => 'header',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('node');
  $export['usanetwork_microsite'] = $context;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_static_page.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_static_page_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'static_page';
  $context->description = '';
  $context->tag = 'node';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'usanetwork_static_page' => 'usanetwork_static_page',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_menu-usanetwork_menu_page_header' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_page_header',
          'region' => 'header',
          'weight' => '30',
        ),
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
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
  $export['static_page'] = $context;

  return $export;
}

<?php

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_person_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'node_person';
  $context->description = '';
  $context->tag = 'node';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'person' => 'person',
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
        'usanetwork_person-usa_cons_chars_main_block' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usa_cons_chars_main_block',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_person-usa_cons_chars_social' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usa_cons_chars_social',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_person-usa_cons_chars_related_content' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usa_cons_chars_related_content',
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



  $export['node_person'] = $context;

  return $export;
}

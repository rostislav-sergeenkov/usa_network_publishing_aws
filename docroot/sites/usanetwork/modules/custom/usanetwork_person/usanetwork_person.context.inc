<?php
/**
 * @file
 * usanetwork_person.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_person_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'cast_landing';
  $context->description = '';
  $context->tag = 'shows';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/cast' => 'node/*/cast',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_person-usanetwork_person_cast_lmb_block' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usanetwork_person_cast_lmb_block',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_person-usanetwork_person_cast_crew' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usanetwork_person_cast_crew',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_person-usanetwork_person_cast_recap' => array(
          'module' => 'usanetwork_person',
          'delta' => 'usanetwork_person_cast_recap',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('shows');
  $export['cast_landing'] = $context;
  
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
        'usanetwork_mpx_video-usanetwork_social_content' => array(
          'module' => 'usanetwork_mpx_video',
          'delta' => 'usanetwork_social_content',
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

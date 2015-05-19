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
        'node/*/episodes' => 'node/*/episodes',
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

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'tv_episode';
  $context->description = 'TV Episode page';
  $context->tag = 'node';
  $context->conditions = array(
    'node' => array(
      'values' => array(
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
        'usanetwork_menu-usanetwork_menu_consumptionator' => array(
          'module' => 'usanetwork_menu',
          'delta' => 'usanetwork_menu_consumptionator',
          'region' => 'header',
          'weight' => '-10',
        ),
        'usanetwork_episodes-usanetwork_episodes_gallery_rec' => array(
          'module' => 'usanetwork_episodes',
          'delta' => 'usanetwork_episodes_gallery_rec',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('TV Episode page');
  t('node');

  $export['tv_episode'] = $context;

  return $export;
}

<?php
/**
 * @file
 * usanetwork_movie.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_movie_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'movie_page';
  $context->description = '';
  $context->tag = 'movies';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'movie' => 'movie',
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
  t('movies');
  $export['movie_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'movies_all';
  $context->description = '';
  $context->tag = 'movies';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'all-movies' => 'movies',
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
          'weight' => '-10',
        ),
        'usanetwork_movie-usanetwork_movie_mb' => array(
          'module' => 'usanetwork_movie',
          'delta' => 'usanetwork_movie_mb',
          'region' => 'content',
          'weight' => '-10',
        ),
        'usanetwork_movie-usanetwork_movie_all_movies' => array(
          'module' => 'usanetwork_movie',
          'delta' => 'usanetwork_movie_all_movies',
          'region' => 'content',
          'weight' => '-9',
        ),
        'usanetwork_movie-usanetwork_movie_schedule' => array(
          'module' => 'usanetwork_movie',
          'delta' => 'usanetwork_movie_schedule',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('movies');
  $export['movies_all'] = $context;

  return $export;
}

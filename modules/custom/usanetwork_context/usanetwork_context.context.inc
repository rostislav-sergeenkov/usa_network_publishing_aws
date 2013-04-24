<?php
/**
 * @file
 * usanetwork_context.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_context_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usanetwork_homepage';
  $context->description = 'The content in this context will appear on the site front page.';
  $context->tag = 'homepage';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_blocks-usa_on_now_block' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_on_now_block',
          'region' => 'main_prefix',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('The content in this context will appear on the site front page.');
  t('homepage');
  $export['usanetwork_homepage'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'usanetwork_sitewide';
  $context->description = '';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'sitewide' => array(
      'values' => array(
        1 => 1,
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_blocks-usa_meganav' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_meganav',
          'region' => 'header',
          'weight' => '-10',
        ),
        'menu-usa-footer-top' => array(
          'module' => 'menu',
          'delta' => 'usa-footer-top',
          'region' => 'footer',
          'weight' => '-18',
        ),
        'usanetwork_blocks-usa_social_footer' => array(
          'module' => 'usanetwork_blocks',
          'delta' => 'usa_social_footer',
          'region' => 'footer',
          'weight' => '-17',
        ),
        'menu-usa-footer-bottom' => array(
          'module' => 'menu',
          'delta' => 'usa-footer-bottom',
          'region' => 'footer',
          'weight' => '-16',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('sitewide');
  $export['usanetwork_sitewide'] = $context;

  return $export;
}

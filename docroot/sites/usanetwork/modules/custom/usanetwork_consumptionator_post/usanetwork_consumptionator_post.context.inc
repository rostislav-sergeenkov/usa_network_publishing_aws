<?php
/**
 * @file
 * usanetwork_consumptionator_post.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function usanetwork_consumptionator_post_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'blog_landing';
  $context->description = 'Blog Landing Page';
  $context->tag = 'shows';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'consumpt_blog' => 'consumpt_blog',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/blog' => 'node/*/blog',
        'node/*/blog/*' => 'node/*/blog/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'usanetwork_consumptionator_post-usa_landing_blog_post_list_block' => array(
          'module' => 'usanetwork_consumptionator_post',
          'delta' => 'usa_landing_blog_post_list_block',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Blog Landing Page');
  t('shows');
  $export['blog_landing'] = $context;

  return $export;
}

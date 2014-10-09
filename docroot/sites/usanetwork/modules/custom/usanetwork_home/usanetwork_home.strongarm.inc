<?php
/**
 * @file
 * usanetwork_home.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_home_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ant_pattern_usa_homepage';
  $strongarm->value = '[node:field_usa_hp_daylist]';
  $export['ant_pattern_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ant_usa_homepage';
  $strongarm->value = '1';
  $export['ant_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__usa_homepage';
  $strongarm->value = array(
    'view_modes' => array(
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'print' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'carousel_promo' => array(
        'custom_settings' => FALSE,
      ),
      'home_promo' => array(
        'custom_settings' => FALSE,
      ),
      'admin_reference_preview' => array(
        'custom_settings' => FALSE,
      ),
      'promoted_content' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title_lg' => array(
        'custom_settings' => FALSE,
      ),
      'cast_carousel' => array(
        'custom_settings' => FALSE,
      ),
      'follow_social' => array(
        'custom_settings' => FALSE,
      ),
      'global_nav_block' => array(
        'custom_settings' => TRUE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'home_promo_bspot' => array(
        'custom_settings' => FALSE,
      ),
      'promo_teaser' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_episode' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_general' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_show_episode' => array(
        'custom_settings' => FALSE,
      ),
      'vid_teaser_show_general' => array(
        'custom_settings' => FALSE,
      ),
      'global_nav_block_more' => array(
        'custom_settings' => TRUE,
      ),
      'global_nav_block_shows' => array(
        'custom_settings' => TRUE,
      ),
      'inline_content' => array(
        'custom_settings' => TRUE,
      ),
      'page_collection_resources' => array(
        'custom_settings' => TRUE,
      ),
      'user_ref_preview' => array(
        'custom_settings' => FALSE,
      ),
      'promo_teaser_large' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '9',
        ),
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '10',
        ),
        'redirect' => array(
          'weight' => '11',
        ),
        'xmlsitemap' => array(
          'weight' => '12',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_usa_homepage';
  $strongarm->value = array();
  $export['menu_options_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_usa_homepage';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_usa_homepage';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_usa_homepage';
  $strongarm->value = '1';
  $export['node_preview_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_usa_homepage';
  $strongarm->value = 0;
  $export['node_submitted_usa_homepage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_usa_homepage';
  $strongarm->value = '';
  $export['representative_image_field_node_usa_homepage'] = $strongarm;

  return $export;
}

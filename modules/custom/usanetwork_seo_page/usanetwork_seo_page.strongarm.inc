<?php
/**
 * @file
 * usanetwork_seo_page.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_seo_page_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_catchall_seo_page';
  $strongarm->value = '0';
  $export['comment_anonymous_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_catchall_seo_page';
  $strongarm->value = '1';
  $export['comment_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_catchall_seo_page';
  $strongarm->value = 1;
  $export['comment_default_mode_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_catchall_seo_page';
  $strongarm->value = '50';
  $export['comment_default_per_page_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_catchall_seo_page';
  $strongarm->value = 1;
  $export['comment_form_location_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_catchall_seo_page';
  $strongarm->value = '1';
  $export['comment_preview_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_catchall_seo_page';
  $strongarm->value = 1;
  $export['comment_subject_field_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__catchall_seo_page';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'inline_content' => array(
        'custom_settings' => TRUE,
      ),
      'page_collection_resources' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
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
      'user_ref_preview' => array(
        'custom_settings' => FALSE,
      ),
      'admin_reference_preview' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title_lg' => array(
        'custom_settings' => FALSE,
      ),
      'carousel_promo' => array(
        'custom_settings' => FALSE,
      ),
      'cast_carousel' => array(
        'custom_settings' => FALSE,
      ),
      'follow_social' => array(
        'custom_settings' => FALSE,
      ),
      'global_nav_block_more' => array(
        'custom_settings' => FALSE,
      ),
      'global_nav_block_shows' => array(
        'custom_settings' => FALSE,
      ),
      'home_promo' => array(
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
      'promo_teaser_large' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '8',
        ),
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '7',
        ),
        'redirect' => array(
          'weight' => '6',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_catchall_seo_page';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_catchall_seo_page';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_catchall_seo_page';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_catchall_seo_page';
  $strongarm->value = '1';
  $export['node_preview_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_catchall_seo_page';
  $strongarm->value = 0;
  $export['node_submitted_catchall_seo_page'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_catchall_seo_page_pattern';
  $strongarm->value = '[node:field_show]/[node:title]';
  $export['pathauto_node_catchall_seo_page_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pub_mpx_video_media_browser_view_name';
  $strongarm->value = 'browser_plugin_for_clips';
  $export['pub_mpx_video_media_browser_view_name'] = $strongarm;

  return $export;
}

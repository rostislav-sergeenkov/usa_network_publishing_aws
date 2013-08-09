<?php
/**
 * @file
 * usanetwork_tv_shows.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function usanetwork_tv_shows_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_tv_episode';
  $strongarm->value = 0;
  $export['comment_anonymous_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_tv_season';
  $strongarm->value = 0;
  $export['comment_anonymous_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_tv_show';
  $strongarm->value = 0;
  $export['comment_anonymous_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_tv_episode';
  $strongarm->value = 1;
  $export['comment_default_mode_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_tv_season';
  $strongarm->value = 1;
  $export['comment_default_mode_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_tv_show';
  $strongarm->value = 1;
  $export['comment_default_mode_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_tv_episode';
  $strongarm->value = '50';
  $export['comment_default_per_page_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_tv_season';
  $strongarm->value = '50';
  $export['comment_default_per_page_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_tv_show';
  $strongarm->value = '50';
  $export['comment_default_per_page_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_tv_episode';
  $strongarm->value = 1;
  $export['comment_form_location_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_tv_season';
  $strongarm->value = 1;
  $export['comment_form_location_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_tv_show';
  $strongarm->value = 1;
  $export['comment_form_location_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_tv_episode';
  $strongarm->value = '1';
  $export['comment_preview_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_tv_season';
  $strongarm->value = '1';
  $export['comment_preview_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_tv_show';
  $strongarm->value = '1';
  $export['comment_preview_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_tv_episode';
  $strongarm->value = 1;
  $export['comment_subject_field_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_tv_season';
  $strongarm->value = 1;
  $export['comment_subject_field_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_tv_show';
  $strongarm->value = 1;
  $export['comment_subject_field_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_tv_episode';
  $strongarm->value = '2';
  $export['comment_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_tv_season';
  $strongarm->value = '2';
  $export['comment_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_tv_show';
  $strongarm->value = '2';
  $export['comment_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__tv_episode';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => TRUE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'print' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'portable_gallery' => array(
        'custom_settings' => FALSE,
      ),
      'user_ref_preview' => array(
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
      'carousel_promo' => array(
        'custom_settings' => FALSE,
      ),
      'cast_carousel' => array(
        'custom_settings' => FALSE,
      ),
      'follow_social' => array(
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
      'search_index' => array(
        'custom_settings' => TRUE,
      ),
      'search_result' => array(
        'custom_settings' => TRUE,
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
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '1',
        ),
        'path' => array(
          'weight' => '8',
        ),
        'metatags' => array(
          'weight' => '7',
        ),
        'redirect' => array(
          'weight' => '9',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__tv_season';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'print' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'portable_gallery' => array(
        'custom_settings' => FALSE,
      ),
      'user_ref_preview' => array(
        'custom_settings' => FALSE,
      ),
      'admin_reference_preview' => array(
        'custom_settings' => FALSE,
      ),
      'promoted_content' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '2',
        ),
        'path' => array(
          'weight' => '8',
        ),
        'metatags' => array(
          'weight' => '5',
        ),
        'redirect' => array(
          'weight' => '11',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__tv_show';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'print' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'portable_gallery' => array(
        'custom_settings' => FALSE,
      ),
      'user_ref_preview' => array(
        'custom_settings' => FALSE,
      ),
      'admin_reference_preview' => array(
        'custom_settings' => FALSE,
      ),
      'promoted_content' => array(
        'custom_settings' => FALSE,
      ),
      'block_cover_title' => array(
        'custom_settings' => TRUE,
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
        'custom_settings' => TRUE,
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
      'search_index' => array(
        'custom_settings' => TRUE,
      ),
      'search_result' => array(
        'custom_settings' => TRUE,
      ),
      'social_follow' => array(
        'custom_settings' => TRUE,
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
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '1',
        ),
        'path' => array(
          'weight' => '6',
        ),
        'metatags' => array(
          'weight' => '5',
        ),
        'flag' => array(
          'weight' => '10',
        ),
        'redirect' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_tv_episode';
  $strongarm->value = array();
  $export['menu_options_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_tv_season';
  $strongarm->value = array();
  $export['menu_options_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_tv_show';
  $strongarm->value = array();
  $export['menu_options_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_tv_episode';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_tv_season';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_tv_show';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_tv_episode';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_tv_season';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_tv_show';
  $strongarm->value = array(
    0 => 'revision',
  );
  $export['node_options_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_tv_episode';
  $strongarm->value = '1';
  $export['node_preview_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_tv_season';
  $strongarm->value = '1';
  $export['node_preview_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_tv_show';
  $strongarm->value = '1';
  $export['node_preview_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_tv_episode';
  $strongarm->value = 0;
  $export['node_submitted_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_tv_season';
  $strongarm->value = 0;
  $export['node_submitted_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_tv_show';
  $strongarm->value = 0;
  $export['node_submitted_tv_show'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_tv_episode';
  $strongarm->value = 'field_tv_cover_media';
  $export['representative_image_field_node_tv_episode'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_tv_season';
  $strongarm->value = 'field_tv_cover_media';
  $export['representative_image_field_node_tv_season'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'representative_image_field_node_tv_show';
  $strongarm->value = 'field_logo';
  $export['representative_image_field_node_tv_show'] = $strongarm;

  return $export;
}

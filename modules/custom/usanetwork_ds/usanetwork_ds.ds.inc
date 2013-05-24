<?php
/**
 * @file
 * usanetwork_ds.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_ds_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'block_cover_title';
  $ds_view_mode->label = 'block_cover_title';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['block_cover_title'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'block_cover_title_lg';
  $ds_view_mode->label = 'block_cover_title_lg';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['block_cover_title_lg'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'carousel_promo';
  $ds_view_mode->label = 'carousel_promo';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['carousel_promo'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'cast_carousel';
  $ds_view_mode->label = 'cast_carousel';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['cast_carousel'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'follow_social';
  $ds_view_mode->label = 'follow_social';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['follow_social'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'home_promo';
  $ds_view_mode->label = 'home_promo';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['home_promo'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'home_promo_bspot';
  $ds_view_mode->label = 'home_promo_bspot';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['home_promo_bspot'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'person_cover_image';
  $ds_view_mode->label = 'person_cover_image';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['person_cover_image'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'promo_teaser';
  $ds_view_mode->label = 'promo_teaser';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['promo_teaser'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'thumb_tiny';
  $ds_view_mode->label = 'thumb_tiny';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['thumb_tiny'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'usa_term_icon';
  $ds_view_mode->label = 'usa_term_icon';
  $ds_view_mode->entities = array(
    'taxonomy_term' => 'taxonomy_term',
  );
  $export['usa_term_icon'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_episode';
  $ds_view_mode->label = 'vid_teaser_episode';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['vid_teaser_episode'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_general';
  $ds_view_mode->label = 'vid_teaser_general';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['vid_teaser_general'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_show_episode';
  $ds_view_mode->label = 'vid_teaser_show_episode';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['vid_teaser_show_episode'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_show_general';
  $ds_view_mode->label = 'vid_teaser_show_general';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['vid_teaser_show_general'] = $ds_view_mode;

  return $export;
}

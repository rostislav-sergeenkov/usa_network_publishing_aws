<?php
/**
 * @file
 * usanetwork_ds.ds.inc
 */

/**
 * Implements hook_ds_custom_fields_info().
 */
function usanetwork_ds_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'file_name';
  $ds_field->label = 'File Name';
  $ds_field->field_type = 5;
  $ds_field->entities = array(
    'file' => 'file',
  );
  $ds_field->properties = array(
    'code' => array(
      'value' => '[file:name]',
      'format' => 'ds_code',
    ),
    'use_token' => 1,
  );
  $export['file_name'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function usanetwork_ds_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'admin_reference_preview';
  $ds_view_mode->label = 'Administrative Reference Preview';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['admin_reference_preview'] = $ds_view_mode;

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
  $ds_view_mode->view_mode = 'entityreference_live_preview';
  $ds_view_mode->label = 'Entity Reference Live Preview';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['entityreference_live_preview'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'figure';
  $ds_view_mode->label = 'Figure';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['figure'] = $ds_view_mode;

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
  $ds_view_mode->view_mode = 'gallery_flexslider';
  $ds_view_mode->label = 'gallery_flexslider';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['gallery_flexslider'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'global_nav_block_more';
  $ds_view_mode->label = 'global_nav_block_more';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['global_nav_block_more'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'global_nav_block_shows';
  $ds_view_mode->label = 'global_nav_block_shows';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['global_nav_block_shows'] = $ds_view_mode;

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
  $ds_view_mode->view_mode = 'microsite_thumbnail';
  $ds_view_mode->label = 'microsite_thumbnail';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['microsite_thumbnail'] = $ds_view_mode;

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
  $ds_view_mode->view_mode = 'search_result_files';
  $ds_view_mode->label = 'search_result_files';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['search_result_files'] = $ds_view_mode;

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
    'file' => 'file',
  );
  $export['vid_teaser_general'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_show_episode';
  $ds_view_mode->label = 'vid_teaser_show_episode';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['vid_teaser_show_episode'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'vid_teaser_show_general';
  $ds_view_mode->label = 'vid_teaser_show_general';
  $ds_view_mode->entities = array(
    'node' => 'node',
    'file' => 'file',
  );
  $export['vid_teaser_show_general'] = $ds_view_mode;

  return $export;
}

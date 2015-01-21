<?php

/**
 * Implements hook_field_default_field_bases().
 */
function usanetwork_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_hpcc_citems'
  $field_bases['field_hpcc_citems'] = array(
    'active' => 1,
    'cardinality' => -1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_hpcc_citems',
    'foreign keys' => array(),
    'indexes' => array(
      'revision_id' => array(
        0 => 'revision_id',
      ),
    ),
    'locked' => 0,
    'module' => 'field_collection',
    'settings' => array(
      'hide_blank_items' => 1,
      'path' => '',
    ),
    'translatable' => 0,
    'type' => 'field_collection',
  );

  // Exported field_base: 'field_hpcc_slide'
  $field_bases['field_hpcc_slide'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_hpcc_slide',
    'foreign keys' => array(),
    'indexes' => array(
      'target_id' => array(
        0 => 'target_id',
      ),
    ),
    'locked' => 0,
    'module' => 'usanetwork_dynamic_entity_reference',
    'settings' => array(
      'entity_bundles' => array(
        /*'catchall_page' => 'catchall_page',
        'catchall_seo_page' => 'catchall_seo_page',
        'media_gallery' => 'media_gallery',
        'mpx_video_1' => 'mpx_video_1',
        'mpx_video_2' => 'mpx_video_2',
        'person' => 'person',
        'quiz' => 'quiz',
        'tv_episode' => 'tv_episode',
        'tv_season' => 'tv_season',
        'tv_show' => 'tv_show',
        'usanetwork_promo' => 'usanetwork_promo',
        'usanetwork_promo_iframe' => 'usanetwork_promo_iframe',*/
      ),
      'entity_type_ids' => array(
        'file' => 'file',
        'node' => 'node',
      ),
    ),
    'translatable' => 0,
    'type' => 'usanetwork_dynamic_entity_reference',
  );

  // Exported field_base: 'field_hpcc_slide_type'
  $field_bases['field_hpcc_slide_type'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_hpcc_slide_type',
    'foreign keys' => array(),
    'indexes' => array(
      'value' => array(
        0 => 'value',
      ),
    ),
    'locked' => 0,
    'module' => 'list',
    'settings' => array(
      'allowed_values' => array(
        'default' => 'Default',
        'video' => 'Video',
        'gallery' => 'Gallery',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}
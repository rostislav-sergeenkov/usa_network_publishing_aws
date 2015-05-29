<?php
/**
 * @file
 * usanetwork_full_bleed_promo.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function usanetwork_full_bleed_promo_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_usa_fbp_cta_link'
  $field_bases['field_usa_fbp_cta_link'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_usa_fbp_cta_link',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'link',
    'settings' => array(
      'attributes' => array(
        'class' => '',
        'rel' => '',
        'target' => 'default',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'title' => 'optional',
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
    ),
    'translatable' => 0,
    'type' => 'link_field',
  );

  // Exported field_base: 'field_usa_fbp_desktop_image'
  $field_bases['field_usa_fbp_desktop_image'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_usa_fbp_desktop_image',
    'indexes' => array(
      'fid' => array(
        0 => 'fid',
      ),
    ),
    'locked' => 0,
    'module' => 'image',
    'settings' => array(
      'default_image' => 0,
      'uri_scheme' => 'public',
    ),
    'translatable' => 0,
    'type' => 'image',
  );

  // Exported field_base: 'field_usa_fbp_linked_content'
  $field_bases['field_usa_fbp_linked_content'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_usa_fbp_linked_content',
    'indexes' => array(
      'target_id' => array(
        0 => 'target_id',
      ),
    ),
    'locked' => 0,
    'module' => 'usanetwork_dynamic_entity_reference',
    'settings' => array(
      'entity_bundles' => array(
        'media_gallery' => 'media_gallery',
        'mpx_video_1' => 'mpx_video_1',
        'mpx_video_2' => 'mpx_video_2',
        'person' => 'person',
        'quiz' => 'quiz',
        'tv_show' => 'tv_show',
        'usa_homepage' => 'usa_homepage',
        'usanetwork_promo' => 'usanetwork_promo',
      ),
      'entity_type_ids' => array(
        'file' => 'file',
        'node' => 'node',
      ),
    ),
    'translatable' => 0,
    'type' => 'usanetwork_dynamic_entity_reference',
  );

  // Exported field_base: 'field_usa_fbp_mobile_image'
  $field_bases['field_usa_fbp_mobile_image'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_usa_fbp_mobile_image',
    'indexes' => array(
      'fid' => array(
        0 => 'fid',
      ),
    ),
    'locked' => 0,
    'module' => 'image',
    'settings' => array(
      'default_image' => 0,
      'uri_scheme' => 'public',
    ),
    'translatable' => 0,
    'type' => 'image',
  );

  return $field_bases;
}

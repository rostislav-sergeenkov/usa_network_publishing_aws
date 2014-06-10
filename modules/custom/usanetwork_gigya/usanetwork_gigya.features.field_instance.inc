<?php
/**
 * @file
 * usanetwork_gigya.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_gigya_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-media_gallery-field_gigya_share_bar'
  $field_instances['node-media_gallery-field_gigya_share_bar'] = array(
    'bundle' => 'media_gallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'admin_reference_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'block_cover_title' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'block_cover_title_lg' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'default' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 3,
      ),
      'full' => array(
        'label' => 'above',
        'module' => 'gigya',
        'settings' => array(
          'gigya_sharebar_advanced' => '',
          'gigya_sharebar_buttons' => 'twitter-tweet, facebook-like',
          'gigya_sharebar_container_id' => 'gigya-share',
          'gigya_sharebar_desc' => '[node:summary]',
          'gigya_sharebar_image_behavior' => 'first',
          'gigya_sharebar_image_url' => '',
          'gigya_sharebar_layout' => 'horizontal',
          'gigya_sharebar_link_back' => '[node:url:absolute]',
          'gigya_sharebar_override_default' => FALSE,
          'gigya_sharebar_short_url' => FALSE,
          'gigya_sharebar_showcounts' => 'right',
          'gigya_sharebar_title' => '[node:title]',
        ),
        'type' => 'gigya_sharebar_formatter_default',
        'weight' => 2,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'search_index' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'search_result' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_gigya_share_bar',
    'label' => 'Gigya Share Bar',
    'required' => FALSE,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'gigya',
      'settings' => array(),
      'type' => 'sharebar',
      'weight' => 4,
    ),
  );

  // Exported field_instance: 'node-post-field_gigya_share_bar'
  $field_instances['node-post-field_gigya_share_bar'] = array(
    'bundle' => 'post',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'admin_reference_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'default' => array(
        'label' => 'hidden',
        'module' => 'gigya',
        'settings' => array(
          'gigya_sharebar_advanced' => array(
            'iconsOnly' => 'true',
          ),
          'gigya_sharebar_buttons' => 'facebook, twitter, tumblr, pinterest, share',
          'gigya_sharebar_container_id' => 'gigya-share-[node:nid]',
          'gigya_sharebar_desc' => '[node:summary]',
          'gigya_sharebar_image_behavior' => 'url',
          'gigya_sharebar_image_url' => '[node:field_post_cover]',
          'gigya_sharebar_layout' => 'horizontal',
          'gigya_sharebar_link_back' => '[node:url:absolute]',
          'gigya_sharebar_override_default' => 1,
          'gigya_sharebar_short_url' => 0,
          'gigya_sharebar_showcounts' => 'none',
          'gigya_sharebar_title' => '[node:title]',
        ),
        'type' => 'gigya_sharebar_formatter_default',
        'weight' => 3,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'gigya',
        'settings' => array(
          'gigya_sharebar_advanced' => array(
            'iconsOnly' => 'true',
          ),
          'gigya_sharebar_buttons' => 'facebook, twitter, tumblr, pinterest, share',
          'gigya_sharebar_container_id' => 'gigya-share',
          'gigya_sharebar_desc' => '[node:summary]',
          'gigya_sharebar_image_behavior' => 'url',
          'gigya_sharebar_image_url' => '[node:field_post_cover]',
          'gigya_sharebar_layout' => 'horizontal',
          'gigya_sharebar_link_back' => '[node:url:absolute]',
          'gigya_sharebar_override_default' => 1,
          'gigya_sharebar_short_url' => 0,
          'gigya_sharebar_showcounts' => 'none',
          'gigya_sharebar_title' => '[node:title]',
        ),
        'type' => 'gigya_sharebar_formatter_default',
        'weight' => 3,
      ),
      'user_ref_preview' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_gigya_share_bar',
    'label' => 'Gigya Share Bar',
    'required' => FALSE,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'gigya',
      'settings' => array(),
      'type' => 'sharebar',
      'weight' => 7,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Gigya Share Bar');

  return $field_instances;
}

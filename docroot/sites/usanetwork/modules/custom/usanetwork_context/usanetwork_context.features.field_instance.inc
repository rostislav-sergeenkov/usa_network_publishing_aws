<?php
/**
 * @file
 * usanetwork_context.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_context_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-tv_episode-field_call_to_action_type'
  $field_instances['node-tv_episode-field_call_to_action_type'] = array(
    'bundle' => 'tv_episode',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_link',
        'weight' => 33,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
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
    'field_name' => 'field_call_to_action_type',
    'label' => 'Call to Action Type',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 73,
    ),
  );

  // Exported field_instance: 'node-tv_episode-field_gigya_share_bar'
  $field_instances['node-tv_episode-field_gigya_share_bar'] = array(
    'bundle' => 'tv_episode',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 14,
      ),
      'full' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
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
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 17,
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
      'exclude_cv' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'gigya',
      'settings' => array(),
      'type' => 'sharebar',
      'weight' => 6,
    ),
  );

  // Exported field_instance: 'node-tv_season-field_gigya_share_bar'
  $field_instances['node-tv_season-field_gigya_share_bar'] = array(
    'bundle' => 'tv_season',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'gigya',
        'settings' => array(
          'gigya_sharebar_advanced' => array(),
          'gigya_sharebar_buttons' => 'twitter-tweet, facebook-like',
          'gigya_sharebar_container_id' => 'gigya-share',
          'gigya_sharebar_desc' => '[node:summary]',
          'gigya_sharebar_image_behavior' => 'first',
          'gigya_sharebar_image_url' => '',
          'gigya_sharebar_layout' => 'horizontal',
          'gigya_sharebar_link_back' => '[node:url:absolute]',
          'gigya_sharebar_override_default' => FALSE,
          'gigya_sharebar_short_url' => 0,
          'gigya_sharebar_showcounts' => 'right',
          'gigya_sharebar_title' => '[node:title]',
        ),
        'type' => 'gigya_sharebar_formatter_default',
        'weight' => 7,
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
      'weight' => 9,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Call to Action Type');
  t('Gigya Share Bar');

  return $field_instances;
}

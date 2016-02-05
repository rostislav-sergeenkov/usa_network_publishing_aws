<?php
/**
 * @file
 * usanetwork_promo_iframe.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_promo_iframe_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-usanetwork_promo_iframe-field_promo_iframe_src_link'
  $field_instances['node-usanetwork_promo_iframe-field_promo_iframe_src_link'] = array(
    'bundle' => 'usanetwork_promo_iframe',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Enter the src for the promo iframe.<br>Ex: https://www.nbcudtv.com/ads/300x250/2c9efeabfc95dc876438395bc2ae43a9.html',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_plain',
        'weight' => 12,
      ),
      'promo_teaser' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_plain',
        'weight' => 0,
      ),
      'promo_teaser_large' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_plain',
        'weight' => 12,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_promo_iframe_src_link',
    'label' => 'iframe src link',
    'required' => 0,
    'settings' => array(
      'attributes' => array(
        'class' => '',
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'default',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => 'usanetwork_fields',
      ),
      'rel_remove' => 'default',
      'title' => 'none',
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 4,
    ),
  );

  // Exported field_instance: 'node-usanetwork_promo_iframe-field_show'
  $field_instances['node-usanetwork_promo_iframe-field_show'] = array(
    'bundle' => 'usanetwork_promo_iframe',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Please select the show from the list.',
    'display' => array(
      'carousel_promo' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'default' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 11,
      ),
      'promo_teaser' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'promo_teaser_large' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 11,
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
    'field_name' => 'field_show',
    'label' => 'Show',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 2,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Enter the src for the promo iframe.<br>Ex: https://www.nbcudtv.com/ads/300x250/2c9efeabfc95dc876438395bc2ae43a9.html');
  t('Please select the show from the list.');
  t('Show');
  t('iframe src link');

  return $field_instances;
}

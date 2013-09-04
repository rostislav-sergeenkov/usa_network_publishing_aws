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

  // Exported field_instance: 'node-usanetwork_promo_iframe-field_promo_iframe_src'
  $field_instances['node-usanetwork_promo_iframe-field_promo_iframe_src'] = array(
    'bundle' => 'usanetwork_promo_iframe',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Enter the iframe src for the promo iframe.
Ex: https://www.nbcudtv.com/ads/300x250/2c9efeabfc95dc876438395bc2ae43a9.html',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 1,
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
    'field_name' => 'field_promo_iframe_src',
    'label' => 'iframe src',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 250,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'node-usanetwork_promo_iframe-field_show'
  $field_instances['node-usanetwork_promo_iframe-field_show'] = array(
    'bundle' => 'usanetwork_promo_iframe',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Please select the show from the list.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
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
  t('Enter the iframe src for the promo iframe.
Ex: https://www.nbcudtv.com/ads/300x250/2c9efeabfc95dc876438395bc2ae43a9.html');
  t('Please select the show from the list.');
  t('Show');
  t('iframe src');

  return $field_instances;
}

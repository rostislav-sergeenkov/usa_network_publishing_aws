<?php

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'field_collection_item-field_hpcc_citems-field_hpcc_slide'
  $field_instances['field_collection_item-field_hpcc_citems-field_hpcc_slide'] = array(
    'bundle' => 'field_hpcc_citems',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => NULL,
        'settings' => array(),
        'type' => 'usanetwork_dynamic_entity_reference_label',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'fences_wrapper' => 'div',
    'field_name' => 'field_hpcc_slide',
    'label' => 'Slide',
    'required' => 1,
    'settings' => array(
      'handler' => 'default',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'usanetwork_dynamic_entity_reference',
      'settings' => array(),
      'type' => 'usanetwork_dynamic_entity_reference_default',
      'weight' => 31,
    ),
  );

  // Exported field_instance: 'field_collection_item-field_hpcc_citems-field_hpcc_slide_type'
  $field_instances['field_collection_item-field_hpcc_citems-field_hpcc_slide_type'] = array(
    'bundle' => 'field_hpcc_citems',
    'default_value' => array(
      0 => array(
        'value' => 'default',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 1,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'fences_wrapper' => 'div',
    'field_name' => 'field_hpcc_slide_type',
    'label' => 'Type',
    'required' => 1,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 32,
    ),
  );

  t('Slide');
  t('Type');

  return $field_instances;
}
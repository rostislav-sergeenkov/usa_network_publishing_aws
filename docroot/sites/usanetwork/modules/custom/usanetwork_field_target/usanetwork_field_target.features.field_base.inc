<?php
/**
 * @file
 * usanetwork_field_target.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function usanetwork_field_target_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_target'
  $field_bases['field_target'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_target',
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
        '_self' => 'self',
        '_blank' => 'blank',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}

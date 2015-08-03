<?php
/**
 * @file
 * usanetwork_taxonomy.ds.inc
 */

/**
 * Implements hook_ds_layout_settings_info().
 */
function usanetwork_taxonomy_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'taxonomy_term|cta_type|full';
  $ds_layout->entity_type = 'taxonomy_term';
  $ds_layout->bundle = 'cta_type';
  $ds_layout->view_mode = 'full';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_usa_term_image',
      ),
    ),
    'fields' => array(
      'field_usa_term_image' => 'ds_content',
    ),
    'classes' => array(),
  );
  $export['taxonomy_term|cta_type|full'] = $ds_layout;

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'taxonomy_term|cta_type|usa_term_icon';
  $ds_layout->entity_type = 'taxonomy_term';
  $ds_layout->bundle = 'cta_type';
  $ds_layout->view_mode = 'usa_term_icon';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'hide_empty_regions' => 0,
    'hide_sidebars' => 0,
    'regions' => array(
      'ds_content' => array(
        0 => 'field_usa_term_image',
      ),
    ),
    'fields' => array(
      'field_usa_term_image' => 'ds_content',
    ),
    'classes' => array(),
    'wrappers' => array(),
    'layout_wrapper' => 'div',
  );
  $export['taxonomy_term|cta_type|usa_term_icon'] = $ds_layout;

  return $export;
}

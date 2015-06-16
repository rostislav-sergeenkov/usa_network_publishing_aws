<?php
/**
 * @file
 * usanetwork_catchall_collection.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function usanetwork_catchall_collection_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_page_collection|node|catchall_page|form';
  $field_group->group_name = 'group_page_collection';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'catchall_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Catchall Collection',
    'weight' => '6',
    'children' => array(
      0 => 'field_usa_pc_overall_content',
      1 => 'field_usa_pc_afterall_content',
      2 => 'field_usa_pc_javascript_inline',
      3 => 'field_usa_pc_css_inline',
      4 => 'field_usa_pc_javascript',
      5 => 'field_usa_pc_css',
      6 => 'field_usa_pc_images',
      7 => 'field_usa_pc_files',
      8 => 'field_usa_pc_file_folder',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-page-collection field-group-tab',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_page_collection|node|catchall_page|form'] = $field_group;

  return $export;
}

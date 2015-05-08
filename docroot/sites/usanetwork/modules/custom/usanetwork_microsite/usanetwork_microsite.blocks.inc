<?php
/**
 * Files with functions witch provide blocks variables.
 *
 * Date: 4/6/2015
 * Time: 9:49 AM
 */


function usanetwork_microsite_block_meet_the_cast() {
  $characters = array();
  $node = menu_get_object();
  $characters_section_wrapper =_usanetwork_microsite_get_section_wrapper_by_section_type($node, 'characters');
  if (!empty($characters_section_wrapper)) {
    $characters_section_object = $characters_section_wrapper->value();
    if (!empty($characters_section_object->field_ms_person)) {
      $characters = _usanetwork_microsite_theme_render_person_node_items($characters_section_wrapper->field_ms_person);
    }
  }
  return $characters;
}

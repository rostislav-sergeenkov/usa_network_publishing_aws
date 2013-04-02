<?php
/**
 * @file
 * pub_person_overrides.features.inc
 */

/**
 * Implements hook_field_group_info_alter().
 */
function pub_person_overrides_field_group_info_alter(&$data) {
  if (isset($data['group_additional_information|node|person|form'])) {
    $data['group_additional_information|node|person|form']->data['children']['3'] = 'field_character'; /* WAS: '' */
  }
}

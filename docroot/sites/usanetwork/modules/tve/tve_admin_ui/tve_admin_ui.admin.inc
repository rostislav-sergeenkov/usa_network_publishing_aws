<?php

/**
 * @file
 * Admin page callbacks for the TVE Admin UI module.
 *
 * @ingroup tve_admin_ui
 */

/**
 * Menu callback.
 * Provides the administration overview page for all TVE Admin sections.
 */
function _tve_admin_ui_system_page() {
  // Get all admin UI sections (invokes).
  $admin_sections = _tve_admin_ui_admin_sections();
  $rows = array();
  foreach ($admin_sections as $section => $info) {
    if (!user_access('access_' . $section)) {
      continue;
    }
    _tve_admin_ui_prepare_info($info, $section);
    $rows[] = array(
      'section' => l($info['title'], 'admin/' . $info['path']),
      'description' => $info['description'],
      'variables' => theme('item_list', array('items' => _tve_admin_ui_variable_aliases($info['variables'], NULL, array(), $info['variable prefix']), 'type' => 'ol')),
    );
  }

  // Create table element.
  $table_element = array(
    '#theme' => 'table',
    '#header' => array(t('Section'), t('Description'), t('Variables')),
    '#rows' => $rows,
    '#empty' => t('No components found.'),
  );

  return $table_element;
}

/**
 * Creates aliases for all variables recursively.
 *
 * @param array $variable
 * @param string $key
 * @param array $aliases
 * @param string $prefix
 *
 * @return array
 */
function _tve_admin_ui_variable_aliases($variable, $key = NULL, $aliases = array(), $prefix = '') {
  foreach ($variable as $k => $v) {
    $key_alias = (is_null($key)) ? $k : $key . ':' . $k;
    if (!is_array($v)) {
      $aliases[] = $key_alias . '=' . check_plain(_tve_admin_ui_variable_get($k, $v, $prefix));
      continue;
    }
    // Dive deeper to find value and key alias.
    $aliases = _tve_admin_ui_variable_aliases($v, $key_alias, $aliases);
  }

  return $aliases;
}

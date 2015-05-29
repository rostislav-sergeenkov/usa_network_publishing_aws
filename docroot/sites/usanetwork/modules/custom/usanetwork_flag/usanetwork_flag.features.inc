<?php
/**
 * @file
 * usanetwork_flag.features.inc
 */

/**
 * Implements hook_flag_default_flags().
 */
function usanetwork_flag_flag_default_flags() {
  $flags = array();
  // Exported flag: "new".
  $flags['new'] = array(
    'content_type' => 'node',
    'title' => 'new',
    'global' => '1',
    'types' => array(
      0 => 'tv_show',
    ),
    'flag_short' => 'New',
    'flag_long' => 'Mark this if it is a new',
    'flag_message' => 'This content has been marked as new',
    'unflag_short' => 'Mark this as old',
    'unflag_long' => 'Unmark this if it is old',
    'unflag_message' => 'This content has been marked as old',
    'unflag_denied_text' => '',
    'link_type' => 'toggle',
    'roles' => array(
      'flag' => array(
        0 => '11',
        1 => '16',
      ),
      'unflag' => array(
        0 => '11',
        1 => '16',
      ),
    ),
    'weight' => 0,
    'show_on_form' => 1,
    'access_author' => '',
    'show_on_page' => 1,
    'show_on_teaser' => 1,
    'show_contextual_link' => FALSE,
    'i18n' => 0,
    'module' => 'usanetwork_flag',
    'locked' => array(
      0 => 'name',
    ),
    'api_version' => 2,
  );
  return $flags;

}

<?php
/**
 * @file
 * Code for the Administration Settings USA Network Taboola.
 */

/*
 * Menu callback to configure module settings.
 */
function _usanetwork_taboola_settings_form() {

  $shows = _usanetwork_taboola_get_all_shows();

  $show_array = array();
  foreach ($shows as $show) {
    $show_array[$show->nid] = $show->title;
  }

  $show_array['movies'] = t('Movies');
  $show_array['live'] = t('Live TV');

  $form['usanetwork_taboola_shows'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Shows with DISABLED Taboola :'),
    '#default_value' => variable_get('usanetwork_taboola_shows', array()),
    '#options' => $show_array,
    '#description' => t('Select shows where Taboola is DISABLED.'),
  );

  return system_settings_form($form);
}

/*
 * Helper function for getting all shows
 */
function _usanetwork_taboola_get_all_shows() {
  $select = db_select('node', 'n')
    ->fields('n', array('nid', 'title'));
  $select->condition('status', NODE_PUBLISHED)
    ->condition('type', 'tv_show');
  $select->orderBy('title');
  $shows = $select->execute()->fetchAll();

  return $shows;
}

<?php
/**
 * @file
 * usanetwork_tv_shows.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_tv_shows_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 *  Implements hook_features_revert().
 */
function field_group_features_revert($module_name) {
  if ($module_name == 'usanetwork_tv_shows' && !variable_get('usanetwork_tv_shows_features_update_1_13', NULL)) {
    $nodes_updated = 0;
    $show_nodes = node_load_multiple(array(), array('type' => 'tv_show'));

    if (!empty($show_nodes)) {

      foreach($show_nodes as $show_node) {
        $node_wrapper = entity_metadata_wrapper('node', $show_node);

        $node_wrapper->field_tvs_show_latest_feed->set(TRUE);
        $node_wrapper->save();

        $nodes_updated++;
      }
    }

    if ($nodes_updated > 0) {
      variable_set('usanetwork_tv_shows_features_update_1_13', TRUE);
    }
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_tv_shows_node_info() {
  $items = array(
    'tv_episode' => array(
      'name' => t('TV Episode'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'tv_season' => array(
      'name' => t('TV Season'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'tv_show' => array(
      'name' => t('TV Show'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

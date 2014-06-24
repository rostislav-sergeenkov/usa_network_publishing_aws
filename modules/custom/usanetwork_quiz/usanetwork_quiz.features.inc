<?php
/**
 * @file
 * usanetwork_quiz.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function usanetwork_quiz_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function usanetwork_quiz_node_info() {
  $items = array(
    'quiz' => array(
      'name' => t('Quiz'),
      'base' => 'node_content',
      'description' => t('Content type for creating quizzes.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}

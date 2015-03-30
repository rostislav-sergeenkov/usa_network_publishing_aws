<?php

/**
* Implements hook_views_data_alter()
*/
function usanetwork_node_copy_views_data_alter(&$views_data) {
  $views_data['node']['usanetwork_node_copy'] = array(
    'field' => array(
      'title' => t('Copy link'),
      'help' => t('Provide a simple link to copy the node.'),
      'handler' => 'views_handler_field_node_link_usanetwork_node_copy',
    ),
  );
}

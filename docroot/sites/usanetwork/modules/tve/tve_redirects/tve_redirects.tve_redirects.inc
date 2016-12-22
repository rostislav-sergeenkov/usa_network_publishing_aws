<?php
/**
 * @file
 * tve_redirects.tve_redirects.inc
 *
 * tve_redirects hooks implementations.
 *
 * @ingroup tve_redirects
 */

/**
 * Implements hook_tve_redirects_info().
 */
function tve_redirects_tve_redirects_info() {
  $redirects = array(
    'mpx' => array(
      'title' => t('thePlatform MPX'),
      'description' => t('Provides redirects to an episode/show details page based on unique MPX id.'),
      'path' => 'mpx',
    ),
  );

  return $redirects;
}

/**
 * Implements hook_tve_redirects_media_load().
 */
function tve_redirects_tve_redirects_media_load($media_id, $media_type) {
  if ('mpx' == $media_type) {
    // Search for a node (of any type) with a specified mpx id.
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
      ->fieldCondition('field_mpx_id', 'value', $media_id, '=');
    $result = $query->execute();

    if (isset($result['node'])) {
      $nids = array_keys($result['node']);
      if (isset($nids[0])) {
        return node_load($nids[0]);
      }
    }
  }
}

/**
 * Implements hook_tve_redirects_media_redirect().
 */
function tve_redirects_tve_redirects_media_redirect($media_type, $node) {
  if (!$node) {
    return;
  }

  switch ($media_type) {
    case 'mpx':
      if ($node->status) {
        // Perform permanent redirect to episode or show details page.
        tve_redirects_redirect('node/' . $node->nid);
      }
      elseif ($node->type == 'tv_episode' && isset($node->field_pub_relation_tv_shows[LANGUAGE_NONE][0]['value'])) {
        // Load parent show for given tv episode.
        $q = db_select('node', 'n');
        $q->fields('n', array('nid'));
        $q->innerJoin('field_data_field_show', 'field_show', 'field_show.field_show_target_id = n.nid');
        $q->condition('field_show.entity_id', $node->field_pub_relation_tv_shows[LANGUAGE_NONE][0]['value']);
        $q->condition('n.type', 'tv_show');
        $q->condition('n.status', 1);
        
        $show_nid = $q->execute()->fetchField();

        if ($show_nid) {
          // Perform permanent redirect to show details page.
          tve_redirects_redirect('node/' . $show_nid);
        }
      }

      break;
  }
}

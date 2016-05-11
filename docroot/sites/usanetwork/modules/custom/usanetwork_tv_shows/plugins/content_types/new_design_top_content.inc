<?php
/**
 * New design Top Videos content type.
 */

$plugin = array(
  'title' => t('Top Content'),
  'description' => t('Top Content for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_top_content'),
  'render callback' => 'new_design_top_content_content_type_render',
  'required context' => array(
    new ctools_context_required(t('TV Show node'), 'node'),
//    new ctools_context_required(t('Number of elements')),
//    new ctools_context_required(t('Content'), array('media_gallery', 'videos')),
//    new ctools_context_required(t('Number of elements'), 'node'),
  ),
  'edit form' => 'new_design_top_content_content_type_edit_form',
  'category' => array(t('New design'), -9),
);

/**
 * Render callback function.
 *
 * @param $subtype
 * @param $conf
 * @param $args
 * @param $context
 * @return stdClass
 */
function new_design_top_content_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $block = new stdClass();
  $theme_variables = array();

  $theme_variables['title'] = t('TOP 5 Videos');
  $theme_variables['link'] = l(t('View more'), 'node/' . $node->nid . '/videos');

  $field_show_episode_block = _usanetwork_get_field_item('node', $node, 'field_show_episode_block', 'value');
  if ($field_show_episode_block == 1) {
    $episodes = _usanetwork_tv_show_get_episodes_block($node);
    if (!empty($episodes)) {
      $theme_variables['first_block'] = $episodes['first_element'];
      $theme_variables['carousel_items'] = $episodes['carousel_items'];
      $theme_variables['title'] = t('Episodes');
      $theme_variables['link'] = l(t('View more'), 'node/' . $node->nid . '/episodes');

      $block->content = array(
        '#theme' => 'new_design_episodes',
        '#content' => $theme_variables,
      );
    }
  }
  return $block;
}

function new_design_top_content_content_type_edit_form($form, &$form_state) {
  return $form;
}

//function _usanetwork_tv_show_get_episodes_block($show) {
//  $first_element_array = array();
//  $carousel_items = array();
//  $episodes = _usanetwork_tv_show_get_episodes($show);
//  if (!empty($episodes)) {
//    $first_element = array_shift($episodes);
//    $first_element_array = array(
//      'title' => $first_element->title,
//      'image' => image_style_url('284x187', $first_element->episode_uri),
//      'season' => t('S@season', array('@season' => $first_element->season_id)),
//      'episode' => t('EP@episode', array('@episode' => $first_element->episode_id)),
//      'episode_link' => url('node/' . $first_element->nid),
//      'file_link' => isset($first_element->fid) ? url('file/' . $first_element->fid) : NULL,
//    );
//    foreach ($episodes as $item) {
//      $theme_item = array(
//        'title' => $item->title,
//        'image' => image_style_url('99x84', $item->episode_uri),
//        'season' => t('S@season', array('@season' => $item->season_id)),
//        'episode' => t('EP@episode', array('@episode' => $item->episode_id)),
//        'episode_link' => url('node/' . $item->nid),
//        'file_link' => isset($item->fid) ? url('file/' . $item->fid) : NULL,
//      );
//      $carousel_items[] = theme('new_design_episodes_item', $theme_item);
//    }
//  }
//
//  return array(
//    'first_element' => $first_element_array,
//    'carousel_items' => $carousel_items,
//  );
//}
//
//
//function _usanetwork_tv_show_get_episodes($show) {
//  $show_nid = $show->nid;
//  $cache_name = 'tv_show_new_design_episodes_' . $show_nid;
//
//  $cache = cache_get($cache_name);
//
//  if (empty($cache)) {
//    $query = db_select('node', 'n');
//    $query->fields('n', array('nid', 'title'));
//    $query->condition('n.type', 'tv_episode')
//      ->condition('n.status', NODE_PUBLISHED);
//    $query->join('field_data_field_show', 'field_show', 'n.nid=field_show.entity_id');
//    $query->condition('field_show.field_show_target_id', $show_nid);
//    $query->join('field_data_field_season', 'field_season', 'n.nid=field_season.entity_id');
//    $query->join('node', 'node_season', 'field_season.field_season_target_id=node_season.nid');
//    $query->join('field_data_field_season_id', 'field_season_id', 'node_season.nid=field_season_id.entity_id');
//    $query->addField('field_season_id', 'field_season_id_value', 'season_id');
//    $query->join('field_data_field_episode_number', 'field_episode_number', 'n.nid=field_episode_number.entity_id');
//    $query->addField('field_episode_number', 'field_episode_number_value', 'episode_id');
//    $query->join('field_data_field_tv_cover_media', 'field_tv_cover_media', 'n.nid=field_tv_cover_media.entity_id');
//    $query->join('file_managed', 'fm', 'fm.fid=field_tv_cover_media.field_tv_cover_media_fid');
//    $query->addField('fm', 'uri', 'episode_uri');
//    $query->orderBy('season_id', 'ASC');
//    $query->orderBy('episode_id', 'ASC');
//
//    $result = $query->execute()->fetchAll();
//
//
//    foreach ($result as &$result_item) {
//      $episode_data = _usanetwork_episodes_get_episode_full_episode_data($show_nid, $result_item->season_id, $result_item->episode_id);
//
//      if (!empty($episode_data)) {
//        foreach ($episode_data as $key => $value) {
//          $result_item->{$key} = $value;
//        }
//      }
//    }
//  } else {
//    $result = $cache->data;
//  }
//
//  return $result;
//}

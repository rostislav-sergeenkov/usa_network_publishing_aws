<?php
/**
 * New design Relevant Content content type.
 */

$plugin = array(
  'title' => t('Episodes'),
  'description' => t('Episodes for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_episodes'),
  'render callback' => 'new_design_episodes_content_type_render',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
  'edit form' => 'new_design_episodes_content_type_edit_form',
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
function new_design_episodes_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $block = new stdClass();
  $theme_variables = array();
  $field_show_episode_block = _usanetwork_get_field_item('node', $node, 'field_show_episode_block', 'value');
  if ($field_show_episode_block == 1) {
    $episodes = _usanetwork_tv_show_get_episodes_block($node);
    if (!empty($episodes)) {
      $theme_variables['first_block'] = $episodes['first_element'];
      $theme_variables['carousel_items'] = $episodes['carousel_items'];
      $theme_variables['title'] = t('Episodes');
      $theme_variables['link'] = l(t('View more'), 'node/' . $node->nid . '/episodes', array('attributes' => array('class' => 'view-more-link')));
      $block->content = array(
        '#theme' => 'new_design_episodes',
        '#content' => $theme_variables,
      );
    }
  }
  return $block;
}

function new_design_episodes_content_type_edit_form($form, &$form_state) {
  return $form;
}

function _usanetwork_tv_show_get_episodes_block($show) {
  $first_element_array = array();
  $carousel_items = array();

  $is_full_exists = _usanetwork_is_full_video_exists($show);

  if (!empty($is_full_exists)) {
    $episodes = _usanetwork_tv_show_get_episodes($show, 'DESC');
    if (!empty($episodes)) {

      $providers = field_get_items('node', $show, 'field_where2watch_providers');
      $featured_provider = _where2watch_get_featured_provider($providers);

      $first_element = array_shift($episodes);
      $first_element_array = array(
        'title' => $first_element->title,
        'image_desktop' => image_style_url('1040x585', $first_element->episode_uri),
        'image_mobile' => image_style_url('655x408', $first_element->episode_uri),
        'season' => t('S@season', array('@season' => $first_element->season_id)),
        'episode' => t('EP@episode', array('@episode' => $first_element->episode_id)),
        'episode_link' => url('node/' . $first_element->nid),
        'video_link' => url('file/' . $first_element->fid),
      );
    }
  } else {
    $episodes = _usanetwork_tv_show_get_episodes($show);
    if (!empty($episodes)) {
      $first_element = array_pop(array_slice($episodes, -1));
      $providers = field_get_items('node', $show, 'field_where2watch_providers');
      $where2watch_links = array();
      if (!empty($providers)) {
        foreach ($providers as $provider) {
          if (_where2watch_is_provider_featuted($provider)) {
            $where2watch_links[] = array(
              'url' => $provider['url'],
              'title' => $provider['title'],
            );
          }
        }
        $where2watch_links[] = array(
          'url' => url('node/' . $show->nid . '/cast', array('fragment' => 'where-to-watch')),
          'title' => t('See all'),
        );
      }
      $featured_provider = reset($where2watch_links);

      $first_element_array = array(
        'title' => $first_element->title,
        'image_desktop' => image_style_url('1040x585', $first_element->episode_uri),
        'image_mobile' => image_style_url('655x408', $first_element->episode_uri),
        'season' => t('Season @season', array('@season' => $first_element->season_id)),
        'episode' => t('Episode @episode', array('@episode' => 1)),
        'episode_link' => url('node/' . $first_element->nid),
        'where2watch_links' => $where2watch_links,
      );
    }
  }

  foreach ($episodes as $item) {
    $theme_item = array(
      'title' => $item->title,
      'image' => image_style_url('190x116', $item->episode_uri),
      'season' => t('S@season', array('@season' => $item->season_id)),
      'episode' => t('EP@episode', array('@episode' => $item->episode_id)),
      'episode_link' => url('node/' . $item->nid),
      'video_link' => (isset($item->fid)) ? url('file/' . $item->fid) : NULL,
      'featured_provider' => !empty($featured_provider) ? $featured_provider : NULL,
    );
    $carousel_items[] = theme('new_design_episodes_item', $theme_item);
  }

  return array(
    'first_element' => $first_element_array,
    'carousel_items' => $carousel_items,
  );
}


function _usanetwork_tv_show_get_episodes($show, $order = 'ASC') {
  $show_nid = $show->nid;
  $cache_name = 'tv_show_new_design_episodes_' . $order . '_' . $show_nid;

  $cache = cache_get($cache_name);

  if (empty($cache)) {
    $query = db_select('node', 'n');
    $query->fields('n', array('nid', 'title'));
    $query->condition('n.type', 'tv_episode')
      ->condition('n.status', NODE_PUBLISHED);
    $query->join('field_data_field_show', 'field_show', 'n.nid=field_show.entity_id');
    $query->condition('field_show.field_show_target_id', $show_nid);
    $query->join('field_data_field_season', 'field_season', 'n.nid=field_season.entity_id');
    $query->join('node', 'node_season', 'field_season.field_season_target_id=node_season.nid');
    $query->join('field_data_field_season_id', 'field_season_id', 'node_season.nid=field_season_id.entity_id');
    $query->addField('field_season_id', 'field_season_id_value', 'season_id');
    $query->join('field_data_field_episode_number', 'field_episode_number', 'n.nid=field_episode_number.entity_id');
    $query->addField('field_episode_number', 'field_episode_number_value', 'episode_id');
    $query->leftJoin('field_data_field_promo_image_override', 'override_image', 'override_image.entity_id=n.nid');
    $query->join('field_data_field_tv_cover_media', 'field_tv_cover_media', 'n.nid=field_tv_cover_media.entity_id');
    $query->addExpression('IF(override_image.field_promo_image_override_fid is NULL, field_tv_cover_media.field_tv_cover_media_fid, override_image.field_promo_image_override_fid)', 'episode_image_fid');
    $query->orderBy('cast(season_id as unsigned)', $order);
    $query->orderBy('cast(episode_id as unsigned)', $order);
    $query->range(0, 10);

    $result = $query->execute()->fetchAll();


    foreach ($result as &$result_item) {
      $episode_data = _usanetwork_episodes_get_episode_full_episode_data($show_nid, $result_item->season_id, $result_item->episode_id);
      $image_file = file_load((!empty($episode_data->image_fid) ? $episode_data->image_fid : $result_item->episode_image_fid));
      $result_item->episode_uri = $image_file->uri;

      if (!empty($episode_data)) {
        foreach ($episode_data as $key => $value) {
          $result_item->{$key} = $value;
        }
      }

      $result_item->subtitle_video = _usanetwork_episodes_get_subtitle_video($show_nid, $result_item->season_id, $result_item->episode_id);
    }
    cache_set($cache_name, $result, 'cache', REQUEST_TIME + 60 * 60);
  } else {
    $result = $cache->data;
  }

  return $result;
}

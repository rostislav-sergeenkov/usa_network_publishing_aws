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
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
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

  $elements = _new_design_get_top_elements($node, $conf['top_content'], $conf['top_number'] );
  if (!empty($elements)) {
    $block_settings = _new_design_top_elements_settings($conf['top_content']);
    $theme_variables = array(
      'title' => t('TOP') . ' ' . $conf['top_number'] . ' ' . $block_settings['title'],
      'more_link' => l(t('View more'), 'node/' . $node->nid . '/' . $block_settings['url'], array('attributes' => array('class' => 'view-more-link'))),
      'type' => $block_settings['url'],
      'elements' => $elements,
    );

    $block->content = array(
      '#theme' => 'new_design_top_elements',
      '#content' => $theme_variables,
    );
  }

  return $block;
}

function new_design_top_content_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];

  $form['top_number'] = array(
    '#type' => 'textfield',
    '#title' => t('Number of elements'),
    '#size' => 50,
    '#description' => t('Number of elements in block.'),
    '#default_value' => !empty($conf['top_number']) ? $conf['top_number'] : '',
    '#prefix' => '<div class="clear-block no-float">',
    '#suffix' => '</div>',
  );

  $top_types = array(
    'consumpt_post' => 'Consumptionator Post',
    'media_gallery' => 'Media Gallery',
    'tv_episode' => 'Episode',
    'short_episode' => 'Clips',
    'full_episode' => 'Videos',
  );

  $form['top_content'] = array(
    '#type' => 'select',
    '#title' => t('Type of content'),
    '#options' => $top_types,
    '#description' => t('Type of content in block.'),
    '#default_value' => !empty($conf['top_content']) ? $conf['top_content'] : '',
    '#prefix' => '<div class="clear-block no-float">',
    '#suffix' => '</div>',
  );

  return $form;
}


function new_design_top_content_content_type_edit_form_validate($form, &$form_state) {
  if (!is_numeric($form_state['values']['top_number'])) {
    form_set_error('items_quantity', t('Number of elements should be a numeric."'));
  }
}

function new_design_top_content_content_type_edit_form_submit($form, &$form_state) {
  foreach (element_children($form) as $key) {
    if (!empty($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}


function _new_design_top_elements_settings($elemet) {
  $setting = array();

  switch ($elemet) {
    case'media_gallery':
      $setting['title'] = t('Galleries');
      $setting['url'] = 'photos';
      break;
    case 'short_episode':
      $setting['title'] = t('Videos');
      $setting['url'] = 'videos';
      break;
    case 'consumpt_post':
    case 'person':
    case 'quiz':
    case 'tv_episode':
    case 'short_episode':
    case'full_episode':
    default:
      $setting['title'] = t('Features');
      $setting['url'] = 'explore';
  }

  return $setting;
}

function _new_design_get_top_elements($show, $type, $count) {
  $elements = _new_design_get_top_elements_query($show, $type, $count);
  $items = array();

  if (in_array($type, array('short_episode', 'full_episode'))) {
    foreach ($elements as $element) {
      $file = file_load($element->fid);
      $file_image = _usanetwork_mpx_video_get_image_path($file);
      $items[] = array(
        'title' => $element->filename,
        'link' => url('file/' . $element->fid),
        'caption' => usanetwork_mpx_video_get_video_category($file),
        'image' => image_style_url('111x74', $file_image),
        'image_mobile' => image_style_url('269x197', $file_image),
      );
    }
  } else {
    foreach ($elements as $element) {
      $node = node_load($element->nid);
      $caption  = (!empty($node->field_media_items)
          ? ((!empty($node->field_cover_item))
            ? count($node->field_media_items[$node->language]) + 1
            : count($node->field_media_items[$node->language]))
          : 0) . ' ' . t('Photos');
      $node_image = usanetwork_core_api_get_content_image('node', $node, 'main', 1, TRUE);
      $items[] = array(
        'title' => $element->title,
        'link' => url('node/' . $element->nid),
        'caption' => $caption,
        'image' => image_style_url('111x74', $node_image),
        'image_mobile' => image_style_url('269x197', $node_image),
      );
    }
  }

  return $items;

}

//usanetwork_mpx_video_get_video_category($next_video);
function _new_design_get_top_elements_query($show, $type, $count) {
  if (in_array($type, array('short_episode', 'full_episode'))) {
    $query = db_select('file_managed', 'fm');
    $query->fields('fm', array('fid', 'filename'));
    $query->condition('fm.type', _pub_mpx_get_mpx_account_video_file_types(TRUE), 'IN');
    $query->join('mpx_video', 'mpx_video', 'fm.fid=mpx_video.fid');
    $query->condition('mpx_video.status', FILE_PUBLISHED);
    $query->join('field_data_field_show', 'field_show', 'fm.fid=field_show.entity_id');
    $query->condition('field_show.field_show_target_id', $show->nid);
    $query->join('field_data_field_mpx_full_episode', 'full_episode', 'fm.fid=full_episode.entity_id');
    if ($type == 'short_episode') {
      $query->condition('full_episode.field_mpx_full_episode_value', '0');
    } else {
      $query->condition('full_episode.field_mpx_full_episode_value', '1');
    }
    $query->orderBy('mpx_video.airdate', 'DESC');
    $query->range(0, $count);
  } else {
    $query = db_select('node', 'n');
    $query->fields('n', array('nid', 'title'));
    $query->condition('n.type', $type)
      ->condition('n.status', NODE_PUBLISHED);
    $query->join('field_data_field_show', 'field_show', 'n.nid=field_show.entity_id');
    $query->condition('field_show.field_show_target_id', $show->nid);
    $query->orderBy('n.created', 'DESC');
    $query->range(0, $count);
  }
  $result = $query->execute()->fetchAll();

  return $result;
}


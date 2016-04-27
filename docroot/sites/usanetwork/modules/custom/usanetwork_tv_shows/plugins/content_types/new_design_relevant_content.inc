<?php
/**
 * New design Relevant Content content type.
 */

$plugin = array(
  'title' => t('Relevant content'),
  'description' => t('Relevant content for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_relevant_content'),
  'render callback' => 'new_design_relevant_content_content_type_render',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
  'edit form' => 'new_design_relevant_content_content_type_edit_form',
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
function new_design_relevant_content_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $node_wrapper = entity_metadata_wrapper('node', $node);
  $block = new stdClass();
  $theme_variables = array();
  $relevant_content = array();
  if (!usanetwork_core_api_check_field($node, 'field_relevant_content_modes') || $node_wrapper->field_relevant_content_modes->value() == 'latest') {
    $relevant_content = new_design_relevant_content_get_latest_content($node, $conf);
  }
  elseif ($node_wrapper->field_relevant_content_modes->value() == 'most_popular') {
    // Implement logic using ChartBeat APIs.
  }
  elseif ($node_wrapper->field_relevant_content_modes->value() == 'manual') {
    $relevant_content = new_design_relevant_content_get_manual_content($node, $conf);
  }
  foreach ($relevant_content as $item) {
    $theme_variables['items'][] = theme('new_design_relevant_content_item', $item);
  }
  $block->content = array(
    '#theme' => 'new_design_relevant_content',
    '#content' => $theme_variables,
  );
  return $block;
}

function new_design_relevant_content_content_type_edit_form($form, &$form_state) {
  $conf = $form_state['conf'];
  $form['items_quantity'] = array(
    '#type' => 'textfield',
    '#title' => t('Quantity of items'),
    '#size' => 50,
    '#description' => t('Quantity of items in block.'),
    '#default_value' => !empty($conf['items_quantity']) ? $conf['items_quantity'] : '',
    '#prefix' => '<div class="clear-block no-float">',
    '#suffix' => '</div>',
  );

  return $form;
}

function new_design_relevant_content_content_type_edit_form_validate($form, &$form_state) {
  if (!is_numeric($form_state['values']['items_quantity'])) {
    form_set_error('items_quantity', t('Quantity should be a numeric."'));
  }
}

function new_design_relevant_content_content_type_edit_form_submit($form, &$form_state) {
  foreach (element_children($form) as $key) {
    if (!empty($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}

function new_design_relevant_content_get_latest_content($node, $conf) {
  $latest_items = _usanetwork_tv_shows_cache_get_limited_related_show_content($node, 0, $conf['items_quantity']);
  $latest_content = array();
  foreach ($latest_items as $item) {
    $type = '';
    if (!empty($item->type)) {
      $type = $item->type;
    }
    elseif (!empty($item->bundle)) {
      $type = $item->bundle;
    }
    $latest_content[] = array(
      'entity_id' => $item->entity_id,
      'entity_type' => $item->entity_type,
      'url' => url($item->entity_type . '/' . $item->entity_id),
      'title' => $item->promo_title,
      'description' => $item->promo_description,
      'violator' => $item->promo_violator,
      'type' => $type,
      'image_desktop' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $item->raw_image_uri))),
      'image_mobile' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $item->raw_image_uri))),
    );
  }
  return $latest_content;
}

function new_design_relevant_content_get_manual_content($node, $conf) {
  $relevant_content = usanetwork_core_api_get_dynamic_entity_reference_content($node, 'field_relevant_manual_content');
  $relevant_data = array();
  foreach ($relevant_content as $item) {
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image($item['entity_type'], $item['entity']);
    $additional_data = array(
      'image_desktop' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $row_image_uri))),
      'image_mobile' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $row_image_uri))),
    );
    $data_item = $data_item + $additional_data;
    $relevant_data[] = $data_item;
  }

  return $relevant_data;
}

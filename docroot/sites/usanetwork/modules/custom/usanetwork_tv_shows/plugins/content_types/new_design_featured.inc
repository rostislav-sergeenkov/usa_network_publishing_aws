<?php
/**
 * New design Featured content type.
 */

$plugin = array(
  'title' => t('Featured Content'),
  'description' => t('Featured Content for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_featured_content'),
  'render callback' => 'new_design_featured_content_content_type_render',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
  'edit form' => 'new_design_featured_content_content_type_edit_form',
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
function new_design_featured_content_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $block = new stdClass();

  $elements = _new_design_get_featured_elements($node);
  if (!empty($elements)) {
    $theme_variables = array(
      'title' => t('Special Features'),
      'more_link' => l(t('View more'), 'node/' . $node->nid . '/explore', array('attributes' => array('class' => 'view-more-link'))),
      'elements' => $elements,
    );

    $block->content = array(
      '#theme' => 'new_design_featured_elements',
      '#content' => $theme_variables,
    );
  }

  return $block;
}

function new_design_featured_content_content_type_edit_form($form, &$form_state) {
  return $form;
}

function _new_design_get_featured_elements($node) {
  $relevant_content = usanetwork_core_api_get_dynamic_entity_reference_content($node, 'field_tvs_spec_features');
  $featured_items = array();
  foreach ($relevant_content as $item) {
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image($item['entity_type'], $item['entity']);
    $additional_data = array(
      'image' => image_style_url('338x232', $row_image_uri),
      'image_mobile' => image_style_url('657x392', $row_image_uri),
    );
    $data_item = $data_item + $additional_data;
    $featured_items[] = $data_item;
  }

  return $featured_items;
}

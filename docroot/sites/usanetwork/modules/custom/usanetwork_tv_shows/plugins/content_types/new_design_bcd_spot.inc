<?php
/**
 * BCD-Spot for new design.
 */

$plugin = array(
  'title' => t('BCD-Spot'),
  'description' => t('Displays BCD-Spot for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_tv_show_bcd_spot'),
  'render callback' => 'new_design_tv_show_bcd_spot_content_type_render',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
  'edit form' => 'new_design_tv_show_bcd_spot_content_type_edit_form',
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
function new_design_tv_show_bcd_spot_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $block = new stdClass();
  $bcd_spot_data = new_design_tv_show_bcd_spot_get_content($node);
  $theme_variables = array();
  foreach ($bcd_spot_data as $item) {
    $theme_variables['items'][] = theme('new_design_bcd_spot_item', $item);
  }
  $block->content = array(
    '#theme' => 'new_design_bcd_spot',
    '#content' => $theme_variables,
  );
  return $block;
}

function new_design_tv_show_bcd_spot_content_type_edit_form($form, &$form_state) {
  return $form;
}

function new_design_tv_show_bcd_spot_get_content($node) {
  $bcd_spot_content = usanetwork_core_api_get_dynamic_entity_reference_content($node, 'field_relevant_manual_content');
  $bcd_spot_data = array();
  foreach ($bcd_spot_content as $item) {
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image($item['entity_type'], $item['entity']);
    $additional_data = array(
    'image_desktop' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $row_image_uri))),
    'image_mobile' => theme('image_style', array('style_name' => 'thumbnail', 'path' => image_style_url('thumbnail', $row_image_uri))),
    );
    $data_item = $data_item + $additional_data;
    $bcd_spot_data[] = $data_item;
  }
  return $bcd_spot_data;
}

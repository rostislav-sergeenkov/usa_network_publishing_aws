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
  foreach ($bcd_spot_data as $index => $item) {
    $positions = usanetwork_core_api_get_output_position($bcd_spot_data, $index);
    $theme_variables['items'][] = array(
      'html' => theme('new_design_bcd_spot_item', $item),
      'position_classes' => implode(' ', $positions),
    );
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
  $bcd_spot_content = usanetwork_core_api_get_dynamic_entity_reference_content($node, 'field_bcd_spot');
  $bcd_spot_data = array();
  $bcd_types = new_design_tv_show_bcd_spot_get_bcd_type();
  foreach ($bcd_spot_content as $index => $item) {
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image_given_image_override($item['entity_type'], $item['entity']);
    $positions = usanetwork_core_api_get_output_position($bcd_spot_content, $index);
    $blog_service = usanetwork_blog_migrate_get_post_service($item['entity']);
    $author_term = usanetwork_consumptionator_post_get_author($item['entity_type'], $item['entity']);
    $author_name = NULL;
    if ($author_term) {
      $author_name = $author_term->name;
    }
    $additional_data = array(
      'image_desktop' => image_style_url('507x285', $row_image_uri),
      'image_mobile' => image_style_url('696x305', $row_image_uri),
      'position' => current($positions),
      'blog_service' => $blog_service,
      'author' => $author_name,
      'bcd_type' => $bcd_types[$index],
    );
    $data_item = $data_item + $additional_data;
    $bcd_spot_data[] = $data_item;
  }
  return $bcd_spot_data;
}

function new_design_tv_show_bcd_spot_get_bcd_type() {
  return array('B', 'C', 'D');
}

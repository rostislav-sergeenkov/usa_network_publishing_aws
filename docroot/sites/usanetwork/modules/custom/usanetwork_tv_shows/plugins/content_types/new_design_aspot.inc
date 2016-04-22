<?php
/**
 * New design aspot content type.
 */

$plugin = array(
  'title' => t('ASpot'),
  'description' => t('Displays ASpot for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_tv_show_aspot'),
  'render callback' => 'new_design_tv_show_aspot_content_type_render',
  'required context' => array(
    new ctools_context_required(t('TV Show node'), 'node'),
    new ctools_context_required(t('A Spot node'), 'node'),
  ),
  'edit form' => 'new_design_tv_show_aspot_content_type_edit_form',
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
function new_design_tv_show_aspot_content_type_render($subtype, $conf, $args, $context) {
  $node = $context[0]->data;
  $aspot_node = $context[1]->data;
  $block = new stdClass();
  $block->content = array(
    '#markup' => '<div id="aspot-usanetwork" data-content-type="tv-show">' . usanetwork_aspot_render_tvshow_slide($aspot_node, $node) . '</div>',
    '#attached' => array(
      'js' => array(
        drupal_get_path('theme', 'aurora_usa') . '/javascripts/aspot-block.js'
      ),
      '#weight' => 1,
    ),
  );
  return $block;
}

function new_design_tv_show_aspot_content_type_edit_form($form, &$form_state) {
  return $form;
}

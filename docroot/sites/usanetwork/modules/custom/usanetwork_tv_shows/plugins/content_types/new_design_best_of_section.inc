<?php
/**
 * Best of section for new design.
 */

$plugin = array(
  'title' => t('Best of section'),
  'description' => t('Displays Best of section for new design.'),
  'single' => TRUE,
  'content_types' => array('new_design_tv_show_best_of_section'),
  'render callback' => 'new_design_best_of_section_content_type_render',
  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
  'edit form' => 'new_design_best_of_section_content_type_edit_form',
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
function new_design_best_of_section_content_type_render($subtype, $conf, $args, $context) {
  $node = $context->data;
  $node_wrapper = entity_metadata_wrapper('node', $node);
  $block = new stdClass();
  $best_of_data = new_design_best_of_section_get_content($node); 
  
  if (empty($best_of_data)){
    return $block;
  }
  
  $theme_variables = array();
  foreach ($best_of_data as $item) {
    $theme_variables['items'][] = theme('new_design_best_of_section_item', $item);
  }
  $layout_scheme = new_design_best_of_section_get_layout(count($best_of_data));
  $theme_variables['layout_scheme'] = $layout_scheme;

  $theme_variables['title'] = t('Best of section');
  if (usanetwork_core_api_check_field($node, 'field_best_of_section_title')) {
    $theme_variables['title'] = $node_wrapper->field_best_of_section_title->value();
  }

  if (usanetwork_core_api_check_field($node, 'field_best_of_section_link')) {
    $theme_variables['link'] = $node_wrapper->field_best_of_section_link->value();
  }

  $block->content = array(
    '#theme' => 'new_design_best_of_section',
    '#content' => $theme_variables,
  );
  return $block;
}

function new_design_best_of_section_content_type_edit_form($form, &$form_state) {
  return $form;
}

function new_design_best_of_section_get_content($node) {
  $best_of_content = usanetwork_core_api_get_dynamic_entity_reference_content($node, 'field_best_of_items');
  $best_of_data = array();
  $layout_scheme = new_design_best_of_section_get_suitable_layout($best_of_content);
  if (!$layout_scheme) {
    return array();
  }
  foreach ($best_of_content as $index => $item) {
    $styles_for_types = new_design_best_of_section_get_styles_for_types();
    $style_desktop = NULL;
    $style_mobile = NULL;
    if (isset($layout_scheme['items'][$index]['desktop_type'])) {
      $style_desktop = $styles_for_types[$layout_scheme['items'][$index]['desktop_type']]['desktop'];
    }
    if (isset($layout_scheme['items'][$index]['mobile_type'])) {
      $style_mobile = $styles_for_types[$layout_scheme['items'][$index]['mobile_type']]['mobile'];
    }
    if (!($style_desktop && $style_mobile)) {
      continue;
    }
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image_given_image_override($item['entity_type'], $item['entity']);
    $additional_data = array(
      'image_desktop' => image_style_url($style_desktop, $row_image_uri),
      'image_mobile' => image_style_url($style_mobile, $row_image_uri),
    );
    $links = new_design_best_of_section_get_promo_links($item['entity'], $item['entity_type'], $node, $data_item);

    $data_item = $data_item + $additional_data + $links;
    $best_of_data[] = array(
      'item' => $data_item,
      'layout_scheme' => $layout_scheme['items'][$index],
    );
  }
  return $best_of_data;
}

/**
 * @param $best_of_content
 * @return array
 */
function new_design_best_of_section_get_suitable_layout(&$best_of_content) {
  $layout_scheme = new_design_best_of_section_get_layout(count($best_of_content));
  $count = count($best_of_content);
  if (empty($layout_scheme)) {
    $layout_scheme = new_design_best_of_section_get_layout($count + 1);
  }
  if (empty($layout_scheme)) {
    while (empty($layout_scheme) && $count > 0) {
      $layout_scheme = new_design_best_of_section_get_layout(--$count);
    }
  }
  if (empty($layout_scheme)) {
    return FALSE;
  }

  $best_of_content = array_slice($best_of_content, 0, $count);

  return $layout_scheme;
}

function new_design_best_of_section_get_layout($layout) {
  // Type can be:
  //  - half_vertical
  //  - half_horizontal
  //  - full
  //  - quarter
  switch ($layout) {
    case 'three_items_default':
    case 3:
      return array(
        'class' => 'three-items-default',
        'items' => array(
          array(
            'desktop_type' => 'half-vertical',
            'mobile_type' => 'quarter',
          ),
          array(
            'desktop_type' => 'half-vertical',
            'mobile_type' => 'quarter',
          ),
          array(
            'desktop_type' => 'full',
            'mobile_type' => 'full',
          ),
        ),
      );
    case 'four_items_default':
    case 4:
      return array();
    case 'five_items_default':
    case 5:
      return array();
    case 'six_items_default':
    case 6:
      return array();
    default:
      return array();
  }
}

function new_design_best_of_section_get_styles_for_types() {
  return array(
    'half-vertical' => array(
      'desktop' => '379x785',
      'mobile' => 'thumbnail',
    ),
    'half-horizontal' => array(
      'desktop' => 'thumbnail',
      'mobile' => 'thumbnail',
    ),
    'full' => array(
      'desktop' => '773x785',
      'mobile' => '675x303',
    ),
    'quarter' => array(
      'desktop' => 'thumbnail',
      'mobile' => '326x188',
    ),
  );
}

function new_design_best_of_section_get_promo_links($entity, $entity_type, $tv_content, &$data_item) {
  $entity_wrapper = entity_metadata_wrapper($entity_type, $entity);
  $promo_links = array();
  if (usanetwork_core_api_check_field($entity, 'field_promo_links', $entity_type)) {
    foreach ($entity_wrapper->field_promo_links->value() as $link) {
      $promo_links[] = $link;
    }
  }
  if ($entity->type == 'usanetwork_promo') {
    if (count($promo_links) == 1) {
      $link = reset($promo_links);
      $data_item['url'] = $link['url'];
      if (!empty($link['title'])) {
        $data_item['title'] = $link['title'];
      }
      $promo_links = array();
    }
  }
  $bottom_link = NULL;
  $cta_text = NULL;
  $title = 'See more';
  if (usanetwork_core_api_check_field($entity, 'field_promo_call_to_action_text', $entity_type)) {
    $cta_text = $entity_wrapper->field_promo_call_to_action_text->value();
  }
  if (isset($entity->type) && 'usanetwork_promo' == $entity->type) {
    $title = $cta_text ? $cta_text : 'See all updates';
    if (usanetwork_core_api_check_field($entity, 'field_promo_link', $entity_type)) {
      $bottom_link = $entity_wrapper->field_promo_link->value();
      $bottom_link['title'] = $title;
    }
  }
  elseif (isset($entity->type) && 'consumpt_post' == $entity->type) {
    if (usanetwork_core_api_check_field($entity, 'field_consumptionator_blog', $entity_type)) {
      $blog_nid = $entity_wrapper->field_consumptionator_blog->nid->value();
      $url = url('node/' . $blog_nid);
    }
    else {
      $url = url('node/' . $tv_content->nid . '/blog');
    }
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' blog posts',
      'url' => $url,
    );
  }
  elseif (isset($entity->type) && 'person' == $entity->type) {
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' cast & info',
      'url' => url('node/' . $tv_content->nid . '/cast'),
    );
  }
  elseif (isset($entity->type) && 'tv_episode' == $entity->type) {
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' episodes',
      'url' => url('node/' . $tv_content->nid . '/cast'),
    );
  }
  elseif (isset($entity->type) && 'media_gallery' == $entity->type) {
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' photo galleries',
      'url' => url('node/' . $tv_content->nid . '/photos'),
    );
  }
  elseif ($entity_type == 'file') {
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' videos',
      'url' => url('node/' . $tv_content->nid . '/videos'),
    );
  }
  else {
    $bottom_link = array(
      'title' => $title = $cta_text ? $cta_text : $title . ' extras',
      'url' => url('node/' . $tv_content->nid . '/explore'),
    );
  }

  return array(
    'links' => $promo_links,
    'bottom_link' => $bottom_link,
  );
}


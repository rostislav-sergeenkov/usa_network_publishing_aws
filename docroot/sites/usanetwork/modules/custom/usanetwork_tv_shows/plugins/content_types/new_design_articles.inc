
<?php

/**
 * Articles for new design.
 */

$plugin = array(
  // The name of the plugin to be displayed when you select it.
  'title' => t('Articles'),
  // Description of the plugin to be displayed when you select it.
  'description' => t('Displays Articles for new design.'),
  'content_types' => array('new_design_articles_block'),
  // Function that will generate and display the contents of the plugin.
  'render callback' => 'new_design_articles_content_type_render',
  // Form a plugin settings.
  'edit form' => 'new_design_articles_content_type_edit_form',
  // The category that will contain the plugin.
  'category' => array(t('New design'), -9),
  // A flag indicating whether the plug-subtype of another.
  'single' => TRUE,

  'required context' => new ctools_context_required(t('TV Show node'), 'node'),
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
function new_design_articles_content_type_render($subtype, $conf, $args, $context) {
  $logo = array();
  $node_show = $context->data;
  $logo_entity = entity_metadata_wrapper('node', $node_show);
  $show_logo = $logo_entity->field_show_service_logo->value();
  $logo['show_logo'] = $show_logo;
  $author_uid = variable_get('usanetwork_blog_migrate_the_verge_user_uid', 0);

  if ($show_logo) {
    $logo_field = $logo_entity->field_service_logo->value();
    if ($logo_field) {
      $logo_field = file_create_url($logo_field['uri']);
      $logo['logo_image'] = $logo_field;
    }
  }

  $articles = usanetwork_core_api_get_dynamic_entity_reference_content($node_show, 'field_articles');
  if (empty($articles)) {
    $out = new_design_articles_content_type_get_latest_articles($author_uid, $node_show);
  }
  else {
    $out = new_design_articles_content_type_get_manual_articles($articles);
  }
  $out['view_more'] = url('node/' . $node_show->nid . '/blog');

  $block = new stdClass();
  if (!empty($out['items'])) {
    $block->content = array(
      '#theme' => 'new_design_articles',
      '#content' => array('logo' => $logo, 'articles' => $out),
    );
  }
  return $block;
}

function new_design_articles_content_type_get_manual_articles($articles) {
  $articles_data = array();
  foreach ($articles as $index => $item) {
    $data_item = usanetwork_promo_get_promo_content_variables($item);
    $row_image_uri = usanetwork_core_api_get_content_image($item['entity_type'], $item['entity']);
    $positions = usanetwork_core_api_get_output_position($articles, $index);
    $blog_service = usanetwork_blog_migrate_get_post_service($item['entity']);
    $author_term = usanetwork_consumptionator_post_get_author($item['entity_type'], $item['entity']);
    $author_name = NULL;
    if ($author_term) {
      $author_name = $author_term->name;
    }
    $entity_wrapper = entity_metadata_wrapper($item['entity_type'], $item['entity']);
    $date = $entity_wrapper->created->value();
    if (!empty($date)) {
      $date = date('m/d/Y', $date);
    }
    $data_item['description'] = new_design_articles_content_type_get_description($entity_wrapper);
    $additional_data = array(
      'image_desktop' => image_style_url('336x251', $row_image_uri),
      'image_mobile' => image_style_url('655x378', $row_image_uri),
      'position' => current($positions),
      'blog_service' => $blog_service,
      'author' => $author_name,
      'date' => $date,
    );
    $data_item = $data_item + $additional_data;
    $articles_data['items'][] = $data_item;
  }
  return $articles_data;
}

/**
 * @param $author_uid
 * @param $node_show
 * @param $out
 * @return mixed
 * @throws \EntityMetadataWrapperException
 */
function new_design_articles_content_type_get_latest_articles($author_uid, $node_show) {
  $out = array();
  if ($author_uid > 0) {
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node');
    $query->propertyCondition('type', 'consumpt_post');
    $query->fieldCondition('field_show', 'target_id', $node_show->nid, '=');
    $query->propertyCondition('status', NODE_PUBLISHED);

    // Disable for tests.
    $query->propertyCondition('uid', $author_uid);

    $query->range(0, 4);
    $result = $query->execute();

    if (isset($result['node'])) {
      $data = array_keys($result['node']);

      foreach ($data as $raw) {
        $entity_wrapper = entity_metadata_wrapper('node', $raw);

        if (isset($entity_wrapper->title)) {
          $out['items'][$raw]['title'] = l($entity_wrapper->title->value(), 'node/' . $entity_wrapper->nid->value(), array());
        }

        $out['items'][$raw]['url'] = url('node/' . $entity_wrapper->nid->value());

        if (isset($entity_wrapper->field_post_cover)) {
          $image_data = $entity_wrapper->field_post_cover->value();
          $out['items'][$raw]['image_desktop'] = image_style_url('336x251', $image_data['uri']);
          $out['items'][$raw]['image_mobile'] = image_style_url('655x378', $image_data['uri']);
        }

        $author_term = usanetwork_consumptionator_post_get_author('node', $entity_wrapper->value());
        $out['items'][$raw]['author'] = NULL;
        if ($author_term) {
          $out['items'][$raw]['author'] = $author_term->name;
        }

        if (isset($entity_wrapper->created)) {
          $out['items'][$raw]['date'] = date('m/d/Y', $entity_wrapper->created->value());
        }
        $out['items'][$raw]['description'] = new_design_articles_content_type_get_description($entity_wrapper);
      }
      return $out;
    }
    return $out;
  }
  return $out;
}

/**
 * @param $entity_wrapper
 * @param $out
 * @param $raw
 * @return mixed
 */
function new_design_articles_content_type_get_description($entity_wrapper) {
  $description = '';
  if (isset($entity_wrapper->field_summary)) {
    $description = $entity_wrapper->field_summary->value();
    if(!empty($description)) {
      $description = strip_tags($description['value']);
    }
    else {
      $description = $entity_wrapper->body->value->value();
      $temp = substr($description, 0, 250);
      $description = substr($temp, 0, strrpos($temp, ' '));
      $description = strip_tags($description);
    }
  }
  return $description;
}

/**
 * 'Edit form' callback for the content type.
 */
function new_design_articles_content_type_edit_form($form, &$form_state) {
  return $form;
}

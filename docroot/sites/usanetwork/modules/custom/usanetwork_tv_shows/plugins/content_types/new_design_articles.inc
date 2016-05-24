
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
  $out = array();

  $node_show = $context->data;
  $logo_entity = entity_metadata_wrapper('node', $node_show);
  $show_logo = $logo_entity->field_show_service_logo->value();
  $author_uid = variable_get('usanetwork_blog_migrate_the_verge_user_uid', 0);

  if ($show_logo) {
    $logo = $logo_entity->field_service_logo->value();
    $logo = file_create_url($logo['uri']);
  }
  else {
    $logo = '';
  }

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

        $out['items'][$raw]['link'] = drupal_get_path_alias('node/' . $entity_wrapper->nid->value());

        if (isset($entity_wrapper->field_post_cover)) {
          $image_data = $entity_wrapper->field_post_cover->value();
          $out[$raw]['image_desktop'] = image_style_url('336x251', $image_data['uri']);

        }

        if (isset($entity_wrapper->field_contributor)) {
          $author_name = $entity_wrapper->field_contributor->value();
          $out['items'][$raw]['author'] = $author_name->name;
        }

        if (isset($entity_wrapper->created)) {
          $out['items'][$raw]['date'] = date('m/d/Y', $entity_wrapper->created->value());
        }

        if (isset($entity_wrapper->field_summary)) {
          $description = $entity_wrapper->field_summary->value();
          $out['items'][$raw]['description'] = strip_tags($description['value']);

          if ($out['items'][$raw]['description'] == '') {
            $description = $entity_wrapper->body->value->value();

            $temp = substr($description, 0, 250);
            $description = substr($temp, 0, strrpos($temp, ' '));

            $out['items'][$raw]['description'] = strip_tags($description);
          }
        }
      }
    }
  }

  $out['view_more'] = url('node/' . $node_show->nid . '/blog');

  $block = new stdClass();
  $block->content = array(
    '#theme' => 'new_design_articles',
    '#content' => array('logo' => $logo, 'articles' => $out),
  );
  return $block;
}

/**
 * 'Edit form' callback for the content type.
 */
function new_design_articles_content_type_edit_form($form, &$form_state) {
  return $form;
}

<?php
/**
 * @file
 * usanetwork_cast.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_cast_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'usa_people';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'usa_people';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Field: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'character_profile' => 'character_profile',
    'person' => 'person',
  );

  /* Display: person gallery */
  $handler = $view->new_display('panel_pane', 'person gallery', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'block_cover_title_lg';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['alternating'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|created';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'block_cover_title_lg';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Field: Person (field_person) */
  $handler->display->display_options['arguments']['field_person_target_id']['id'] = 'field_person_target_id';
  $handler->display->display_options['arguments']['field_person_target_id']['table'] = 'field_data_field_person';
  $handler->display->display_options['arguments']['field_person_target_id']['field'] = 'field_person_target_id';
  $handler->display->display_options['arguments']['field_person_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_person_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_person_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_person_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_person_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'media_gallery' => 'media_gallery',
  );

  /* Display: person social */
  $handler = $view->new_display('panel_pane', 'person social', 'panel_pane_2');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'share-icons';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['inline'] = array(
    'field_usa_link_facebook' => 'field_usa_link_facebook',
    'field_usa_link_twitter' => 'field_usa_link_twitter',
    'field_usa_link_pinterest' => 'field_usa_link_pinterest',
    'field_usa_link_tumblr' => 'field_usa_link_tumblr',
  );
  $handler->display->display_options['row_options']['separator'] = ' ';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Tumblr Page */
  $handler->display->display_options['fields']['field_usa_link_tumblr']['id'] = 'field_usa_link_tumblr';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['table'] = 'field_data_field_usa_link_tumblr';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['field'] = 'field_usa_link_tumblr';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['label'] = '';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_tumblr']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_tumblr']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_usa_link_tumblr']['field_api_classes'] = TRUE;
  /* Field: Content: Pinterest page */
  $handler->display->display_options['fields']['field_usa_link_pinterest']['id'] = 'field_usa_link_pinterest';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['table'] = 'field_data_field_usa_link_pinterest';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['field'] = 'field_usa_link_pinterest';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['label'] = '';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_pinterest']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_pinterest']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_usa_link_pinterest']['field_api_classes'] = TRUE;
  /* Field: Content: Twitter page */
  $handler->display->display_options['fields']['field_usa_link_twitter']['id'] = 'field_usa_link_twitter';
  $handler->display->display_options['fields']['field_usa_link_twitter']['table'] = 'field_data_field_usa_link_twitter';
  $handler->display->display_options['fields']['field_usa_link_twitter']['field'] = 'field_usa_link_twitter';
  $handler->display->display_options['fields']['field_usa_link_twitter']['label'] = '';
  $handler->display->display_options['fields']['field_usa_link_twitter']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_twitter']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_twitter']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_twitter']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_twitter']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_usa_link_twitter']['field_api_classes'] = TRUE;
  /* Field: Content: Facebook page */
  $handler->display->display_options['fields']['field_usa_link_facebook']['id'] = 'field_usa_link_facebook';
  $handler->display->display_options['fields']['field_usa_link_facebook']['table'] = 'field_data_field_usa_link_facebook';
  $handler->display->display_options['fields']['field_usa_link_facebook']['field'] = 'field_usa_link_facebook';
  $handler->display->display_options['fields']['field_usa_link_facebook']['label'] = '';
  $handler->display->display_options['fields']['field_usa_link_facebook']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_facebook']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_facebook']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_link_facebook']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_link_facebook']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_usa_link_facebook']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'person' => 'person',
  );
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['relationship'] = 'field_person_target_id';
  $handler->display->display_options['filters']['type']['value'] = array(
    'person' => 'person',
  );

  /* Display: role or actor */
  $handler = $view->new_display('panel_pane', 'role or actor', 'panel_pane_3');
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Field: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = 'played by ';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = 'h2';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'person' => 'person',
  );
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'person' => 'person',
  );
  $export['usa_people'] = $view;

  return $export;
}

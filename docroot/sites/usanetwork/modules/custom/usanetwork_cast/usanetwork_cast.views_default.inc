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
  $view->name = 'usa_cast';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'usa_cast';
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
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  $handler->display->display_options['fields']['field_usa_character_thumb']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_role']['field_api_classes'] = TRUE;
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = '';
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['text'] = 'played by [field_usa_actor_name]';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['type'] = 'text_plain';
  $handler->display->display_options['fields']['field_usa_actor_name']['field_api_classes'] = TRUE;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'self';
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
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
  /* Filter criterion: Content: Hide from cast carousel (field_hide_cast_carousel) */
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['id'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['table'] = 'field_data_field_hide_cast_carousel';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['field'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['value'] = array(
    1 => '1',
  );
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );

  /* Display: show cast carousel */
  $handler = $view->new_display('block', 'show cast carousel', 'block_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'carousel-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'cast_carousel';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'draggableviews_structure|weight';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'cast_carousel';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  $handler->display->display_options['fields']['field_usa_character_thumb']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = '';
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['text'] = 'played by [field_usa_actor_name]';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['type'] = 'text_plain';
  $handler->display->display_options['fields']['field_usa_actor_name']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_1';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_arguments'] = 'none';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Role (field_role) */
  $handler->display->display_options['filters']['field_role_tid']['id'] = 'field_role_tid';
  $handler->display->display_options['filters']['field_role_tid']['table'] = 'field_data_field_role';
  $handler->display->display_options['filters']['field_role_tid']['field'] = 'field_role_tid';
  $handler->display->display_options['filters']['field_role_tid']['operator'] = 'not';
  $handler->display->display_options['filters']['field_role_tid']['value'] = array(
    256 => '256',
  );
  $handler->display->display_options['filters']['field_role_tid']['group'] = 1;
  $handler->display->display_options['filters']['field_role_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_role_tid']['vocabulary'] = 'role';
  /* Filter criterion: Content: Hide from cast carousel (field_hide_cast_carousel) */
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['id'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['table'] = 'field_data_field_hide_cast_carousel';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['field'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['group'] = 1;

  /* Display: admin cast carousel sorting page */
  $handler = $view->new_display('page', 'admin cast carousel sorting page', 'page_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'USA Shows: cast carousel sorting';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['access'] = FALSE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
    4 => '4',
  );
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_show',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['style_options']['columns'] = array(
    'draggableviews' => 'draggableviews',
    'nid' => 'nid',
    'field_usa_character_thumb' => 'field_usa_character_thumb',
    'title' => 'title',
    'field_role' => 'field_role',
    'field_usa_actor_name' => 'field_usa_actor_name',
    'field_show' => 'field_show',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'draggableviews' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_usa_character_thumb' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_role' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_usa_actor_name' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_show' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Draggableviews: Content */
  $handler->display->display_options['fields']['draggableviews']['id'] = 'draggableviews';
  $handler->display->display_options['fields']['draggableviews']['table'] = 'node';
  $handler->display->display_options['fields']['draggableviews']['field'] = 'draggableviews';
  $handler->display->display_options['fields']['draggableviews']['label'] = '';
  $handler->display->display_options['fields']['draggableviews']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['hide_alter_empty'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['draggableviews']['ajax'] = 0;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'entityreference_live_preview',
  );
  $handler->display->display_options['fields']['field_usa_character_thumb']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_role']['field_api_classes'] = TRUE;
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = '';
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['text'] = 'played by [field_usa_actor_name]';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['field_api_classes'] = TRUE;
  /* Field: Content: Show */
  $handler->display->display_options['fields']['field_show']['id'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['table'] = 'field_data_field_show';
  $handler->display->display_options['fields']['field_show']['field'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['label'] = '';
  $handler->display->display_options['fields']['field_show']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_show']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_show']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_show']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_1';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Role (field_role) */
  $handler->display->display_options['filters']['field_role_tid']['id'] = 'field_role_tid';
  $handler->display->display_options['filters']['field_role_tid']['table'] = 'field_data_field_role';
  $handler->display->display_options['filters']['field_role_tid']['field'] = 'field_role_tid';
  $handler->display->display_options['filters']['field_role_tid']['operator'] = 'not';
  $handler->display->display_options['filters']['field_role_tid']['value'] = array(
    256 => '256',
  );
  $handler->display->display_options['filters']['field_role_tid']['group'] = 1;
  $handler->display->display_options['filters']['field_role_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_role_tid']['vocabulary'] = 'role';
  /* Filter criterion: Content: Hide from cast carousel (field_hide_cast_carousel) */
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['id'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['table'] = 'field_data_field_hide_cast_carousel';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['field'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['group'] = 1;
  $handler->display->display_options['path'] = 'admin/usanetwork/shows/cast_carousel';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Shows: cast carousels';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;

  /* Display: show social: people list */
  $handler = $view->new_display('block', 'show social: people list', 'block_2');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'follow_social';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'draggableviews_structure|weight';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'follow_social';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['path'] = 'node/[nid]';
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'thumb_tiny',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = '';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = 'em';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['type'] = 'text_plain';
  $handler->display->display_options['fields']['field_usa_actor_name']['field_api_classes'] = TRUE;
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_2';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_arguments'] = 'none';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_show_target_id']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['title'] = 'Follow';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_show_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['validate_options']['types'] = array(
    'tv_show' => 'tv_show',
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
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );

  /* Display: admin show social: people list sorting page */
  $handler = $view->new_display('page', 'admin show social: people list sorting page', 'page_2');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'USA Shows: show social page people sorting';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['access'] = FALSE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
    4 => '4',
  );
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_show',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['style_options']['columns'] = array(
    'draggableviews' => 'draggableviews',
    'nid' => 'nid',
    'field_usa_character_thumb' => 'field_usa_character_thumb',
    'title' => 'title',
    'field_role' => 'field_role',
    'field_usa_actor_name' => 'field_usa_actor_name',
    'field_show' => 'field_show',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'draggableviews' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_usa_character_thumb' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_role' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_usa_actor_name' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_show' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Draggableviews: Content */
  $handler->display->display_options['fields']['draggableviews']['id'] = 'draggableviews';
  $handler->display->display_options['fields']['draggableviews']['table'] = 'node';
  $handler->display->display_options['fields']['draggableviews']['field'] = 'draggableviews';
  $handler->display->display_options['fields']['draggableviews']['label'] = '';
  $handler->display->display_options['fields']['draggableviews']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['hide_alter_empty'] = FALSE;
  $handler->display->display_options['fields']['draggableviews']['draggableviews']['ajax'] = 0;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'entityreference_live_preview',
  );
  $handler->display->display_options['fields']['field_usa_character_thumb']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_role']['field_api_classes'] = TRUE;
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = '';
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_usa_actor_name']['alter']['text'] = 'played by [field_usa_actor_name]';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['field_api_classes'] = TRUE;
  /* Field: Content: Show */
  $handler->display->display_options['fields']['field_show']['id'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['table'] = 'field_data_field_show';
  $handler->display->display_options['fields']['field_show']['field'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['label'] = '';
  $handler->display->display_options['fields']['field_show']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_show']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_show']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_show']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_2';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
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
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['path'] = 'admin/usanetwork/shows/social_people';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Shows: social page people';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;

  /* Display: show cast button */
  $handler = $view->new_display('panel_pane', 'show cast button', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
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
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['relationships']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['relationships']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['relationships']['field_show_target_id']['label'] = 'show';
  $handler->display->display_options['relationships']['field_show_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Path */
  $handler->display->display_options['fields']['path']['id'] = 'path';
  $handler->display->display_options['fields']['path']['table'] = 'node';
  $handler->display->display_options['fields']['path']['field'] = 'path';
  $handler->display->display_options['fields']['path']['relationship'] = 'field_show_target_id';
  $handler->display->display_options['fields']['path']['label'] = '';
  $handler->display->display_options['fields']['path']['exclude'] = TRUE;
  $handler->display->display_options['fields']['path']['element_label_colon'] = FALSE;
  /* Field: Content: Person Profile Thumbnail */
  $handler->display->display_options['fields']['field_usa_character_thumb']['id'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['table'] = 'field_data_field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['field'] = 'field_usa_character_thumb';
  $handler->display->display_options['fields']['field_usa_character_thumb']['label'] = '';
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['path'] = '[path]/cast';
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['alter']['prefix'] = '<h2>Cast &amp; Crew</h2>';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_class'] = 'title-overlay';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_usa_character_thumb']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_usa_character_thumb']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_usa_character_thumb']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_usa_character_thumb']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_1';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
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
  /* Filter criterion: Content: Hide from cast carousel (field_hide_cast_carousel) */
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['id'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['table'] = 'field_data_field_hide_cast_carousel';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['field'] = 'field_hide_cast_carousel_value';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_cast_carousel_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['pane_title'] = 'Show Cast Button';
  $handler->display->display_options['argument_input'] = array(
    'field_show_target_id' => array(
      'type' => 'context',
      'context' => 'entity:node.nid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Content: Show (field_show)',
    ),
  );

  /* Display: show social show attachment */
  $handler = $view->new_display('attachment', 'show social show attachment', 'attachment_1');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'follow_social';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['alternating'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|title';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'follow_social';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Social Logo */
  $handler->display->display_options['fields']['field_social_logo']['id'] = 'field_social_logo';
  $handler->display->display_options['fields']['field_social_logo']['table'] = 'field_data_field_social_logo';
  $handler->display->display_options['fields']['field_social_logo']['field'] = 'field_social_logo';
  $handler->display->display_options['fields']['field_social_logo']['label'] = '';
  $handler->display->display_options['fields']['field_social_logo']['element_type'] = '0';
  $handler->display->display_options['fields']['field_social_logo']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_social_logo']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_social_logo']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_social_logo']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_social_logo']['settings'] = array(
    'image_style' => 'thumb_tiny',
    'image_link' => 'content',
  );
  $handler->display->display_options['fields']['field_social_logo']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['order'] = 'DESC';
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
    'tv_show' => 'tv_show',
  );
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['displays'] = array(
    'block_2' => 'block_2',
    'panel_pane_2' => 'panel_pane_2',
    'default' => 0,
    'block_1' => 0,
    'page_1' => 0,
    'page_2' => 0,
    'panel_pane_1' => 0,
  );

  /* Display: show landing: people list */
  $handler = $view->new_display('panel_pane', 'show landing: people list', 'panel_pane_2');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '4';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'follow_social';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|title';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'follow_social';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_2';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_arguments'] = 'none';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_show_target_id']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['title'] = 'Follow';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_show_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['validate_options']['types'] = array(
    'tv_show' => 'tv_show',
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
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );

  /* Display: Attachment: show landing people list expanded */
  $handler = $view->new_display('attachment', 'Attachment: show landing people list expanded', 'attachment_2');
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '4';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'follow_social';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|title';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'follow_social';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['footer'] = FALSE;
  /* Footer: Global: Text area */
  $handler->display->display_options['footer']['area']['id'] = 'area';
  $handler->display->display_options['footer']['area']['table'] = 'views';
  $handler->display->display_options['footer']['area']['field'] = 'area';
  $handler->display->display_options['footer']['area']['content'] = 'expand to view all';
  $handler->display->display_options['footer']['area']['format'] = 'wysiwyg_basic';
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Draggableviews: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'draggableviews_structure';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_view'] = 'usa_cast:page_2';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_arguments'] = 'none';
  $handler->display->display_options['sorts']['weight']['draggableviews_setting_new_items_bottom_list'] = 1;
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_show_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['validate_options']['types'] = array(
    'tv_show' => 'tv_show',
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
  /* Filter criterion: Content: Hide from social follow block (field_hide_social_follow) */
  $handler->display->display_options['filters']['field_hide_social_follow_value']['id'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['table'] = 'field_data_field_hide_social_follow';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['field'] = 'field_hide_social_follow_value';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['operator'] = 'not';
  $handler->display->display_options['filters']['field_hide_social_follow_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['displays'] = array(
    'panel_pane_2' => 'panel_pane_2',
    'default' => 0,
    'block_1' => 0,
    'page_1' => 0,
    'block_2' => 0,
    'page_2' => 0,
    'panel_pane_1' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $handler->display->display_options['inherit_arguments'] = FALSE;
  $export['usa_cast'] = $view;

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
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
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
  /* Field: Content: Role */
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
  /* Contextual filter: Content: Related Person (field_person) */
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
  $handler->display->display_options['css_class'] = 'icons-social icons-inline';
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
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
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
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Content: Role (field_role) */
  $handler->display->display_options['relationships']['field_role_tid']['id'] = 'field_role_tid';
  $handler->display->display_options['relationships']['field_role_tid']['table'] = 'field_data_field_role';
  $handler->display->display_options['relationships']['field_role_tid']['field'] = 'field_role_tid';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Role */
  $handler->display->display_options['fields']['field_role']['id'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['table'] = 'field_data_field_role';
  $handler->display->display_options['fields']['field_role']['field'] = 'field_role';
  $handler->display->display_options['fields']['field_role']['label'] = '';
  $handler->display->display_options['fields']['field_role']['element_type'] = 'h4';
  $handler->display->display_options['fields']['field_role']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_role']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_role']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Actor Full Name */
  $handler->display->display_options['fields']['field_usa_actor_name']['id'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['table'] = 'field_data_field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['field'] = 'field_usa_actor_name';
  $handler->display->display_options['fields']['field_usa_actor_name']['label'] = 'played by ';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_type'] = '0';
  $handler->display->display_options['fields']['field_usa_actor_name']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_usa_actor_name']['element_wrapper_type'] = 'h4';
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Taxonomy term: Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'field_role_tid';
  $handler->display->display_options['filters']['name']['operator'] = '!=';
  $handler->display->display_options['filters']['name']['value'] = 'BLANK';
  /* Filter criterion: Field: H1 (field_seo_h1) */
  $handler->display->display_options['filters']['field_seo_h1_value']['id'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['table'] = 'field_data_field_seo_h1';
  $handler->display->display_options['filters']['field_seo_h1_value']['field'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['operator'] = 'empty';

  /* Display: person title */
  $handler = $view->new_display('panel_pane', 'person title', 'panel_pane_4');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['element_type'] = 'h1';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
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
  /* Filter criterion: Field: H1 (field_seo_h1) */
  $handler->display->display_options['filters']['field_seo_h1_value']['id'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['table'] = 'field_data_field_seo_h1';
  $handler->display->display_options['filters']['field_seo_h1_value']['field'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['operator'] = 'empty';

  /* Display: person h1 */
  $handler = $view->new_display('panel_pane', 'person h1', 'panel_pane_5');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
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
  /* Field: Field: H1 */
  $handler->display->display_options['fields']['field_seo_h1']['id'] = 'field_seo_h1';
  $handler->display->display_options['fields']['field_seo_h1']['table'] = 'field_data_field_seo_h1';
  $handler->display->display_options['fields']['field_seo_h1']['field'] = 'field_seo_h1';
  $handler->display->display_options['fields']['field_seo_h1']['label'] = '';
  $handler->display->display_options['fields']['field_seo_h1']['element_type'] = 'h1';
  $handler->display->display_options['fields']['field_seo_h1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_seo_h1']['element_default_classes'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Field: H1 (field_seo_h1) */
  $handler->display->display_options['filters']['field_seo_h1_value']['id'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['table'] = 'field_data_field_seo_h1';
  $handler->display->display_options['filters']['field_seo_h1_value']['field'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['operator'] = 'not empty';
  $export['usa_people'] = $view;

  return $export;
}

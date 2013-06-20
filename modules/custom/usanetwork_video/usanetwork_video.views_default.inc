<?php
/**
 * @file
 * usanetwork_video.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_video_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'usa_video';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'usa_video';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'usa_video';
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['more_button_text'] = 'more';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_episode';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Air Date (field_video_air_date) */
  $handler->display->display_options['sorts']['field_video_air_date_value']['id'] = 'field_video_air_date_value';
  $handler->display->display_options['sorts']['field_video_air_date_value']['table'] = 'field_data_field_video_air_date';
  $handler->display->display_options['sorts']['field_video_air_date_value']['field'] = 'field_video_air_date_value';
  $handler->display->display_options['sorts']['field_video_air_date_value']['order'] = 'DESC';
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
    'usa_video' => 'usa_video',
  );
  /* Filter criterion: Content: Full Episode (field_full_episode) */
  $handler->display->display_options['filters']['field_full_episode_value']['id'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['table'] = 'field_data_field_full_episode';
  $handler->display->display_options['filters']['field_full_episode_value']['field'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['value'] = array(
    1 => '1',
  );

  /* Display: Global Full Episode */
  $handler = $view->new_display('block', 'Global Full Episode', 'global_full_episode');
  $handler->display->display_options['display_description'] = 'Global Full Episode';
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
    'usa_video' => 'usa_video',
    'usa_tve_video' => 'usa_tve_video',
  );
  /* Filter criterion: Content: Full Episode (field_full_episode) */
  $handler->display->display_options['filters']['field_full_episode_value']['id'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['table'] = 'field_data_field_full_episode';
  $handler->display->display_options['filters']['field_full_episode_value']['field'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['block_description'] = 'Global Full Episode';

  /* Display: Show Full Episode */
  $handler = $view->new_display('block', 'Show Full Episode', 'show_full_episode');
  $handler->display->display_options['display_description'] = 'Show Full Episode';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_show_episode';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
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
    'usa_video' => 'usa_video',
    'usa_tve_video' => 'usa_tve_video',
  );
  /* Filter criterion: Content: Full Episode (field_full_episode) */
  $handler->display->display_options['filters']['field_full_episode_value']['id'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['table'] = 'field_data_field_full_episode';
  $handler->display->display_options['filters']['field_full_episode_value']['field'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['block_description'] = 'Show Full Episode';

  /* Display: Category Videos */
  $handler = $view->new_display('block', 'Category Videos', 'category_videos');
  $handler->display->display_options['display_description'] = 'Category Videos';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_show_general';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: USA Video Terms (field_usa_video_terms) */
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_argument_type'] = 'php';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary_options']['items_per_page'] = '25';
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
    'usa_video' => 'usa_video',
  );
  /* Filter criterion: Content: Full Episode (field_full_episode) */
  $handler->display->display_options['filters']['field_full_episode_value']['id'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['table'] = 'field_data_field_full_episode';
  $handler->display->display_options['filters']['field_full_episode_value']['field'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['value'] = array(
    0 => '0',
  );
  $handler->display->display_options['block_description'] = 'Category Videos';

  /* Display: Global Latest Full Episode Video */
  $handler = $view->new_display('block', 'Global Latest Full Episode Video', 'global_latest_full_episode_video');
  $handler->display->display_options['display_description'] = 'Global Latest Full Episode Video';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['view_mode'] = 'full';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
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
    'usa_video' => 'usa_video',
    'usa_tve_video' => 'usa_tve_video',
  );
  /* Filter criterion: Content: Full Episode (field_full_episode) */
  $handler->display->display_options['filters']['field_full_episode_value']['id'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['table'] = 'field_data_field_full_episode';
  $handler->display->display_options['filters']['field_full_episode_value']['field'] = 'field_full_episode_value';
  $handler->display->display_options['filters']['field_full_episode_value']['value'] = array(
    1 => '1',
  );
  $handler->display->display_options['block_description'] = 'Global Latest Full Episode Video';
  $export['usa_video'] = $view;

  $view = new view();
  $view->name = 'whats_hot';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'queues';
  $view->human_name = 'Whats Hot';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['more_button_text'] = 'more';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_qt_node_target_id']['id'] = 'field_qt_node_target_id';
  $handler->display->display_options['relationships']['field_qt_node_target_id']['table'] = 'field_data_field_qt_node';
  $handler->display->display_options['relationships']['field_qt_node_target_id']['field'] = 'field_qt_node_target_id';
  /* Field: Content: Rendered Node */
  $handler->display->display_options['fields']['rendered_entity']['id'] = 'rendered_entity';
  $handler->display->display_options['fields']['rendered_entity']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['rendered_entity']['field'] = 'rendered_entity';
  $handler->display->display_options['fields']['rendered_entity']['relationship'] = 'field_qt_node_target_id';
  $handler->display->display_options['fields']['rendered_entity']['label'] = '';
  $handler->display->display_options['fields']['rendered_entity']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['rendered_entity']['link_to_entity'] = 1;
  $handler->display->display_options['fields']['rendered_entity']['display'] = 'view';
  $handler->display->display_options['fields']['rendered_entity']['view_mode'] = 'vid_teaser_general';
  /* Filter criterion: Queue: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'queues';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'video_queue' => 'video_queue',
  );
  /* Filter criterion: Queue: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'queues';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['value'] = 'What\'s Hot';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'field_qt_node_target_id';
  $handler->display->display_options['filters']['status']['value'] = '1';

  /* Display: Whats Hot */
  $handler = $view->new_display('block', 'Whats Hot', 'whats_hot');
  $handler->display->display_options['block_description'] = 'Whats Hot';
  $export['whats_hot'] = $view;

  return $export;
}

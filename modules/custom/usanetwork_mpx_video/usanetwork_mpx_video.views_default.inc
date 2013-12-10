<?php
/**
 * @file
 * usanetwork_mpx_video.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_mpx_video_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'usa_mpx_video';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'file_managed';
  $view->human_name = 'usa_mpx_video';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'usa_mpx_video';
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
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['links'] = 1;
  /* Field: File: Name */
  $handler->display->display_options['fields']['filename']['id'] = 'filename';
  $handler->display->display_options['fields']['filename']['table'] = 'file_managed';
  $handler->display->display_options['fields']['filename']['field'] = 'filename';
  $handler->display->display_options['fields']['filename']['label'] = '';
  $handler->display->display_options['fields']['filename']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['filename']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: File: MPX Media Air Date (field_mpx_airdate) */
  $handler->display->display_options['sorts']['field_mpx_airdate_value']['id'] = 'field_mpx_airdate_value';
  $handler->display->display_options['sorts']['field_mpx_airdate_value']['table'] = 'field_data_field_mpx_airdate';
  $handler->display->display_options['sorts']['field_mpx_airdate_value']['field'] = 'field_mpx_airdate_value';
  $handler->display->display_options['sorts']['field_mpx_airdate_value']['order'] = 'DESC';
  /* Sort criterion: File: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'file_managed';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['filters']['published']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: File: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'file_managed';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['operator'] = 'not in';
  $handler->display->display_options['filters']['type']['value'] = array(
    'audio' => 'audio',
    'document' => 'document',
    'image' => 'image',
    'mpx_player' => 'mpx_player',
    'mpx_video' => 'mpx_video',
    'video' => 'video',
  );

  /* Display: Global Full Episode */
  $handler = $view->new_display('block', 'Global Full Episode', 'global_full_mpx_episode');
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_episode';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['block_description'] = 'Global Full Episode';

  /* Display: Show Full Episode */
  $handler = $view->new_display('block', 'Show Full Episode', 'show_full_mpx_episode');
  $handler->display->display_options['display_description'] = 'Show Full Episode';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_show_episode';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Field: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_show_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_show_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['block_description'] = 'Show Full Episode';

  /* Display: Category Videos */
  $handler = $view->new_display('block', 'Category Videos', 'category_mpx_videos');
  $handler->display->display_options['display_description'] = 'Category Videos';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['more_button_text'] = 'more';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_show_general';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: USA Video Terms (field_usa_video_terms) */
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['block_description'] = 'Category Videos';

  /* Display: Global Latest Full Episode Video */
  $handler = $view->new_display('block', 'Global Latest Full Episode Video', 'global_latest_full_episode_video_mpx');
  $handler->display->display_options['display_description'] = 'Global Latest Full Episode Video';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'full';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['block_description'] = 'Global Latest Full Episode Video';
  $export['usa_mpx_video'] = $view;

  $view = new view();
  $view->name = 'whats_hot_file';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'queues';
  $view->human_name = 'Whats Hot File';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Whats Hot File';
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['more_button_text'] = 'more';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_qt_video_mpx_queue_target_id']['id'] = 'field_qt_video_mpx_queue_target_id';
  $handler->display->display_options['relationships']['field_qt_video_mpx_queue_target_id']['table'] = 'field_data_field_qt_video_mpx_queue';
  $handler->display->display_options['relationships']['field_qt_video_mpx_queue_target_id']['field'] = 'field_qt_video_mpx_queue_target_id';
  /* Field: File: Rendered File */
  $handler->display->display_options['fields']['rendered_entity']['id'] = 'rendered_entity';
  $handler->display->display_options['fields']['rendered_entity']['table'] = 'views_entity_file';
  $handler->display->display_options['fields']['rendered_entity']['field'] = 'rendered_entity';
  $handler->display->display_options['fields']['rendered_entity']['relationship'] = 'field_qt_video_mpx_queue_target_id';
  $handler->display->display_options['fields']['rendered_entity']['label'] = '';
  $handler->display->display_options['fields']['rendered_entity']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['rendered_entity']['link_to_entity'] = 1;
  $handler->display->display_options['fields']['rendered_entity']['display'] = 'view';
  $handler->display->display_options['fields']['rendered_entity']['view_mode'] = 'vid_teaser_general';
  $handler->display->display_options['fields']['rendered_entity']['bypass_access'] = 0;
  /* Filter criterion: Queue: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'queues';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'video_mpx_queue' => 'video_mpx_queue',
  );
  /* Filter criterion: Queue: Label */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'queues';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['value'] = 'What\'s Hot File';
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['relationship'] = 'field_qt_video_mpx_queue_target_id';
  $handler->display->display_options['filters']['published']['value'] = '1';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'whats_hot_file');
  $handler->display->display_options['block_description'] = 'Whats Hot File';
  $export['whats_hot_file'] = $view;

  return $export;
}

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
  /* Sort criterion: thePlatform MPX Video: Air Date */
  $handler->display->display_options['sorts']['airdate']['id'] = 'airdate';
  $handler->display->display_options['sorts']['airdate']['table'] = 'mpx_video';
  $handler->display->display_options['sorts']['airdate']['field'] = 'airdate';
  $handler->display->display_options['sorts']['airdate']['order'] = 'DESC';
  /* Sort criterion: File: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'file_managed';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator_id'] = 'status_op';
  $handler->display->display_options['filters']['status']['expose']['label'] = 'thePlatform MPX Video Status';
  $handler->display->display_options['filters']['status']['expose']['operator'] = 'status_op';
  $handler->display->display_options['filters']['status']['expose']['identifier'] = 'status';
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published_1']['id'] = 'published_1';
  $handler->display->display_options['filters']['published_1']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published_1']['field'] = 'published';
  $handler->display->display_options['filters']['published_1']['value'] = '1';

  /* Display: Global Full Episode */
  $handler = $view->new_display('block', 'Global Full Episode', 'global_full_mpx_episode');
  $handler->display->display_options['defaults']['use_more'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_text'] = FALSE;
  $handler->display->display_options['defaults']['query'] = FALSE;
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_episode';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: Taxonomy term: Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['filters']['name']['operator'] = '!=';
  $handler->display->display_options['filters']['name']['value'] = 'Live';
  $handler->display->display_options['filters']['name']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['filters']['published']['group'] = 1;
  /* Filter criterion: Field: Show (field_show) */
  $handler->display->display_options['filters']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['filters']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['operator'] = 'not empty';
  $handler->display->display_options['block_description'] = 'Global Full Episode';

  /* Display: Show Full Episode */
  $handler = $view->new_display('block', 'Show Full Episode', 'show_full_mpx_episode');
  $handler->display->display_options['display_description'] = 'Show Full Episode';
  $handler->display->display_options['defaults']['query'] = FALSE;
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
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
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['block_description'] = 'Show Full Episode';

  /* Display: Category Videos */
  $handler = $view->new_display('block', 'Category Videos', 'category_mpx_videos');
  $handler->display->display_options['display_description'] = 'Category Videos';
  $handler->display->display_options['defaults']['query'] = FALSE;
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
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
  /* Contextual filter: Field: USA Video Term (field_usa_video_terms) */
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_usa_video_terms_target_id']['summary_options']['items_per_page'] = '25';
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['filters']['published']['group'] = 1;
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
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: thePlatform MPX Video: Air Date */
  $handler->display->display_options['sorts']['airdate']['id'] = 'airdate';
  $handler->display->display_options['sorts']['airdate']['table'] = 'mpx_video';
  $handler->display->display_options['sorts']['airdate']['field'] = 'airdate';
  $handler->display->display_options['sorts']['airdate']['order'] = 'DESC';
  /* Sort criterion: File: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'file_managed';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: Taxonomy term: Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['filters']['name']['operator'] = '!=';
  $handler->display->display_options['filters']['name']['value'] = 'Live';
  $handler->display->display_options['filters']['name']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  /* Filter criterion: Field: Show (field_show) */
  $handler->display->display_options['filters']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['filters']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['operator'] = 'not empty';
  $handler->display->display_options['block_description'] = 'Global Latest Full Episode Video';

  /* Display: Global Live Video */
  $handler = $view->new_display('block', 'Global Live Video', 'latest_live_video');
  $handler->display->display_options['defaults']['title'] = FALSE;
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
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Taxonomy term: Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['filters']['name']['value'] = 'Live';
  $handler->display->display_options['filters']['name']['group'] = 1;
  $handler->display->display_options['block_description'] = 'Global Live Video';

  /* Display: Global Full Episodes Live */
  $handler = $view->new_display('block', 'Global Full Episodes Live', 'fullepisodes_live');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Latest Full Episodes';
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['use_ajax'] = FALSE;
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['defaults']['use_more'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['defaults']['use_more_text'] = FALSE;
  $handler->display->display_options['defaults']['query'] = FALSE;
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '4';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_episode';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['id'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['table'] = 'field_data_field_usa_video_terms';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['field'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['relationships']['field_usa_video_terms_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['arguments']['status']['id'] = 'status';
  $handler->display->display_options['arguments']['status']['table'] = 'mpx_video';
  $handler->display->display_options['arguments']['status']['field'] = 'status';
  $handler->display->display_options['arguments']['status']['default_action'] = 'default';
  $handler->display->display_options['arguments']['status']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['status']['default_argument_options']['argument'] = '1';
  $handler->display->display_options['arguments']['status']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['status']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['status']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['status']['limit'] = '0';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: Taxonomy term: Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'field_usa_video_terms_target_id';
  $handler->display->display_options['filters']['name']['operator'] = '!=';
  $handler->display->display_options['filters']['name']['value'] = 'Live';
  $handler->display->display_options['filters']['name']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['block_description'] = 'Global Full Episodes Live';

  /* Display: Front Global Full Episodes */
  $handler = $view->new_display('block', 'Front Global Full Episodes', 'front_full_epsds');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Latest Full Episodes';
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['wrapper_class'] = '';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'file';
  $handler->display->display_options['row_options']['view_mode'] = 'vid_teaser_front';
  $handler->display->display_options['row_options']['links'] = 1;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: File: Full Episode (field_mpx_full_episode) */
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['id'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['table'] = 'field_data_field_mpx_full_episode';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['field'] = 'field_mpx_full_episode_value';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['value'] = '1';
  $handler->display->display_options['filters']['field_mpx_full_episode_value']['group'] = 1;
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['filters']['published']['group'] = 1;
  /* Filter criterion: Field: Show (field_show) */
  $handler->display->display_options['filters']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['filters']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['operator'] = 'not empty';
  $handler->display->display_options['block_description'] = 'Front Latest Full Episodes';
  $export['usa_mpx_video'] = $view;

  $view = new view();
  $view->name = 'video_content_expiration';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'file_managed';
  $view->human_name = 'Video Content Expiration';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Content';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer files';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '100';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'views_bulk_operations' => 'views_bulk_operations',
    'thumbnail_url' => 'thumbnail_url',
    'filename' => 'filename',
    'title' => 'title',
    'type' => 'type',
    'filesize' => 'filesize',
    'name' => 'name',
    'timestamp' => 'timestamp',
    'pub_editorial' => 'pub_editorial',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'views_bulk_operations' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'thumbnail_url' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'filename' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'type' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'filesize' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'name' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'timestamp' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'pub_editorial' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: File: User who uploaded */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'file_managed';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Field: File: File ID */
  $handler->display->display_options['fields']['fid']['id'] = 'fid';
  $handler->display->display_options['fields']['fid']['table'] = 'file_managed';
  $handler->display->display_options['fields']['fid']['field'] = 'fid';
  $handler->display->display_options['fields']['fid']['exclude'] = TRUE;
  /* Field: Bulk operations: File */
  $handler->display->display_options['fields']['views_bulk_operations']['id'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['table'] = 'file_managed';
  $handler->display->display_options['fields']['views_bulk_operations']['field'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['display_type'] = '0';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['enable_select_all_pages'] = 1;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['force_single'] = 0;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['entity_load_capacity'] = '10';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_operations'] = array(
    'action::views_bulk_operations_archive_action' => array(
      'selected' => 1,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
      'settings' => array(
        'scheme' => 'public',
        'temporary' => 1,
      ),
    ),
    'action::views_bulk_operations_delete_item' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_script_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_modify_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
      'settings' => array(
        'show_all_tokens' => 1,
        'display_values' => array(
          '_all_' => '_all_',
        ),
      ),
    ),
    'action::views_bulk_operations_argument_selector_action' => array(
      'selected' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
      'settings' => array(
        'url' => '',
      ),
    ),
    'action::system_send_email_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
  );
  /* Field: File: Representative Image */
  $handler->display->display_options['fields']['representative_image']['id'] = 'representative_image';
  $handler->display->display_options['fields']['representative_image']['table'] = 'file_managed';
  $handler->display->display_options['fields']['representative_image']['field'] = 'representative_image';
  $handler->display->display_options['fields']['representative_image']['label'] = 'Thumbnail';
  $handler->display->display_options['fields']['representative_image']['image_style'] = 'thumbnail';
  /* Field: File: Name */
  $handler->display->display_options['fields']['filename']['id'] = 'filename';
  $handler->display->display_options['fields']['filename']['table'] = 'file_managed';
  $handler->display->display_options['fields']['filename']['field'] = 'filename';
  $handler->display->display_options['fields']['filename']['label'] = 'Title';
  $handler->display->display_options['fields']['filename']['alter']['max_length'] = '75';
  $handler->display->display_options['fields']['filename']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['filename']['alter']['trim'] = TRUE;
  $handler->display->display_options['fields']['filename']['element_label_colon'] = FALSE;
  /* Field: File: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'file_managed';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['machine_name'] = 0;
  /* Field: File: Size */
  $handler->display->display_options['fields']['filesize']['id'] = 'filesize';
  $handler->display->display_options['fields']['filesize']['table'] = 'file_managed';
  $handler->display->display_options['fields']['filesize']['field'] = 'filesize';
  /* Field: User: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'users';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['relationship'] = 'uid';
  $handler->display->display_options['fields']['name']['label'] = 'Uploaded By';
  /* Field: File: Upload date */
  $handler->display->display_options['fields']['timestamp']['id'] = 'timestamp';
  $handler->display->display_options['fields']['timestamp']['table'] = 'file_managed';
  $handler->display->display_options['fields']['timestamp']['field'] = 'timestamp';
  $handler->display->display_options['fields']['timestamp']['date_format'] = 'edit_date';
  /* Field: File: Operations */
  $handler->display->display_options['fields']['pub_editorial']['id'] = 'pub_editorial';
  $handler->display->display_options['fields']['pub_editorial']['table'] = 'file_managed';
  $handler->display->display_options['fields']['pub_editorial']['field'] = 'pub_editorial';
  /* Filter criterion: File: Name */
  $handler->display->display_options['filters']['filename']['id'] = 'filename';
  $handler->display->display_options['filters']['filename']['table'] = 'file_managed';
  $handler->display->display_options['filters']['filename']['field'] = 'filename';
  $handler->display->display_options['filters']['filename']['operator'] = 'contains';
  $handler->display->display_options['filters']['filename']['group'] = 1;
  $handler->display->display_options['filters']['filename']['exposed'] = TRUE;
  $handler->display->display_options['filters']['filename']['expose']['operator_id'] = 'filename_op';
  $handler->display->display_options['filters']['filename']['expose']['label'] = 'Name';
  $handler->display->display_options['filters']['filename']['expose']['operator'] = 'filename_op';
  $handler->display->display_options['filters']['filename']['expose']['identifier'] = 'filename';
  $handler->display->display_options['filters']['filename']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: File: Upload date */
  $handler->display->display_options['filters']['timestamp']['id'] = 'timestamp';
  $handler->display->display_options['filters']['timestamp']['table'] = 'file_managed';
  $handler->display->display_options['filters']['timestamp']['field'] = 'timestamp';
  $handler->display->display_options['filters']['timestamp']['operator'] = '>=';
  $handler->display->display_options['filters']['timestamp']['group'] = 1;
  $handler->display->display_options['filters']['timestamp']['exposed'] = TRUE;
  $handler->display->display_options['filters']['timestamp']['expose']['operator_id'] = 'timestamp_op';
  $handler->display->display_options['filters']['timestamp']['expose']['label'] = 'Uploaded On or After';
  $handler->display->display_options['filters']['timestamp']['expose']['description'] = 'ex. YYYY-MM-DD';
  $handler->display->display_options['filters']['timestamp']['expose']['operator'] = 'timestamp_op';
  $handler->display->display_options['filters']['timestamp']['expose']['identifier'] = 'timestamp';
  $handler->display->display_options['filters']['timestamp']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: File: Status */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'file_managed';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = array(
    1 => '1',
  );

  /* Display: Recently Expired */
  $handler = $view->new_display('page', 'Recently Expired', 'mpx_recently_expired');
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '40';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['row_class'] = 'mpx-media--status--[status]';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'fid' => 'fid',
    'id' => 'id',
    'thumbnail_url' => 'thumbnail_url',
    'title' => 'title',
    'account' => 'account',
    'status' => 'status',
    'published_1' => 'published_1',
    'available_date' => 'available_date',
    'expiration_date' => 'expiration_date',
    'updated' => 'updated',
    'pub_editorial' => 'pub_editorial',
    'field_mpx_available_date' => 'field_mpx_available_date',
    'field_mpx_expiration_date' => 'field_mpx_expiration_date',
  );
  $handler->display->display_options['style_options']['default'] = 'expiration_date';
  $handler->display->display_options['style_options']['info'] = array(
    'fid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'id' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'thumbnail_url' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'account' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'status' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'published_1' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'available_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'expiration_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'updated' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'pub_editorial' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_mpx_available_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_mpx_expiration_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: File: File ID */
  $handler->display->display_options['fields']['fid']['id'] = 'fid';
  $handler->display->display_options['fields']['fid']['table'] = 'file_managed';
  $handler->display->display_options['fields']['fid']['field'] = 'fid';
  $handler->display->display_options['fields']['fid']['exclude'] = TRUE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video ID */
  $handler->display->display_options['fields']['id']['id'] = 'id';
  $handler->display->display_options['fields']['id']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['id']['field'] = 'id';
  $handler->display->display_options['fields']['id']['label'] = 'ID';
  $handler->display->display_options['fields']['id']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Thumbnail */
  $handler->display->display_options['fields']['thumbnail_url']['id'] = 'thumbnail_url';
  $handler->display->display_options['fields']['thumbnail_url']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['thumbnail_url']['field'] = 'thumbnail_url';
  $handler->display->display_options['fields']['thumbnail_url']['label'] = 'Thumbnail';
  $handler->display->display_options['fields']['thumbnail_url']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['thumbnail_url']['alter']['path'] = 'file/[fid]';
  $handler->display->display_options['fields']['thumbnail_url']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Title';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = 'file/[fid]';
  $handler->display->display_options['fields']['title']['alter']['max_length'] = '75';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['trim'] = TRUE;
  /* Field: thePlatform MPX Video: thePlatform MPX Account */
  $handler->display->display_options['fields']['account']['id'] = 'account';
  $handler->display->display_options['fields']['account']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['account']['field'] = 'account';
  $handler->display->display_options['fields']['account']['label'] = 'Source';
  $handler->display->display_options['fields']['account']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['fields']['status']['id'] = 'status';
  $handler->display->display_options['fields']['status']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['status']['field'] = 'status';
  $handler->display->display_options['fields']['status']['label'] = 'MPX Status';
  $handler->display->display_options['fields']['status']['element_type'] = 'div';
  /* Field: File: Published */
  $handler->display->display_options['fields']['published_1']['id'] = 'published_1';
  $handler->display->display_options['fields']['published_1']['table'] = 'file_managed';
  $handler->display->display_options['fields']['published_1']['field'] = 'published';
  $handler->display->display_options['fields']['published_1']['label'] = 'View State';
  $handler->display->display_options['fields']['published_1']['type'] = 'custom';
  $handler->display->display_options['fields']['published_1']['type_custom_true'] = 'Public';
  $handler->display->display_options['fields']['published_1']['type_custom_false'] = 'Not Public';
  $handler->display->display_options['fields']['published_1']['not'] = 0;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Available Date (Sunrise) */
  $handler->display->display_options['fields']['available_date']['id'] = 'available_date';
  $handler->display->display_options['fields']['available_date']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['available_date']['field'] = 'available_date';
  $handler->display->display_options['fields']['available_date']['label'] = 'Available Date';
  $handler->display->display_options['fields']['available_date']['date_format'] = 'edit_date';
  /* Field: thePlatform MPX Video: thePlatform MPX Video Expiration Date (Sunset) */
  $handler->display->display_options['fields']['expiration_date']['id'] = 'expiration_date';
  $handler->display->display_options['fields']['expiration_date']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['expiration_date']['field'] = 'expiration_date';
  $handler->display->display_options['fields']['expiration_date']['label'] = 'Expiration Date';
  $handler->display->display_options['fields']['expiration_date']['date_format'] = 'edit_date';
  /* Field: thePlatform MPX Video: thePlatform MPX Video Updated Date */
  $handler->display->display_options['fields']['updated']['id'] = 'updated';
  $handler->display->display_options['fields']['updated']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['updated']['field'] = 'updated';
  $handler->display->display_options['fields']['updated']['label'] = 'Last Updated';
  $handler->display->display_options['fields']['updated']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['updated']['date_format'] = 'edit_date';
  /* Field: File: Operations */
  $handler->display->display_options['fields']['pub_editorial']['id'] = 'pub_editorial';
  $handler->display->display_options['fields']['pub_editorial']['table'] = 'file_managed';
  $handler->display->display_options['fields']['pub_editorial']['field'] = 'pub_editorial';
  /* Field: File: MPX Media Available Date */
  $handler->display->display_options['fields']['field_mpx_available_date']['id'] = 'field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['table'] = 'field_data_field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['field'] = 'field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['label'] = '';
  $handler->display->display_options['fields']['field_mpx_available_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_mpx_available_date']['element_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_available_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_available_date']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_available_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_available_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['fields']['field_mpx_available_date']['field_api_classes'] = TRUE;
  /* Field: File: MPX Media Expiration Date */
  $handler->display->display_options['fields']['field_mpx_expiration_date']['id'] = 'field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['table'] = 'field_data_field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['field'] = 'field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['label'] = '';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['fields']['field_mpx_expiration_date']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: File: Mime type */
  $handler->display->display_options['filters']['filemime']['id'] = 'filemime';
  $handler->display->display_options['filters']['filemime']['table'] = 'file_managed';
  $handler->display->display_options['filters']['filemime']['field'] = 'filemime';
  $handler->display->display_options['filters']['filemime']['value'] = 'video/mpx';
  $handler->display->display_options['filters']['filemime']['group'] = 1;
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Video Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['operator'] = 'contains';
  $handler->display->display_options['filters']['title']['group'] = 1;
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Title';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Account */
  $handler->display->display_options['filters']['account']['id'] = 'account';
  $handler->display->display_options['filters']['account']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['account']['field'] = 'account';
  $handler->display->display_options['filters']['account']['group'] = 1;
  $handler->display->display_options['filters']['account']['exposed'] = TRUE;
  $handler->display->display_options['filters']['account']['expose']['operator_id'] = '';
  $handler->display->display_options['filters']['account']['expose']['label'] = 'Source';
  $handler->display->display_options['filters']['account']['expose']['operator'] = 'account_op';
  $handler->display->display_options['filters']['account']['expose']['identifier'] = 'account';
  $handler->display->display_options['filters']['account']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: Field: Show (field_show) */
  $handler->display->display_options['filters']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['filters']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_show_target_id']['expose']['operator_id'] = 'field_show_target_id_op';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['label'] = 'Show';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['operator'] = 'field_show_target_id_op';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['identifier'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Video Expiration Date (Sunset) */
  $handler->display->display_options['filters']['expiration_date']['id'] = 'expiration_date';
  $handler->display->display_options['filters']['expiration_date']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['expiration_date']['field'] = 'expiration_date';
  $handler->display->display_options['filters']['expiration_date']['operator'] = 'between';
  $handler->display->display_options['filters']['expiration_date']['value']['min'] = '-72 hours';
  $handler->display->display_options['filters']['expiration_date']['value']['max'] = '+0 day';
  $handler->display->display_options['filters']['expiration_date']['value']['type'] = 'offset';
  $handler->display->display_options['path'] = 'admin/content/file/mpxmedia/contentexpiration/recentlyexpired';
  $handler->display->display_options['menu']['type'] = 'tab';
  $handler->display->display_options['menu']['title'] = 'Recently Expired';
  $handler->display->display_options['menu']['weight'] = '52';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['weight'] = '0';

  /* Display: Expiring Soon */
  $handler = $view->new_display('page', 'Expiring Soon', 'mpx_expiring_soon');
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '40';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['row_class'] = 'mpx-media--status--[status]';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['columns'] = array(
    'fid' => 'fid',
    'id' => 'id',
    'thumbnail_url' => 'thumbnail_url',
    'title' => 'title',
    'account' => 'account',
    'status' => 'status',
    'published_1' => 'published_1',
    'available_date' => 'available_date',
    'expiration_date' => 'expiration_date',
    'updated' => 'updated',
    'pub_editorial' => 'pub_editorial',
    'field_mpx_available_date' => 'field_mpx_available_date',
    'field_mpx_expiration_date' => 'field_mpx_expiration_date',
  );
  $handler->display->display_options['style_options']['default'] = 'expiration_date';
  $handler->display->display_options['style_options']['info'] = array(
    'fid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'id' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'thumbnail_url' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'account' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'status' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'published_1' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'available_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'expiration_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'updated' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'pub_editorial' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_mpx_available_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_mpx_expiration_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: File: File ID */
  $handler->display->display_options['fields']['fid']['id'] = 'fid';
  $handler->display->display_options['fields']['fid']['table'] = 'file_managed';
  $handler->display->display_options['fields']['fid']['field'] = 'fid';
  $handler->display->display_options['fields']['fid']['exclude'] = TRUE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video ID */
  $handler->display->display_options['fields']['id']['id'] = 'id';
  $handler->display->display_options['fields']['id']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['id']['field'] = 'id';
  $handler->display->display_options['fields']['id']['label'] = 'ID';
  $handler->display->display_options['fields']['id']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Thumbnail */
  $handler->display->display_options['fields']['thumbnail_url']['id'] = 'thumbnail_url';
  $handler->display->display_options['fields']['thumbnail_url']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['thumbnail_url']['field'] = 'thumbnail_url';
  $handler->display->display_options['fields']['thumbnail_url']['label'] = 'Thumbnail';
  $handler->display->display_options['fields']['thumbnail_url']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['thumbnail_url']['alter']['path'] = 'file/[fid]';
  $handler->display->display_options['fields']['thumbnail_url']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Title';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = 'file/[fid]';
  $handler->display->display_options['fields']['title']['alter']['max_length'] = '75';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['trim'] = TRUE;
  /* Field: thePlatform MPX Video: thePlatform MPX Account */
  $handler->display->display_options['fields']['account']['id'] = 'account';
  $handler->display->display_options['fields']['account']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['account']['field'] = 'account';
  $handler->display->display_options['fields']['account']['label'] = 'Source';
  $handler->display->display_options['fields']['account']['element_label_colon'] = FALSE;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Status */
  $handler->display->display_options['fields']['status']['id'] = 'status';
  $handler->display->display_options['fields']['status']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['status']['field'] = 'status';
  $handler->display->display_options['fields']['status']['label'] = 'MPX Status';
  $handler->display->display_options['fields']['status']['element_type'] = 'div';
  /* Field: File: Published */
  $handler->display->display_options['fields']['published_1']['id'] = 'published_1';
  $handler->display->display_options['fields']['published_1']['table'] = 'file_managed';
  $handler->display->display_options['fields']['published_1']['field'] = 'published';
  $handler->display->display_options['fields']['published_1']['label'] = 'View State';
  $handler->display->display_options['fields']['published_1']['type'] = 'custom';
  $handler->display->display_options['fields']['published_1']['type_custom_true'] = 'Public';
  $handler->display->display_options['fields']['published_1']['type_custom_false'] = 'Not Public';
  $handler->display->display_options['fields']['published_1']['not'] = 0;
  /* Field: thePlatform MPX Video: thePlatform MPX Video Available Date (Sunrise) */
  $handler->display->display_options['fields']['available_date']['id'] = 'available_date';
  $handler->display->display_options['fields']['available_date']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['available_date']['field'] = 'available_date';
  $handler->display->display_options['fields']['available_date']['label'] = 'Available Date';
  $handler->display->display_options['fields']['available_date']['date_format'] = 'edit_date';
  /* Field: thePlatform MPX Video: thePlatform MPX Video Expiration Date (Sunset) */
  $handler->display->display_options['fields']['expiration_date']['id'] = 'expiration_date';
  $handler->display->display_options['fields']['expiration_date']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['expiration_date']['field'] = 'expiration_date';
  $handler->display->display_options['fields']['expiration_date']['label'] = 'Expiration Date';
  $handler->display->display_options['fields']['expiration_date']['date_format'] = 'edit_date';
  /* Field: thePlatform MPX Video: thePlatform MPX Video Updated Date */
  $handler->display->display_options['fields']['updated']['id'] = 'updated';
  $handler->display->display_options['fields']['updated']['table'] = 'mpx_video';
  $handler->display->display_options['fields']['updated']['field'] = 'updated';
  $handler->display->display_options['fields']['updated']['label'] = 'Last Updated';
  $handler->display->display_options['fields']['updated']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['updated']['date_format'] = 'edit_date';
  /* Field: File: Operations */
  $handler->display->display_options['fields']['pub_editorial']['id'] = 'pub_editorial';
  $handler->display->display_options['fields']['pub_editorial']['table'] = 'file_managed';
  $handler->display->display_options['fields']['pub_editorial']['field'] = 'pub_editorial';
  /* Field: File: MPX Media Available Date */
  $handler->display->display_options['fields']['field_mpx_available_date']['id'] = 'field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['table'] = 'field_data_field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['field'] = 'field_mpx_available_date';
  $handler->display->display_options['fields']['field_mpx_available_date']['label'] = '';
  $handler->display->display_options['fields']['field_mpx_available_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_mpx_available_date']['element_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_available_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_available_date']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_available_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_available_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['fields']['field_mpx_available_date']['field_api_classes'] = TRUE;
  /* Field: File: MPX Media Expiration Date */
  $handler->display->display_options['fields']['field_mpx_expiration_date']['id'] = 'field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['table'] = 'field_data_field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['field'] = 'field_mpx_expiration_date';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['label'] = '';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_mpx_expiration_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_mpx_expiration_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['fields']['field_mpx_expiration_date']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: File: Mime type */
  $handler->display->display_options['filters']['filemime']['id'] = 'filemime';
  $handler->display->display_options['filters']['filemime']['table'] = 'file_managed';
  $handler->display->display_options['filters']['filemime']['field'] = 'filemime';
  $handler->display->display_options['filters']['filemime']['value'] = 'video/mpx';
  $handler->display->display_options['filters']['filemime']['group'] = 1;
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Video Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['operator'] = 'contains';
  $handler->display->display_options['filters']['title']['group'] = 1;
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Title';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Account */
  $handler->display->display_options['filters']['account']['id'] = 'account';
  $handler->display->display_options['filters']['account']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['account']['field'] = 'account';
  $handler->display->display_options['filters']['account']['group'] = 1;
  $handler->display->display_options['filters']['account']['exposed'] = TRUE;
  $handler->display->display_options['filters']['account']['expose']['operator_id'] = '';
  $handler->display->display_options['filters']['account']['expose']['label'] = 'Source';
  $handler->display->display_options['filters']['account']['expose']['operator'] = 'account_op';
  $handler->display->display_options['filters']['account']['expose']['identifier'] = 'account';
  $handler->display->display_options['filters']['account']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: Field: Show (field_show) */
  $handler->display->display_options['filters']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['filters']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_show_target_id']['expose']['operator_id'] = 'field_show_target_id_op';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['label'] = 'Show';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['operator'] = 'field_show_target_id_op';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['identifier'] = 'field_show_target_id';
  $handler->display->display_options['filters']['field_show_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: thePlatform MPX Video: thePlatform MPX Video Expiration Date (Sunset) */
  $handler->display->display_options['filters']['expiration_date']['id'] = 'expiration_date';
  $handler->display->display_options['filters']['expiration_date']['table'] = 'mpx_video';
  $handler->display->display_options['filters']['expiration_date']['field'] = 'expiration_date';
  $handler->display->display_options['filters']['expiration_date']['operator'] = 'between';
  $handler->display->display_options['filters']['expiration_date']['value']['min'] = '+0 day';
  $handler->display->display_options['filters']['expiration_date']['value']['max'] = '+72 hours';
  $handler->display->display_options['filters']['expiration_date']['value']['type'] = 'offset';
  /* Filter criterion: File: Published */
  $handler->display->display_options['filters']['published']['id'] = 'published';
  $handler->display->display_options['filters']['published']['table'] = 'file_managed';
  $handler->display->display_options['filters']['published']['field'] = 'published';
  $handler->display->display_options['filters']['published']['value'] = '1';
  $handler->display->display_options['path'] = 'admin/content/file/mpxmedia/contentexpiration/expiringsoon';
  $handler->display->display_options['menu']['type'] = 'default tab';
  $handler->display->display_options['menu']['title'] = 'Expiring Soon';
  $handler->display->display_options['menu']['weight'] = '51';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['type'] = 'normal';
  $handler->display->display_options['tab_options']['title'] = 'Video Content Expiration';
  $handler->display->display_options['tab_options']['weight'] = '0';
  $handler->display->display_options['tab_options']['name'] = 'management';
  $export['video_content_expiration'] = $view;

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

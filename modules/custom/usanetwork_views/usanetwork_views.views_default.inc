<?php
/**
 * @file
 * usanetwork_views.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_views_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'usa_episodes';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'usa_episodes';
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_show_node';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Season */
  $handler->display->display_options['fields']['field_season']['id'] = 'field_season';
  $handler->display->display_options['fields']['field_season']['table'] = 'field_data_field_season';
  $handler->display->display_options['fields']['field_season']['field'] = 'field_season';
  $handler->display->display_options['fields']['field_season']['label'] = '';
  $handler->display->display_options['fields']['field_season']['element_type'] = '0';
  $handler->display->display_options['fields']['field_season']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_season']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_season']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_season']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_season']['field_api_classes'] = TRUE;
  /* Field: Content: Show */
  $handler->display->display_options['fields']['field_show']['id'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['table'] = 'field_data_field_show';
  $handler->display->display_options['fields']['field_show']['field'] = 'field_show';
  $handler->display->display_options['fields']['field_show']['label'] = '';
  $handler->display->display_options['fields']['field_show']['element_type'] = '0';
  $handler->display->display_options['fields']['field_show']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_show']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_show']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_show']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_show']['field_api_classes'] = TRUE;
  /* Sort criterion: Content: Air Date (field_original_air_date) */
  $handler->display->display_options['sorts']['field_original_air_date_value']['id'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['table'] = 'field_data_field_original_air_date';
  $handler->display->display_options['sorts']['field_original_air_date_value']['field'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['order'] = 'DESC';
  /* Contextual filter: Content: Season (field_season) */
  $handler->display->display_options['arguments']['field_season_target_id']['id'] = 'field_season_target_id';
  $handler->display->display_options['arguments']['field_season_target_id']['table'] = 'field_data_field_season';
  $handler->display->display_options['arguments']['field_season_target_id']['field'] = 'field_season_target_id';
  $handler->display->display_options['arguments']['field_season_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_season_target_id']['summary']['format'] = 'default_summary';
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
    'tv_episode' => 'tv_episode',
  );

  /* Display: Episodes in a season */
  $handler = $view->new_display('panel_pane', 'Episodes in a season', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_show_node';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Season (field_season) */
  $handler->display->display_options['arguments']['field_season_target_id']['id'] = 'field_season_target_id';
  $handler->display->display_options['arguments']['field_season_target_id']['table'] = 'field_data_field_season';
  $handler->display->display_options['arguments']['field_season_target_id']['field'] = 'field_season_target_id';
  $handler->display->display_options['arguments']['field_season_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_season_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_season_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_season_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_season_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_season_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_season_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_season_target_id']['validate_options']['types'] = array(
    'tv_season' => 'tv_season',
  );
  $handler->display->display_options['pane_title'] = 'Episodes in a Season';
  $handler->display->display_options['argument_input'] = array(
    'field_season_target_id' => array(
      'type' => 'context',
      'context' => 'entity:node.nid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Field: Season (field_season)',
    ),
  );

  /* Display: Seasons for a show */
  $handler = $view->new_display('panel_pane', 'Seasons for a show', 'panel_pane_3');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_season_target_id']['id'] = 'field_season_target_id';
  $handler->display->display_options['relationships']['field_season_target_id']['table'] = 'field_data_field_season';
  $handler->display->display_options['relationships']['field_season_target_id']['field'] = 'field_season_target_id';
  $handler->display->display_options['relationships']['field_season_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid_1']['id'] = 'nid_1';
  $handler->display->display_options['fields']['nid_1']['table'] = 'node';
  $handler->display->display_options['fields']['nid_1']['field'] = 'nid';
  $handler->display->display_options['fields']['nid_1']['relationship'] = 'field_season_target_id';
  $handler->display->display_options['fields']['nid_1']['label'] = '';
  $handler->display->display_options['fields']['nid_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Season # */
  $handler->display->display_options['fields']['field_season_id']['id'] = 'field_season_id';
  $handler->display->display_options['fields']['field_season_id']['table'] = 'field_data_field_season_id';
  $handler->display->display_options['fields']['field_season_id']['field'] = 'field_season_id';
  $handler->display->display_options['fields']['field_season_id']['relationship'] = 'field_season_target_id';
  $handler->display->display_options['fields']['field_season_id']['label'] = '';
  $handler->display->display_options['fields']['field_season_id']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_season_id']['element_type'] = '0';
  $handler->display->display_options['fields']['field_season_id']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_season_id']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_season_id']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_season_id']['field_api_classes'] = TRUE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Season */
  $handler->display->display_options['fields']['field_season']['id'] = 'field_season';
  $handler->display->display_options['fields']['field_season']['table'] = 'field_data_field_season';
  $handler->display->display_options['fields']['field_season']['field'] = 'field_season';
  $handler->display->display_options['fields']['field_season']['label'] = '';
  $handler->display->display_options['fields']['field_season']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_season']['alter']['path'] = 'node/[nid] ';
  $handler->display->display_options['fields']['field_season']['element_type'] = '0';
  $handler->display->display_options['fields']['field_season']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_season']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_season']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_season']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_season']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Season # (field_season_id) */
  $handler->display->display_options['sorts']['field_season_id_value']['id'] = 'field_season_id_value';
  $handler->display->display_options['sorts']['field_season_id_value']['table'] = 'field_data_field_season_id';
  $handler->display->display_options['sorts']['field_season_id_value']['field'] = 'field_season_id_value';
  $handler->display->display_options['sorts']['field_season_id_value']['relationship'] = 'field_season_target_id';
  $handler->display->display_options['sorts']['field_season_id_value']['order'] = 'DESC';
  /* Sort criterion: Content: Air Date (field_original_air_date) */
  $handler->display->display_options['sorts']['field_original_air_date_value']['id'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['table'] = 'field_data_field_original_air_date';
  $handler->display->display_options['sorts']['field_original_air_date_value']['field'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['order'] = 'DESC';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Show (field_show) */
  $handler->display->display_options['arguments']['field_show_target_id']['id'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['table'] = 'field_data_field_show';
  $handler->display->display_options['arguments']['field_show_target_id']['field'] = 'field_show_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['relationship'] = 'field_season_target_id';
  $handler->display->display_options['arguments']['field_show_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_show_target_id']['default_argument_type'] = 'fixed';
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
    'tv_episode' => 'tv_episode',
  );
  $handler->display->display_options['pane_title'] = 'Seasons for a show';
  $handler->display->display_options['argument_input'] = array(
    'field_show_target_id' => array(
      'type' => 'context',
      'context' => 'entity:node.nid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Field: Show (field_show)',
    ),
  );
  $export['usa_episodes'] = $view;

  $view = new view();
  $view->name = 'usa_gallery';
  $view->description = 'default gallery implementation';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'usa_gallery';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Episode Galleries';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  /* Field: Content: Cover Item */
  $handler->display->display_options['fields']['field_cover_item']['id'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['table'] = 'field_data_field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['field'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['label'] = '';
  $handler->display->display_options['fields']['field_cover_item']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'default',
  );
  $handler->display->display_options['fields']['field_cover_item']['field_api_classes'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Air Date (field_original_air_date) */
  $handler->display->display_options['sorts']['field_original_air_date_value']['id'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['table'] = 'field_data_field_original_air_date';
  $handler->display->display_options['sorts']['field_original_air_date_value']['field'] = 'field_original_air_date_value';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
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

  /* Display: Page - all galleries */
  $handler = $view->new_display('page', 'Page - all galleries', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'block_cover_title';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['alternating'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|created';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'block_cover_title';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['path'] = 'usa-gallery';

  /* Display: Block - nid gallery */
  $handler = $view->new_display('block', 'Block - nid gallery', 'block');
  $handler->display->display_options['defaults']['use_ajax'] = FALSE;
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'slideshow';
  $handler->display->display_options['style_options']['slideshow_type'] = 'views_slideshow_cycle';
  $handler->display->display_options['style_options']['slideshow_skin'] = 'default';
  $handler->display->display_options['style_options']['skin_info'] = array(
    'class' => 'default',
    'name' => 'Default',
    'module' => 'views_slideshow',
    'path' => '',
    'stylesheets' => array(),
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['type'] = 'views_slideshow_pager_fields';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_pager']['views_slideshow_pager_fields_fields'] = array(
    'field_media_items' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['top']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['type'] = 'views_slideshow_pager_fields';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_pager']['views_slideshow_pager_fields_fields'] = array(
    'field_media_items' => 0,
  );
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['weight'] = '1';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_controls']['type'] = 'views_slideshow_controls_text';
  $handler->display->display_options['style_options']['widgets']['bottom']['views_slideshow_slide_counter']['weight'] = '1';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['timeout'] = '5000';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['speed'] = '700';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['delay'] = '0';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['start_paused'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_cycle']['remember_slide_days'] = '1';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['items_per_slide'] = '1';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['wait_for_image_load_timeout'] = '3000';
  $handler->display->display_options['style_options']['views_slideshow_cycle']['cleartype'] = 0;
  $handler->display->display_options['style_options']['views_slideshow_cycle']['cleartypenobg'] = 0;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Media Items */
  $handler->display->display_options['fields']['field_media_items']['id'] = 'field_media_items';
  $handler->display->display_options['fields']['field_media_items']['table'] = 'field_data_field_media_items';
  $handler->display->display_options['fields']['field_media_items']['field'] = 'field_media_items';
  $handler->display->display_options['fields']['field_media_items']['label'] = '';
  $handler->display->display_options['fields']['field_media_items']['element_type'] = '0';
  $handler->display->display_options['fields']['field_media_items']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_media_items']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_media_items']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_media_items']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_media_items']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_media_items']['settings'] = array(
    'file_view_mode' => 'gallery_full',
  );
  $handler->display->display_options['fields']['field_media_items']['group_rows'] = FALSE;
  $handler->display->display_options['fields']['field_media_items']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_media_items']['field_api_classes'] = TRUE;
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

  /* Display: Episode Galleries */
  $handler = $view->new_display('panel_pane', 'Episode Galleries', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['separator'] = ',';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_episode_target_id']['id'] = 'field_episode_target_id';
  $handler->display->display_options['relationships']['field_episode_target_id']['table'] = 'field_data_field_episode';
  $handler->display->display_options['relationships']['field_episode_target_id']['field'] = 'field_episode_target_id';
  $handler->display->display_options['relationships']['field_episode_target_id']['label'] = 'Episode';
  $handler->display->display_options['relationships']['field_episode_target_id']['required'] = TRUE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_season_target_id']['id'] = 'field_season_target_id';
  $handler->display->display_options['relationships']['field_season_target_id']['table'] = 'field_data_field_season';
  $handler->display->display_options['relationships']['field_season_target_id']['field'] = 'field_season_target_id';
  $handler->display->display_options['relationships']['field_season_target_id']['label'] = 'Season';
  $handler->display->display_options['relationships']['field_season_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Cover Item */
  $handler->display->display_options['fields']['field_cover_item']['id'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['table'] = 'field_data_field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['field'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['label'] = '';
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_class'] = 'cover-image';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = 'span';
  $handler->display->display_options['fields']['title']['element_wrapper_class'] = 'gallery-title';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_season_target_id';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_type'] = 'span';
  $handler->display->display_options['fields']['title_1']['element_class'] = 'season-title';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['title_1']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Episode # */
  $handler->display->display_options['fields']['field_episode_number']['id'] = 'field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['table'] = 'field_data_field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['field'] = 'field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['relationship'] = 'field_episode_target_id';
  $handler->display->display_options['fields']['field_episode_number']['label'] = '';
  $handler->display->display_options['fields']['field_episode_number']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_episode_number']['alter']['text'] = '[title_1], Episode [field_episode_number]';
  $handler->display->display_options['fields']['field_episode_number']['element_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_episode_number']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['field_episode_number']['element_wrapper_class'] = 'season-episode';
  $handler->display->display_options['fields']['field_episode_number']['element_default_classes'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Air Date (field_original_air_date) */
  $handler->display->display_options['sorts']['field_original_air_date_value']['id'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['table'] = 'field_data_field_original_air_date';
  $handler->display->display_options['sorts']['field_original_air_date_value']['field'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['relationship'] = 'field_episode_target_id';
  $handler->display->display_options['sorts']['field_original_air_date_value']['order'] = 'DESC';
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
  $handler->display->display_options['arguments']['field_show_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['validate_options']['types'] = array(
    'tv_show' => 'tv_show',
  );
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

  /* Display: Gallery Cover */
  $handler = $view->new_display('panel_pane', 'Gallery Cover', 'panel_pane_2');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Gallery';
  $handler->display->display_options['display_description'] = 'Cover image, links to gallery page';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Cover Item */
  $handler->display->display_options['fields']['field_cover_item']['id'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['table'] = 'field_data_field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['field'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['label'] = '';
  $handler->display->display_options['fields']['field_cover_item']['alter']['text'] = '[field_cover_item]';
  $handler->display->display_options['fields']['field_cover_item']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_cover_item']['alter']['path'] = 'node/[nid]';
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'default',
  );
  $handler->display->display_options['fields']['field_cover_item']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Episode (field_episode) */
  $handler->display->display_options['arguments']['field_episode_target_id']['id'] = 'field_episode_target_id';
  $handler->display->display_options['arguments']['field_episode_target_id']['table'] = 'field_data_field_episode';
  $handler->display->display_options['arguments']['field_episode_target_id']['field'] = 'field_episode_target_id';
  $handler->display->display_options['arguments']['field_episode_target_id']['relationship'] = 'field_pub_relation_tv_shows_value';
  $handler->display->display_options['arguments']['field_episode_target_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['field_episode_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_episode_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_episode_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_episode_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_episode_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_episode_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_episode_target_id']['validate_options']['types'] = array(
    'tv_episode' => 'tv_episode',
  );
  $handler->display->display_options['arguments']['field_episode_target_id']['validate_options']['access'] = TRUE;
  $handler->display->display_options['allow']['use_pager'] = 0;
  $handler->display->display_options['allow']['items_per_page'] = 0;
  $handler->display->display_options['allow']['offset'] = 0;
  $handler->display->display_options['allow']['link_to_view'] = 0;
  $handler->display->display_options['allow']['more_link'] = 0;
  $handler->display->display_options['allow']['path_override'] = 0;
  $handler->display->display_options['allow']['title_override'] = 'title_override';
  $handler->display->display_options['allow']['exposed_form'] = 0;
  $handler->display->display_options['allow']['fields_override'] = 0;
  $handler->display->display_options['argument_input'] = array(
    'field_episode_target_id' => array(
      'type' => 'panel',
      'context' => 'entity:comment.author',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Field collection item: Episode (field_episode)',
    ),
  );
  $handler->display->display_options['inherit_panels_path'] = '1';

  /* Display: Character Galleries */
  $handler = $view->new_display('panel_pane', 'Character Galleries', 'panel_pane_3');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Character Galleries';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['separator'] = ',';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_character_target_id']['id'] = 'field_character_target_id';
  $handler->display->display_options['relationships']['field_character_target_id']['table'] = 'field_data_field_character';
  $handler->display->display_options['relationships']['field_character_target_id']['field'] = 'field_character_target_id';
  $handler->display->display_options['relationships']['field_character_target_id']['label'] = 'Character';
  $handler->display->display_options['relationships']['field_character_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Cover Item */
  $handler->display->display_options['fields']['field_cover_item']['id'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['table'] = 'field_data_field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['field'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['label'] = '';
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_class'] = 'cover-image';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = 'span';
  $handler->display->display_options['fields']['title']['element_wrapper_class'] = 'gallery-title';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
  $handler->display->display_options['arguments']['field_show_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_show_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_show_target_id']['validate_options']['types'] = array(
    'tv_show' => 'tv_show',
  );
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

  /* Display: Other Show Galleries */
  $handler = $view->new_display('panel_pane', 'Other Show Galleries', 'panel_pane_4');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Other Galleries';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['separator'] = ',';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Cover Item */
  $handler->display->display_options['fields']['field_cover_item']['id'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['table'] = 'field_data_field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['field'] = 'field_cover_item';
  $handler->display->display_options['fields']['field_cover_item']['label'] = '';
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_class'] = 'cover-image';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'block_cover_title',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = 'span';
  $handler->display->display_options['fields']['title']['element_wrapper_class'] = 'gallery-title';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
    'media_gallery' => 'media_gallery',
  );
  /* Filter criterion: Content: Episode (field_episode) */
  $handler->display->display_options['filters']['field_episode_target_id']['id'] = 'field_episode_target_id';
  $handler->display->display_options['filters']['field_episode_target_id']['table'] = 'field_data_field_episode';
  $handler->display->display_options['filters']['field_episode_target_id']['field'] = 'field_episode_target_id';
  $handler->display->display_options['filters']['field_episode_target_id']['operator'] = 'empty';
  /* Filter criterion: Field: Related Character (field_character) */
  $handler->display->display_options['filters']['field_character_target_id']['id'] = 'field_character_target_id';
  $handler->display->display_options['filters']['field_character_target_id']['table'] = 'field_data_field_character';
  $handler->display->display_options['filters']['field_character_target_id']['field'] = 'field_character_target_id';
  $handler->display->display_options['filters']['field_character_target_id']['operator'] = 'empty';
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
  $export['usa_gallery'] = $view;

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
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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

  /* Display: char gallery */
  $handler = $view->new_display('panel_pane', 'char gallery', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'ds';
  $handler->display->display_options['row_options']['view_mode'] = 'block_cover_title';
  $handler->display->display_options['row_options']['load_comments'] = 0;
  $handler->display->display_options['row_options']['alternating'] = 0;
  $handler->display->display_options['row_options']['grouping'] = 0;
  $handler->display->display_options['row_options']['advanced'] = 0;
  $handler->display->display_options['row_options']['grouping_fieldset']['group_field'] = 'node|created';
  $handler->display->display_options['row_options']['default_fieldset']['view_mode'] = 'block_cover_title';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Field: Related Character (field_character) */
  $handler->display->display_options['arguments']['field_character_target_id']['id'] = 'field_character_target_id';
  $handler->display->display_options['arguments']['field_character_target_id']['table'] = 'field_data_field_character';
  $handler->display->display_options['arguments']['field_character_target_id']['field'] = 'field_character_target_id';
  $handler->display->display_options['arguments']['field_character_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_character_target_id']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['field_character_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_character_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_character_target_id']['summary_options']['items_per_page'] = '25';
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

  /* Display: char person social */
  $handler = $view->new_display('panel_pane', 'char person social', 'panel_pane_2');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['inline'] = array(
    'title' => 'title',
    'field_usa_link_facebook' => 'field_usa_link_facebook',
    'field_usa_link_twitter' => 'field_usa_link_twitter',
  );
  $handler->display->display_options['row_options']['separator'] = ' ';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_person_node']['id'] = 'reverse_field_person_node';
  $handler->display->display_options['relationships']['reverse_field_person_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_person_node']['field'] = 'reverse_field_person_node';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'played by ';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
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
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_person_node';
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
  $handler->display->display_options['filters']['type']['relationship'] = 'field_person_target_id';
  $handler->display->display_options['filters']['type']['value'] = array(
    'person' => 'person',
  );

  /* Display: char person bio */
  $handler = $view->new_display('panel_pane', 'char person bio', 'panel_pane_3');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['inline'] = array(
    'title' => 'title',
    'field_usa_link_facebook' => 'field_usa_link_facebook',
    'field_usa_link_twitter' => 'field_usa_link_twitter',
  );
  $handler->display->display_options['row_options']['separator'] = ' ';
  $handler->display->display_options['row_options']['hide_empty'] = TRUE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_person_node']['id'] = 'reverse_field_person_node';
  $handler->display->display_options['relationships']['reverse_field_person_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_person_node']['field'] = 'reverse_field_person_node';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Synopsis */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = 'Actor Bio';
  $handler->display->display_options['fields']['body']['element_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['body']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['body']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_person_node';
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

  /* Display: char char bio */
  $handler = $view->new_display('panel_pane', 'char char bio', 'panel_pane_4');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Synopsis */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = 'Character Bio';
  $handler->display->display_options['fields']['body']['element_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['body']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['body']['field_api_classes'] = TRUE;
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
  $export['usa_people'] = $view;

  $view = new view();
  $view->name = 'usanetwork_content';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'USANetwork Content';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'All Content';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
  );
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'views_bulk_operations_1' => 'views_bulk_operations_1',
    'title' => 'title',
    'type' => 'type',
    'name' => 'name',
    'status_1' => 'status_1',
    'state' => 'state',
    'changed' => 'changed',
    'edit_node' => 'edit_node',
    'delete_node' => 'edit_node',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'views_bulk_operations_1' => array(
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
    'name' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'status_1' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'state' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'changed' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'edit_node' => array(
      'align' => '',
      'separator' => '&nbsp;&nbsp;',
      'empty_column' => 0,
    ),
    'delete_node' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'No content available.';
  $handler->display->display_options['empty']['area']['format'] = 'wysiwyg_basic';
  /* Relationship: Content: Author */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'node';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Field: Bulk operations: Content */
  $handler->display->display_options['fields']['views_bulk_operations']['id'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['table'] = 'node';
  $handler->display->display_options['fields']['views_bulk_operations']['field'] = 'views_bulk_operations';
  $handler->display->display_options['fields']['views_bulk_operations']['label'] = '';
  $handler->display->display_options['fields']['views_bulk_operations']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['display_type'] = '0';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['enable_select_all_pages'] = 1;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['force_single'] = 0;
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_settings']['entity_load_capacity'] = '10';
  $handler->display->display_options['fields']['views_bulk_operations']['vbo_operations'] = array(
    'action::node_assign_owner_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::views_bulk_operations_delete_item' => array(
      'selected' => 1,
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
    'action::node_make_sticky_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_make_unsticky_action' => array(
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
    'action::node_promote_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_publish_action' => array(
      'selected' => 1,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpromote_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_save_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::system_send_email_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::gigya_shareui_node_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpublish_action' => array(
      'selected' => 1,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::node_unpublish_by_keyword_action' => array(
      'selected' => 0,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 0,
      'label' => '',
    ),
    'action::pathauto_node_update_action' => array(
      'selected' => 1,
      'postpone_processing' => 0,
      'skip_confirmation' => 0,
      'override_label' => 1,
      'label' => 'Update URL alias',
    ),
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  /* Field: User: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'users';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['relationship'] = 'uid';
  $handler->display->display_options['fields']['name']['label'] = 'Author';
  $handler->display->display_options['fields']['name']['element_label_colon'] = FALSE;
  /* Field: Content: Published */
  $handler->display->display_options['fields']['status_1']['id'] = 'status_1';
  $handler->display->display_options['fields']['status_1']['table'] = 'node';
  $handler->display->display_options['fields']['status_1']['field'] = 'status';
  $handler->display->display_options['fields']['status_1']['not'] = 0;
  /* Field: State Flow: State */
  $handler->display->display_options['fields']['state']['id'] = 'state';
  $handler->display->display_options['fields']['state']['table'] = 'node_revision_states';
  $handler->display->display_options['fields']['state']['field'] = 'state';
  /* Field: Content: Updated date */
  $handler->display->display_options['fields']['changed']['id'] = 'changed';
  $handler->display->display_options['fields']['changed']['table'] = 'node';
  $handler->display->display_options['fields']['changed']['field'] = 'changed';
  $handler->display->display_options['fields']['changed']['label'] = 'Updated';
  $handler->display->display_options['fields']['changed']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['changed']['date_format'] = 'short';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Operations';
  $handler->display->display_options['fields']['edit_node']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['edit_node']['text'] = 'edit';
  /* Field: Content: Delete link */
  $handler->display->display_options['fields']['delete_node']['id'] = 'delete_node';
  $handler->display->display_options['fields']['delete_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['delete_node']['field'] = 'delete_node';
  $handler->display->display_options['fields']['delete_node']['text'] = 'delete';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['operator'] = 'word';
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
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['group'] = 1;
  $handler->display->display_options['filters']['type']['exposed'] = TRUE;
  $handler->display->display_options['filters']['type']['expose']['operator_id'] = 'type_op';
  $handler->display->display_options['filters']['type']['expose']['label'] = 'Type';
  $handler->display->display_options['filters']['type']['expose']['operator'] = 'type_op';
  $handler->display->display_options['filters']['type']['expose']['identifier'] = 'type';
  $handler->display->display_options['filters']['type']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 'All';
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['exposed'] = TRUE;
  $handler->display->display_options['filters']['status']['expose']['operator_id'] = '';
  $handler->display->display_options['filters']['status']['expose']['label'] = 'Published';
  $handler->display->display_options['filters']['status']['expose']['operator'] = 'status_op';
  $handler->display->display_options['filters']['status']['expose']['identifier'] = 'status';
  $handler->display->display_options['filters']['status']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );
  /* Filter criterion: State Flow: State */
  $handler->display->display_options['filters']['state']['id'] = 'state';
  $handler->display->display_options['filters']['state']['table'] = 'node_revision_states';
  $handler->display->display_options['filters']['state']['field'] = 'state';
  $handler->display->display_options['filters']['state']['group'] = 1;
  $handler->display->display_options['filters']['state']['exposed'] = TRUE;
  $handler->display->display_options['filters']['state']['expose']['operator_id'] = 'state_op';
  $handler->display->display_options['filters']['state']['expose']['label'] = 'State';
  $handler->display->display_options['filters']['state']['expose']['operator'] = 'state_op';
  $handler->display->display_options['filters']['state']['expose']['identifier'] = 'state';
  $handler->display->display_options['filters']['state']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
    6 => 0,
    7 => 0,
  );

  /* Display: Manager */
  $handler = $view->new_display('page', 'Manager', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['path'] = 'admin/usanetwork/content';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'All Content';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;

  /* Display: Editor */
  $handler = $view->new_display('page', 'Editor', 'page_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'My Content';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['access'] = FALSE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    4 => '4',
  );
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Author uid */
  $handler->display->display_options['arguments']['uid']['id'] = 'uid';
  $handler->display->display_options['arguments']['uid']['table'] = 'node';
  $handler->display->display_options['arguments']['uid']['field'] = 'uid';
  $handler->display->display_options['arguments']['uid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['uid']['default_argument_type'] = 'current_user';
  $handler->display->display_options['arguments']['uid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['uid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['uid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['path'] = 'admin/usanetwork/my-content';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'My Content';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $export['usanetwork_content'] = $view;

  return $export;
}

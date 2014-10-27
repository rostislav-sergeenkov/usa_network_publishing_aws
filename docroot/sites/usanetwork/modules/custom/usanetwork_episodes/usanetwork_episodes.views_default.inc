<?php
/**
 * @file
 * usanetwork_episodes.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_episodes_views_default_views() {
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
  $handler->display->display_options['style_options']['row_class'] = 'menu-item';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
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
  /* Field: Content: Episode # */
  $handler->display->display_options['fields']['field_episode_number']['id'] = 'field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['table'] = 'field_data_field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['field'] = 'field_episode_number';
  $handler->display->display_options['fields']['field_episode_number']['label'] = '';
  $handler->display->display_options['fields']['field_episode_number']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_episode_number']['element_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_episode_number']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = '[field_episode_number]: [title]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = '0';
  $handler->display->display_options['fields']['title']['element_label_type'] = '0';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
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

  /* Display: Episode H1 */
  $handler = $view->new_display('panel_pane', 'Episode H1', 'panel_pane_4');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
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
    'tv_episode' => 'tv_episode',
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
  /* Filter criterion: Field: H1 (field_seo_h1) */
  $handler->display->display_options['filters']['field_seo_h1_value']['id'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['table'] = 'field_data_field_seo_h1';
  $handler->display->display_options['filters']['field_seo_h1_value']['field'] = 'field_seo_h1_value';
  $handler->display->display_options['filters']['field_seo_h1_value']['operator'] = 'not empty';
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

  return $export;
}

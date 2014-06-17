<?php
/**
 * @file
 * usanetwork_media_gallery.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_media_gallery_views_default_views() {
  $export = array();

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
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '300';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '300';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
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
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['more_button_text'] = 'more';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item asset-thumb';
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
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
  $handler->display->display_options['fields']['field_episode_number']['alter']['text'] = '<div class="gallery-title">[title]</div>
<div class="season-episode">[title_1], Episode [field_episode_number]</div>';
  $handler->display->display_options['fields']['field_episode_number']['element_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_episode_number']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_episode_number']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['field_episode_number']['element_wrapper_class'] = 'meta';
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Air Date (field_original_air_date) */
  $handler->display->display_options['sorts']['field_original_air_date_value']['id'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['table'] = 'field_data_field_original_air_date';
  $handler->display->display_options['sorts']['field_original_air_date_value']['field'] = 'field_original_air_date_value';
  $handler->display->display_options['sorts']['field_original_air_date_value']['relationship'] = 'field_episode_target_id';
  $handler->display->display_options['sorts']['field_original_air_date_value']['order'] = 'DESC';
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
  /* Filter criterion: Content: Related Person (field_person) */
  $handler->display->display_options['filters']['field_person_target_id']['id'] = 'field_person_target_id';
  $handler->display->display_options['filters']['field_person_target_id']['table'] = 'field_data_field_person';
  $handler->display->display_options['filters']['field_person_target_id']['field'] = 'field_person_target_id';
  $handler->display->display_options['filters']['field_person_target_id']['operator'] = 'empty';
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
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['default_field_elements'] = FALSE;
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
  $handler->display->display_options['fields']['field_cover_item']['alter']['prefix'] = '<h2>Episode Gallery</h2>';
  $handler->display->display_options['fields']['field_cover_item']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_cover_item']['element_class'] = 'title-overlay';
  $handler->display->display_options['fields']['field_cover_item']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_cover_item']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_cover_item']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_cover_item']['type'] = 'file_rendered';
  $handler->display->display_options['fields']['field_cover_item']['settings'] = array(
    'file_view_mode' => 'block_cover_title_lg',
  );
  $handler->display->display_options['fields']['field_cover_item']['field_api_classes'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Episode (field_episode) */
  $handler->display->display_options['arguments']['field_episode_target_id']['id'] = 'field_episode_target_id';
  $handler->display->display_options['arguments']['field_episode_target_id']['table'] = 'field_data_field_episode';
  $handler->display->display_options['arguments']['field_episode_target_id']['field'] = 'field_episode_target_id';
  $handler->display->display_options['arguments']['field_episode_target_id']['relationship'] = 'field_episode_target_id';
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
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item asset-thumb';
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
  $handler->display->display_options['relationships']['field_person_target_id']['id'] = 'field_person_target_id';
  $handler->display->display_options['relationships']['field_person_target_id']['table'] = 'field_data_field_person';
  $handler->display->display_options['relationships']['field_person_target_id']['field'] = 'field_person_target_id';
  $handler->display->display_options['relationships']['field_person_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_wrapper_class'] = 'gallery-title meta';
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'expandable-container';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['cache'] = FALSE;
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'load_more';
  $handler->display->display_options['pager']['options']['items_per_page'] = '12';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'grid-item asset-thumb';
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_wrapper_class'] = 'gallery-title meta';
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
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
  /* Filter criterion: Content: Related Person (field_person) */
  $handler->display->display_options['filters']['field_person_target_id']['id'] = 'field_person_target_id';
  $handler->display->display_options['filters']['field_person_target_id']['table'] = 'field_data_field_person';
  $handler->display->display_options['filters']['field_person_target_id']['field'] = 'field_person_target_id';
  $handler->display->display_options['filters']['field_person_target_id']['operator'] = 'empty';
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

  return $export;
}

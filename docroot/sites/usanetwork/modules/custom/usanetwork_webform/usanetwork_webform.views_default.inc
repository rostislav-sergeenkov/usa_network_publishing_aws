<?php
/**
 * @file
 * usanetwork_webform.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function usanetwork_webform_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'webform_results_1';
  $view->description = '';
  $view->tag = 'webform';
  $view->base_table = 'webform_submissions';
  $view->human_name = 'Feedback Webform Results';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options'] = '10, 50, 100, 200, 500, 1000';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options_all'] = TRUE;
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options_all_label'] = 'All';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'view_submission' => 'view_submission',
    'submitted' => 'submitted',
    'name' => 'name',
    'remote_addr' => 'remote_addr',
  );
  $handler->display->display_options['style_options']['default'] = 'view_submission';
  $handler->display->display_options['style_options']['info'] = array(
    'view_submission' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'submitted' => array(
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
    'remote_addr' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'webform_all_fields' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['style_options']['sticky'] = TRUE;
  $handler->display->display_options['style_options']['empty_table'] = TRUE;
  /* Header: Global: Result summary with an additional token to change the items/page */
  $handler->display->display_options['header']['webform_result']['id'] = 'webform_result';
  $handler->display->display_options['header']['webform_result']['table'] = 'views';
  $handler->display->display_options['header']['webform_result']['field'] = 'webform_result';
  $handler->display->display_options['header']['webform_result']['content'] = '<div class="webform-results-per-page">Showing @start - @end of @total. &nbsp; @items_per_page_links</div>';
  /* No results behavior: Global: Unfiltered text */
  $handler->display->display_options['empty']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['empty']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['empty']['area_text_custom']['content'] = 'There are no submissions for this form. <a href="/node/!1">View this form</a>.';
  $handler->display->display_options['empty']['area_text_custom']['tokenize'] = TRUE;
  /* Relationship: Name */
  $handler->display->display_options['relationships']['data_6']['id'] = 'data_6';
  $handler->display->display_options['relationships']['data_6']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_6']['field'] = 'data';
  $handler->display->display_options['relationships']['data_6']['ui_name'] = 'Name';
  $handler->display->display_options['relationships']['data_6']['label'] = 'Name';
  $handler->display->display_options['relationships']['data_6']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_6']['webform_cid'] = '1';
  /* Relationship: Email Address */
  $handler->display->display_options['relationships']['data_7']['id'] = 'data_7';
  $handler->display->display_options['relationships']['data_7']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_7']['field'] = 'data';
  $handler->display->display_options['relationships']['data_7']['ui_name'] = 'Email Address';
  $handler->display->display_options['relationships']['data_7']['label'] = 'Email Address';
  $handler->display->display_options['relationships']['data_7']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_7']['webform_cid'] = '2';
  /* Relationship: Webform submissions: User */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Relationship: City/Town */
  $handler->display->display_options['relationships']['data']['id'] = 'data';
  $handler->display->display_options['relationships']['data']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data']['field'] = 'data';
  $handler->display->display_options['relationships']['data']['ui_name'] = 'City/Town';
  $handler->display->display_options['relationships']['data']['label'] = 'City/Town';
  $handler->display->display_options['relationships']['data']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data']['webform_cid'] = '3';
  /* Relationship: State */
  $handler->display->display_options['relationships']['data_1']['id'] = 'data_1';
  $handler->display->display_options['relationships']['data_1']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_1']['field'] = 'data';
  $handler->display->display_options['relationships']['data_1']['ui_name'] = 'State';
  $handler->display->display_options['relationships']['data_1']['label'] = 'State';
  $handler->display->display_options['relationships']['data_1']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_1']['webform_cid'] = '4';
  /* Relationship: Age Range */
  $handler->display->display_options['relationships']['data_2']['id'] = 'data_2';
  $handler->display->display_options['relationships']['data_2']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_2']['field'] = 'data';
  $handler->display->display_options['relationships']['data_2']['ui_name'] = 'Age Range';
  $handler->display->display_options['relationships']['data_2']['label'] = 'Age Range';
  $handler->display->display_options['relationships']['data_2']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_2']['webform_cid'] = '5';
  /* Relationship: Topic */
  $handler->display->display_options['relationships']['data_3']['id'] = 'data_3';
  $handler->display->display_options['relationships']['data_3']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_3']['field'] = 'data';
  $handler->display->display_options['relationships']['data_3']['ui_name'] = 'Topic';
  $handler->display->display_options['relationships']['data_3']['label'] = 'Topic';
  $handler->display->display_options['relationships']['data_3']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_3']['webform_cid'] = '7';
  /* Relationship: Program */
  $handler->display->display_options['relationships']['data_4']['id'] = 'data_4';
  $handler->display->display_options['relationships']['data_4']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_4']['field'] = 'data';
  $handler->display->display_options['relationships']['data_4']['ui_name'] = 'Program';
  $handler->display->display_options['relationships']['data_4']['label'] = 'Program';
  $handler->display->display_options['relationships']['data_4']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_4']['webform_cid'] = '8';
  /* Relationship: Site Area */
  $handler->display->display_options['relationships']['data_5']['id'] = 'data_5';
  $handler->display->display_options['relationships']['data_5']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_5']['field'] = 'data';
  $handler->display->display_options['relationships']['data_5']['ui_name'] = 'Site Area';
  $handler->display->display_options['relationships']['data_5']['label'] = 'Site Area';
  $handler->display->display_options['relationships']['data_5']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_5']['webform_cid'] = '9';
  /* Relationship: TV Provider */
  $handler->display->display_options['relationships']['data_8']['id'] = 'data_8';
  $handler->display->display_options['relationships']['data_8']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_8']['field'] = 'data';
  $handler->display->display_options['relationships']['data_8']['ui_name'] = 'TV Provider';
  $handler->display->display_options['relationships']['data_8']['label'] = 'TV Provider';
  $handler->display->display_options['relationships']['data_8']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_8']['webform_cid'] = '10';
  /* Relationship: Message */
  $handler->display->display_options['relationships']['data_9']['id'] = 'data_9';
  $handler->display->display_options['relationships']['data_9']['table'] = 'webform_submissions';
  $handler->display->display_options['relationships']['data_9']['field'] = 'data';
  $handler->display->display_options['relationships']['data_9']['ui_name'] = 'Message';
  $handler->display->display_options['relationships']['data_9']['label'] = 'Message';
  $handler->display->display_options['relationships']['data_9']['webform_nid'] = '1';
  $handler->display->display_options['relationships']['data_9']['webform_cid'] = '11';
  /* Field: Webform submissions: View link */
  $handler->display->display_options['fields']['view_submission']['id'] = 'view_submission';
  $handler->display->display_options['fields']['view_submission']['table'] = 'webform_submissions';
  $handler->display->display_options['fields']['view_submission']['field'] = 'view_submission';
  $handler->display->display_options['fields']['view_submission']['label'] = '#';
  $handler->display->display_options['fields']['view_submission']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view_submission']['text'] = '[serial]';
  $handler->display->display_options['fields']['view_submission']['access_check'] = 0;
  /* Field: Webform submissions: Submitted */
  $handler->display->display_options['fields']['submitted']['id'] = 'submitted';
  $handler->display->display_options['fields']['submitted']['table'] = 'webform_submissions';
  $handler->display->display_options['fields']['submitted']['field'] = 'submitted';
  $handler->display->display_options['fields']['submitted']['date_format'] = 'short';
  $handler->display->display_options['fields']['submitted']['second_date_format'] = 'long';
  /* Field: User: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'users';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['relationship'] = 'uid';
  $handler->display->display_options['fields']['name']['label'] = 'User';
  $handler->display->display_options['fields']['name']['element_label_colon'] = FALSE;
  /* Field: Webform submissions: Remote address */
  $handler->display->display_options['fields']['remote_addr']['id'] = 'remote_addr';
  $handler->display->display_options['fields']['remote_addr']['table'] = 'webform_submissions';
  $handler->display->display_options['fields']['remote_addr']['field'] = 'remote_addr';
  $handler->display->display_options['fields']['remote_addr']['label'] = 'IP address';
  /* Field: Webform submission data: All values */
  $handler->display->display_options['fields']['webform_all_fields']['id'] = 'webform_all_fields';
  $handler->display->display_options['fields']['webform_all_fields']['table'] = 'webform_submissions';
  $handler->display->display_options['fields']['webform_all_fields']['field'] = 'webform_all_fields';
  $handler->display->display_options['fields']['webform_all_fields']['label'] = '';
  $handler->display->display_options['fields']['webform_all_fields']['exclude'] = TRUE;
  $handler->display->display_options['fields']['webform_all_fields']['alter']['nl2br'] = TRUE;
  $handler->display->display_options['fields']['webform_all_fields']['format'] = 'text';
  /* Contextual filter: Webform submissions: Node */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'webform_submissions';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_6']['id'] = 'data_6';
  $handler->display->display_options['filters']['data_6']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_6']['field'] = 'data';
  $handler->display->display_options['filters']['data_6']['relationship'] = 'data_6';
  $handler->display->display_options['filters']['data_6']['operator'] = 'contains';
  $handler->display->display_options['filters']['data_6']['group'] = 1;
  $handler->display->display_options['filters']['data_6']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_6']['expose']['operator_id'] = 'data_6_op';
  $handler->display->display_options['filters']['data_6']['expose']['label'] = 'Name';
  $handler->display->display_options['filters']['data_6']['expose']['operator'] = 'data_6_op';
  $handler->display->display_options['filters']['data_6']['expose']['identifier'] = 'name';
  $handler->display->display_options['filters']['data_6']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_7']['id'] = 'data_7';
  $handler->display->display_options['filters']['data_7']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_7']['field'] = 'data';
  $handler->display->display_options['filters']['data_7']['relationship'] = 'data_7';
  $handler->display->display_options['filters']['data_7']['group'] = 1;
  $handler->display->display_options['filters']['data_7']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_7']['expose']['operator_id'] = 'data_7_op';
  $handler->display->display_options['filters']['data_7']['expose']['label'] = 'Email Adress';
  $handler->display->display_options['filters']['data_7']['expose']['operator'] = 'data_7_op';
  $handler->display->display_options['filters']['data_7']['expose']['identifier'] = 'email';
  $handler->display->display_options['filters']['data_7']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data']['id'] = 'data';
  $handler->display->display_options['filters']['data']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data']['field'] = 'data';
  $handler->display->display_options['filters']['data']['relationship'] = 'data';
  $handler->display->display_options['filters']['data']['group'] = 1;
  $handler->display->display_options['filters']['data']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data']['expose']['operator_id'] = 'data_op';
  $handler->display->display_options['filters']['data']['expose']['label'] = 'City/Town';
  $handler->display->display_options['filters']['data']['expose']['operator'] = 'data_op';
  $handler->display->display_options['filters']['data']['expose']['identifier'] = 'city_and_town';
  $handler->display->display_options['filters']['data']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_1']['id'] = 'data_1';
  $handler->display->display_options['filters']['data_1']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_1']['field'] = 'data';
  $handler->display->display_options['filters']['data_1']['relationship'] = 'data_1';
  $handler->display->display_options['filters']['data_1']['group'] = 1;
  $handler->display->display_options['filters']['data_1']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_1']['expose']['operator_id'] = 'data_1_op';
  $handler->display->display_options['filters']['data_1']['expose']['label'] = 'State';
  $handler->display->display_options['filters']['data_1']['expose']['operator'] = 'data_1_op';
  $handler->display->display_options['filters']['data_1']['expose']['identifier'] = 'state';
  $handler->display->display_options['filters']['data_1']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_2']['id'] = 'data_2';
  $handler->display->display_options['filters']['data_2']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_2']['field'] = 'data';
  $handler->display->display_options['filters']['data_2']['relationship'] = 'data_2';
  $handler->display->display_options['filters']['data_2']['group'] = 1;
  $handler->display->display_options['filters']['data_2']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_2']['expose']['operator_id'] = 'data_2_op';
  $handler->display->display_options['filters']['data_2']['expose']['label'] = 'Age Range';
  $handler->display->display_options['filters']['data_2']['expose']['operator'] = 'data_2_op';
  $handler->display->display_options['filters']['data_2']['expose']['identifier'] = 'age_range';
  $handler->display->display_options['filters']['data_2']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_3']['id'] = 'data_3';
  $handler->display->display_options['filters']['data_3']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_3']['field'] = 'data';
  $handler->display->display_options['filters']['data_3']['relationship'] = 'data_3';
  $handler->display->display_options['filters']['data_3']['group'] = 1;
  $handler->display->display_options['filters']['data_3']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_3']['expose']['operator_id'] = 'data_3_op';
  $handler->display->display_options['filters']['data_3']['expose']['label'] = 'Topic';
  $handler->display->display_options['filters']['data_3']['expose']['operator'] = 'data_3_op';
  $handler->display->display_options['filters']['data_3']['expose']['identifier'] = 'topic';
  $handler->display->display_options['filters']['data_3']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_4']['id'] = 'data_4';
  $handler->display->display_options['filters']['data_4']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_4']['field'] = 'data';
  $handler->display->display_options['filters']['data_4']['relationship'] = 'data_4';
  $handler->display->display_options['filters']['data_4']['group'] = 1;
  $handler->display->display_options['filters']['data_4']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_4']['expose']['operator_id'] = 'data_4_op';
  $handler->display->display_options['filters']['data_4']['expose']['label'] = 'Program';
  $handler->display->display_options['filters']['data_4']['expose']['operator'] = 'data_4_op';
  $handler->display->display_options['filters']['data_4']['expose']['identifier'] = 'program';
  $handler->display->display_options['filters']['data_4']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_5']['id'] = 'data_5';
  $handler->display->display_options['filters']['data_5']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_5']['field'] = 'data';
  $handler->display->display_options['filters']['data_5']['relationship'] = 'data_5';
  $handler->display->display_options['filters']['data_5']['group'] = 1;
  $handler->display->display_options['filters']['data_5']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_5']['expose']['operator_id'] = 'data_5_op';
  $handler->display->display_options['filters']['data_5']['expose']['label'] = 'Site Area';
  $handler->display->display_options['filters']['data_5']['expose']['operator'] = 'data_5_op';
  $handler->display->display_options['filters']['data_5']['expose']['identifier'] = 'site_area';
  $handler->display->display_options['filters']['data_5']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_8']['id'] = 'data_8';
  $handler->display->display_options['filters']['data_8']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_8']['field'] = 'data';
  $handler->display->display_options['filters']['data_8']['relationship'] = 'data_8';
  $handler->display->display_options['filters']['data_8']['group'] = 1;
  $handler->display->display_options['filters']['data_8']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_8']['expose']['operator_id'] = 'data_8_op';
  $handler->display->display_options['filters']['data_8']['expose']['label'] = 'TV Provider';
  $handler->display->display_options['filters']['data_8']['expose']['operator'] = 'data_8_op';
  $handler->display->display_options['filters']['data_8']['expose']['identifier'] = 'tv_provider';
  $handler->display->display_options['filters']['data_8']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );
  /* Filter criterion: Webform submission data: Data field */
  $handler->display->display_options['filters']['data_9']['id'] = 'data_9';
  $handler->display->display_options['filters']['data_9']['table'] = 'webform_submitted_data';
  $handler->display->display_options['filters']['data_9']['field'] = 'data';
  $handler->display->display_options['filters']['data_9']['relationship'] = 'data_9';
  $handler->display->display_options['filters']['data_9']['operator'] = 'contains';
  $handler->display->display_options['filters']['data_9']['group'] = 1;
  $handler->display->display_options['filters']['data_9']['exposed'] = TRUE;
  $handler->display->display_options['filters']['data_9']['expose']['operator_id'] = 'data_9_op';
  $handler->display->display_options['filters']['data_9']['expose']['label'] = 'Message';
  $handler->display->display_options['filters']['data_9']['expose']['operator'] = 'data_9_op';
  $handler->display->display_options['filters']['data_9']['expose']['identifier'] = 'message';
  $handler->display->display_options['filters']['data_9']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
    26 => 0,
    31 => 0,
    36 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['path'] = 'node/%/webform-results';
  $export['webform_results_1'] = $view;

  return $export;
}

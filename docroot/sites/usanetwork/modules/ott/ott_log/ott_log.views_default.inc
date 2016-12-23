<?php
/**
 * @file
 * ott_log.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ott_log_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'ott_logs';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'ott_log';
  $view->human_name = 'TVE API Services Log';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'TVE Log';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'view ott log';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'id' => 'id',
    'object_type' => 'object_type',
    'object_id' => 'object_id',
    'instance' => 'instance',
    'endpoint' => 'endpoint',
    'response_status' => 'response_status',
    'response_message' => 'response_message',
    'info' => 'info',
    'session_id' => 'session_id',
    'mail' => 'mail',
    'date' => 'date',
    'request_options' => 'request_options',
    'response_data' => 'response_data',
  );
  $handler->display->display_options['style_options']['default'] = 'id';
  $handler->display->display_options['style_options']['info'] = array(
    'id' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'object_type' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'object_id' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'instance' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'endpoint' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'response_status' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'response_message' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'info' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'session_id' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'mail' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'date' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'request_options' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'response_data' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Relationship: OTT Log: Uid */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'ott_log';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Field: OTT Log: Ott log ID */
  $handler->display->display_options['fields']['id']['id'] = 'id';
  $handler->display->display_options['fields']['id']['table'] = 'ott_log';
  $handler->display->display_options['fields']['id']['field'] = 'id';
  $handler->display->display_options['fields']['id']['label'] = 'ID';
  $handler->display->display_options['fields']['id']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['id']['alter']['text'] = '<a href="/services/api/v1/log?parameters%5Bid%5D=[id]" target="_blank">[id]</a>';
  $handler->display->display_options['fields']['id']['alter']['path'] = 'services/api/v1/log?parameters%5Bid%5D=[id]';
  $handler->display->display_options['fields']['id']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['id']['separator'] = '';
  /* Field: OTT Log: Object_type */
  $handler->display->display_options['fields']['object_type']['id'] = 'object_type';
  $handler->display->display_options['fields']['object_type']['table'] = 'ott_log';
  $handler->display->display_options['fields']['object_type']['field'] = 'object_type';
  $handler->display->display_options['fields']['object_type']['label'] = 'Object Type';
  /* Field: OTT Log: Object_id */
  $handler->display->display_options['fields']['object_id']['id'] = 'object_id';
  $handler->display->display_options['fields']['object_id']['table'] = 'ott_log';
  $handler->display->display_options['fields']['object_id']['field'] = 'object_id';
  $handler->display->display_options['fields']['object_id']['label'] = 'Object ID';
  /* Field: OTT Log: Instance */
  $handler->display->display_options['fields']['instance']['id'] = 'instance';
  $handler->display->display_options['fields']['instance']['table'] = 'ott_log';
  $handler->display->display_options['fields']['instance']['field'] = 'instance';
  /* Field: OTT Log: Endpoint */
  $handler->display->display_options['fields']['endpoint']['id'] = 'endpoint';
  $handler->display->display_options['fields']['endpoint']['table'] = 'ott_log';
  $handler->display->display_options['fields']['endpoint']['field'] = 'endpoint';
  /* Field: OTT Log: Response_status */
  $handler->display->display_options['fields']['response_status']['id'] = 'response_status';
  $handler->display->display_options['fields']['response_status']['table'] = 'ott_log';
  $handler->display->display_options['fields']['response_status']['field'] = 'response_status';
  $handler->display->display_options['fields']['response_status']['label'] = 'Response Status';
  /* Field: OTT Log: Response_message */
  $handler->display->display_options['fields']['response_message']['id'] = 'response_message';
  $handler->display->display_options['fields']['response_message']['table'] = 'ott_log';
  $handler->display->display_options['fields']['response_message']['field'] = 'response_message';
  $handler->display->display_options['fields']['response_message']['label'] = 'Response Message';
  /* Field: OTT Log: Info */
  $handler->display->display_options['fields']['info']['id'] = 'info';
  $handler->display->display_options['fields']['info']['table'] = 'ott_log';
  $handler->display->display_options['fields']['info']['field'] = 'info';
  /* Field: OTT Log: Session_id */
  $handler->display->display_options['fields']['session_id']['id'] = 'session_id';
  $handler->display->display_options['fields']['session_id']['table'] = 'ott_log';
  $handler->display->display_options['fields']['session_id']['field'] = 'session_id';
  $handler->display->display_options['fields']['session_id']['label'] = 'Session Id';
  /* Field: User: E-mail */
  $handler->display->display_options['fields']['mail']['id'] = 'mail';
  $handler->display->display_options['fields']['mail']['table'] = 'users';
  $handler->display->display_options['fields']['mail']['field'] = 'mail';
  $handler->display->display_options['fields']['mail']['relationship'] = 'uid';
  $handler->display->display_options['fields']['mail']['label'] = 'User';
  /* Field: OTT Log: Date */
  $handler->display->display_options['fields']['date']['id'] = 'date';
  $handler->display->display_options['fields']['date']['table'] = 'ott_log';
  $handler->display->display_options['fields']['date']['field'] = 'date';
  $handler->display->display_options['fields']['date']['date_format'] = 'custom';
  $handler->display->display_options['fields']['date']['custom_date_format'] = 'Y-m-d H:i';
  $handler->display->display_options['fields']['date']['second_date_format'] = 'html5_tools_iso8601';
  /* Field: OTT Log: Request Options */
  $handler->display->display_options['fields']['request_options']['id'] = 'request_options';
  $handler->display->display_options['fields']['request_options']['table'] = 'ott_log';
  $handler->display->display_options['fields']['request_options']['field'] = 'request_options';
  /* Field: OTT Log: Response Data */
  $handler->display->display_options['fields']['response_data']['id'] = 'response_data';
  $handler->display->display_options['fields']['response_data']['table'] = 'ott_log';
  $handler->display->display_options['fields']['response_data']['field'] = 'response_data';
  /* Sort criterion: OTT Log: Ott log ID */
  $handler->display->display_options['sorts']['id']['id'] = 'id';
  $handler->display->display_options['sorts']['id']['table'] = 'ott_log';
  $handler->display->display_options['sorts']['id']['field'] = 'id';
  $handler->display->display_options['sorts']['id']['order'] = 'DESC';
  $handler->display->display_options['sorts']['id']['expose']['label'] = 'TVE log ID';
  /* Filter criterion: OTT Log: Date */
  $handler->display->display_options['filters']['date']['id'] = 'date';
  $handler->display->display_options['filters']['date']['table'] = 'ott_log';
  $handler->display->display_options['filters']['date']['field'] = 'date';
  $handler->display->display_options['filters']['date']['operator'] = '>';
  $handler->display->display_options['filters']['date']['value']['min'] = '2015-12-01 01:23';
  $handler->display->display_options['filters']['date']['value']['value'] = '2015-12-01 01:23';
  $handler->display->display_options['filters']['date']['group'] = 1;
  $handler->display->display_options['filters']['date']['exposed'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['operator_id'] = 'date_op';
  $handler->display->display_options['filters']['date']['expose']['label'] = 'Date';
  $handler->display->display_options['filters']['date']['expose']['description'] = 'A date in any machine readable format. CCYY-MM-DD HH:MM:SS is preferred.';
  $handler->display->display_options['filters']['date']['expose']['use_operator'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['operator'] = 'date_op';
  $handler->display->display_options['filters']['date']['expose']['identifier'] = 'date';
  $handler->display->display_options['filters']['date']['expose']['remember'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  $handler->display->display_options['filters']['date']['group_info']['label'] = 'Date';
  $handler->display->display_options['filters']['date']['group_info']['identifier'] = 'date';
  $handler->display->display_options['filters']['date']['group_info']['remember'] = FALSE;
  $handler->display->display_options['filters']['date']['group_info']['group_items'] = array(
    1 => array(),
    2 => array(),
    3 => array(),
  );
  /* Filter criterion: OTT Log: Response_status */
  $handler->display->display_options['filters']['response_status']['id'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['table'] = 'ott_log';
  $handler->display->display_options['filters']['response_status']['field'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['operator'] = 'starts';
  $handler->display->display_options['filters']['response_status']['group'] = 1;
  $handler->display->display_options['filters']['response_status']['exposed'] = TRUE;
  $handler->display->display_options['filters']['response_status']['expose']['operator_id'] = 'response_status_op';
  $handler->display->display_options['filters']['response_status']['expose']['label'] = 'Response Status';
  $handler->display->display_options['filters']['response_status']['expose']['description'] = '"starts with" operator';
  $handler->display->display_options['filters']['response_status']['expose']['operator'] = 'response_status_op';
  $handler->display->display_options['filters']['response_status']['expose']['identifier'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: OTT Log: Object_id */
  $handler->display->display_options['filters']['object_id']['id'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['table'] = 'ott_log';
  $handler->display->display_options['filters']['object_id']['field'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['operator'] = 'starts';
  $handler->display->display_options['filters']['object_id']['group'] = 1;
  $handler->display->display_options['filters']['object_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['object_id']['expose']['operator_id'] = 'object_id_op';
  $handler->display->display_options['filters']['object_id']['expose']['label'] = 'Object Id';
  $handler->display->display_options['filters']['object_id']['expose']['operator'] = 'object_id_op';
  $handler->display->display_options['filters']['object_id']['expose']['identifier'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: OTT Log: Object_type */
  $handler->display->display_options['filters']['object_type']['id'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['table'] = 'ott_log';
  $handler->display->display_options['filters']['object_type']['field'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['group'] = 1;
  $handler->display->display_options['filters']['object_type']['exposed'] = TRUE;
  $handler->display->display_options['filters']['object_type']['expose']['operator_id'] = 'object_type_op';
  $handler->display->display_options['filters']['object_type']['expose']['label'] = 'Object Type';
  $handler->display->display_options['filters']['object_type']['expose']['operator'] = 'object_type_op';
  $handler->display->display_options['filters']['object_type']['expose']['identifier'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: Session Id */
  $handler->display->display_options['filters']['session_id']['id'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['table'] = 'ott_log';
  $handler->display->display_options['filters']['session_id']['field'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['ui_name'] = 'Session Id';
  $handler->display->display_options['filters']['session_id']['group'] = 1;
  $handler->display->display_options['filters']['session_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['session_id']['expose']['operator_id'] = 'session_id_op';
  $handler->display->display_options['filters']['session_id']['expose']['label'] = 'Session Id';
  $handler->display->display_options['filters']['session_id']['expose']['operator'] = 'session_id_op';
  $handler->display->display_options['filters']['session_id']['expose']['identifier'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['exposed_form'] = FALSE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: TVE Log: Log date */
  $handler->display->display_options['filters']['date']['id'] = 'date';
  $handler->display->display_options['filters']['date']['table'] = 'ott_log';
  $handler->display->display_options['filters']['date']['field'] = 'date';
  $handler->display->display_options['filters']['date']['operator'] = '>';
  $handler->display->display_options['filters']['date']['value']['value'] = '2016-08-31 01:23';
  $handler->display->display_options['filters']['date']['group'] = 1;
  $handler->display->display_options['filters']['date']['exposed'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['operator_id'] = 'date_op';
  $handler->display->display_options['filters']['date']['expose']['label'] = 'Log date';
  $handler->display->display_options['filters']['date']['expose']['use_operator'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['operator'] = 'date_op';
  $handler->display->display_options['filters']['date']['expose']['identifier'] = 'date';
  $handler->display->display_options['filters']['date']['expose']['remember'] = TRUE;
  $handler->display->display_options['filters']['date']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: TVE Log: Instance */
  $handler->display->display_options['filters']['instance']['id'] = 'instance';
  $handler->display->display_options['filters']['instance']['table'] = 'ott_log';
  $handler->display->display_options['filters']['instance']['field'] = 'instance';
  $handler->display->display_options['filters']['instance']['group'] = 1;
  $handler->display->display_options['filters']['instance']['exposed'] = TRUE;
  $handler->display->display_options['filters']['instance']['expose']['operator_id'] = 'instance_op';
  $handler->display->display_options['filters']['instance']['expose']['label'] = 'Instance';
  $handler->display->display_options['filters']['instance']['expose']['operator'] = 'instance_op';
  $handler->display->display_options['filters']['instance']['expose']['identifier'] = 'instance';
  $handler->display->display_options['filters']['instance']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['instance']['is_grouped'] = TRUE;
  $handler->display->display_options['filters']['instance']['group_info']['label'] = 'Instance';
  $handler->display->display_options['filters']['instance']['group_info']['identifier'] = 'instance';
  $handler->display->display_options['filters']['instance']['group_info']['multiple'] = TRUE;
  /* Filter criterion: TVE Log: Object_id */
  $handler->display->display_options['filters']['object_id']['id'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['table'] = 'ott_log';
  $handler->display->display_options['filters']['object_id']['field'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['operator'] = 'starts';
  $handler->display->display_options['filters']['object_id']['group'] = 1;
  $handler->display->display_options['filters']['object_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['object_id']['expose']['operator_id'] = 'object_id_op';
  $handler->display->display_options['filters']['object_id']['expose']['label'] = 'Object Id';
  $handler->display->display_options['filters']['object_id']['expose']['operator'] = 'object_id_op';
  $handler->display->display_options['filters']['object_id']['expose']['identifier'] = 'object_id';
  $handler->display->display_options['filters']['object_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: TVE Log: Object_type */
  $handler->display->display_options['filters']['object_type']['id'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['table'] = 'ott_log';
  $handler->display->display_options['filters']['object_type']['field'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['group'] = 1;
  $handler->display->display_options['filters']['object_type']['exposed'] = TRUE;
  $handler->display->display_options['filters']['object_type']['expose']['operator_id'] = 'object_type_op';
  $handler->display->display_options['filters']['object_type']['expose']['label'] = 'Object Type';
  $handler->display->display_options['filters']['object_type']['expose']['operator'] = 'object_type_op';
  $handler->display->display_options['filters']['object_type']['expose']['identifier'] = 'object_type';
  $handler->display->display_options['filters']['object_type']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: Session Id */
  $handler->display->display_options['filters']['session_id']['id'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['table'] = 'ott_log';
  $handler->display->display_options['filters']['session_id']['field'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['ui_name'] = 'Session Id';
  $handler->display->display_options['filters']['session_id']['group'] = 1;
  $handler->display->display_options['filters']['session_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['session_id']['expose']['operator_id'] = 'session_id_op';
  $handler->display->display_options['filters']['session_id']['expose']['label'] = 'Session Id';
  $handler->display->display_options['filters']['session_id']['expose']['operator'] = 'session_id_op';
  $handler->display->display_options['filters']['session_id']['expose']['identifier'] = 'session_id';
  $handler->display->display_options['filters']['session_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  /* Filter criterion: TVE Log: Response_message */
  $handler->display->display_options['filters']['response_message']['id'] = 'response_message';
  $handler->display->display_options['filters']['response_message']['table'] = 'ott_log';
  $handler->display->display_options['filters']['response_message']['field'] = 'response_message';
  $handler->display->display_options['filters']['response_message']['group'] = 1;
  $handler->display->display_options['filters']['response_message']['exposed'] = TRUE;
  $handler->display->display_options['filters']['response_message']['expose']['operator_id'] = 'response_message_op';
  $handler->display->display_options['filters']['response_message']['expose']['label'] = 'Response_message';
  $handler->display->display_options['filters']['response_message']['expose']['operator'] = 'response_message_op';
  $handler->display->display_options['filters']['response_message']['expose']['identifier'] = 'response_message';
  $handler->display->display_options['filters']['response_message']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['response_message']['is_grouped'] = TRUE;
  $handler->display->display_options['filters']['response_message']['group_info']['label'] = 'Response message';
  $handler->display->display_options['filters']['response_message']['group_info']['identifier'] = 'response_message';
  $handler->display->display_options['filters']['response_message']['group_info']['multiple'] = TRUE;
  /* Filter criterion: TVE Log: Response_status */
  $handler->display->display_options['filters']['response_status']['id'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['table'] = 'ott_log';
  $handler->display->display_options['filters']['response_status']['field'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['operator'] = 'starts';
  $handler->display->display_options['filters']['response_status']['group'] = 1;
  $handler->display->display_options['filters']['response_status']['exposed'] = TRUE;
  $handler->display->display_options['filters']['response_status']['expose']['operator_id'] = 'response_status_op';
  $handler->display->display_options['filters']['response_status']['expose']['label'] = 'Response Status';
  $handler->display->display_options['filters']['response_status']['expose']['description'] = '"starts with" operator';
  $handler->display->display_options['filters']['response_status']['expose']['operator'] = 'response_status_op';
  $handler->display->display_options['filters']['response_status']['expose']['identifier'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['response_status']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    11 => 0,
    16 => 0,
    21 => 0,
  );
  $handler->display->display_options['filters']['response_status']['is_grouped'] = TRUE;
  $handler->display->display_options['filters']['response_status']['group_info']['label'] = 'Response status';
  $handler->display->display_options['filters']['response_status']['group_info']['identifier'] = 'response_status';
  $handler->display->display_options['filters']['response_status']['group_info']['multiple'] = TRUE;
  $handler->display->display_options['path'] = 'admin/ott/log';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'API Services publish log';
  $handler->display->display_options['menu']['description'] = 'API Services request logging.';
  $handler->display->display_options['menu']['weight'] = '5';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['weight'] = '0';
  $export['ott_logs'] = $view;

  return $export;
}

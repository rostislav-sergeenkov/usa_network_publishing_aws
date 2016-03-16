<?php

/**
 * USA Video configuration form.
 */
function usanetwork_mpx_video_admin($form, &$form_state) {
//  $form['#tree'] = TRUE;
  $form['sync'] = array(
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#title' => t('Synchronize videos'),
    '#description' => t('Synchronize videos to affect changes in import rulesets.'),
  );
  $options = array();
  foreach (_pub_mpx_get_mpx_account_video_file_types() as $type => $info) {
    $options[$type] = $info->label;
  }
  $form['sync']['types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Video types'),
    '#options' => $options,
    '#default_value' => _pub_mpx_get_mpx_account_video_file_types(TRUE),
  );
  $form['sync']['start'] = array(
    '#type' => 'submit',
    '#value' => t('Sync Now'),
    '#submit' => array('usanetwork_mpx_video_sync_submit'),
    '#limit_validation_errors' => array(),
  );

  $form['player_url'] = array(
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#title' => t('Player URL Settings'),
    '#description' => t('Set up Player URL Settings.'),
  );

  $form['player_url']['usanetwork_player_url_pdk'] = array(
    '#type' => 'textfield',
    '#title' => t('Pdk'),
    '#description' => t('Player URL Parameter &pdk='),
    '#default_value' => variable_get('usanetwork_player_url_pdk', ''),
  );

  $form['player_url']['usanetwork_player_url_logLevel'] = array(
    '#type' => 'textfield',
    '#title' => t('logLevel'),
    '#description' => t('Player URL Parameter &logLevel='),
    '#default_value' => variable_get('usanetwork_player_url_logLevel', ''),
  );

  return system_settings_form($form);
}

/**
 * Submit callback for Sync Now button.
 */
function usanetwork_mpx_video_sync_submit($form, &$form_state) {
  $types = array_filter($form_state['input']['types']);
  if (!empty($types)) {
    $batch = usanetwork_mpx_video_sync_batch($types);
    batch_set($batch);
  }
  else {
    drupal_set_message(t('No video types where selected for update.'), 'error');
  }
}

/*
 * Full Episodes Page Setting Form
 */
function usanetwork_mpx_video_full_episode_page_form() {
  $output = '';

  drupal_set_title('Featured elements for Full Episodes Page');

  $output .= t('Select video file:');
  $output .= drupal_render(drupal_get_form('usanetwork_mpx_video_full_episode_load_form'));

  $output .= t('Elements:');
  $output .= drupal_render(drupal_get_form('usanetwork_mpx_video_full_episode_videos_form'));

  return $output;
}

/*
 * Add video for Featured Elements
 */
function usanetwork_mpx_video_full_episode_load_form() {
  $form['usa_upload_video'] = array(
    '#title' => t('Video file'),
    '#description' => t('Type the first words of the title of the content that you want to insert.'),
    '#type' => 'textfield',
    '#autocomplete_path' => 'usanetwork_mpx_video/full_video/autocomplete',
  );

  $form['test'] = array(
    '#type' => 'submit',
    '#value' => t('Add'),
    '#submit' => array('usanetwork_mpx_video_full_episode_load_form_submit'),
    '#validate' => array('usanetwork_mpx_video_full_episode_load_form_validate'),
  );

  return $form;
}
/*
 * Validate form for adding featured elements
 */
function usanetwork_mpx_video_full_episode_load_form_validate($form, &$form_state) {
  if ($form_state['values']['usa_upload_video']) {
    $usanework_full_episodes_aspot = variable_get('usanework_full_episodes_aspot', array());
    if (count($usanework_full_episodes_aspot) >= USA_MPX_VIDEO_LATEST_FULL_EPISODE_MAX_ELEMENTS) {
      form_set_error('usa_upload_video', t('Maximum @max elements.', array('@max' => USA_MPX_VIDEO_LATEST_FULL_EPISODE_MAX_ELEMENTS)));
    }
    preg_match('/\[(\w+)\:(\d+)\]/', $form_state['values']['usa_upload_video'], $matches);
    if (empty($matches[2])) {
      form_set_error('usa_upload_video', t('Incorrect input.'));
    }
    if (FALSE !== array_search($matches[2], $usanework_full_episodes_aspot)) {
      form_set_error('usa_upload_video', t('Video already added.'));
    }
  }
  else {
    form_set_error('usa_upload_video', t('Empty input.'));
  }
}
/*
 * Submit form for adding featured elements
 */
function usanetwork_mpx_video_full_episode_load_form_submit($form, &$form_state) {
  preg_match('/\[(\w+)\:(\d+)\]/', $form_state['values']['usa_upload_video'], $matches);
  $usanework_full_episodes_aspot = variable_get('usanework_full_episodes_aspot', array());
  $usanework_full_episodes_aspot[] = $matches[2];
  variable_set('usanework_full_episodes_aspot', $usanework_full_episodes_aspot);
}
/*
 * Draggable form for sort features elements
 */
function usanetwork_mpx_video_full_episode_videos_form() {
  $form = array();

  $usanework_full_episodes_aspot = variable_get('usanework_full_episodes_aspot', array());

  if (!empty($usanework_full_episodes_aspot)){
    ksort($usanework_full_episodes_aspot);

    $form['table'] = array(
      '#tree' => true,
      '#theme' => 'usanework_full_episodes_draggable',
    );

    $i = 0;

    foreach ($usanework_full_episodes_aspot as $key => $video_id) {

      $file = file_load($video_id);

      $form['table'][$video_id]['decstop_image'] = array(
        '#markup' => $file->filename,
        '#type' => 'item',
      );

      $form['table'][$video_id]['active'] = array(
        '#markup' => l('delete','admin/usanetwork/full-episode-page/' . $video_id . '/delete'),
        '#type' => 'item',
      );

      $form['table'][$video_id]['weight'] = array(
        '#type'=>'textfield',
        '#size'=>5,
        '#default_value' => $key,
        //add a specific class in here - we need this later
        '#attributes' => array('class'=>array('weight')),
      );
      $i++;
    }

    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => 'Save',
    );
  }
  return $form;
}

/*
 * Theming graggable form
 */
function theme_usanework_full_episodes_draggable($vars){
  $form = $vars['element'];
  $rows = array();

  foreach (element_children($form) as $id) {
    $row = array();
    $row['data'] = array();
    foreach (element_children($form[$id]) as $name) {
      $row['data'][] = drupal_render($form[$id][$name]);
      $row['class'] = array('draggable');
    }
    $rows[] = $row;
  }

  drupal_add_tabledrag('images-table-form', 'order', 'sibling', 'weight');

  $output = theme('table', array(
    'header' => array('Video', 'Actions', 'Weight'),
    'rows' => $rows,
    'attributes' => array('id' => 'images-table-form')));

  return $output;
}

/*
 * Save order of elements
 */
function usanetwork_mpx_video_full_episode_videos_form_submit($form, &$form_state) {
  $usanework_full_episodes_aspot = array();
  $temporary_table_array = $form_state['values']['table'];
  asort($temporary_table_array);
  foreach ($temporary_table_array as $id => $item) {
    $usanework_full_episodes_aspot[] = $id;
  }
  variable_set('usanework_full_episodes_aspot', $usanework_full_episodes_aspot);
}

/*
 * Deleting element from list
 */
function usanetwork_mpx_video_full_episode_videos_form_delete($video_id) {
  $usanework_full_episodes_aspot = variable_get('usanework_full_episodes_aspot', array());

  $key = array_search($video_id, $usanework_full_episodes_aspot);
  unset($usanework_full_episodes_aspot[$key]);

  variable_set('usanework_full_episodes_aspot', $usanework_full_episodes_aspot);

  drupal_set_message('Video element has been deleted');
  drupal_goto('admin/usanetwork/full-episode-page');
}

/*
 * Form for saving USA Network custom WatchWith settings
 */
function _usanetwork_mpx_watchwith_admin_form ($form, &$form_state) {
  $form['usanetwork_ww_access_key'] = array(
    '#title' => t('Access Key'),
    '#type' => 'textfield',
    '#default_value' => variable_get('usanetwork_ww_access_key', 'SBSXJZHX4R5'),
  );
  $form['usanetwork_ww_js_file'] = array(
    '#title' => t('WatchWith path to JS file'),
    '#type' => 'textfield',
    '#default_value' => variable_get('usanetwork_ww_js_file', 'http://apps.watchwith.com/wng-usa/dev/wng-usa-boot.js'),
  );
  $form['usanetwork_ww_css_file'] = array(
    '#title' => t('WatchWith path to CSS file'),
    '#type' => 'textfield',
    '#default_value' => variable_get('usanetwork_ww_css_file', 'http://apps.watchwith.com/wng-usa/dev/watchwith.css'),
  );


  return system_settings_form($form);
}

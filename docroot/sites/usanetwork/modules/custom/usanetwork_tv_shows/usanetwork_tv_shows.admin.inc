<?php
/*
 * Page for configuring Where to Watch Providers Logos
 */
function _usanetwork_tv_shows_where2watch_settings() {
  $output = t('Please, upload title and logo for provider:');

  $upload_form = drupal_get_form('usanetwork_tv_shows_where2watch_load_form');

  $output .= drupal_render($upload_form);

  $output .= t('Providers:');

  $output .= usanetwork_tv_shows_where2watch_table();

  return $output;
}

/*
 * Load Provider and Logo Form
 */
function usanetwork_tv_shows_where2watch_load_form($form, &$form_state, $provider_id = '') {
  $form = array();

  if ($provider_id !== '') {
    $provider = _usanetwork_tv_show_where2watch_get_provider_by_id($provider_id);
    $image_file = file_load($provider['image']);
    $image_dark_file = file_load($provider['image_dark']);

    $image = theme('image_style', array('path' => $image_file->uri, 'style_name' => 'thumbnail'));
    $image_dark = theme('image_style', array('path' => $image_dark_file->uri, 'style_name' => 'thumbnail'));
  }

  $form = array(
    '#attributes' => array('enctype' => 'multipart/form-data'),
  );

  $form['provider_name'] = array(
    '#type' => 'textfield',
    '#title' => t("Provider's title"),
    '#size' => 60,
    '#required' => TRUE,
    '#default_value' => !empty($provider['name']) ? $provider['name'] : '',
  );

  $form['provider_logo'] = array(
    '#prefix' => !empty($provider['image']) ? '<div style="background-color: #C5C5C5; display: inline-block;">' . $image . '</div>':'',
    '#type' => 'file',
    '#title' => t("Light logo (for dark backgrounds)"),
  );

  $form['provider_logo_dark'] = array(
    '#prefix' => !empty($provider['image_dark']) ? $image_dark :'',
    '#type' => 'file',
    '#title' => t("Dark logo (for light backgrounds)"),
  );

  if (!empty($provider)) {
    $form['provider_id'] = array(
      '#type' => 'hidden',
      '#value' => $provider_id,
    );
  }

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => !empty($provider)? t('Edit') : t('Upload'),
    '#submit' => !empty($provider) ? array('usanetwork_tv_shows_where2watch_edit_form_submit') : array('usanetwork_tv_shows_where2watch_load_form_submit'),
  );

  return $form;
}

/*
 * Submit loading information
 */
function usanetwork_tv_shows_where2watch_load_form_submit($form, &$form_state){
  $providers_folder = 'public://providers/';
  $is_writable = file_prepare_directory($providers_folder, FILE_CREATE_DIRECTORY);
  if ($is_writable) {
    $provider_logo = file_save_upload('provider_logo', array(), $providers_folder, FILE_EXISTS_RENAME);
    $provider_logo_dark = file_save_upload('provider_logo_dark', array(), $providers_folder, FILE_EXISTS_RENAME);

    if (!$provider_logo) {
      form_set_error('provider_logo', 'No image was uploaded');
      return;
    }

    if (!$provider_logo_dark) {
      form_set_error('provider_logo_dark', 'No image was uploaded');
      return;
    }

    $provider_logo->status = 1;
    $provider_logo_dark->status = 1;

    file_save($provider_logo);
    file_save($provider_logo_dark);

    $where2watch_providers = variable_get('where2watch_providers', array());

    $where2watch_providers[] = array(
      'name' => $form_state['values']['provider_name'],
      'image' => $provider_logo->fid,
      'image_dark' => $provider_logo_dark->fid,
    );

    variable_set('where2watch_providers', $where2watch_providers);

    drupal_set_message('Image has been successfully uploaded');
  }
}

/*
 * Submit updated information
 */
function usanetwork_tv_shows_where2watch_edit_form_submit($form, &$form_state) {
  $providers_folder = 'public://providers/';
  $is_writable = file_prepare_directory($providers_folder, FILE_CREATE_DIRECTORY);
  if ($is_writable) {

    $provider_logo = file_save_upload('provider_logo', array(), $providers_folder, FILE_EXISTS_RENAME);
    $provider_logo_dark = file_save_upload('provider_logo_dark', array(), $providers_folder, FILE_EXISTS_RENAME);


    $where2watch_providers = variable_get('where2watch_providers', array());
    $provider_id = $form_state['values']['provider_id'];

    if ($provider_logo) {
      $provider_logo->status = 1;
      file_save($provider_logo);
      $where2watch_providers[$provider_id]['image'] = $provider_logo->fid;
    }

    if ($provider_logo_dark) {
      $provider_logo_dark->status = 1;
      file_save($provider_logo_dark);
      $where2watch_providers[$provider_id]['image_dark'] = $provider_logo_dark->fid;
    }

    $where2watch_providers[$provider_id]['name'] = $form_state['values']['provider_name'];

    variable_set('where2watch_providers', $where2watch_providers);

    drupal_set_message('Image has been successfully updated');
    drupal_goto('admin/usanetwork/where_to_watch');
  }
}

/*
 * Display information in table
 */
function usanetwork_tv_shows_where2watch_table() {
  $providers = variable_get('where2watch_providers', array());
  $rows = array();

  if (!empty($providers)){
    foreach ($providers as $key => $provider) {
      $image = file_load($provider['image']);
      $image_dark = file_load($provider['image_dark']);
      $rows[] = array(
        $provider['name'],
        theme('image_style', array(
            'path' => $image->uri,
            'style_name' => 'thumbnail',
          )),
        theme('image_style', array(
          'path' => $image_dark->uri,
          'style_name' => 'thumbnail',
        )),
        l('edit','admin/usanetwork/where_to_watch/' . $key . '/edit') . '&nbsp;&nbsp;&nbsp;&nbsp;' . l('delete','admin/usanetwork/where_to_watch/' . $key . '/delete'),
      );
    }
  }

  $output = theme('table', array(
    'header' => array('Provider Name', 'Light Logo', 'Dark Logo', 'Actions'),
    'rows' => $rows,
  ));

  return $output;
}

/*
 * Deleting information
 */
function _usanetwork_tv_shows_where2watch_table_delete($provider_id) {
  $providers = variable_get('where2watch_providers', array());

  $file = file_load($providers[$provider_id]['image']);
  $file_dark = file_load($providers[$provider_id]['image_dark']);

  file_delete($file);
  file_delete($file_dark);

  unset($providers[$provider_id]);

  variable_set('where2watch_providers', $providers);

  drupal_set_message('Provider has been deleted');
  drupal_goto('admin/usanetwork/where_to_watch');
}

/*
 * Get all providers
 */
function _usanetwork_tv_show_where2watch_get_providers() {
  $providers = variable_get('where2watch_providers', array());
  $names = array();
  foreach ($providers as $provider) {
    $names[] = $provider['name'];
  }

  return $names;
}

/*
 * Get provider by id
 */
function _usanetwork_tv_show_where2watch_get_provider_by_id($provider_id) {
  $providers = variable_get('where2watch_providers', array());

  return $providers[$provider_id];
}

/*
 * Edit provider form
 */
function _usanetwork_tv_shows_where2watch_table_edit($provider_id) {
  $output = t('Here you can edit title and logos for provider:');

  $upload_form = drupal_get_form('usanetwork_tv_shows_where2watch_load_form', $provider_id);

  $output .= drupal_render($upload_form);

  return $output;
}

<?php

/**
 * @file
 * TVE Auth module helper functions.
 */

/**
 * Returns TRUE if user has access to auth settings (IDX/SURF), FALSE otherwise.
 *
 * Access is restricted by role ids.
 * Array of role ids is set in the settings.php file:
 *  $conf['auth_flow_restrict_auth_settings'] = array(6);
 *
 * @return bool
 */
function tve_auth_is_user_allowed_to_configure_auth_flow() {
  global $user;
  if (1 == $user->uid) {
    return TRUE;
  }

  global $conf;
  if (!isset($conf['auth_flow_restrict_auth_settings'])) {
    return TRUE;
  }

  return (bool) array_intersect($user->roles, $conf['auth_flow_restrict_auth_settings']);
}

/**
 * Deletes all tve_auth related files that have not been published.
 *
 * Used on resetting draft values to published state.
 *
 * @see _tve_auth_admin_form_submit_reset()
 */
function _tve_auth_delete_unpublished_files() {
  $unpublished_files = _tve_auth_get_unpublished_files();
  foreach ($unpublished_files as $file) {
    file_delete($file, TRUE);
  }
}

/**
 * Finds all tve_auth related files that have not been published.
 *
 * Returns array of loaded files.
 *
 * @return array
 */
function _tve_auth_get_unpublished_files() {
  $draft_fids = _tve_auth_extract_fids(_tve_auth_get_draft_variables());
  $published_fids = _tve_auth_extract_fids(_tve_auth_get_published_variables());
  $unpublished_fids = array_diff($draft_fids, $published_fids);

  return file_load_multiple($unpublished_fids);
}

/**
 * Extracts all file ids from variables and returns them as array.
 *
 * @param $variables
 *
 * @return array
 */
function _tve_auth_extract_fids($variables) {
  $fids = array();
  foreach ($variables as $name => $value) {
    if (is_array($value)) {
      $fids = array_merge($fids, _tve_auth_extract_fids($value));
    }
    elseif ('fid' == $name && $value) {
      $fids[] = $value;
    }
  }

  return $fids;
}

/**
 * Returns array of default auth flow settings.
 *
 * @return array
 */
function _tve_auth_get_default_variables() {
  return array(
    'welcome_window' => array(
      'title' => t('Welcome!'),
      'more_details_link_text' => t('More Details Please'),
      'block_1_image' => array(
        'fid' => 0,
      ),
      'block_1_text' => array(
        'value' => t('Block One'),
        'format' => 'wysiwyg_basic',
      ),
      'block_2_image' => array(
        'fid' => 0,
      ),
      'block_2_text' => array(
        'value' => t('Block Two'),
        'format' => 'wysiwyg_basic',
      ),
      'block_3_image' => array(
        'fid' => 0,
      ),
      'block_3_text' => array(
        'value' => t('Block Three'),
        'format' => 'wysiwyg_basic',
      ),
      'start_button_text' => t('Get Started'),
      'big_image' => array(
        'fid' => 0,
      ),
      'footer_text' => t('Skip this step,'),
      'footer_link_text' => t('I just want to browse.'),
    ),
    'login_window_1' => array(
      'image' => array(
        'fid' => 0,
      ),
      'left_block_text' => array(
        'value' => t('Left Text Block'),
        'format' => 'wysiwyg_basic',
      ),
      'right_block_header_text' => array(
        'value' => t('<h2>Select your provider and log in</h2><h3>(have your username and password handy)</h3>'),
        'format' => 'wysiwyg_basic',
      ),
      'footer_text' => t('Do not see your provider?'),
      'footer_link_text' => t('Search by zip'),
    ),
    'login_window_2' => array(
      'image' => array(
        'fid' => 0,
      ),
      'left_block_text' => array(
        'value' => t('Left Text Block'),
        'format' => 'wysiwyg_basic',
      ),
      'footer_link_text' => t('Skip this step'),
    ),
    'login_window_3' => array(
      'image' => array(
        'fid' => 0,
      ),
      'image_left' => array(
        'fid' => 0,
      ),
      'title' => t("You're all set!"),
      'start_button_text' => t('Start Watching Now'),
      'mobile_apps_text' => t('Mobile apps coming this summer'),
      'image_store_1' => array(
        'fid' => 0,
      ),
      'image_store_2' => array(
        'fid' => 0,
      ),
    ),
    'login_link' => array(
      'image' => array(
        'fid' => 0,
      ),
    ),
    'auth_settings' => array(
      'auth_flow' => 'idx',
    ),
    'welcome_modal' => array(
      'variant' => 'orig',
    ),
  );
}

/**
 * Returns array of auth flow settings names.
 *
 * Used to load/save variables with draft or published prefix.
 *
 * @see _tve_auth_get_draft_variables()
 * @see _tve_auth_get_published_variables()
 *
 * @return array
 */
function _tve_auth_get_variable_names() {
  $default_variables = _tve_auth_get_default_variables();
  return array_keys($default_variables);
}

/**
 * Saves tve_auth variables with a specified prefix.
 *
 * @param $variables
 * @param $prefix
 */
function _tve_auth_save_variables($variables, $prefix) {
  $variable_names = _tve_auth_get_variable_names();
  foreach ($variable_names as $name) {
    if (isset($variables[$name])) {
      variable_set($prefix . $name, $variables[$name]);
    }
  }

  drupal_static('_tve_auth_load_variables', NULL, TRUE);
}

/**
 * Loads tve_auth variables with a specified prefix.
 *
 * @param $prefix
 *
 * @return array
 */
function _tve_auth_load_variables($prefix) {
  $variables = & drupal_static(__FUNCTION__);

  if (!isset($variables[$prefix])) {
    $variables[$prefix] = array();

    $variable_names = _tve_auth_get_variable_names();
    foreach ($variable_names as $name) {
      $variable = variable_get($prefix . $name);
      if ($variable) {
        $variables[$prefix][$name] = $variable;
      }
    }
  }

  return $variables[$prefix];
}

/**
 * Returns array of saved auth flow settings (draft state).
 *
 * @return array
 */
function _tve_auth_get_draft_variables() {
  return _tve_auth_load_variables(TVE_AUTH_PREFIX_DRAFT);
}

/**
 * Returns array of saved auth flow settings (published state).
 *
 * @return array
 */
function _tve_auth_get_published_variables() {
  return _tve_auth_load_variables(TVE_AUTH_PREFIX_PUBLISHED);
}

/**
 * Relaces published auth flow settings values with draft ones.
 */
function _tve_auth_publish_variables() {
  $variables = _tve_auth_load_variables(TVE_AUTH_PREFIX_DRAFT);
  _tve_auth_save_variables($variables, TVE_AUTH_PREFIX_PUBLISHED);
}

/**
 * Relaces draft auth flow settings values with published ones.
 */
function _tve_auth_reset_variables() {
  $variables = _tve_auth_load_variables(TVE_AUTH_PREFIX_PUBLISHED);
  _tve_auth_save_variables($variables, TVE_AUTH_PREFIX_DRAFT);
}

/**
 * Appends 'url' key with the url to the file to each variable having 'fid' key.
 *
 * @param $variables
 */
function _tve_auth_prepare_file_urls(&$variables) {
  if (!is_array($variables)) {
    return;
  }

  if (isset($variables['fid'])) {
    $file = file_load($variables['fid']);
    if ($file && FILE_STATUS_PERMANENT == $file->status) {
      $url = file_create_url($file->uri);
      $variables['url'] = $url;
    }
  }
  else {
    foreach ($variables as &$variable) {
      _tve_auth_prepare_file_urls($variable);
    }
  }
}

/**
 * Returns difference between draft and published states as array of values.
 *
 * @param $draft
 * @param $published
 *
 * @return array
 */
function _tve_auth_get_diff($draft, $published) {
  $diff = array();

  foreach ($draft as $key => $value) {
    if (isset($published[$key])) {
      if (is_array($value)) {
        $_diff = _tve_auth_get_diff($value, $published[$key]);
        if ($_diff) {
          $diff[$key] = $_diff;
        }
      }
      else {
        if ($value != $published[$key]) {
          $diff[$key] = $value;
        }
      }
    }
    else {
      $diff[$key] = $value;
    }
  }

  return $diff;
}

/**
 * Returns array of published values which are different from draft state.
 *
 * Used to display difference information only on fields that are different.
 *
 * @param array $diff
 * @param array $published
 *
 * @return array
 */
function _tve_auth_get_diff_published_values($diff, $published) {
  $result = array();

  foreach ($diff as $key => $value) {
    if (is_array($value)) {
      $_published = isset($published[$key]) ? $published[$key] : array();
      $result[$key] = _tve_auth_get_diff_published_values($value, $_published);
    }
    else {
      if (isset($published[$key])) {
        $result[$key] = $published[$key];
      }
      else {
        $result[$key] = '';
      }
    }
  }

  return $result;
}

/**
 * Appends information about difference between draft and published values to
 * fieldset titles.
 *
 * @param array $form
 * @param array $published_values
 */
function _tve_auth_append_published_values_info_fieldsets(&$form, $published_values) {
  $tab_names = array_keys($published_values);

  foreach ($tab_names as $tab_name) {
    if (isset($form[$tab_name])) {
      $form[$tab_name]['#title'] .= ' <span class="messages warning">(*)</span>';
    }
  }
}

/**
 * Appends information about difference between draft and published values to
 * fields.
 *
 * @param $form
 * @param $published_values
 */
function _tve_auth_append_published_values_info_fields(&$form, $published_values) {
  foreach ($published_values as $key => $value) {
    if (is_array($value)) {
      _tve_auth_append_published_values_info_fields($form[$key], $value);
    }
    else {

      // File fields.
      if (isset($form['fid']['#type']) && 'managed_file' == $form['fid']['#type']) {
        if (!$value) {
          $_value = t('Not uploaded');
        }
        else {
          $file = file_load($value);
          if ($file) {
            $url = file_create_url($file->uri);
            $_value = l($url, $url, array(
              'attributes' =>
                array(
                  'target' => '_blank',
                ),
              )
            );
          }
          else {
            $_value = t('Not found');
          }
        }

        $note = t('Published value: !value', array('!value' => $_value));
        _tve_auth_append_element_description($form['fid'], $note);
      }

      elseif ('text_format' == $form['#type']) {
        // Wysiwyg fields.
        $note = t('Published value (%key): %value', array(
          '%key' => ucfirst($key),
          '%value' => drupal_html_to_text($value),
        ));

        _tve_auth_append_element_description($form, $note);
      }
      // Simple fields.
      else {
        if ('' == $value) {
          $_value = t('Not set');
        }

        // Radios/Selects.
        elseif (in_array($form[$key]['#type'], array('select', 'radios'))) {
          $_value = isset($form[$key]['#options'][$value]) ?
            $form[$key]['#options'][$value] :
            t('Not among current options');
        }
        else {
          $_value = $value;
        }

        $note = t('Published value: %value', array('%value' => $_value));
        _tve_auth_append_element_description($form[$key], $note);
      }
    }
  }
}

/**
 * Checks image field and saves or removes it.
 *
 * Also image can be scaled.
 *
 * @param $field string
 *   A filed name.
 * @param $value string
 *   A value of the field.
 * @param null $parent
 *   (optional)Parent's name is exist.
 * @param string $prefix
 *   (optional)A prefix of variable.
 * @param null $resize
 *   (optional)A dimension of image scaling.
 *
 * @return array
 *   Correct field value.
 */
function _tve_admin_ui_image_helper($field, $value, $parent = NULL, $prefix = 'tve_', $resize = NULL) {
  if (preg_match('/image/', $field)) {
    $image = array(
      'fid' => $value,
    );
    if ((int) $value > 0) {
      // Save file.
      if ($file = file_load($value)) {
        if ($file->status == 0) {
          $file->status = FILE_STATUS_PERMANENT;
          file_save($file);
          file_usage_add($file, 'tve_admin_ui', 'file', $value);

          if ($resize) {
            // Get image dimensions.
            list($width, $height) = explode('x', $resize);
            // Implement a scaling of current image.
            $image_obj = image_load($file->uri);
            $result = image_resize($image_obj, $width, $height);
            if ($result) {
              image_save($image_obj);
            }
          }
        }
        // Add url.
        $image['url'] = file_create_url($file->uri);
      }
    }
    else {
      // Find parent var.
      if ($parent) {
        $parent_var = _tve_admin_ui_variable_get($parent, array(), $prefix);
        $field_array = isset($parent_var[$field]) ? $parent_var[$field] : array('fid' => 0);
      }
      else {
        $field_array = _tve_admin_ui_variable_get($field, array('fid' => 0), $prefix);
      }
      // Change file status to temporary.
      if ($fid = $field_array['fid']) {
        if ($file = file_load($fid)) {
          $file->status = 0;
          file_save($file);
          file_usage_delete($file, 'tve_admin_ui');
        }
      }
    }
    return $image;
  }
  else {
    return $value;
  }
}

/**
 * Appends a note to element description.
 *
 * Note is wrapped with a warning message div block.
 *
 * @param $element
 * @param $note
 */
function _tve_auth_append_element_description(&$element, $note) {
  if (!isset($element['#description'])) {
    $element['#description'] = '';
  }

  $element['#description'] .=
    '<div class="messages warning">' . $note . '</div>';
}

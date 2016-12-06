<?php

/**
 * @file
 * TVE Auth module helper functions.
 */

/**
 * Deletes all tve_auth2 related files that have not been published.
 *
 * Used on resetting draft values to published state.
 *
 * @see _tve_auth2_admin_form_submit_reset()
 */
function _tve_auth2_delete_unpublished_files() {
  $unpublished_files = _tve_auth2_get_unpublished_files();
  foreach ($unpublished_files as $file) {
    file_delete($file, TRUE);
  }
}

/**
 * Finds all tve_auth2 related files that have not been published.
 *
 * Returns array of loaded files.
 *
 * @return array
 */
function _tve_auth2_get_unpublished_files() {
  $draft_fids = _tve_auth2_extract_fids(_tve_auth2_get_draft_variables());
  $published_fids = _tve_auth2_extract_fids(_tve_auth2_get_published_variables());
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
function _tve_auth2_extract_fids($variables) {
  $fids = array();
  foreach ($variables as $name => $value) {
    if (is_array($value)) {
      $fids = array_merge($fids, _tve_auth2_extract_fids($value));
    }
    elseif ('fid' == $name && $value) {
      $fids[] = $value;
    }
  }

  return $fids;
}

/**
 * Returns array of default (factory) auth flow settings.
 *
 * @return array
 */
function _tve_auth2_get_default_variables() {
  $defaults = array(
    'welcome_window' => array(
      'brand_logo' => array('fid' => 0),
      'text_top' => array(
        'text' => '',
        'style' => NULL,
      ),
      'text_center' => array(
        'text' => '',
        'style' => NULL,
      ),
      'text_bottom' => array(
        'text' => '',
        'style' => NULL,
      ),
      'buttons' => array(
        'yes_title' => '',
        'yes_description' => '',
        'no_title' => '',
        'no_description' => '',
        'no_url' => '',
        'no_url_target' => 0,
      ),
    ),
    'login_window' => array(
      'text_line_1' => array(
        'text' => '',
      ),
      'text_line_2' => array(
        'text' => array(
          'format' => TVE_AUTH2_WISYWYG_FORMAT,
          'value' => '',
        ),
      ),
      'text_line_3' => array(
        'text' => '',
      ),
      'text_line_4' => array(
        'text' => '',
        'url' => '',
        'zendesk_url' => 0,
      ),
      'text_line_5' => array(
        'text' => '',
        'url' => '',
      ),
    ),
    'additional' => array(
      'behavior' => 'orig',
      'error_configs' => array(
        'general' => array(
          'title' => TVE_AUTH2_GENERAL_ERROR_TITLE,
          'description' => array(
            'format' => TVE_AUTH2_WISYWYG_FORMAT,
            'value' => TVE_AUTH2_GENERAL_ERROR_DESCRIPTION,
          ),
          'fid' => NULL,
        ),
        'flash' => array(
          'title' => TVE_AUTH2_FLASH_ERROR_TITLE,
          'description' => array(
            'format' => TVE_AUTH2_WISYWYG_FORMAT,
            'value' => TVE_AUTH2_FLASH_ERROR_DESCRIPTION,
          ),
          'fid' => NULL,
        ),
        'adobepass' => array(
          'title' => TVE_AUTH2_ADOBEPASS_ERROR_TITLE,
          'description' => array(
            'format' => TVE_AUTH2_WISYWYG_FORMAT,
            'value' => TVE_AUTH2_ADOBEPASS_ERROR_DESCRIPTION,
          ),
          'fid' => NULL,
        ),
        'macsafari' => array(
          'title' => TVE_AUTH2_MACSAFARI_ERROR_TITLE,
          'description' => array(
            'format' => TVE_AUTH2_WISYWYG_FORMAT,
            'value' => TVE_AUTH2_MACSAFARI_ERROR_DESCRIPTION,
          ),
          'fid' => NULL,
        ),
        'private_browsing' => array(
          'title' => TVE_AUTH2_PRIVATE_BROWSING_ERROR_TITLE,
          'description' => array(
              'format' => TVE_AUTH2_WISYWYG_FORMAT,
              'value' => TVE_AUTH2_PRIVATE_BROWSING_ERROR_DESCRIPTION,
          ),
          'fid' => NULL,
      ),
      )
    ),
  );

  drupal_alter('tve_auth2_default_variables', $defaults);

  return $defaults;
}

/**
 * Returns array of auth flow settings names.
 *
 * Used to load/save variables with draft or published prefix.
 *
 * @see _tve_auth2_get_draft_variables()
 * @see _tve_auth2_get_published_variables()
 *
 * @return array
 */
function _tve_auth2_get_variable_names() {
  $default_variables = _tve_auth2_get_default_variables();
  return array_keys($default_variables);
}

/**
 * Saves tve_auth2 variables with a specified prefix.
 *
 * @param $variables
 * @param $prefix
 */
function _tve_auth2_save_variables($variables, $prefix) {
  $variable_names = _tve_auth2_get_variable_names();
  foreach ($variable_names as $name) {
    if (isset($variables[$name])) {
      variable_set($prefix . $name, $variables[$name]);
    }
  }

  drupal_static('_tve_auth2_load_variables', NULL, TRUE);
}

/**
 * Loads tve_auth2 variables with a specified prefix.
 *
 * @param $prefix
 *
 * @return array
 */
function _tve_auth2_load_variables($prefix) {
  $variables = & drupal_static(__FUNCTION__);

  if (!isset($variables[$prefix])) {
    $variables[$prefix] = array();

    $variable_names = _tve_auth2_get_variable_names();
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
function _tve_auth2_get_draft_variables() {
  return _tve_auth2_load_variables(TVE_AUTH2_PREFIX_DRAFT);
}

/**
 * Returns array of saved auth flow settings (published state).
 *
 * @return array
 */
function _tve_auth2_get_published_variables() {
  return _tve_auth2_load_variables(TVE_AUTH2_PREFIX_PUBLISHED);
}

/**
 * Relaces published auth flow settings values with draft ones.
 */
function _tve_auth2_publish_variables() {
  $variables = _tve_auth2_load_variables(TVE_AUTH2_PREFIX_DRAFT);
  _tve_auth2_save_variables($variables, TVE_AUTH2_PREFIX_PUBLISHED);
}

/**
 * Relaces draft auth flow settings values with published ones.
 */
function _tve_auth2_reset_variables() {
  $variables = _tve_auth2_load_variables(TVE_AUTH2_PREFIX_PUBLISHED);
  _tve_auth2_save_variables($variables, TVE_AUTH2_PREFIX_DRAFT);
}

/**
 * Appends 'url' key with the url to the file to each variable having 'fid' key.
 *
 * @param $variables
 */
function _tve_auth2_prepare_file_urls(&$variables) {
  if (!is_array($variables)) {
    return;
  }

  if (isset($variables['fid'])) {
    $file = file_load($variables['fid']);
    if ($file && FILE_STATUS_PERMANENT == $file->status) {
      $url = file_create_url($file->uri);
      // @todo check all hook usages
      drupal_alter('tve_auth2_image_url', $url);
      $variables['url'] = $url;
    }
  }
  else {
    foreach ($variables as &$variable) {
      _tve_auth2_prepare_file_urls($variable);
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
function _tve_auth2_get_diff($draft, $published) {
  $diff = array();

  foreach ($draft as $key => $value) {
    if (isset($published[$key])) {
      if (is_array($value)) {
        $_diff = _tve_auth2_get_diff($value, $published[$key]);
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
function _tve_auth2_get_diff_published_values($diff, $published) {
  $result = array();

  foreach ($diff as $key => $value) {
    if (is_array($value)) {
      $_published = isset($published[$key]) ? $published[$key] : array();
      $result[$key] = _tve_auth2_get_diff_published_values($value, $_published);
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
function _tve_auth2_append_published_values_info_fieldsets(&$form, $published_values) {
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
function _tve_auth2_append_published_values_info_fields(&$form, $published_values) {
  foreach ($published_values as $key => $value) {
    if (is_array($value)) {
      _tve_auth2_append_published_values_info_fields($form[$key], $value);
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
        _tve_auth2_append_element_description($form['fid'], $note);
      }

      elseif ('text_format' == $form['#type']) {
        // Wysiwyg fields.
        $note = t('Published value (%key): %value', array(
          '%key' => ucfirst($key),
          '%value' => drupal_html_to_text($value),
        ));

        _tve_auth2_append_element_description($form, $note);
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
        _tve_auth2_append_element_description($form[$key], $note);
      }
    }
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
function _tve_auth2_append_element_description(&$element, $note) {
  if (!isset($element['#description'])) {
    $element['#description'] = '';
  }

  $element['#description'] .=
    '<div class="messages warning">' . $note . '</div>';
}

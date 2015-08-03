<?php

/**
 * @file
 * Contains theme implementations for the TVE MVPD.
 *
 * @ingroup tve_mvpd
 */

/**
 * Theme function for custom radio buttons.
 *
 * @param array $variables
 *
 * @return string
 */
function theme_tve_mvpd_custom_radios($variables) {
  $element = $variables['element'];
  // Get keys from parent's "#optoins".
  $keys = array_keys($element['#options']);
  $output = '';
  foreach ($keys as $key) {
    // Theme single radio button (customized too).
    $output .= theme('tve_mvpd_custom_radio', $element[$key]);
  }

  return $output;
}

/**
 * Theme for a single radio button.
 *
 * @param array $variables
 *
 * @return string
 */
function theme_tve_mvpd_custom_radio($variables) {
  $element = $variables['element'];
  _form_set_class($element, array('form-radio'));
  $html_radio = '<div class="mvpd-selector-wrapper">' . theme('radio', $variables) . '</div>';
  $html_image = '';
  if (!is_null($element['#title'])) {
    $html_image = '<div>' . theme('image', array('path' => $element['#title'])) . '</div>';
  }
  $label = _tve_mvpd_get_radio_button_label($element['#return_value']);
  // Add styles for custom element.
  drupal_add_css(drupal_get_path('module', 'tve_mvpd') . '/css/tve_mvpd.css');
  // Create "label" html element.
  $html_label = theme('html_tag', array(
    'element' => array(
      '#tag' => 'label',
      '#value' => $label . $html_image,
      '#attributes' => array(
        'class' => array('option', 'mvpd-selector'),
        'for' => $element['#id'],
      ),
    ),
  ));

  return '<div class="mvpd-item">' . $html_radio . $html_label . '<div class="clearfix"></div></div>';
}

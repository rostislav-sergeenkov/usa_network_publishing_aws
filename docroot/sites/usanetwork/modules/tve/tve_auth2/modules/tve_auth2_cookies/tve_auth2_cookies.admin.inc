<?php
/**
 * @file
 * Admin page callbacks for the TVE Auth2 Cookies module.
 *
 * @ingroup tve_auth2_cookies
 */

/**
 * Form builder callback for "TVE Auth2 Cookies" settings form.
 */
function _tve_auth2_cookies_admin_form($form, &$form_state) {
  $settings = variable_get('tve_auth2_cookies', _tve_auth2_cookies_get_default_variables());
  // Modal window with help tips about Cookies support.
  $form['tve_auth2_cookies'] = array(
    '#title' => t('Modal Window: Cookies help'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#tree' => TRUE,
  );
  $form['tve_auth2_cookies']['header'] = array(
    '#type' => 'textfield',
    '#title' => t('Header'),
    '#default_value' => isset($settings['header']) ? $settings['header'] : '',
  );
  foreach (_tve_auth2_cookies_get_browser_list() as $browser => $label) {
    $form['tve_auth2_cookies'][$browser]['body'] = array(
      '#title' => t('Body for %browser', array('%browser' => $label)),
      '#type' => 'text_format',
      '#format' => isset($settings[$browser]['body']['format']) ?
          $settings[$browser]['body']['format'] : TVE_AUTH2_WISYWYG_FORMAT,
      '#rows' => 5,
      '#default_value' => isset($settings[$browser]['body']['value']) ? $settings[$browser]['body']['value'] : '',
      '#description' => t('Message will be shown to a visitor with a client where Cookies are disabled. May contain tips/instructions how to enable Cookies support.',
        array('%browser' => $label)),
    );
  }

  return system_settings_form($form);
}

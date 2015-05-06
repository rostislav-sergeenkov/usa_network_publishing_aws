<?php

function nbcu_seo_content_buffer_settings_form($form, &$form_state) {
  $form = array();

  $form['nbcu_seo_content_buffer_generate_after_updating'] = array(
    '#type' => 'select',
    '#title' => t('Regenerate Content Buffer XML after content saving'),
    '#description' => t('Each time when you are updating content the system cathes 1000 latest published items and generates Content Buffer XML file.'),
    '#options' => array(
      0 => t('No'),
      1 => t('Yes'),
    ),
    '#default_value' => variable_get('nbcu_seo_content_buffer_generate_after_updating', 1),
  );

  return system_settings_form($form);
}

function nbcu_seo_update_content_buffer_form($form, &$form_state) {
  $form = array();

  $form['details'] = array(
    '#type' => 'item',
    '#markup' => t('All the newest content will be included to Content Buffer XML file'),
  );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Run update'),
  );

  return $form;
}

function nbcu_seo_update_content_buffer_form_submit(&$form, &$form_state) {
  _nbcu_seo_content_buffer_build_buffer();
}

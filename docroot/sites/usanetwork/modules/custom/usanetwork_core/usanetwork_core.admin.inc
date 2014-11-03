<?php

function usanetwork_core_ct_alias_form($form, &$form_state) {
  $form = array();
  $node_types = node_type_get_types();
  $file_types = file_type_get_enabled_types();

  $form['content_types'] = array(
    '#type' => 'fieldset',
    '#title' => t('Node content types'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['file_types'] = array(
    '#type' => 'fieldset',
    '#title' => t('File content types'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  if (!empty($node_types)) {
    foreach ($node_types as $node_type_name => $node_type) {
      $ctalias_variable_name = 'usanetwork_ctalias_' . $node_type_name;

      $form['content_types'][$ctalias_variable_name] = array(
        '#type' => 'textfield',
        '#title' => $node_type->name,
        '#description' => !empty($node_type->description)
          ? $node_type->description
          : '',
        '#required' => FALSE,
        '#default_value' => variable_get($ctalias_variable_name, $node_type->name),
      );
    }
  }
  else {
    $form['content_types']['nothing_found_ct'] = array(
      '#type' => 'item',
      '#markup' => t('There are no content types available.'),
    );
  }

  if (!empty($file_types)) {
    foreach ($file_types as $file_type_name => $file_type) {
      $ftalias_variable_name = 'usanetwork_ftalias_' . $file_type_name;

      $form['file_types'][$ftalias_variable_name] = array(
        '#type' => 'textfield',
        '#title' => $file_type->label,
        '#description' => t('!description<br>Mimetypes: !mimetypes', array(
          '!description' => !empty($file_type->description)
            ? $file_type->description
            : '',
          '!mimetypes' => implode(', ', $file_type->mimetypes),
        )),
        '#required' => FALSE,
        '#default_value' => variable_get($ftalias_variable_name, $file_type->label),
      );
    }
  }
  else {
    $form['file_types']['nothing_found_ft'] = array(
      '#type' => 'item',
      '#markup' => t('There are no file types enabled or available.'),
    );
  }

  return system_settings_form($form);
}

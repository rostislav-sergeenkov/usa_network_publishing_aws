<?php

/**
 * Form for WYSIWYG dialog.
 */
function usanetwork_entity_insert_dialog_form($form, &$form_state, $type) {
  if (!empty($type)) {
    $form['entity'] = array(
      '#title' => t('Content title'),
      '#description' => t('Type the first words of the title of the content that you want to insert.'),
      '#type' => 'textfield',
      '#autocomplete_path' => 'usanetwork_entity_insert/insert/' . $type . '/autocomplete',
    );

    $form['view_mode'] = array(
      '#title' => t('View mode'),
      '#description' => t('View mode that will be used to display inline entity.'),
      '#type' => 'select',
      '#access' => user_access('select view mode'),
      '#options' => _usanetwork_entity_insert_view_modes($type),
      '#default_value' => _usanetwork_entity_insert_default_view_mode($type),
    );
    if (_usanetwork_entity_insert_is_embed_video($type)) {
      $form['autoplay'] = array(
        '#title' => t('Autoplay'),
        '#description' => t('Autoplay parameter for player.'),
        '#type' => 'checkbox',
        '#default_value' => _usanetwork_entity_insert_autoplay_values($type),
      );
    }
  }

  return $form;
}

/**
 * Menu callback for WYSIWYG dialog.
 */
function usanetwork_entity_insert_dialog($type) {
  $form = drupal_get_form('usanetwork_entity_insert_dialog_form', $type);
  return drupal_render($form);
}

/**
 * Menu callback for select content autocomplete.
 */
function usanetwork_entity_insert_autocomplete($type, $string = '') {
  drupal_json_output(_usanetwork_entity_insert_suggestions($type, $string));
}

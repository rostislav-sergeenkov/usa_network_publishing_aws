<?php

/**
 * Implements hook_field_widget_info().
 */
function usanetwork_post_field_widget_info() {
  return array(
    'post_blog' => array(
      'label' => t('Blog and Category selector'),
      'field types' => array('taxonomy_term_reference'),
    ),
  );
}

/**
 * Implements hook_field_widget_form().
 */
function usanetwork_post_field_widget_form(&$form, &$form_state, $field, $instance, $langcode, $items, $delta, $element) {
  switch ($instance['widget']['type']) {
    case 'post_blog':
      $value = isset($items[$delta]['tid']) ? $items[$delta]['tid'] : NULL;
      $input = isset($form_state['input'][$field['field_name']][$langcode][$delta]) ? $form_state['input'][$field['field_name']][$langcode][$delta] : array();

      if (isset($input['blog'])) {
        $blog = taxonomy_term_load($input['blog']);
      }
      else {
        $blog = _usanetwork_post_get_blog_by_category($value);
      }

      $blogs = usanetwork_post_blog_allowed_values($field);

      $wrapper_id = $instance['widget']['type'] . '-' . $field['field_name'] . '-' . $delta . '-wrapper';
      $element['blog'] = array(
        '#type' => 'select',
        '#title' => t('Blog'),
        '#required' => isset($element['#required']) ? $element['#required'] : FALSE,
        '#options' => $blogs,
        '#default_value' => $blog->tid,
        '#ajax' => array(
          'callback' => '_usanetwork_post_categories_ajax_callback',
          'wrapper' => $wrapper_id,
          'effect' => 'fade',
        ),
      );

      $categories = $blog ? usanetwork_post_categories_allowed_values($field, $blog) : array();
      $element['category'] = array(
        '#type' => 'select',
        '#title' => t('Category'),
        '#options' => $categories,
        '#empty_option' => t('- None -'),
        '#default_value' => $value,
      );

      $element += array(
        '#element_validate' => array('usanetwork_post_blog_select_validate'),
        '#prefix' => '<div id="' . $wrapper_id . '">',
        '#suffix' => '</div>',
      );
  }

  return $element;
}

/**
 * Validate callback for post_blog widget.
 */
function usanetwork_post_blog_select_validate($element, &$form_state) {
  $delta = $element['#delta'];
  $field = $form_state['field'][$element['#field_name']][$element['#language']]['field'];
  $field_name = $field['field_name'];
  if (isset($form_state['values'][$field_name][$element['#language']][$delta]['blog'])) {
    $values = $form_state['values'][$field_name][$element['#language']][$delta];
    $tid = $values['category'] ? $values['category'] : $values['blog'];

    form_set_value($element, array('tid' => $tid), $form_state);
  }
}

/**
 * Ajax callback for post_blog widget.
 */
function _usanetwork_post_categories_ajax_callback($form, &$form_state) {
  $form = drupal_rebuild_form($form['#form_id'], $form_state, $form);
  $trigger = $form_state['triggering_element'];
  $parents = array_slice($trigger['#parents'], 0, -1);
  $parent = drupal_array_get_nested_value($form, $parents);
  return $parent;
}

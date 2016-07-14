<?php
/**
 * Implements hook_form_FORM_ID_alter()
 */
function usanetwork_microsite_form_usanetwork_microsite_node_form_alter(&$form, &$form_state, $form_id) {
  $lang = $form['#node']->language;
  $form['field_ms_section'][$lang]['#after_build'][] = '_usanetwork_microsite_section_after_build';

  // Section types for setting default title title.
  $section_types = array('home', 'about');
  $langcode = $form['field_ms_section']['#language'];
  $field_ms_section_items = &$form['field_ms_section'][$langcode];
  $node = $form['#node'];
  foreach($field_ms_section_items as $key => $section_item) {
    if(isset($section_item['#entity_type']) && $section_item['#entity_type'] == 'field_collection_item') {
      $type = reset($section_item['field_ms_section_type'][$langcode]['#default_value']);
      if (in_array($type, $section_types)) {
        $field_ms_section_items[$key]['field_seo_page_title'][$langcode][0]['value']['#description'] = 'DEFAULT: ' . usanetwork_microsite_get_default_title($node, $type);
        $field_ms_section_items[$key]['field_seo_h1'][$langcode][0]['value']['#description'] = 'DEFAULT: ' . _usanetwork_microsite_get_default_h1($node, $type);
      }
      if ($type != 'videos') {
        unset($field_ms_section_items[$key]['field_video_adding_type']);
      }
    }
  }

  $form['field_show'][$langcode]['#ajax'] = array(
    'event' => 'change',
    'callback' => 'usanetwork_microsite_filters_options_ajax',
    'progress' => array(
      'type' => 'throbber',
      'message' => '',
    ),
  );

  $form['field_ms_section'][$langcode]['add_more']['#ajax']['callback'] = 'usanetwork_microsite_ms_section_add_more_ajax';

  foreach ($field_ms_section_items as &$section_item) {
    if(isset($section_item['field_ms_video_filters'])) {
      $section_item['field_ms_video_filters']['#attributes']['class'][] = 'field-ms-video-filters-delta_' .$section_item['#delta'];
    }
    if(isset($section_item['field_mc_default_video_filter'])) {
      $section_item['field_mc_default_video_filter']['#attributes']['class'][] = 'field-mc-default-video-filter-delta_' .$section_item['#delta'];
    }
  }

  if (!empty($form_state['values'])) {
    $triggering_element = $form_state['triggering_element']['#field_name'];
    if ($triggering_element == 'field_show') {
      $form_values = $form_state['values'];
      $show_id = usanetwork_microsite_get_show_id_by_form_state($form_values);
      usanetwork_microsite_set_video_filters_options($show_id, $field_ms_section_items, $langcode);
    }
  }
  else {
    $show_id = NULL;
    if (isset($form['field_show'][$langcode]['#default_value'][0])) {
      $show_id = $form['field_show'][$langcode]['#default_value'][0];
    }
    usanetwork_microsite_set_video_filters_options($show_id, $field_ms_section_items, $langcode);
  }
}

/**
 * Return show id by form state.
 *
 * @param $form_values
 * @return mixed
 */
function usanetwork_microsite_get_show_id_by_form_state($form_values) {
  $show_id = NULL;
  if (!empty($form_values['field_show'][LANGUAGE_NONE][0]['target_id'])) {
    $show_id = $form_values['field_show'][LANGUAGE_NONE][0]['target_id'];
    return $show_id;
  }
  elseif (!empty($form_values['field_show'][LANGUAGE_NONE]) && is_numeric($form_values['field_show'][LANGUAGE_NONE])) {
    $show_id = $form_values['field_show'][LANGUAGE_NONE];
    return $show_id;
  }
  return $show_id;
}

function usanetwork_microsite_ms_section_add_more_ajax($form, $form_state) {
  $langcode = $form['field_ms_section']['#language'];
  $field_items = usanetwork_microsite_get_multiple_elements_from_field($form['field_ms_section'][$langcode]);
  $form_values = $form_state['values'];
  $show_id = usanetwork_microsite_get_show_id_by_form_state($form_values);
  usanetwork_microsite_set_video_filters_options($show_id, $field_items, $langcode);
  foreach ($field_items as &$field) {
    $field_options = usanetwork_microsite_get_multiple_elements_from_field($field['field_ms_video_filters'][$langcode]);
    foreach ($field_options as $key => $field_option) {
      if (!isset($field['field_ms_video_filters'][$langcode]['#options'][$field_option['#return_value']])) {
        unset($field['field_ms_video_filters'][$langcode][$field_option['#return_value']]);
      }
    }
    $field_options = usanetwork_microsite_get_multiple_elements_from_field($field['field_mc_default_video_filter'][$langcode]);
    foreach ($field_options as $key => $field_option) {
      if (!isset($field['field_mc_default_video_filter'][$langcode]['#options'][$field_option['#return_value']])) {
        unset($field['field_mc_default_video_filter'][$langcode][$field_option['#return_value']]);
      }
    }
  }
  $add_more_ajax_commands = ajax_prepare_response(field_add_more_js($form, $form_state));
  return array('#type' => 'ajax', '#commands' => $add_more_ajax_commands);
}

function usanetwork_microsite_set_video_filters_options($show_id, &$field_ms_section_items, $langcode) {
  if ($show_id) {
    $filter_terms = usanetwork_microsite_get_filters_by_show($show_id);
    $filter_options = array(USANETWORK_MICROSITE_FULL_VIDEO => USANETWORK_MICROSITE_FULL_VIDEO);
    foreach ($filter_terms as $term) {
      $filter_options[$term->tid] = $term->name;
    }
    foreach ($field_ms_section_items as &$section_item) {
      if (isset($section_item['field_ms_video_filters'])) {
        $section_item['field_ms_video_filters'][$langcode]['#options'] = $filter_options;
      }
      if (isset($section_item['field_mc_default_video_filter'])) {
        $section_item['field_mc_default_video_filter'][$langcode]['#options'] = $filter_options;
      }
    }
  }
  else {
    foreach ($field_ms_section_items as &$section_item) {
      if (isset($section_item['field_ms_video_filters'])) {
        $section_item['field_ms_video_filters'][$langcode]['#access'] = FALSE;
      }
      if (isset($section_item['field_mc_default_video_filter'])) {
        $section_item['field_mc_default_video_filter'][$langcode]['#access'] = FALSE;
      }
    }
  }
}

function usanetwork_microsite_filters_options_ajax($form, $form_state) {
  $langcode = $form['field_ms_section']['#language'];
  $field_items = usanetwork_microsite_get_multiple_elements_from_field($form['field_ms_section'][$langcode]);
  $commands = array();
  foreach ($field_items as $key => $field_item) {
   $section_type = usanetwork_microsite_get_section_type_by_section_field($field_item, $langcode);
    if (!empty($section_type) && $section_type == 'videos') {
      $field_video_filters = drupal_render($field_item['field_ms_video_filters']);
      $field_class = 'field-ms-video-filters-delta_' . $field_item['#delta'];
      $commands[] = ajax_command_replace('.' . $field_class, $field_video_filters);
      $field_video_filters = drupal_render($field_item['field_mc_default_video_filter']);
      $field_class = 'field-mc-default-video-filter-delta_' . $field_item['#delta'];
      $commands[] = ajax_command_replace('.' . $field_class, $field_video_filters);
    }
  }
  return array('#type' => 'ajax', '#commands' => $commands);
}

/**
 * Get section type from section field item.
 *
 * @param $field_item
 * @param $langcode
 * @return array
 */
function usanetwork_microsite_get_section_type_by_section_field($field_item, $langcode) {
  $section_type = NULL;
  if (!empty($field_item['field_ms_section_type'][$langcode]['#default_value'])) {
    $section_type = $field_item['field_ms_section_type'][$langcode]['#default_value'][0];
    return $section_type;
  }
  return $section_type;
}

function usanetwork_microsite_get_multiple_elements_from_field(&$field) {
  $field_element_key = element_children($field);
  $field_items = array();
  foreach ($field_element_key as $element_key) {
    if (is_numeric($element_key)) {
      $field_items[] = &$field[$element_key];
    }
  }
  return $field_items;
}

// This determines what fields to display for each section type
function _usanetwork_microsite_section_after_build($form, &$form_state) {
  drupal_add_js(drupal_get_path('module', 'usanetwork_microsite') . '/js/ms_admin.js');
  drupal_add_css(drupal_get_path('module', 'usanetwork_microsite') . '/css/ms_admin.css');

  $lang = $form['#language'];
  foreach($form as $k => $v) {
    if (is_numeric($k) && isset($v['#entity_type']) && $v['#entity_type']=='field_collection_item') {

      //home section
      $form[$k]['field_usa_tv_a_spot']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );
      $form[$k]['field_usa_autoscroll']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );
      $form[$k]['field_usa_slide_speed']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );
      $form[$k]['field_usa_tv_promo_large']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );
      $form[$k]['field_usa_tv_promo_rows']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );
      $form[$k]['field_usa_tv_promo']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'home'),
        ),
      );

      // section_type = 'about'
      $form[$k]['field_quotation']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'about'),
        ),
      );

      //gallery
      $form[$k]['field_ms_media_gallery']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'galleries'),
        ),
      );

      //videos
      $form[$k]['field_ms_videos']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'videos'),
        ),
      );

      //characters
      $form[$k]['field_ms_person']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'characters'),
        ),
      );

      //games
      $form[$k]['field_ms_catchall_page']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'games'),
        ),
      );

      //quizzes
      $form[$k]['field_ms_quiz']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'quizzes'),
        ),
      );

      //episodes
      $form[$k]['field_ms_episode']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'episodes'),
        ),
      );

      // Videos.
      $form[$k]['field_ms_videos']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'videos'),
        ),
      );

      $form[$k]['field_ms_video_filters']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'videos'),
        ),
      );

      $form[$k]['field_mc_default_video_filter']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'videos'),
        ),
      );

      //Timeline gallery
      $form[$k]['field_ms_timeline_gallery']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'timeline'),
        ),
      );
    }
  }
  return $form;
}

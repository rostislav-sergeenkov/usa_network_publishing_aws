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
}

// This determines what fields to display for each section type
function _usanetwork_microsite_section_after_build($form, &$form_state) {
  $lang = $form['#language'];
  foreach($form as $k => $v) {
    if(is_numeric($k) && isset($v['#entity_type']) && $v['#entity_type']=='field_collection_item') {

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
      $form[$k]['field_ms_section_text']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'about'),
        ),
      );
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

/*
      $form[$k]['field_ms_quiz']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'games'),
        ),
      );
*/
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
        'disabled' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_video_adding_type][' . $lang . ']"]' => array('value' => 'videos'),
        ),
      );

      //Timeline gallery
      $form[$k]['field_ms_timeline_gallery']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'timeline_gallery'),
        ),
      );
    }
  }
  return $form;
}

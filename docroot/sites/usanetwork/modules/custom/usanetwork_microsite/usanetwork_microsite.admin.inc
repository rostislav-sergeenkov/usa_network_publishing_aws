<?php
/**
 * Implements hook_form_FORM_ID_alter()
 */
function usanetwork_microsite_form_usanetwork_microsite_node_form_alter(&$form, &$form_state, $form_id) {
  $lang = $form['#node']->language;
  $form['field_ms_section'][$lang]['#after_build'][] = '_usanetwork_microsite_section_after_build';
}

// This determines what fields to display for each section type
function _usanetwork_microsite_section_after_build($form, &$form_state) {
  $lang = $form['#language'];
  foreach($form as $k => $v) {
    if(is_numeric($k) && isset($v['#entity_type']) && $v['#entity_type']=='field_collection_item'){
      
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

      //episodes
      $form[$k]['field_ms_episode']['#states'] = array(
        'visible' => array(
          ':input[name="field_ms_section[' . $lang . '][' . $k . '][field_ms_section_type][' . $lang . ']"]' => array('value' => 'episodes'),
        ),
      );
    }
  }
  return $form;
}

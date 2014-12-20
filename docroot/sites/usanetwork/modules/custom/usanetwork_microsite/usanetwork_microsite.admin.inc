<?php
/**
 * Implements hook_form_FORM_ID_alter()
 * This determines what fields to display for each section type
 */
function usanetwork_microsite_form_usanetwork_microsite_node_form_alter(&$form, &$form_state, $form_id) {
//  dsm($form);  // pretty print array using Krumo to messages
  $i = 0;
  while(is_array($form['field_ms_section']['und'][$i])) {
    // section_type = 'home'
    $form['field_ms_section']['und'][$i]['field_usa_hp_arefs']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'home'),
      ),
    );
    $form['field_ms_section']['und'][$i]['field_usa_hp_brefs']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'home'),
      ),
    );
    $form['field_ms_section']['und'][$i]['field_usa_hp_crefs']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'home'),
      ),
    );
    $form['field_ms_section']['und'][$i]['field_hp_promo_carousel']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'home'),
      ),
    );
    $form['field_ms_section']['und'][$i]['field_hp_promos']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'home'),
      ),
    );

    // section_type = 'about'
    $form['field_ms_section']['und'][$i]['field_ms_section_text']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'about'),
      ),
    );

    // section_type = 'galleries'
    $form['field_ms_section']['und'][$i]['field_media_gallery']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'galleries'),
      ),
    );

    // section_type = 'characters'
    $form['field_ms_section']['und'][$i]['field_person']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'characters'),
      ),
    );
    $form['field_ms_section']['und'][$i]['field_episode_credit_character']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'characters'),
      ),
    );

    // section_type = 'games'
    $form['field_ms_section']['und'][$i]['field_ms_catchall_page']['#states'] = array(
      'visible' => array(
        ':input[id="edit-field-ms-section-und-' . $i . '-field-ms-section-type-und"]' => array('value' => 'games'),
      ),
    );
    $i++;
  }
}

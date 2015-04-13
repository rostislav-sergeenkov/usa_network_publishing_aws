<?php
/**
 * @file
 * usanetwork_aspot.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_aspot_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-usanetwork_aspot-field_animated_a_spot'
  $field_instances['node-usanetwork_aspot-field_animated_a_spot'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 44,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_animated_a_spot',
    'label' => 'This is an Animated A-Spot',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 1,
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
      ),
      'type' => 'options_onoff',
      'weight' => 50,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_enabled_gi'
  $field_instances['node-usanetwork_aspot-field_aspot_enabled_gi'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'List of enabled draggable elements that should be displayed in A-Spot carousel',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 48,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_enabled_gi',
    'label' => 'Enabled A-spot gallery items',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_buttons',
      'weight' => 59,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_enabled_tgi'
  $field_instances['node-usanetwork_aspot-field_aspot_enabled_tgi'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'List of enabled draggable elements that should be displayed in A-Spot carousel',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 64,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_enabled_tgi',
    'label' => 'Enabled A-spot gallery items',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_buttons',
      'weight' => 68,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_gi_cta'
  $field_instances['node-usanetwork_aspot-field_aspot_gi_cta'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Custom call-to-action buttons. Before adding or editing the form you should save draggable form items.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 57,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_gi_cta',
    'label' => 'Call to action',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'default',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => FALSE,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'html5_tools',
      'settings' => array(),
      'type' => 'urlwidget',
      'weight' => 63,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_gi_draggable_data'
  $field_instances['node-usanetwork_aspot-field_aspot_gi_draggable_data'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 52,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_gi_draggable_data',
    'label' => 'Draggable elements data',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 62,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_gi_title'
  $field_instances['node-usanetwork_aspot-field_aspot_gi_title'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Custom title for A-Spot carousel',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 55,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_gi_title',
    'label' => 'Title',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 61,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_gi_title_prefix'
  $field_instances['node-usanetwork_aspot-field_aspot_gi_title_prefix'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => 'New episode of',
    'deleted' => 0,
    'description' => 'The prefix displays before title',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 53,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_gi_title_prefix',
    'label' => 'Title prefix',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 60,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_preview_bg_offset'
  $field_instances['node-usanetwork_aspot-field_aspot_preview_bg_offset'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Drag and drop background or set correct value using this control',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 47,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_preview_bg_offset',
    'label' => 'Preview background offset',
    'required' => 0,
    'settings' => array(
      'max' => '',
      'min' => '',
      'prefix' => '',
      'suffix' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'html5_tools',
      'settings' => array(),
      'type' => 'numberfield',
      'weight' => 57,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_tgi_cta'
  $field_instances['node-usanetwork_aspot-field_aspot_tgi_cta'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Custom call-to-action buttons. Before adding or editing the form you should save draggable form items.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 68,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_tgi_cta',
    'label' => 'Call to action',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'default',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'rel_remove' => 'default',
      'title' => 'required',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'html5_tools',
      'settings' => array(),
      'type' => 'urlwidget',
      'weight' => 72,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_tgi_draggable_data'
  $field_instances['node-usanetwork_aspot-field_aspot_tgi_draggable_data'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 67,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_tgi_draggable_data',
    'label' => 'Draggable elements data',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 71,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_tgi_title'
  $field_instances['node-usanetwork_aspot-field_aspot_tgi_title'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Custom title for A-Spot carousel',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 66,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_tgi_title',
    'label' => 'Title',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 70,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_aspot_tgi_title_prefix'
  $field_instances['node-usanetwork_aspot-field_aspot_tgi_title_prefix'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'The prefix displays before title',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 65,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_aspot_tgi_title_prefix',
    'label' => 'Title prefix',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'rows' => 5,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textarea',
      'weight' => 69,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_call_to_action_type'
  $field_instances['node-usanetwork_aspot-field_call_to_action_type'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'If the display requires a Call to Action icon please select the type here.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_link',
        'weight' => 8,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_link',
        'weight' => 11,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_call_to_action_type',
    'label' => 'Call to Action Type',
    'required' => 0,
    'settings' => array(
      'exclude_cv' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 48,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_color'
  $field_instances['node-usanetwork_aspot-field_episodic_1_color'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'rgb' => '#ffffff',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'colorfield',
        'settings' => array(
          'height' => 20,
          'width' => 20,
        ),
        'type' => 'colorfield_color_swatch',
        'weight' => 41,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'colorfield',
        'settings' => array(
          'display_hash' => TRUE,
        ),
        'type' => 'colorfield_raw_rgb',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_color',
    'label' => 'Text line 1 color hex value',
    'required' => 0,
    'settings' => array(
      'colorfield_colorpicker_type' => 'farbtastic',
      'colorfield_enable_colorpicker' => TRUE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'colorfield',
      'settings' => array(
        'colorfield_options' => array(
          'colorfield_colorpicker_type' => 'minicolors',
          'colorfield_enable_colorpicker' => 1,
        ),
      ),
      'type' => 'colorfield_unified_textfield',
      'weight' => 30,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_1_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 40,
      ),
    ),
    'deleted' => 0,
    'description' => 'Enter in pixels<br />Recommended is 40',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 28,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_episodic_1_fontsize',
    'label' => 'Text line 1 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 32,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_image'
  $field_instances['node-usanetwork_aspot-field_episodic_1_image'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Optional image to display in place of the Title Text line 1. <br/>
Suggested max dimensions 380px x 80px<br/>
* Title Text line 1 will render as the alt text.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 34,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_image',
    'label' => 'Text line 1 Image',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '',
      'file_extensions' => 'png',
      'focus' => 0,
      'focus_lock_ratio' => 0,
      'focus_min_size' => '',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'image',
      'settings' => array(
        'preview_image_style' => 'thumbnail',
        'progress_indicator' => 'throbber',
      ),
      'type' => 'image_image',
      'weight' => 29,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_mobile_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_1_mobile_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 17,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 31,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_mobile_fontsize',
    'label' => 'Mobile Text line 1 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 35,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_tablan_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_1_tablan_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 30,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 39,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_tablan_fontsize',
    'label' => 'Tablet Landscape Text line 1 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 33,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_tabpor_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_1_tabpor_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 24,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 35,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_tabpor_fontsize',
    'label' => 'Tablet Portrait Text line 1 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 34,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_1_title'
  $field_instances['node-usanetwork_aspot-field_episodic_1_title'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example: Show name',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 25,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_1_title',
    'label' => 'Title text line 1',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 31,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_color'
  $field_instances['node-usanetwork_aspot-field_episodic_2_color'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'rgb' => '#b5b5b5',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'colorfield',
        'settings' => array(
          'height' => 20,
          'width' => 20,
        ),
        'type' => 'colorfield_color_swatch',
        'weight' => 42,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'colorfield',
        'settings' => array(
          'display_hash' => TRUE,
        ),
        'type' => 'colorfield_raw_rgb',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_color',
    'label' => 'Text line 2 color hex value',
    'required' => 0,
    'settings' => array(
      'colorfield_colorpicker_type' => 'farbtastic',
      'colorfield_enable_colorpicker' => TRUE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'colorfield',
      'settings' => array(
        'colorfield_options' => array(
          'colorfield_colorpicker_type' => 'minicolors',
          'colorfield_enable_colorpicker' => 1,
        ),
      ),
      'type' => 'colorfield_unified_textfield',
      'weight' => 36,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_2_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 30,
      ),
    ),
    'deleted' => 0,
    'description' => 'Enter in pixels<br />Recommended is 30',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 29,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_fontsize',
    'label' => 'Text line 2 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 38,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_mobile_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_2_mobile_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 15,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 32,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_mobile_fontsize',
    'label' => 'Mobile Text line 2 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 41,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_tablan_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_2_tablan_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 23,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 40,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_tablan_fontsize',
    'label' => 'Tablet Landscape Text line 2 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 39,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_tabpor_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_2_tabpor_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 18,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 36,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_tabpor_fontsize',
    'label' => 'Tablet Portrait Text line 2 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 40,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_2_title'
  $field_instances['node-usanetwork_aspot-field_episodic_2_title'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example: Show name',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 26,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_2_title',
    'label' => 'Title text line 2',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 37,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_color'
  $field_instances['node-usanetwork_aspot-field_episodic_3_color'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'rgb' => '#ffffff',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'colorfield',
        'settings' => array(
          'height' => 20,
          'width' => 20,
        ),
        'type' => 'colorfield_color_swatch',
        'weight' => 43,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'colorfield',
        'settings' => array(
          'display_hash' => TRUE,
        ),
        'type' => 'colorfield_raw_rgb',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_color',
    'label' => 'Text line 3 color hex value',
    'required' => 0,
    'settings' => array(
      'colorfield_colorpicker_type' => 'farbtastic',
      'colorfield_enable_colorpicker' => TRUE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'colorfield',
      'settings' => array(
        'colorfield_options' => array(
          'colorfield_colorpicker_type' => 'minicolors',
          'colorfield_enable_colorpicker' => 1,
        ),
      ),
      'type' => 'colorfield_unified_textfield',
      'weight' => 42,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_3_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 24,
      ),
    ),
    'deleted' => 0,
    'description' => 'Enter in pixels<br />Recommended is 24',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 30,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_fontsize',
    'label' => 'Text line 3 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 44,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_mobile_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_3_mobile_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 13,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 33,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_mobile_fontsize',
    'label' => 'Mobile Text line 3 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 47,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_tablan_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_3_tablan_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 18,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 38,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_tablan_fontsize',
    'label' => 'Tablet Landscape Text line 3 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 45,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_tabpor_fontsize'
  $field_instances['node-usanetwork_aspot-field_episodic_3_tabpor_fontsize'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 14,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 37,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_tabpor_fontsize',
    'label' => 'Tablet Portrait Text line 3 Font Size',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 46,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_episodic_3_title'
  $field_instances['node-usanetwork_aspot-field_episodic_3_title'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example: Show name',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 27,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_episodic_3_title',
    'label' => 'Title text line 3',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 43,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_is_episodic'
  $field_instances['node-usanetwork_aspot-field_is_episodic'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 0,
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 21,
      ),
      'full' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_is_episodic',
    'label' => 'Episodic',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'display_label' => 1,
      ),
      'type' => 'options_onoff',
      'weight' => 20,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_mobile_text_line_2'
  $field_instances['node-usanetwork_aspot-field_mobile_text_line_2'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 17,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 10,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_mobile_text_line_2',
    'label' => 'Mobile Text line 2',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 26,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_mp4_video_url'
  $field_instances['node-usanetwork_aspot-field_mp4_video_url'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Download URL field value in Advanced Settings in the Files Blade for media item in MPX.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 45,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_mp4_video_url',
    'label' => 'MP4 Video URL',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 51,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_show'
  $field_instances['node-usanetwork_aspot-field_show'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'If this is related to a show please select that from the list.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 3,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 23,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'div',
    'field_name' => 'field_show',
    'label' => 'Show',
    'required' => 0,
    'settings' => array(
      'exclude_cv' => FALSE,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_target'
  $field_instances['node-usanetwork_aspot-field_target'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => '_self',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 20,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_key',
        'weight' => 14,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_target',
    'label' => 'Target',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_text_line_1_font_size'
  $field_instances['node-usanetwork_aspot-field_text_line_1_font_size'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 'normal',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 14,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 8,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_text_line_1_font_size',
    'label' => 'Text Line 1 Font Size',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 23,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_text_line_1_image'
  $field_instances['node-usanetwork_aspot-field_text_line_1_image'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Optional image to display in place of the Title Text Line 1. <br/>
Suggested max dimensions 380px x 80px<br/>
* Title Text Line 1 will render as the alt text.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 16,
      ),
      'full' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 22,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_text_line_1_image',
    'label' => 'Text Line 1 Image',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '',
      'file_extensions' => 'png',
      'focus' => 0,
      'focus_lock_ratio' => 0,
      'focus_min_size' => '',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'image',
      'settings' => array(
        'preview_image_style' => 'thumbnail',
        'progress_indicator' => 'throbber',
      ),
      'type' => 'image_image',
      'weight' => 24,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_text_line_2_font_size'
  $field_instances['node-usanetwork_aspot-field_text_line_2_font_size'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 'normal',
      ),
    ),
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 15,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'list',
        'settings' => array(),
        'type' => 'list_default',
        'weight' => 9,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_text_line_2_font_size',
    'label' => 'Text Line 2 Font Size',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 27,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_desktop'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_desktop'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Largest retina image minimum 2490w x 1418h, scales for tablet devices',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'div',
    'field_name' => 'field_usa_aspot_desktop',
    'label' => 'Desktop Image',
    'required' => 1,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'aspot_desktop',
      'file_extensions' => 'png gif jpg jpeg',
      'focus' => 0,
      'focus_lock_ratio' => 0,
      'focus_min_size' => '',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '2490x1418',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'private' => 0,
          'public' => 'public',
        ),
        'allowed_types' => array(
          0 => 0,
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'upload' => 'upload',
        ),
        'progress_indicator' => 'throbber',
      ),
      'type' => 'media_generic',
      'weight' => 5,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_link'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_link'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Enter either a full external url or use the \'search\' button to browse links to local pages. If there is NO call to action it is recommended this link back to the show landing page.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 7,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_plain',
        'weight' => 13,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_link',
    'label' => 'Link',
    'required' => 1,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'default',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 1,
        'profile' => 'usanetwork_fields',
      ),
      'rel_remove' => 'default',
      'title' => 'none',
      'title_label_use_field_label' => FALSE,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 2,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_mobile'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_mobile'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Narrow version with a unique aspect ratio. this loads for mobile and scales down to 300x250. Minimum 600w x 500h.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 2,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 2,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_mobile',
    'label' => 'Mobile Image',
    'required' => 1,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'aspot_mobile',
      'file_extensions' => 'png gif jpg jpeg',
      'focus' => 0,
      'focus_lock_ratio' => 0,
      'focus_min_size' => '',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '600x500',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'private' => 0,
          'public' => 'public',
        ),
        'allowed_types' => array(
          0 => 0,
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'upload' => 'upload',
        ),
        'progress_indicator' => 'throbber',
      ),
      'type' => 'media_generic',
      'weight' => 6,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_tablet_portrait'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_tablet_portrait'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Tablet Portrait image. Minimum 1230w x 700h.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 18,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 1,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_usa_aspot_tablet_portrait',
    'label' => 'Tablet Portrait',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'aspot_tablet',
      'file_extensions' => 'png gif jpg jpeg',
      'focus' => 0,
      'focus_lock_ratio' => 0,
      'focus_min_size' => '',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '1230x700',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'private' => 0,
          'public' => 'public',
        ),
        'allowed_types' => array(
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'upload' => 'upload',
        ),
        'progress_indicator' => 'throbber',
      ),
      'type' => 'media_generic',
      'weight' => 7,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_txt1'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_txt1'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example: Show name',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 4,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 4,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_txt1',
    'label' => 'Title text line 1',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 22,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_txt2'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_txt2'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example (tune-in time): TONIGHT 10/9C',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 5,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 6,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_txt2',
    'label' => 'Text line 2',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 25,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_txt3'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_txt3'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'example: episode name',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 6,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 7,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_txt3',
    'label' => 'Text line 3',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 28,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_aspot_txt4'
  $field_instances['node-usanetwork_aspot-field_usa_aspot_txt4'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'If you have selected a CTA type, please enter the corresponding text here. Example: watch full episode',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 9,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 12,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'exclude_cv' => 0,
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_aspot_txt4',
    'label' => 'Call to Action Text',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 49,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_text_color'
  $field_instances['node-usanetwork_aspot-field_usa_text_color'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => array(
      0 => array(
        'value' => 'ffffff',
      ),
    ),
    'deleted' => 0,
    'description' => 'Enter the 6 hex characters - no not enter the # symbol.<br />Examples: white: ffffff; black: 000000; dark grey: 333333',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 10,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_plain',
        'weight' => 3,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_text_color',
    'label' => 'Text color hex value',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 7,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 0,
      ),
      'type' => 'text_textfield',
      'weight' => 21,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_tv_aspot_desktop'
  $field_instances['node-usanetwork_aspot-field_usa_tv_aspot_desktop'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Largest retina image minimum 2490w x 1418h, scales for tablet devices',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 60,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_usa_tv_aspot_desktop',
    'label' => 'Desktop image',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '[current-date:custom:Y]/[current-date:custom:m]',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '2490x1418',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'mpx' => 0,
          'private' => 0,
          'public' => 'public',
        ),
        'allowed_types' => array(
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'mpx_player' => 0,
          'mpx_video' => 0,
          'mpx_video_1' => 0,
          'mpx_video_2' => 0,
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'pub_mpx_video' => 0,
          'theplatform_mpx_mpxmedia' => 0,
          'theplatform_mpx_mpxplayer' => 0,
          'upload' => 'upload',
        ),
      ),
      'type' => 'media_generic',
      'weight' => 64,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_usa_tv_aspot_mobile'
  $field_instances['node-usanetwork_aspot-field_usa_tv_aspot_mobile'] = array(
    'bundle' => 'usanetwork_aspot',
    'deleted' => 0,
    'description' => 'Narrow version with a unique aspect ratio. this loads for mobile and scales down to 300x250. Minimum 600w x 500h.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 61,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_usa_tv_aspot_mobile',
    'label' => 'Mobile image',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '[current-date:custom:Y]/[current-date:custom:m]',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '600x500',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'mpx' => 0,
          'private' => 0,
          'public' => 'public',
        ),
        'allowed_types' => array(
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'mpx_player' => 0,
          'mpx_video' => 0,
          'mpx_video_1' => 0,
          'mpx_video_2' => 0,
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'pub_mpx_video' => 0,
          'theplatform_mpx_mpxmedia' => 0,
          'theplatform_mpx_mpxplayer' => 0,
          'upload' => 'upload',
        ),
      ),
      'type' => 'media_generic',
      'weight' => 65,
    ),
  );

  // Exported field_instance: 'node-usanetwork_aspot-field_webm_video_url'
  $field_instances['node-usanetwork_aspot-field_webm_video_url'] = array(
    'bundle' => 'usanetwork_aspot',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Download URL field value in Advanced Settings in the Files Blade for media item in MPX.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 46,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'inline_content' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'page_collection_resources' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'div',
    'field_name' => 'field_webm_video_url',
    'label' => 'Webm Video URL',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '',
        ),
        'size' => 60,
        'soft_length_limit' => '',
        'soft_length_minimum' => '',
        'soft_length_style_select' => 1,
      ),
      'type' => 'text_textfield',
      'weight' => 52,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Call to Action Text');
  t('Call to Action Type');
  t('Call to action');
  t('Custom call-to-action buttons. Before adding or editing the form you should save draggable form items.');
  t('Custom title for A-Spot carousel');
  t('Desktop Image');
  t('Desktop image');
  t('Download URL field value in Advanced Settings in the Files Blade for media item in MPX.');
  t('Drag and drop background or set correct value using this control');
  t('Draggable elements data');
  t('Enabled A-spot gallery items');
  t('Enter either a full external url or use the \'search\' button to browse links to local pages. If there is NO call to action it is recommended this link back to the show landing page.');
  t('Enter in pixels<br />Recommended is 24');
  t('Enter in pixels<br />Recommended is 30');
  t('Enter in pixels<br />Recommended is 40');
  t('Enter the 6 hex characters - no not enter the # symbol.<br />Examples: white: ffffff; black: 000000; dark grey: 333333');
  t('Episodic');
  t('If the display requires a Call to Action icon please select the type here.');
  t('If this is related to a show please select that from the list.');
  t('If you have selected a CTA type, please enter the corresponding text here. Example: watch full episode');
  t('Largest retina image minimum 2490w x 1418h, scales for tablet devices');
  t('Largest retina image minimum 2500w x 1094h, scales for tablet devices');
  t('Link');
  t('List of enabled draggable elements that should be displayed in A-Spot carousel');
  t('MP4 Video URL');
  t('Mobile Image');
  t('Mobile Text line 1 Font Size');
  t('Mobile Text line 2');
  t('Mobile Text line 2 Font Size');
  t('Mobile Text line 3 Font Size');
  t('Mobile image');
  t('Narrow version with a unique aspect ratio. this loads for mobile and scales down to 300x250. Minimum 600w x 500h.');
  t('Optional image to display in place of the Title Text Line 1. <br/>
Suggested max dimensions 380px x 80px<br/>
* Title Text Line 1 will render as the alt text.');
  t('Optional image to display in place of the Title Text line 1. <br/>
Suggested max dimensions 380px x 80px<br/>
* Title Text line 1 will render as the alt text.');
  t('Preview background offset');
  t('Show');
  t('Tablet Landscape Text line 1 Font Size');
  t('Tablet Landscape Text line 2 Font Size');
  t('Tablet Landscape Text line 3 Font Size');
  t('Tablet Portrait');
  t('Tablet Portrait Text line 1 Font Size');
  t('Tablet Portrait Text line 2 Font Size');
  t('Tablet Portrait Text line 3 Font Size');
  t('Tablet Portrait image. Minimum 1230w x 700h.');
  t('Target');
  t('Text Line 1 Font Size');
  t('Text Line 1 Image');
  t('Text Line 2 Font Size');
  t('Text color hex value');
  t('Text line 1 Font Size');
  t('Text line 1 Image');
  t('Text line 1 color hex value');
  t('Text line 2');
  t('Text line 2 Font Size');
  t('Text line 2 color hex value');
  t('Text line 3');
  t('Text line 3 Font Size');
  t('Text line 3 color hex value');
  t('The prefix displays before title');
  t('This is an Animated A-Spot');
  t('Title');
  t('Title prefix');
  t('Title text line 1');
  t('Title text line 2');
  t('Title text line 3');
  t('Webm Video URL');
  t('example (tune-in time): TONIGHT 10/9C');
  t('example: Show name');
  t('example: episode name');

  return $field_instances;
}

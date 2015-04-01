<?php
/**
 * @file
 * usanetwork_full_bleed_promo.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_full_bleed_promo_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-usanetwork_full_bleed_promo-field_usa_fbp_cta_link'
  $field_instances['node-usanetwork_full_bleed_promo-field_usa_fbp_cta_link'] = array(
    'bundle' => 'usanetwork_full_bleed_promo',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_fbp_cta_link',
    'label' => 'Call to action link',
    'required' => 0,
    'settings' => array(
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
        'enable' => 0,
        'profile' => '',
      ),
      'rel_remove' => 'default',
      'title' => 'none',
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
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'node-usanetwork_full_bleed_promo-field_usa_fbp_desktop_image'
  $field_instances['node-usanetwork_full_bleed_promo-field_usa_fbp_desktop_image'] = array(
    'bundle' => 'usanetwork_full_bleed_promo',
    'deleted' => 0,
    'description' => 'Minimum 1350w x 530h',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 4,
      ),
      'microsite_output' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_fbp_desktop_image',
    'label' => 'Desktop image',
    'required' => 1,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'full_bleed',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '1350x530',
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
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'node-usanetwork_full_bleed_promo-field_usa_fbp_mobile_image'
  $field_instances['node-usanetwork_full_bleed_promo-field_usa_fbp_mobile_image'] = array(
    'bundle' => 'usanetwork_full_bleed_promo',
    'deleted' => 0,
    'description' => 'Minimum 450w x 320h',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 5,
      ),
      'microsite_output' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_usa_fbp_mobile_image',
    'label' => 'Mobile image',
    'required' => 1,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'full_bleed',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '450x320',
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
      'weight' => 2,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Call to action link');
  t('Desktop image');
  t('Minimum 1350w x 530h');
  t('Minimum 450w x 320h');
  t('Mobile image');

  return $field_instances;
}

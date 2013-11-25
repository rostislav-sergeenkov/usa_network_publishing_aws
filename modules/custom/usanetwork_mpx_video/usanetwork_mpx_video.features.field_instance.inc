<?php
/**
 * @file
 * usanetwork_mpx_video.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function usanetwork_mpx_video_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'file-mpx_video_1-field_mpx_airdate'
  $field_instances['file-mpx_video_1-field_mpx_airdate'] = array(
    'bundle' => 'mpx_video_1',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
        ),
        'type' => 'date_default',
        'weight' => 8,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
        ),
        'type' => 'date_default',
        'weight' => 8,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
        ),
        'type' => 'date_default',
        'weight' => 8,
      ),
      'vid_teaser_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 8,
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 8,
      ),
      'vid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 8,
      ),
    ),
    'entity_type' => 'file',
    'field_name' => 'field_mpx_airdate',
    'label' => 'MPX Media Air Date',
    'required' => 0,
    'settings' => array(
      'default_value' => 'now',
      'default_value2' => 'same',
      'default_value_code' => '',
      'default_value_code2' => '',
      'user_register_form' => FALSE,
    ),
    'weight' => 50,
    'widget' => array(
      'active' => 1,
      'module' => 'date',
      'settings' => array(
        'increment' => 1,
        'input_format' => ' m/d/Y - g:i:sa',
        'input_format_custom' => '',
        'label_position' => 'above',
        'pub_mpx' => array(
          'media_data_fieldpath' => '[default mpx field]',
        ),
        'text_parts' => array(),
        'year_range' => '-3:+3',
      ),
      'type' => 'date_popup',
      'weight' => 38,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_mpx_episode_number'
  $field_instances['file-mpx_video_1-field_mpx_episode_number'] = array(
    'bundle' => 'mpx_video_1',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      '_fid_teaser_episode' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 27,
      ),
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 27,
      ),
      'fid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 31,
      ),
      'fid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 23,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 27,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 27,
      ),
      'vid_teaser_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 27,
      ),
      'vid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 27,
      ),
    ),
    'entity_type' => 'file',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_mpx_episode_number',
    'label' => 'Episode Number',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
      'wysiwyg_override' => 1,
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
      'weight' => 58,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_mpx_media_thumbnail'
  $field_instances['file-mpx_video_1-field_mpx_media_thumbnail'] = array(
    'bundle' => 'mpx_video_1',
    'deleted' => 0,
    'description' => '',
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
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'vid_teaser_general' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'vid_teaser_show_general' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'file',
    'field_name' => 'field_mpx_media_thumbnail',
    'label' => 'Media Thumbnail',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '',
      'file_extensions' => 'png gif jpg jpeg',
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
      'module' => 'image',
      'settings' => array(
        'preview_image_style' => 'thumbnail',
        'progress_indicator' => 'throbber',
        'tve_mpx' => array(
          'enabled' => 1,
          'ingestion_option' => 'tve_mpx_ingestion_callback_media_thumbnail_retina_or_biggest',
        ),
      ),
      'type' => 'image_image',
      'weight' => 52,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_mpx_season_number'
  $field_instances['file-mpx_video_1-field_mpx_season_number'] = array(
    'bundle' => 'mpx_video_1',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      '_fid_teaser_episode' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 28,
      ),
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 28,
      ),
      'fid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 32,
      ),
      'fid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 24,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 28,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 28,
      ),
      'vid_teaser_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 28,
      ),
      'vid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 28,
      ),
    ),
    'entity_type' => 'file',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_mpx_season_number',
    'label' => 'Season Number',
    'required' => 0,
    'settings' => array(
      'linkit' => array(
        'button_text' => 'Search',
        'enable' => 0,
        'profile' => '',
      ),
      'text_processing' => 0,
      'user_register_form' => FALSE,
      'wysiwyg_override' => 1,
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
      'weight' => 59,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_mpx_title'
  $field_instances['file-mpx_video_1-field_mpx_title'] = array(
    'bundle' => 'mpx_video_1',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'vid_teaser_general' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'vid_teaser_show_general' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'file',
    'field_name' => 'field_mpx_title',
    'label' => 'MPX Media Title',
    'required' => 0,
    'settings' => array(
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'weight' => 50,
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'pub_mpx' => array(
          'media_data_fieldpath' => '[default mpx field]',
        ),
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 33,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_show'
  $field_instances['file-mpx_video_1-field_show'] = array(
    'bundle' => 'mpx_video_1',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 39,
      ),
      'fid_teaser_episode' => array(
        'label' => 'hidden',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => '',
      ),
      'fid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'full' => array(
        'label' => 'hidden',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'hidden',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 39,
      ),
      'vid_teaser_general' => array(
        'label' => 'hidden',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => '',
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'vid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 39,
      ),
    ),
    'entity_type' => 'file',
    'fences_wrapper' => 'no_wrapper',
    'field_name' => 'field_show',
    'label' => 'Show',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
      'wysiwyg_override' => 1,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(),
      'type' => 'options_select',
      'weight' => 71,
    ),
  );

  // Exported field_instance: 'file-mpx_video_1-field_usa_video_terms'
  $field_instances['file-mpx_video_1-field_usa_video_terms'] = array(
    'bundle' => 'mpx_video_1',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 40,
      ),
      'fid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'fid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'full' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'preview' => array(
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
      'vid_teaser_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 40,
      ),
      'vid_teaser_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'vid_teaser_show_episode' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => '',
      ),
      'vid_teaser_show_general' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 40,
      ),
    ),
    'entity_type' => 'file',
    'fences_wrapper' => 'div',
    'field_name' => 'field_usa_video_terms',
    'label' => 'USA Video Terms',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
      'wysiwyg_override' => 1,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'entityreference',
      'settings' => array(
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'entityreference_autocomplete',
      'weight' => 73,
    ),
  );

  // Exported field_instance: 'queues-video_mpx_queue-field_qt_video_mpx_queue'
  $field_instances['queues-video_mpx_queue-field_qt_video_mpx_queue'] = array(
    'bundle' => 'video_mpx_queue',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'queues',
    'field_name' => 'field_qt_video_mpx_queue',
    'label' => 'Queue items',
    'required' => FALSE,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'entityreference',
      'settings' => array(
        'match_operator' => 'CONTAINS',
        'path' => '',
        'size' => 60,
      ),
      'type' => 'entityreference_autocomplete',
      'weight' => 1,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Episode Number');
  t('MPX Media Air Date');
  t('MPX Media Title');
  t('Media Thumbnail');
  t('Queue items');
  t('Season Number');
  t('Show');
  t('USA Video Terms');

  return $field_instances;
}

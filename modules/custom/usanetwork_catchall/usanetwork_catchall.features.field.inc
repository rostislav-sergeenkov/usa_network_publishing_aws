<?php
/**
 * @file
 * usanetwork_catchall.features.field.inc
 */

/**
 * Implements hook_field_default_fields().
 */
function usanetwork_catchall_field_default_fields() {
  $fields = array();

  // Exported field: 'node-catchall_page-field_show'.
  $fields['node-catchall_page-field_show'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_show',
      'foreign keys' => array(
        'node' => array(
          'columns' => array(
            'target_id' => 'nid',
          ),
          'table' => 'node',
        ),
      ),
      'indexes' => array(
        'target_id' => array(
          0 => 'target_id',
        ),
      ),
      'locked' => '0',
      'module' => 'entityreference',
      'settings' => array(
        'handler' => 'base',
        'handler_settings' => array(
          'behaviors' => array(
            'views-select-list' => array(
              'status' => 0,
            ),
          ),
          'sort' => array(
            'type' => 'none',
          ),
          'target_bundles' => array(
            'tv_show' => 'tv_show',
          ),
        ),
        'handler_submit' => 'Change handler',
        'target_type' => 'node',
      ),
      'translatable' => '0',
      'type' => 'entityreference',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'default_value' => NULL,
      'deleted' => '0',
      'description' => 'If this page is associated with a show please select from the list above.',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'entityreference',
          'settings' => array(
            'link' => FALSE,
          ),
          'type' => 'entityreference_label',
          'weight' => '6',
        ),
        'full' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
          'weight' => '5',
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
        'weight' => '2',
      ),
    ),
  );

  // Exported field: 'node-catchall_page-field_usa_catchall_fixedwidth'.
  $fields['node-catchall_page-field_usa_catchall_fixedwidth'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_usa_catchall_fixedwidth',
      'foreign keys' => array(),
      'indexes' => array(
        'value' => array(
          0 => 'value',
        ),
      ),
      'locked' => '0',
      'module' => 'list',
      'settings' => array(
        'allowed_values' => array(
          0 => '',
          1 => '',
        ),
        'allowed_values_function' => '',
      ),
      'translatable' => '0',
      'type' => 'list_boolean',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'default_value' => array(
        0 => array(
          'value' => 0,
        ),
      ),
      'deleted' => '0',
      'description' => 'If this page is intended as fixed-width please check the box above.',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'list',
          'settings' => array(),
          'type' => 'list_default',
          'weight' => '4',
        ),
        'full' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
          'weight' => '2',
        ),
        'teaser' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
          'weight' => 0,
        ),
      ),
      'entity_type' => 'node',
      'exclude_cv' => 1,
      'fences_wrapper' => 'div',
      'field_name' => 'field_usa_catchall_fixedwidth',
      'label' => 'set fixed width?',
      'required' => 0,
      'settings' => array(
        'exclude_cv' => FALSE,
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'options',
        'settings' => array(
          'display_label' => 1,
        ),
        'type' => 'options_onoff',
        'weight' => '5',
      ),
    ),
  );

  // Exported field: 'node-catchall_page-field_usa_catchall_html'.
  $fields['node-catchall_page-field_usa_catchall_html'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_usa_catchall_html',
      'foreign keys' => array(
        'format' => array(
          'columns' => array(
            'format' => 'format',
          ),
          'table' => 'filter_format',
        ),
      ),
      'indexes' => array(
        'format' => array(
          0 => 'format',
        ),
      ),
      'locked' => '0',
      'module' => 'text',
      'settings' => array(),
      'translatable' => '0',
      'type' => 'text_long',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'default_value' => NULL,
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'raw_formatter',
          'weight' => '3',
        ),
        'full' => array(
          'label' => 'hidden',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'raw_formatter',
          'weight' => '3',
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
      'field_name' => 'field_usa_catchall_html',
      'label' => 'Custom HTML',
      'required' => 0,
      'settings' => array(
        'exclude_cv' => FALSE,
        'linkit' => array(
          'button_text' => 'Search',
          'enable' => 0,
          'profile' => '',
        ),
        'text_processing' => '0',
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'text',
        'settings' => array(
          'rows' => '5',
          'soft_length_limit' => '',
          'soft_length_minimum' => '',
        ),
        'type' => 'text_textarea',
        'weight' => '3',
      ),
    ),
  );

  // Exported field: 'node-catchall_page-field_usa_catchall_js'.
  $fields['node-catchall_page-field_usa_catchall_js'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_usa_catchall_js',
      'foreign keys' => array(
        'format' => array(
          'columns' => array(
            'format' => 'format',
          ),
          'table' => 'filter_format',
        ),
      ),
      'indexes' => array(
        'format' => array(
          0 => 'format',
        ),
      ),
      'locked' => '0',
      'module' => 'text',
      'settings' => array(),
      'translatable' => '0',
      'type' => 'text_long',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'default_value' => NULL,
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'custom_js',
          'weight' => '2',
        ),
        'full' => array(
          'label' => 'hidden',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'custom_js',
          'weight' => '1',
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
      'field_name' => 'field_usa_catchall_js',
      'label' => 'Custom JS',
      'required' => 0,
      'settings' => array(
        'exclude_cv' => FALSE,
        'linkit' => array(
          'button_text' => 'Search',
          'enable' => 0,
          'profile' => '',
        ),
        'text_processing' => '0',
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'text',
        'settings' => array(
          'rows' => '5',
          'soft_length_limit' => '',
          'soft_length_minimum' => '',
        ),
        'type' => 'text_textarea',
        'weight' => '2',
      ),
    ),
  );

  // Exported field: 'node-catchall_page-field_usa_catchall_media'.
  $fields['node-catchall_page-field_usa_catchall_media'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '-1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_usa_catchall_media',
      'foreign keys' => array(
        'fid' => array(
          'columns' => array(
            'fid' => 'fid',
          ),
          'table' => 'file_managed',
        ),
      ),
      'indexes' => array(
        'fid' => array(
          0 => 'fid',
        ),
      ),
      'locked' => '0',
      'module' => 'file',
      'settings' => array(
        'display_default' => 0,
        'display_field' => 0,
        'uri_scheme' => 'public',
      ),
      'translatable' => '0',
      'type' => 'file',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'deleted' => '0',
      'description' => 'Local and remote image and video files are allowed for this set of fields: Custom CSS, JS, raw HTML.
File formats accepted: png, gif, jpg, jpeg, otf, mp3, htf, pdf. Not intended for flex/swf integration.',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'file',
          'settings' => array(),
          'type' => 'file_default',
          'weight' => 7,
        ),
        'full' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
          'weight' => '4',
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
      'field_name' => 'field_usa_catchall_media',
      'label' => 'Custom Files',
      'required' => 0,
      'settings' => array(
        'description_field' => 0,
        'file_directory' => '',
        'file_extensions' => 'png gif jpg jpeg otf mp3 htf pdf',
        'max_filesize' => '',
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'media_multiselect',
        'settings' => array(
          'allowed_schemes' => array(
            'private' => 'private',
            'public' => 'public',
            'theplatform' => 0,
          ),
          'allowed_types' => array(
            'audio' => 'audio',
            'document' => 'document',
            'image' => 'image',
            'video' => 'video',
          ),
          'browser_plugins' => array(
            'media_internet' => 'media_internet',
            'pub_theplatform' => 0,
            'publisher_media_browser--media_browser_1' => 'publisher_media_browser--media_browser_1',
            'publisher_media_browser--media_browser_my_files' => 'publisher_media_browser--media_browser_my_files',
            'upload' => 'upload',
          ),
          'progress_indicator' => 'throbber',
        ),
        'type' => 'media_multiselect',
        'weight' => '9',
      ),
    ),
  );

  // Exported field: 'node-catchall_page-field_usa_css'.
  $fields['node-catchall_page-field_usa_css'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_usa_css',
      'foreign keys' => array(
        'format' => array(
          'columns' => array(
            'format' => 'format',
          ),
          'table' => 'filter_format',
        ),
      ),
      'indexes' => array(
        'format' => array(
          0 => 'format',
        ),
      ),
      'locked' => '0',
      'module' => 'text',
      'settings' => array(),
      'translatable' => '0',
      'type' => 'text_long',
    ),
    'field_instance' => array(
      'bundle' => 'catchall_page',
      'default_value' => NULL,
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'custom_css',
          'weight' => '1',
        ),
        'full' => array(
          'label' => 'hidden',
          'module' => 'usanetwork_field_formatters',
          'settings' => array(),
          'type' => 'custom_css',
          'weight' => '0',
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
      'field_name' => 'field_usa_css',
      'label' => 'Custom CSS',
      'required' => 0,
      'settings' => array(
        'exclude_cv' => FALSE,
        'linkit' => array(
          'button_text' => 'Search',
          'enable' => 0,
          'profile' => '',
        ),
        'text_processing' => '0',
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'text',
        'settings' => array(
          'rows' => '5',
          'soft_length_limit' => '',
          'soft_length_minimum' => '',
        ),
        'type' => 'text_textarea',
        'weight' => '1',
      ),
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Custom CSS');
  t('Custom Files');
  t('Custom HTML');
  t('Custom JS');
  t('If this page is associated with a show please select from the list above.');
  t('If this page is intended as fixed-width please check the box above.');
  t('Local and remote image and video files are allowed for this set of fields: Custom CSS, JS, raw HTML.
File formats accepted: png, gif, jpg, jpeg, otf, mp3, htf, pdf. Not intended for flex/swf integration.');
  t('Show');
  t('set fixed width?');

  return $fields;
}

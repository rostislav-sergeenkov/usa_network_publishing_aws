<?php
/**
 * @file
 * usanetwork_instagram.features.wysiwyg.inc
 */

/**
 * Implements hook_wysiwyg_default_profiles().
 */
function usanetwork_instagram_wysiwyg_default_profiles() {
  $profiles = array();

  // Exported profile: wysiwyg_social
  $profiles['wysiwyg_social'] = array(
    'format' => 'wysiwyg_social',
    'editor' => 'tinymce',
    'settings' => array(
      'default' => 1,
      'user_choose' => 0,
      'show_toggle' => 0,
      'add_to_summaries' => 1,
      'theme' => '',
      'language' => 'en',
      'buttons' => array(
        'default' => array(
          'bold' => 1,
          'italic' => 1,
          'justifyleft' => 1,
          'justifycenter' => 1,
          'justifyright' => 1,
          'bullist' => 1,
          'numlist' => 1,
          'undo' => 1,
          'redo' => 1,
          'link' => 1,
          'unlink' => 1,
          'formatselect' => 1,
          'code' => 1,
          'cut' => 1,
          'copy' => 1,
          'charmap' => 1,
        ),
        'paste' => array(
          'pasteword' => 1,
        ),
        'linkit' => array(
          'linkit' => 1,
        ),
        'person_quotation' => array(
          'person_quotation' => 1,
        ),
        'lines_quotation' => array(
          'lines_quotation' => 1,
        ),
        'drupal' => array(
          'social' => 1,
          'media' => 1,
          'usa_inline_gallery' => 1,
          'usa_inline_video' => 1,
        ),
      ),
      'theme_advanced_toolbar_location' => 'top',
      'theme_advanced_toolbar_align' => 'left',
      'theme_advanced_statusbar_location' => 'bottom',
      'theme_advanced_resizing' => 1,
      'verify_html' => 0,
      'preformatted' => 0,
      'convert_fonts_to_spans' => 1,
      'remove_linebreaks' => 0,
      'apply_source_formatting' => 1,
      'css_setting' => 'theme',
      'css_path' => '',
      'theme_advanced_styles' => '',
      'theme_advanced_blockformats' => 'p,address,pre,h2,h3,h4,h5,h6,div',
      'advanced__active_tab' => 'edit-paste',
      'paste_auto_cleanup_on_paste' => 1,
    ),
  );

  return $profiles;
}

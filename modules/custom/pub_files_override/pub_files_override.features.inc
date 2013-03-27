<?php
/**
 * @file
 * pub_files_override.features.inc
 */

/**
 * Implements hook_field_default_fields_alter().
 */
function pub_files_override_field_default_fields_alter(&$data) {
  if (isset($data['file-image-field_caption'])) {
    $data['file-image-field_caption']['field_instance']['display']['teaser']['weight'] = '7'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_copyright'])) {
    $data['file-image-field_copyright']['field_instance']['display']['teaser']['weight'] = '8'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_credit'])) {
    $data['file-image-field_credit']['field_instance']['display']['teaser']['weight'] = '5'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_file_image_alt_text'])) {
    $data['file-image-field_file_image_alt_text']['field_instance']['display']['teaser']['weight'] = '9'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_file_image_title_text'])) {
    $data['file-image-field_file_image_title_text']['field_instance']['display']['teaser']['weight'] = '6'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_keywords'])) {
    $data['file-image-field_keywords']['field_instance']['display']['teaser']['weight'] = '4'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_media_categories'])) {
    $data['file-image-field_media_categories']['field_instance']['display']['teaser']['weight'] = '2'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_media_tags'])) {
    $data['file-image-field_media_tags']['field_instance']['display']['teaser']['weight'] = '1'; /* WAS: 0 */
  }
  if (isset($data['file-image-field_source'])) {
    $data['file-image-field_source']['field_instance']['display']['teaser']['weight'] = '3'; /* WAS: 0 */
  }
}

/**
 * Implements hook_strongarm_alter().
 */
function pub_files_override_strongarm_alter(&$data) {
  if (isset($data['field_bundle_settings_file__image'])) {
    $data['field_bundle_settings_file__image']->value['extra_fields']['display']['file']['teaser']['visible'] = TRUE; /* WAS: FALSE */
    $data['field_bundle_settings_file__image']->value['extra_fields']['display']['file']['teaser']['weight'] = '0'; /* WAS: 0 */
  }
}

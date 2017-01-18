<?php

/**
 * @file
 * Includes helper functions for TVE Publishing Profiles module.
 */

/**
 * Processes rich text (form inputs with the support of wysiwyg) values.
 *
 * Searches for a token occurrences and process all of them.
 *
 * @param string $text
 *
 * @return string
 *
 * @see ott_media_process_media_wysiwyg_token
 */
function ott_media_process_media_wysiwyg_text($text) {
  $regex = '/\[\[.*?\]\]/s';
  $text = preg_replace_callback($regex, 'ott_media_process_media_wysiwyg_token', $text);

  return $text;
}

/**
 * Processes (alters) token value of a rich text (wysiwyg supported) form input.
 *
 * Extracts entity file information from the token and adds
 * metadata.
 *
 * @param string $token
 *
 * @return string
 */
function ott_media_process_media_wysiwyg_token($token) {
  $token = str_replace(['[[', ']]'], ['', ''], $token);

  $token_decoded = drupal_json_decode($token[0]);

  if (json_last_error()) {
    watchdog('ott_media', "Media wysiwyg: Couldn't decode JSON string to object.", [], WATCHDOG_NOTICE);
    return '';
  }

  if (!$token_decoded) {
    watchdog('ott_media', 'Media wysiwyg: Token is empty - nothing to process.', [], WATCHDOG_NOTICE);
    return '';
  }

  if (!isset($token_decoded['fid'])) {
    watchdog('ott_media', 'Media wysiwyg: Missing "fid" value.', [], WATCHDOG_NOTICE);
    return '';
  }

  $file = file_load($token_decoded['fid']);
  if (!$file) {
    watchdog(
      'ott_media',
      "Media wysiwyg: Couldn't load file entity by fid=@fid.",
      ['@fid' => $token_decoded['fid']],
      WATCHDOG_NOTICE
    );
    return '';
  }

  // Allow other modules to change token before encode it back to JSON string.
  drupal_alter('ott_media_wysiwyg_token', $token_decoded, $file);

  // Encode (wrap with double square brackets) token value back again.
  $token_encoded = '[[' . drupal_json_encode($token_decoded) . ']]';

  return $token_encoded;
}

/**
 * Helper function to handle publishing image.
 *
 * @param array $image
 *
 * @return bool
 */
function ott_media_publish_image($image) {
  $profile = OttPublishingProfile::getProfileById('file_image');

  if (!$profile) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Could not load !profile publishing profile.',
      ['!profile' => "file_image"],
      WATCHDOG_ERROR
    );
    return FALSE;
  }

  $image_file = file_load($image['fid']);

  if (!$image_file) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Could not load image by fid=%fid',
      ['%fid' => $image['fid']],
      WATCHDOG_ERROR
    );

    return FALSE;
  }

  if ($image_file->type != 'image') {
    return FALSE;
  }

  $status = TRUE;

  foreach ($profile->getInstanceTypes() as $instance_type) {
    $instance_name = ott_services_get_instance_name_by_type($instance_type);
    // Get instances, primary and secondary (if exists).
    $instances = ott_services_get_instance($instance_name);
    foreach ($instances as $instance) {
      if (!ott_publishing_publish_item($image_file, $profile, $instance)) {
        $status = FALSE;
      }
    }
  }

  return $status;
}

<?php

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
  $token = str_replace('[[', '', $token);
  $token = str_replace(']]', '', $token);

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

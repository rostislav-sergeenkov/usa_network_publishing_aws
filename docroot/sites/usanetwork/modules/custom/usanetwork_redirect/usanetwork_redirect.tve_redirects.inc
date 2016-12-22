<?php

/**
 * Implements hook_tve_redirects_info().
 */
function usanetwork_redirect_tve_redirects_info() {
  $redirects = array(
    'guid' => array(
      'title' => t('Video MPX GUID'),
      'description' => t('Provides redirect to the video page by video guid.'),
      'path' => 'guid',
    ),
    'pid' => array(
      'title' => t('Video MPX PID'),
      'description' => t('Provides redirect to the video page by video pid.'),
      'path' => 'pid',
    ),
  );

  return $redirects;
}

/**
 * Implements hook_tve_redirects_media_load().
 */
function usanetwork_redirect_tve_redirects_media_load($media_id, $media_type) {
  switch ($media_type) {
    case 'guid':
      // Search for a file with a specified GUID.
      $files = media_theplatform_mpx_get_files_by_guid($media_id);
      foreach ($files as $file) {
        if ($file->status && $file->published) {
          return $file;
        }
      }
      break;
    case 'pid':
      // Search for a node (of any type) with a specified mpx id.
      $query = db_select('mpx_video', 'v');
      $query->fields('v', array(
        'fid',
      ))->condition('default_released_file_pid', $media_id, '=');
      $results = $query->execute()->fetchCol();

      foreach ($results as $fid) {
        $file = file_load($fid);
        if ($file->status && $file->published) {
          return $file;
        }
      }
      break;
  }
}

/**
 * Implements hook_tve_redirects_media_redirect().
 */
function usanetwork_redirect_tve_redirects_media_redirect($media_type, $entity) {
  if (!$entity) {
    return;
  }

  switch ($media_type) {
    case 'guid':
    case 'pid':
      tve_redirects_redirect('file/' . $entity->fid);
      break;
  }
}


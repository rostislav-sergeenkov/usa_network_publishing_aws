<?php
/**
 * @file
 * pub_gigya_overrides.features.inc
 */

/**
 * Implements hook_strongarm_alter().
 */
function pub_gigya_overrides_strongarm_alter(&$data) {
  if (isset($data['gigya_comments_enabled'])) {
    $data['gigya_comments_enabled']->value = 0; /* WAS: 1 */
  }
}

<?php

/**
 * @file
 * OTT Publishing related functionality.
 */

/**
 * OTT Publishing match callback.
 *
 * @param object $entity
 *   The object of entity.
 *
 * @return bool
 */
function tv_file_image_ott_publishing_match($entity) {
  return 'image' == $entity->type;
}

/**
 * OTT Publishing process callback.
 *
 * @param object $entity
 *   The object of entity.
 * @param array $profile
 *   Array of profile data.
 * @param object $instance
 *   The object of instance.
 *
 * @return array
 *   Mapped and prepared array of video entity fields for publishing.
 */
function tv_file_image_ott_publishing_process_callback($entity, $profile, $instance) {
  return [];
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $entity
 *   The object of entity.
 * @param array $profile
 *   Array of profile data.
 * @param object $instance
 *   The object of instance.
 *
 * @return array
 *   Array of uuid and image type.
 */
function tv_file_image_ott_delete_callback($entity, $profile, $instance) {
  return [
    'uuid' => $entity->uuid,
    'itemType' => 'image',
  ];
}

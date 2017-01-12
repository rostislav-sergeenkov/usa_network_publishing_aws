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
  $data = [
    // Initialize mostly empty values.
    'uuid' => $entity->uuid,
    'itemType' => 'image',
    'revision' => (int) $entity->vid,
    'title' => $entity->filename,
    'href' => file_create_url($entity->uri),
    'imageStyle' => [],
    'alt' => $entity->alt,
    'caption' => '',
    'categories' => [],
    'tags' => [],
    'copyright' => '',
    'credit' => '',
    'description' => '',
    'highRes' => '',
    'source' => '',
    'published' => (boolean) $entity->status,
    'programs' => [],
  ];

  $wrapper = entity_metadata_wrapper('file', $entity);

  if (!empty($wrapper)) {
    $caption = $wrapper->field_caption->value();
    $data['caption'] = !empty($caption['value']) ? $caption['value'] : '';

    $fields = [
      'copyright' => 'field_copyright',
      'credit' => 'field_credit',
      'source' => 'field_source',
    ];

    foreach ($fields as $key => $field) {
      if (!empty($wrapper->$field->value())) {
        $data[$key] = $wrapper->$field->value();
      }
    }
  }

  return $data;
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

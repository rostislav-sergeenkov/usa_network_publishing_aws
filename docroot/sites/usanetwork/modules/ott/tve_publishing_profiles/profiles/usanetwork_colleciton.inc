<?php

/**
 * @file
 * OTT Collection functions.
 */

/**
 * OTT Publishing process callback.
 *
 * @param object $collection
 *   Collection object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_collection_publishing_process_callback($collection, $profile, $instance) {
  return [];
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $collection
 *   Collection object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_collection_publishing_delete_callback($collection, $profile, $instance) {
  return [
    'uuid' => $collection->uuid,
    'itemType' => tve_publishing_profiles_get_item_type($collection->type),
  ];
}

/**
 * TVE Collection response callback.
 *
 * @param object $collection
 *   Collection object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return bool
 */
function tv_collection_publishing_response_callback($collection, $profile, $instance) {
  $status = TRUE;
  $collection_values = entity_metadata_wrapper('curated_collection', $collection)->value();
  if (isset($collection_values->field_qt_curated_collection[LANGUAGE_NONE])) {
    $curated_collection = $collection_values->field_qt_curated_collection[LANGUAGE_NONE];
    foreach ($curated_collection as $index => $collection) {
      $status = tve_collection_publish_entity($collection['target_id'], 'node', $instance);
    }
  }

  return $status;
}

/**
 * OTT Publishing process callback.
 *
 * @param object $collection_group
 *   Collection group object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_collection_group_publishing_process_callback($collection_group, $profile, $instance) {
  return [];
}

/**
 * OTT Publishing delete callback.
 *
 * @param object $collection_group
 *   Collection group object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return array
 *   Array of output data.
 */
function tv_collection_group_publishing_delete_callback($collection_group, $profile, $instance) {
  return [
    'uuid' => $collection_group->uuid,
    'itemType' => tve_publishing_profiles_get_item_type($collection_group->type),
  ];
}

/**
 * TVE Collection Group response callback.
 *
 * @param object $collection_group
 *   Collection group object.
 * @param array $profile
 *   Array of profile params.
 * @param object $instance
 *   Object of instance.
 *
 * @return bool
 */
function tv_collection_group_publishing_response_callback($collection_group, $profile, $instance) {
  $status = TRUE;
  if (isset($collection_group->field_qt_collection_group[LANGUAGE_NONE])) {
    $collection_group_items = $collection_group->field_qt_collection_group[LANGUAGE_NONE];
    foreach ($collection_group_items as $collection_group_item) {
      $status = tve_collection_publish_entity($collection_group_item['target_id'], 'queues', $instance);
    }
  }

  return $status;
}

/**
 * Publishes collection group items.
 *
 * @param int $entity_id
 *   Entity Id.
 * @param string $entity_type
 *   The type of entity.
 * @param object $instance
 *   Instance object.
 *
 * @return bool
 */
function tve_collection_publish_entity($entity_id, $entity_type, $instance) {
  $entity = entity_load_unchanged($entity_type, $entity_id);
  if (empty($entity)) {
    return FALSE;
  }

  $entity_type = $entity->type;
  $profile_name = tve_publishing_profiles_get_item_type($entity_type);
  if (empty($profile_name)) {
    return FALSE;
  }

  $profile = OttPublishingProfile::getProfileById($profile_name);
  if (!$profile) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Could not load !profile publishing profile.',
      array('!profile' => $profile_name),
      WATCHDOG_ERROR
    );

    return FALSE;
  }

  return ott_publishing_publish_item($entity, $profile, $instance);
}

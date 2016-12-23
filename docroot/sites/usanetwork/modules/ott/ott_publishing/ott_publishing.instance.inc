<?php

/**
 * @file
 * Instance revision management functionality.
 */

/**
 * Dummy instance revision getter for files.
 *
 * @param object $file
 * @param object $instance
 *
 * @return null
 */
function ott_publishing_get_file_instance_revision($file, $instance) {
  // No revisions for files.
  return NULL;
}

/**
 * Dummy instance revision setter for files.
 *
 * @param object $file
 * @param object $instance
 * @param int $vid
 */
function ott_publishing_set_file_instance_revision($file, $instance, $vid) {
  // No revisions for files.
  return;
}

/**
 * Dummy instance revision remover for files.
 *
 * @param object $file
 * @param object $instance
 */
function ott_publishing_remove_file_instance_revision($file, $instance) {
  // No revisions for files.
  return;
}

/**
 * Returns entity instance revision data.
 *
 * @param Entity $entity
 * @param object $instance
 *
 * @return array|bool
 */
function ott_publishing_get_entity_instance_revision($entity, $instance) {
  return _ott_publishing_get_instance_revision(
    $entity->entityType(),
    $entity->bundle(),
    $entity->internalIdentifier(),
    $instance->name
  );
}

/**
 * Sets entity instance revision.
 *
 * @param object $entity
 * @param object $instance
 * @param int $vid
 *
 * @return bool
 */
function ott_publishing_set_entity_instance_revision($entity, $instance, $vid) {
  return _ott_publishing_set_instance_revision(
    $entity->entityType(),
    $entity->bundle(),
    $entity->internalIdentifier(),
    $instance->name,
    $vid
  );
}

/**
 * Removes entity instance revision data.
 *
 * @param Entity $entity
 * @param object $instance
 *
 * @return array|bool
 */
function ott_publishing_remove_entity_instance_revision($entity, $instance) {
  return _ott_publishing_remove_instance_revision(
    $entity->entityType(),
    $entity->bundle(),
    $entity->internalIdentifier(),
    $instance->name
  );
}

/**
 * Returns node instance revision data.
 *
 * @param object $node
 * @param object $instance
 *
 * @return array|bool
 */
function ott_publishing_get_node_instance_revision($node, $instance) {
  return _ott_publishing_get_instance_revision(
    'node',
    $node->type,
    isset($node->nid) ? $node->nid : 0,
    $instance->name
  );
}

/**
 * Sets node instance revision data.
 *
 * @param object $node
 * @param object $instance
 * @param int $vid
 *
 * @return bool
 */
function ott_publishing_set_node_instance_revision($node, $instance, $vid) {
  return _ott_publishing_set_instance_revision(
    'node',
    $node->type,
    $node->nid,
    $instance->name,
    $vid
  );
}

/**
 * Removes node instance revision data.
 *
 * @param object $node
 * @param object $instance
 *
 * @return bool
 */
function ott_publishing_remove_node_instance_revision($node, $instance) {
  return _ott_publishing_remove_instance_revision(
    'node',
    $node->type,
    $node->nid,
    $instance->name
  );
}

/**
 * Generic instance revision getter.
 *
 * @param $entity_type
 * @param $bundle
 * @param $entity_id
 * @param $instance
 *
 * @return array|bool
 */
function _ott_publishing_get_instance_revision($entity_type, $bundle, $entity_id, $instance) {
  try {
    return db_select('ott_publishing', 'p')
      ->fields('p')
      ->condition('instance', $instance)
      ->condition('entity_type', $entity_type)
      ->condition('bundle', $bundle)
      ->condition('entity_id', $entity_id)
      ->execute()
      ->fetchAssoc();
  }
  catch (Exception $e) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Tried to get !type (!bundle) #!id "!instance" revision, but raised exception: !exception.',
      array(
        '!type' => $entity_type,
        '!bundle' => $bundle,
        '!id' => $entity_id,
        '!instance' => $instance,
        '!exception' => $e->getMessage(),
      ),
      WATCHDOG_ALERT
    );

    return FALSE;
  }
}

/**
 * Generic instance revision setter.
 *
 * @param $entity_type
 * @param $bundle
 * @param $entity_id
 * @param $instance
 * @param $vid
 *
 * @return bool
 */
function _ott_publishing_set_instance_revision($entity_type, $bundle, $entity_id, $instance, $vid) {
  global $user;

  try {
    return (bool) db_merge('ott_publishing')
      ->key(array(
        'instance' => $instance,
        'entity_type' => $entity_type,
        'bundle' => $bundle,
        'entity_id' => $entity_id,
      ))
      ->fields(array(
        'vid' => $vid,
        'uid' => $user->uid,
        'created' => REQUEST_TIME,
      ))
      ->execute();
  }
  catch (Exception $e) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Tried to set !type (!bundle) #!id "!instance" revision to #!vid, but raised exception: !exception.',
      array(
        '!type' => $entity_type,
        '!bundle' => $bundle,
        '!id' => $entity_id,
        '!instance' => $instance,
        '!vid' => $vid,
        '!exception' => $e->getMessage(),
      ),
      WATCHDOG_ALERT
    );

    return FALSE;
  }
}

/**
 * Generic instance revision remover.
 *
 * @param $entity_type
 * @param $bundle
 * @param $entity_id
 * @param $instance
 *
 * @return bool
 */
function _ott_publishing_remove_instance_revision($entity_type, $bundle, $entity_id, $instance) {
  try {
    $rows_deleted = db_delete('ott_publishing')
      ->condition('entity_type', $entity_type)
      ->condition('bundle', $bundle)
      ->condition('entity_id', $entity_id)
      ->condition('instance', $instance)
      ->execute();

    if (!$rows_deleted) {
      watchdog(
        OTT_PUBLISHING_WATCHDOG,
        'Tried to delete !type (!bundle) #!id "!instance" revision publication info, but there was nothing to delete.',
        array(
          '!type' => $entity_type,
          '!bundle' => $bundle,
          '!id' => $entity_id,
          '!instance' => $instance,
        ),
        WATCHDOG_NOTICE
      );
    }

    return $rows_deleted;
  }
  catch (Exception $e) {
    watchdog(
      OTT_PUBLISHING_WATCHDOG,
      'Tried to delete !type (!bundle) #!id "!instance" revision publication info, but raised exception: !exception.',
      array(
        '!type' => $entity_type,
        '!bundle' => $bundle,
        '!id' => $entity_id,
        '!instance' => $instance,
        '!exception' => $e->getMessage(),
      ),
      WATCHDOG_ALERT
    );

    return FALSE;
  }
}

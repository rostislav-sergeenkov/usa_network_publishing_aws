<?php

/**
 * @file
 * OttPublishingTracker class.
 */

/**
 * Class OttPublishingTracker
 *
 * Handles publishing data tracking operations.
 */
class OttPublishingTracker {
  /**
   * Database table to store tracking data.
   */
  const DB_TABLE = 'ott_publishing_tracking';

  /**
   * Cleanup depth in seconds.
   */
  const RECORD_TTL = 2592000; // 30 days.

  /**
   * Returns true if a record with specified data exists in database.
   *
   * @param array $trackingData
   *
   * @return bool
   */
  public static function isTracked($trackingData) {
    return (bool) db_select(self::DB_TABLE, 't')
      ->fields('t')
      ->condition('data_id', $trackingData['data_id'])
      ->condition('data_hash', $trackingData['data_hash'])
      ->condition('instance', $trackingData['instance'])
      ->execute()
      ->rowCount();
  }

  /**
   * Removes previously tracked data.
   *
   * Creates new record with specified data.
   *
   * @param array $trackingData
   */
  public static function trackItem($trackingData) {
    db_delete(self::DB_TABLE)
      ->condition('data_id', $trackingData['data_id'])
      ->condition('instance', $trackingData['instance'])
      ->execute();

    $trackingData['created'] = REQUEST_TIME;
    drupal_write_record(self::DB_TABLE, $trackingData);
  }

  /**
   * Removes tracking records that are older than $ttl seconds.
   *
   * If no $ttl supplied, self::RECORD_TTL constant is used.
   *
   * @param int $ttl
   */
  public static function cleanup($ttl = NULL) {
    if (NULL === $ttl) {
      $ttl = self::RECORD_TTL;
    }

    db_delete(self::DB_TABLE)
      ->condition('created', REQUEST_TIME - $ttl, '<')
      ->execute();
  }
}

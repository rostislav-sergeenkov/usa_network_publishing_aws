<?php

/**
 * @file
 * OttPublishingProfileCollection class.
 */

/**
 * Class OttPublishingProfileCollection.
 *
 * Wrapper encapsulating work with publishing profiles and subject items.
 */
class OttPublishingProfileCollection extends OttPublishingProfile {

  /**
   * Returns item ID.
   *
   * @param mixed $item
   *
   * @return mixed|null
   */
  public function getItemId($item) {
    if (is_object($item)) {
      return $item->tid;
    }
    elseif (is_array($item) && isset($item['tid'])) {
      return $item['tid'];
    }

    return NULL;
  }

  /**
   * Sets item instance revision.
   *
   * Saves information that current entity's revision is published to specified
   * instance.
   *
   * @param object $entity
   * @param object $instance
   */
  public function setItemInstanceRevision($entity, $instance) {
    return;
  }

}

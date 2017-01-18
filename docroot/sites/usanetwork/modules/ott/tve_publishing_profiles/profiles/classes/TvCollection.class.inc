<?php

/**
 * @file
 * Includes class TvCollection.
 */

/**
 * Class TvCollection.
 */
class TvCollection {

  /**
   * TvCollection constructor.
   *
   * @param $collection
   */
  public function __construct($collection) {
    foreach ($collection as $k => $v) {
      $this->{$k} = $v;
    }
  }

  /**
   * Returns label.
   *
   * @return mixed
   */
  public function label() {
    return $this->title;
  }

}

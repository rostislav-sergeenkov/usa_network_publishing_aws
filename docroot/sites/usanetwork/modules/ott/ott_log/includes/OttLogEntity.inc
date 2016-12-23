<?php

/**
 * @file
 * OttLogEntity class.
 */

/**
 * Class OttLogEntity.
 */
class OttLogEntity extends Entity {

  /**
   * User's email address.
   *
   * @var string
   */
  public $user_email = '';

  /**
   * Request data object.
   *
   * @var object
   */
  public $request_data;

  /**
   * Constructor.
   *
   * @param array $values
   */
  public function __construct($values = array()) {
    if (isset($this->uid)) {
      $user = user_load($this->uid);
      if (!empty($user->mail)) {
        $this->user_email = $user->mail;
      }
    }

    if (isset($this->request_options)) {
      $request_options = unserialize($this->request_options);
      $this->request_data = isset($request_options['data'])
        ? drupal_json_decode($request_options['data'])
        : NULL;
    }

    parent::__construct($values, 'ott_module');
  }

}

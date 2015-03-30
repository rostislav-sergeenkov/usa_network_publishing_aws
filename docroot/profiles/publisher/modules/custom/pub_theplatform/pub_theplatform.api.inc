<?php

/**
 * @file pub_theplatform.api.inc
 */

require_once('theplatform.api.inc');

/*
 * Publisher-specific class that describes a request to thePlatform's feeds.
 *
 * @see theplatform.api.inc
 */
class pubThePlatformAPIRequest extends thePlatformAPIRequest {
  /**
   * Construct the object
   *
   * @param base_url: overwrite the base URL when constructing the class. Defaults to the Drupal set value.
   */
  public function __construct($base_url = '') {
    try {
      parent::__construct($base_url);
    }
    catch (Exception $e) {
      drupal_set_message(t('You must <a href="!url">enter the appropriate feed and player URLs</a> before videos from thePlatform can be browsed or selected.', array('!url' => '/admin/config/services/theplatform')), 'error', FALSE);
    }
  }

  /**
   * Execute the request to thePlatform and get the data back.
   *
   * @return: the object from thePlatform's servers.
   */
  public function execute() {
    $this->cache_key = 'pub_theplatform:'.$this->buildCacheKey();

    $cache = cache_get($this->cache_key, 'cache');

    if($cache && $cache->expire > time()) {
      return $cache->data;
    }

    //  We were not in the cache, now we have to retrieve it.
    try {
      $ttl = variable_get('pub_theplatform_cache_ttl', 300);
      $response = parent::execute();

      $args = $this->query_args;
      $args['categoryReq'] = $this->get_categories;
      sort($args);

      cache_set($this->cache_key, $response, 'cache', time() + $ttl);
      return $response;
    }
    catch (Exception $e) {
      watchdog('thePlatform', $e->getMessage(), array(), WATCHDOG_ERROR);
      drupal_set_message($e->getMessage(), 'error');
    }
  }

  /**
   *  Helper function that will convert settings on here into the cache key.
   *  
   *  Something important to remember here is that the key should be as short as possible so we don't get it truncated and serve errant data.
   *  
   *  @return: Cache key to use.
   */
  protected function buildCacheKey() {
    $fields = $this->fields_to_load;
    sort($fields);

    $k = 'f:'.implode(',', $fields);

    // If we have a refid set, then we go for them as the values to use.
    if($this->refid) {
      $k .= ':g:'.$this->refid;
    }
    else {
      foreach($this->args as $key => $value) {
        $k .= ':'.trim($key, 'by').':'.$value;
      }
    }

    if(strlen($this->sort_field) > 0) {
      $k .= ':s:'.($this->sort_field.($this->sort_desc?'|DESC':''));
    }

    // If we have a range set, use it to limit the number of results in our query.
    if(isset($this->range)) {
      $k .= ':r:'.$this->range;
    }

    $k .= ($this->get_categories?':categoryReq':'');

    return $k;
  }
}

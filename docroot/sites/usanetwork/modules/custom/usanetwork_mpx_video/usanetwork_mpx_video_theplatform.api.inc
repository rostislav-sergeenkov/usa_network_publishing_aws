<?php

/**
 * @file usanetwork_video_theplatform.api.inc
 // stolen and duplicated from pub_theplatform.api.inc
 */


/**
 * Class that describes a request to thePlatform's feeds.
 *
 * The methods are designed to be chained together until the ->execute() call.  That one returns the response data.
 */
class usaPlatformAPIRequest {
  //  These are our basic config elements.
  protected $base_url;      //  Initalized when the class is instantaited.
  protected $args = array();    //  These are added by ->addArg calls (and can be chained).
  protected $refid = 0;     //  Reference ID for a particular video to load the extended metadata for.
  protected $fields_to_load = array();  //  These are the fields that need to come back from the thePlatform servers.
  protected $get_categories = False;
  protected $sort_field = '';
  protected $sort_desc = False;

  /**
   * Construct the object
   *
   * @param base_url: overwrite the base URL when constructing the class. Defaults to the Drupal set value.
   */
  public function __construct($base_url = '') {
    $this->base_url = $base_url;

    if (strlen($this->base_url) == 0) {
      throw new Exception("thePlatform module has not been configured");
    }
  }

   /**
    * Set the range for our query
    * @param $lower_limit: The lower limit for our desired range.
    * @param $upper_limit: The upper limit for our desired range.
    */
   public function setRange($lower_limit = 0, $upper_limit = 100) {
     $this->range = $lower_limit . '-' . $upper_limit;
     return $this;
   }

  /**
   * Set the video's ID that we want to query for.
   *
   * @param $refid: the reference ID that we're going to want to get back.
   *
   * @return: reference to $this for chainability.
   */
  public function setID($refid) {
    // If we have a ref id coming in, we need it to be a number or a string of
    // some length.
    if (is_int($refid) || strlen($refid) > 0) {
      $this->refid = $refid;
    }
    // If we fail these tests, then we assume the user is trying to reset it to
    // nothing. So we remove the filter.
    else {
      $this->refid = 0;
    }
    return $this;
  }

  /**
   * Set that we want to get categories instead.
   *
   * @param $get_categories: boolean for if we should get the categories instead of videos (defaults to true).
   *
   * @return: reference to $this for chainability.
   */
  public function getCategories($get_categories = True) {
    $this->get_categories = $get_categories;
    return $this;
  }

  /**
   * Add an argument to the query we pass to thePlatform
   *
   * @param $name: Name of the filter to apply.
   * @param $value: Value to filter for.
   *
   * @return: reference to $this for chainability
   */
  public function addArg($name, $value) {
    // Remove the value if there is an empty string.
    if (strlen($value) == 0) {
      unset($this->args[$name]);
    }
    // Otherwise set it up.
    else {
      $this->args[$name] = $value;
    }
    return $this;
  }

  /**
   * Add a field that we want to return to the query we pass to thePlatform
   *
   * @param $field: Name of the field to get.
   *
   * @return: reference to $this for chainability
   */
  public function addField($field) {
    $this->fields_to_load[] = $field;
    return $this;
  }

  /**
   * Set the sort field for the query.
   *
   * @param $field: Name of the field to sort on.
   * @param $desc: boolean for asc or desc (True = desc, False = asc)
   *
   * @return: reference to $this for chainability
   */
  public function sort($field, $desc = True) {
    $this->sort_field = $field;
    $this->sort_desc = $desc;
    return $this;
  }

  /**
   *  Helper that will generate the query args for this request.
   *
   *  @return: Array of query args.
   */
  protected function buildQueryArgs() {
    $query_args = array('fields' => implode(',', $this->fields_to_load), 'form' => 'json', 'pretty' => 'true');
    // If we have a refid set, then we go for them as the values to use.
    if($this->refid) {
      $query_args = array_merge($query_args, array('byGuid' => $this->refid));
    }
    else {
      $query_args = array_merge($query_args, $this->args);
    }

    if(strlen($this->sort_field) > 0) {
      $query_args['sort'] = $this->sort_field.($this->sort_desc?'|DESC':'');
    }

    // If we have a range set, use it to limit the number of results in our query.
    if(isset($this->range)) {
      $query_args['range'] = $this->range;
    }

    $this->query_args = $query_args;
    return $query_args;
  }


  /**
   * Execute the request to thePlatform and get the data back.
   *
   * @return: the object from thePlatform's servers.
   */
  public function execute() {
    $query_args = $this->buildQueryArgs();

    $base = $this->base_url.($this->get_categories?'/categories':'');

    $response = drupal_http_request($base . '?' . drupal_http_build_query($query_args));

    if ($response->code == 200 && $response->data) {
      $data = json_decode($response->data);
      if (is_array($data->entries)) {
        return $data->entries;
      }
      else {
        throw new Exception('Unexpected API Response');
      }
    }
    else {
      return (object)array();
    }
  }
}

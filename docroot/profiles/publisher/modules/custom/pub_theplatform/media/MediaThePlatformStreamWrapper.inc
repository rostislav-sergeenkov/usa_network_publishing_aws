<?php

/**
 *  Create an instance like this:
 *  $youtube = new ResourceThePlatformStreamWrapper('theplatform://[guid]');
 */
class MediaThePlatformStreamWrapper extends MediaReadOnlyStreamWrapper {
  protected $base_url = 'http://www.syfy.com/videos/Homepage/vid:';   //  TODO:  Make this work for sites other than syfy.

  function get_vid($uri) {
    preg_match('/([\d]+)/', $uri, $id); //  Extract the ID.
    return (int)($id[0]);   //  We only want the one match, not an array
  }

  function setUri($uri) {
    $this->uri = $uri;
    $this->vid = $this->get_vid($uri);
  }

  public function getExternalUrl() {
    return $this->base_url.$this->vid;
  }

  function getTarget($f) {
    return FALSE;
  }

  static function getMimeType($uri, $mapping = NULL) {
    return 'video/theplatform';
  }

  function getOriginalThumbnailPath() {
    $req = new thePlatformAPIRequest(variable_get('theplatform_feed_url', ''));
    $resp = $req->setID($this->vid)
      ->addField('plmedia$defaultThumbnailUrl')
      ->execute();
    if(is_array($resp) && count($resp) > 0 && isset($resp[0]->{'plmedia$defaultThumbnailUrl'})) {
      // Sometimes MPX will send us invalid URLs like:
      // "{ssl:https:http}://mpxstatic-nbcmpx.nbcuni.com/...jpg". We need to
      // fix the protocol for the ingestion to work.
      // When the root cause is fixed this code may go away.
      $thumbnail_url = $resp[0]->{'plmedia$defaultThumbnailUrl'};
      $thumbnail_url = preg_replace('/(\{.*\})\:\/\/(.*)/', "http://$2", $thumbnail_url);

      return $thumbnail_url;
    }
  }

  function getLocalThumbnailPath() {
    $thumbnail_url = $this->getOriginalThumbnailPath();
    $filename = substr($thumbnail_url, strrpos($thumbnail_url, '/') + 1);
    $local_path = 'public://pub_theplatform/' . $filename;
    if (!file_exists($local_path)) {
      $dirname = drupal_dirname($local_path);
      file_prepare_directory($dirname, FILE_CREATE_DIRECTORY | FILE_MODIFY_PERMISSIONS);
      $response = drupal_http_request($thumbnail_url);
      file_save_data($response->data, $local_path, TRUE);
    }
    return $local_path;
  }
}

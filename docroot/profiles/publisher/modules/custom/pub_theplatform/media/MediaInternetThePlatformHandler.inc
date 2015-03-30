<?php

class MediaInternetThePlatformHandler extends MediaInternetBaseHandler {
  public function parse($embedCode) {
    preg_match('/([\d]+)/', $embedCode, $id); //  Extract the ID.
    $id = (int)($id[0]);   //  We only want the one match, not an array
    return file_stream_wrapper_uri_normalize('theplatform://'.$id);
  }

  public function claim($embedCode) {
    preg_match('/theplatform\:\/+([\d]+)/', $embedCode, $id); //  Extract the ID.
    if (empty($id)) {
      return FALSE;
    }
    $id = $id[1];

    //  Lets make sure the video exists.
    $req = new pubThePlatformAPIRequest(variable_get('theplatform_feed_url', ''));
    $resp = $req->setID($id)
      ->addField('guid')
      ->execute();
    $valid = (isset($resp[0]->guid) && $resp[0]->guid == $id);

    // Throw an error that tells them that we aren't willing to handle this
    // because of a validation error, but would otherwise.
    if(!$valid) {
      return FALSE;
      watchdog('thePlatform', 'thePlatform does not have a video with the GUID: %guid', array('%guid' => $resp[0]->guid));
    }

    return $id;
  }

  public function getFileObject() {
    $uri = $this->parse($this->embedCode);
    $file = file_uri_to_object($uri, TRUE);

    if (empty($file->fid) && $title = $this->getPlatformTitle()) {
      $file->filename = truncate_utf8($title, 255);
    }

    return $file;
  }

  private function getPlatformTitle() {
    $req = new pubThePlatformAPIRequest(variable_get('theplatform_feed_url', ''));

    preg_match('/([\d]+)/', $this->embedCode, $id); //  Extract the ID.
    $id = (int)($id[0]);   //  We only want the one match, not an array

    $resp = $req->setID($id)
      ->addField('title')
      ->execute();

    if(is_array($resp) && count($resp) > 0 && isset($resp[0]->title)) {
      return $resp[0]->title;
    }
    return '<Video Not Found>';
  }
}

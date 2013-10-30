<?php
/**
*
* lyrishq Class
*/

class lyrishq {
var $url = '';
var $lyris_password = '';
var $lyris_site_id = '';
var $lyris_mailing_list_id = '';
var $lyris_demographic_id = '';
var $proxyhost = '';
var $proxyport = '';
var $input_param = '';

/**
*
* lyrishq class constructor
*/

function lyrishq ($url, $lyris_password, $lyris_site_id, $lyris_mailing_list_id, $lyris_demographic_id, $proxyhost = NULL, $proxyport = 80) {
  $this->url = $url;
  $this->lyris_password = $lyris_password;
  $this->lyris_site_id = $lyris_site_id;
  $this->lyris_mailing_list_id = $lyris_mailing_list_id;
  $this->lyris_demographic_id = $lyris_demographic_id;
  if ($proxyhost != NULL) {
    $this->proxyhost = $proxyhost;
  }
  $this->proxyport = $proxyport;
}

/**
*
* Function for adding contact to the mailinglist
*/

function AddContactToMalingList($email, $demographic_value, $type, $activity) {
  $this->input_param = $this->GenerateParams($email, $demographic_value);
  $api_response = $this->LyrisHqCall($this->input_param, $type, $activity);
  preg_match("/<DATA>(.*?)<\/DATA>/", $api_response, $matches);
  if($matches[1] == "Email address already exists") {
    $this->input_param = $this->GenerateParams($email, $demographic_value, 'active');
    $api_response = $this->LyrisHqCall($this->input_param, $type, 'update');
  }
  return $api_response;

}

/**
*
* Function for creating input params for api call
*/

function GenerateParams($email, $demographic_value, $subscribe = NULL) {
  $xml = '';
  if($this->lyris_site_id != ''){
    $xml.= '<SITE_ID>'.$this->lyris_site_id.'</SITE_ID>';
  }
  if($this->lyris_mailing_list_id != ''){
    $xml.= '<MLID>'.$this->lyris_mailing_list_id.'</MLID>';
  }
  if($email != ''){
    $xml.= '<DATA type="email">'.$email.'</DATA>';
  }
  if($demographic_value != null){
      $xml.= '<DATA type="extra" id="ms_option">add</DATA>';
      $xml.= '<DATA type="demographic" id="'.$this->lyris_demographic_id.'">'.$demographic_value.'</DATA>';
  }
  if($subscribe != NULL) {
    $xml.= '<DATA type="extra" id="state">active</DATA>';
  }
  if($this->lyris_password != ''){
    $xml.= '<DATA type="extra" id="password">'.$this->lyris_password.'</DATA>';
  }
  $xmlOutput = '<DATASET>'.$xml.'</DATASET>';
  return $xmlOutput;
}

/**
*
* Function for making curl call to lyrishq API
*/

function LyrisHqCall($params, $type, $activity){
  $param_string = "type=".$type."&activity=".$activity."&input=".urlencode($params);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $this->url);
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  if (!empty($this->proxyhost)) {
    curl_setopt($ch, CURLOPT_PROXY, $this->proxyhost.':'.$this->proxyport);
  }
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $param_string);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $response = curl_exec($ch);
  curl_close($ch);
  return $response;
}

}

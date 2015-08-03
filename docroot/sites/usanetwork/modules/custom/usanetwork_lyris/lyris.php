<?php
require_once('nusoap/nusoap.php');
require_once('nusoap/class.wsdlcache.php');
//require_once('nusoap/class.wsdl.php');

define('LYRIS_VERSION','1.5.2');

define('WSDL_CACHE_LIFETIME',86400);

class lyris {

  /* loathe php4, want private variables */
  var $_client;
  var $_lastErr;
  var $_MemberStatusEnum = Array('normal','confirm','private','expired','held','unsub','referred','needs-confirm','needs-hello','needs-goodbye');
  var $_cache = Array();

  function lyris ($url, $proxyhost = NULL, $proxyport = 80) {
    $cache = new wsdlcache(file_directory_temp(), WSDL_CACHE_LIFETIME);
    $wsdl = $cache->get($url);
    if (!$wsdl) {
      if ($proxyhost != NULL) {
        $wsdl = new wsdl($url,$proxyhost,$proxyport);
      } else {
        $wsdl = new wsdl($url);
      }
      $cache->put($wsdl);
    }

    if ($proxyhost != NULL) {
      $this->_client = new nusoapclient($wsdl,TRUE,$proxyhost,$proxyport);
    } else {
      $this->_client = new nusoapclient($wsdl,TRUE);
    }

    $this->_lastErr = $this->_client->getError();

    if ($this->_lastErr) {
      return(FALSE);
    }

    /* per lyris docs, always validate the API version before proceeding
     I'm not super thrilled with the overhead of an additional soap call, but we'll be safe for now
     */
    /* -- too slow, fuck it
     $remote_version = $this->_client->call('ApiVersion');
     if (LYRIS_VERSION != $remote_version) {
     $this->_lastErr = "Protocol version mismatch.  Received $remote_version, was expecting ".LYRIS_VERSION.".";
     return(FALSE);
     }
     */

    return(TRUE);

  }

  function login ($username,$password) {
    $this->_lastErr = NULL;
    $this->_client->setCredentials($username,$password);
    //as of now, the lyris API does not support validating these before you make a call
    return(TRUE);
  }

  function getError () {
    return($this->_lastErr);
  }

  function GetListID ($list) {
    $this->_lastErr = NULL;
    $r = $this->_client->call('GetListID',Array('ListName' => $list));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return($r); //return the memberID of the user
    }
  }

  function CreateSingleMember ($email, $name, $list) {
    $this->_lastErr = NULL;
    $r = $this->_client->call('CreateSingleMember',Array('EmailAddress' => $email, 'FullName' => $name, 'ListName' => $list));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return($r); //return the memberID of the user
    }
  }

  function CreateList ($list) {
    $this->_lastErr = NULL;
    $r = $this->_client->call(
          'CreateList',
    Array('ListTypeEnumIn' => $list['ListType'],
            'ListName' => $list['ListName'],
            'ShortDescription' => $list['ShortDescription'],
            'AdminName' => $list['AdminName'],
            'AdminEmail' => $list['AdminEmail'],
            'AdminPassword' => $list['AdminPassword'],
            'Topic' => $list['Topic']
    )
    );

    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return($r); //return the listID
    }
  }

  function UpdateMemberStatus ($search,$list,$status) {
    $this->_lastErr = NULL;
    if (array_search($status,$this->_MemberStatusEnum) === FALSE) {
      $this->_lastErr = "'$status' is not a valid status";
      return(FALSE);
    }

    $struct = $this->GetMemberStruct($search,$list);
    if (!$struct) {
      $this->_lastErr="Unable to locate a record for '$search'";
      return(FALSE);
    }
    $r = $this->_client->call('UpdateMemberStatus',Array('SimpleMemberStructIn' => $struct,'MemberStatus' => $status));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    }

    //don't know why the sparklist api doesn't do this automaticaly, but if we are unsubbing them, we need to set the date too for the reports to work.
    if ($status == 'unsub') {
      $this->updateMemberDemographics($search,$list,Array('DateUnsub_' => date('Y-m-d H:i:s')));
    }
    return(TRUE);

  }

  function UpdateMemberPassword ($search,$password) {
    $this->_lastErr = NULL;
    $struct = $this->GetMemberStruct($search,$list);
    if (!$struct) {
      $this->_lastErr="Unable to locate a record for '$search'";
      return(FALSE);
    }
    $r = $this->_client->call('UpdateMemberPassword',Array('SimpleMemberStructIn' => $struct,'NewPassword' => $password));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }

  }

  function UpdateMemberDemographics ($search,$list,$demo) {
    $this->_lastErr = NULL;
    $struct = $this->GetMemberStruct($search,$list);

    if (!$struct) {
      return(FALSE);
    }

    $kva = Array();
    foreach ($demo as $k => $v) {
      array_push($kva,Array('Name' => $k, 'Value' => $v));
    }

    $r = $this->_client->call('UpdateMemberDemographics',Array('SimpleMemberStructIn' => $struct,'DemographicsArray' => $kva));

    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }

  }

  function CopyMember ($search,$list,$to) {
    $this->_lastErr = NULL;
    $info = $this->SelectMembers($search,$list);
    $sms = new SimpleMemberStruct($info['MemberID'],$search,$list);
    $struct = $sms->asStruct();

    if (!$struct || !$info) {
      return(FALSE);
    }

    $r = $this->_client->call('CopyMember',Array('SimpleMemberStructIn' => $struct,'EmailAddress' => $info['EmailAddress'],"FullName" => $info['FullName'],'ListName' => $to));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }

  }

  function UpdateMemberEmail ($search,$list,$email) {
    $this->_lastErr = NULL;
    $struct = $this->GetMemberStruct($search,$list);
    if (!$struct) {
      $this->_lastErr="Unable to locate a record for '$search'";
      return(FALSE);
    }
    $r = $this->_client->call('UpdateMemberEmail',Array('SimpleMemberStructIn' => $struct,'EmailAddress' => $email));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }
  }

  function DeleteMember ($search, $list) {
    $this->_lastErr = NULL;
    $struct = $this->GetMemberStruct($search,$list);
    if (!$struct) {
      $this->_lastErr="Unable to locate a record for '$search'";
      return(FALSE);
    }

    $criteria = Array();
    foreach ($struct as $key => $value) {
      array_push($criteria,"$key = $value");
    }
    $r = $this->_client->call('DeleteMembers',Array('FilterCriteriaArray' => $criteria));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }
  }

  function Unsubscribe ($search, $list) {
    $this->_lastErr = NULL;
    $struct = $this->GetMemberStruct($search,$list);
    if (!$struct) {
      $this->_lastErr="Unable to locate a record for '$search'";
      return(FALSE);
    }

    $r = $this->_client->call('Unsubscribe',Array('SimpleMemberStructArrayIn' => Array($struct)));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return(TRUE);
    }
  }

  /* This function is not part of the core sparklist API, but exists to fix the deficency on EmailonWhatLists
   if optional $status is passed, it will only return lists with that status
   */
  function GetMemberListStatus ($email, $status = NULL, $cache = TRUE) {
    $this->_lastErr = NULL;
    $lists = $this->EmailonWhatLists($email);
    if (!$lists) {
      return(FALSE); //lastErr will be set by EmailonWhatLists()
    }

    if ($cache && array_key_exists("GMLS_$email",$this->_cache)) {
      $rlists = $this->_cache["GMLS_$email"];
    } else {
      $rlists = Array();
      foreach ($lists as $list) {
        $r = $this->_client->call('SelectMembers',Array('FilterCriteriaArray' => Array ("EmailAddress = $email", "ListName = $list")));
        if ($this->_client->fault) {
          $this->_lastErr = $r['faultstring'];
          return(FALSE);
        } else {
          $r = array_shift($r);
          $rlists[$list] = $r['MemberStatus'];
        }
      }
    }

    $this->_cache["GMLS_$email"] = $rlists;

    if ($status != NULL) {
      $func = create_function('$s',"if (\$s == $status) { return(TRUE);}");
      $rlists = array_filter($rlists,$func);
    }

    return($rlists);
  }

  /* Returns all the lists a user is on, REGARDLESS of status.  If a user's status is unsub, they are still "on" the list -- This is rondo, but it's the way the APU works */
  function EmailOnWhatLists ($email, $cache = TRUE) {
    $this->_lastErr = NULL;

    if ($cache && array_key_exists("EOWL_$email",$this->_cache)) {
      return($this->_cache["EOWL_$email"]);
    }

    $r = $this->_client->call('EmailOnWhatLists',Array('EmailAddress' => $email));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      $this->_cache["EOWL_$email"] = $r;
      return($r);
    }
  }

  function SelectMembers ($search,$list) {
    $this->_lastErr = NULL;
    $r = $this->_client->call('SelectMembers',Array('FilterCriteriaArray' => Array ("EmailAddress = $search", "ListName = $list")));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    }

    if (!is_array($r)) {
      return(FALSE);
    }

    $r = array_shift($r);
    if ($r['EmailAddress'] != $search) {
      return(FALSE);
    }

    $demo = $r['Demographics'];
    unset($r['Demographics']);
    foreach ($demo as $d) {
      $r[$d['Name']] = $d['Value'];
    }
    return($r);
  }

  function GetMemberStruct ($search, $list, $cache = TRUE) {
    $this->_lastErr = NULL;

    if ($cache && array_key_exists("GMS_$search"."_$list",$this->_cache)) {
      $sms = $this->_cache["GMS_$search"."_$list"];
      return($sms->asStruct());
    }


    if (strpos($search,'@') > 0) {
      $sms = new SimpleMemberStruct(NULL,$search,$list);
      $struct = $sms->asStruct();
      $r = $this->_client->call('GetMemberID',Array('SimpleMemberStructIn' => $struct));
      if ($this->_client->fault) {
        $this->_lastErr = $r['faultstring'];
        return(FALSE);
      } else {
        $sms->MemberID = $r;
      }
    } else {
      $r = $this->_client->call('GetEmailFromMemberID',Array('MemberID' => $search));
      if ($this->_client->fault) {
        $this->_lastErr = $r['faultstring'];
        return(FALSE);
      } else {
        $sms = new SimpleMemberStruct($search,$r,$list);
        $sms->EmailAddress = $r;
      }
    }
    $this->_cache["GMS_$search"."_$list"] = $sms;
    return($sms->asStruct());
  }

  function CreateSegment($input) {
    $this->_lastErr = NULL;

    $param['SegmentID'] = isset($input['SegmentID']) ? $input['SegmentID'] : null;
    $param['SegmentName'] = isset($input['SegmentName']) ? $input['SegmentName'] : null;
    $param['Description'] = isset($input['Description']) ? $input['Description'] : null;
    $param['SegmentType'] = isset($input['SegmentType']) ? $input['SegmentType'] : 'normal';
    $param['ListName'] = isset($input['ListName']) ? $input['ListName'] : null;
    $param['NumTestRecords'] = isset($input['NumTestRecords']) ? $input['NumTestRecords'] : null;
    $param['ClauseAdd'] = isset($input['ClauseAdd']) ? $input['ClauseAdd'] : null;
    $param['ClauseWhere'] = isset($input['ClauseWhere']) ? $input['ClauseWhere'] : null;
    $param['ClauseAfterSelect'] = isset($input['ClauseAfterSelect']) ? $input['ClauseAfterSelect'] : null;
    $param['ClauseFrom'] = isset($input['ClauseFrom']) ? $input['ClauseFrom'] : null;
    $param['ClauseOrderBy'] = isset($input['ClauseOrderBy']) ? $input['ClauseOrderBy'] : null;
    $param['ClauseSelect'] = isset($input['ClauseSelect']) ? $input['ClauseSelect'] : null;
    $param['AddWhereList'] = isset($input['AddWhereList']) ? $input['AddWhereList'] : null;
    $param['AddWhereMemberType'] = isset($input['AddWhereMemberType']) ? $input['AddWhereMemberType'] : null;
    $param['AddWhereSubType'] = isset($input['AddWhereSubType']) ? $input['AddWhereSubType'] : null;

    $segment = new SegmentStruct ($param);
    $struct = $segment->asStruct();

    if (!$struct) {
      return(FALSE);
    }

    $r = $this->_client->call('CreateSegment', Array('SegmentStructIn' => $struct));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return $r;
    }
  }

  function SendMailing($segment_id, $input, $send_date_time = null) {
    $this->_lastErr = NULL;

    $param['EnableRecency'] = isset($input['EnableRecency']) ? $input['EnableRecency'] : null;
    $param['IsHtmlSectionEncoded'] = isset($input['IsHtmlSectionEncoded']) ? $input['IsHtmlSectionEncoded'] : null;
    $param['Subject'] = isset($input['Subject']) ? $input['Subject'] : null;
    $param['Campaign'] = isset($input['Campaign']) ? $input['Campaign'] : null;
    $param['HtmlSectionEncoding'] = isset($input['HtmlSectionEncoding']) ? $input['HtmlSectionEncoding'] : null;
    $param['HtmlMessage'] = isset($input['HtmlMessage']) ? $input['HtmlMessage'] : null;
    $param['To'] = isset($input['To']) ? $input['To'] : null;
    $param['RecencyWhich'] = isset($input['RecencyWhich']) ? $input['RecencyWhich'] : null;
    $param['ResendAfterDays'] = isset($input['ResendAfterDays']) ? $input['ResendAfterDays'] : null;
    $param['SampleSize'] = isset($input['SampleSize']) ? $input['SampleSize'] : null;
    $param['CharSetID'] = isset($input['CharSetID']) ? $input['CharSetID'] : null;
    $param['ReplyTo'] = isset($input['ReplyTo']) ? $input['ReplyTo'] : null;
    $param['IsTextSectionEncoded'] = isset($input['IsTextSectionEncoded']) ? $input['IsTextSectionEncoded'] : null;
    $param['TextSectionEncoding'] = isset($input['TextSectionEncoding']) ? $input['TextSectionEncoding'] : null;
    $param['Title'] = isset($input['Title']) ? $input['Title'] : null;
    $param['TextMessage'] = isset($input['TextMessage']) ? $input['TextMessage'] : null;
    $param['TrackOpens'] = isset($input['TrackOpens']) ? $input['TrackOpens'] : null;
    $param['RecencyNumberOfMailings'] = isset($input['RecencyNumberOfMailings']) ? $input['RecencyNumberOfMailings'] : null;
    $param['RecencyDays'] = isset($input['RecencyDays']) ? $input['RecencyDays'] : null;
    $param['BypassModeration'] = isset($input['BypassModeration']) ? $input['BypassModeration'] : null;
    $param['Attachments'] = isset($input['Attachments']) ? $input['Attachments'] : null;
    $param['DontAttemptAfterDate'] = isset($input['DontAttemptAfterDate']) ? $input['DontAttemptAfterDate'] : null;
    $param['RewriteDateWhenSent'] = isset($input['RewriteDateWhenSent']) ? $input['RewriteDateWhenSent'] : null;
    $param['From'] = isset($input['From']) ? $input['From'] : null;
    $param['AdditionalHeaders'] = isset($input['AdditionalHeaders']) ? $input['AdditionalHeaders'] : null;
    $param['ListName'] = isset($input['ListName']) ? $input['ListName'] : null;
    $param['DetectHtml'] = isset($input['DetectHtml']) ? $input['DetectHtml'] : null;

    $segment = new MailingStruct ($param);
    $struct = $segment->asStruct();

    if (!$struct) {
      return(FALSE);
    }

    if (isset($send_date_time)) {
      $r = $this->_client->call('ScheduleMailing',
        Array('SegmentID' => $segment_id, 'SendDate' => $send_date_time, 'MailingStructIn' => $struct));
    } else {
      $r = $this->_client->call('SendMailing',
        Array('SegmentID' => $segment_id, 'MailingStructIn' => $struct));
    }
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return $r;
    }
  }

  function SelectSegments ($segment_name, $list) {
    $this->_lastErr = NULL;

    if (isset($segment_name) && !empty($segment_name)) {
      //add the segment name condition only if it is set
      $param[] = "SegmentName = $segment_name";
    }
    $param[] = "ListName = $list";

    $r = $this->_client->call('SelectSegments', Array('FilterCriteriaArray' => $param));
    if ($this->_client->fault) {
      $this->_lastErr = $r['faultstring'];
      return(FALSE);
    } else {
      return($r);
    }
  }
}

class SimpleMemberStruct  {

  var $MemberID;
  var $EmailAddress;
  var $ListName;

  function SimpleMemberStruct ($MemberID = NULL, $EmailAddress = NULL,  $ListName = NULL) {
    $this->MemberID = $MemberID;
    $this->EmailAddress = $EmailAddress;
    $this->ListName = $ListName;
  }

  function asStruct() {
    $struct = Array();
    if ($this->MemberID) {
      $struct['MemberID'] = $this->MemberID;
    }
    if ($this->EmailAddress) {
      $struct['EmailAddress'] = $this->EmailAddress;
    }
    if ($this->ListName) {
      $struct['ListName'] = $this->ListName;
    }
    return($struct);
  }
}

class SegmentStruct  {

  var $SegmentID;
  var $SegmentName;
  var $Description;
  var $SegmentType;
  var $ListName;
  var $NumTestRecords;
  var $ClauseAdd;
  var $ClauseWhere;
  var $ClauseAfterSelect;
  var $ClauseFrom;
  var $ClauseOrderBy;
  var $ClauseSelect;
  var $AddWhereList;
  var $AddWhereMemberType;
  var $AddWhereSubType;


  function SegmentStruct ($param) {
    $this->SegmentID = $param['SegmentID'];
    $this->SegmentName = $param['SegmentName'];
    $this->Description = $param['Description'];
    $this->SegmentType = $param['SegmentType'];
    $this->ListName = $param['ListName'];
    $this->NumTestRecords = $param['NumTestRecords'];
    $this->ClauseAdd = $param['ClauseAdd'];
    $this->ClauseWhere = $param['ClauseWhere'];
    $this->ClauseAfterSelect = $param['ClauseAfterSelect'];
    $this->ClauseFrom = $param['ClauseFrom'];
    $this->ClauseOrderBy = $param['ClauseOrderBy'];
    $this->ClauseSelect = $param['ClauseSelect'];
    $this->AddWhereList = $param['AddWhereList'];
    $this->AddWhereMemberType = $param['AddWhereMemberType'];
    $this->AddWhereSubType = $param['AddWhereSubType'];

  }

  function asStruct() {
    $struct = Array();
    if ($this->SegmentID) {
      $struct['SegmentID'] = $this->SegmentID;
    }
    if ($this->SegmentName) {
      $struct['SegmentName'] = $this->SegmentName;
    }
    if ($this->Description) {
      $struct['Description'] = $this->Description;
    }
    if ($this->SegmentType) {
      $struct['SegmentType'] = $this->SegmentType;
    }
    if ($this->ListName) {
      $struct['ListName'] = $this->ListName;
    }
    if ($this->NumTestRecords) {
      $struct['NumTestRecords'] = $this->NumTestRecords;
    }
    if ($this->ClauseAdd) {
      $struct['ClauseAdd'] = $this->ClauseAdd;
    }
    if ($this->ClauseWhere) {
      $struct['ClauseWhere'] = $this->ClauseWhere;
    }
    if ($this->ClauseAfterSelect) {
      $struct['ClauseAfterSelect'] = $this->ClauseAfterSelect;
    }
    if ($this->ClauseFrom) {
      $struct['ClauseFrom'] = $this->ClauseFrom;
    }
    if ($this->ClauseOrderBy) {
      $struct['ClauseOrderBy'] = $this->ClauseOrderBy;
    }
    if ($this->ClauseSelect) {
      $struct['ClauseSelect'] = $this->ClauseSelect;
    }
    if ($this->AddWhereList) {
      $struct['AddWhereList'] = $this->AddWhereList;
    }
    if ($this->AddWhereMemberType) {
      $struct['AddWhereMemberType'] = $this->AddWhereMemberType;
    }
    if ($this->AddWhereSubType) {
      $struct['AddWhereSubType'] = $this->AddWhereSubType;
    }
    return($struct);
  }
}

class MailingStruct  {

  var $EnableRecency;
  var $IsHtmlSectionEncoded;
  var $Subject;
  var $Campaign;
  var $HtmlSectionEncoding;
  var $HtmlMessage;
  var $To;
  var $RecencyWhich;
  var $ResendAfterDays;
  var $SampleSize;
  var $CharSetID;
  var $ReplyTo;
  var $IsTextSectionEncoded;
  var $TextSectionEncoding;
  var $Title;
  var $TextMessage;
  var $TrackOpens;
  var $RecencyNumberOfMailings;
  var $RecencyDays;
  var $BypassModeration;
  var $Attachments;
  var $DontAttemptAfterDate;
  var $RewriteDateWhenSent;
  var $From;
  var $AdditionalHeaders;
  var $ListName;
  var $DetectHtml;


  function MailingStruct ($param) {
    $this->EnableRecency = $param['EnableRecency'];
    $this->IsHtmlSectionEncoded = $param['IsHtmlSectionEncoded'];
    $this->Subject = $param['Subject'];
    $this->Campaign = $param['Campaign'];
    $this->HtmlSectionEncoding = $param['HtmlSectionEncoding'];
    $this->HtmlMessage = $param['HtmlMessage'];
    $this->To = $param['To'];
    $this->RecencyWhich = $param['RecencyWhich'];
    $this->ResendAfterDays = $param['ResendAfterDays'];
    $this->SampleSize = $param['SampleSize'];
    $this->CharSetID = $param['CharSetID'];
    $this->ReplyTo = $param['ReplyTo'];
    $this->IsTextSectionEncoded = $param['IsTextSectionEncoded'];
    $this->TextSectionEncoding = $param['TextSectionEncoding'];
    $this->Title = $param['Title'];
    $this->TextMessage = $param['TextMessage'];
    $this->TrackOpens = $param['TrackOpens'];
    $this->RecencyNumberOfMailings = $param['RecencyNumberOfMailings'];
    $this->RecencyDays = $param['RecencyDays'];
    $this->BypassModeration = $param['BypassModeration'];
    $this->Attachments = $param['Attachments'];
    $this->DontAttemptAfterDate = $param['DontAttemptAfterDate'];
    $this->RewriteDateWhenSent = $param['RewriteDateWhenSent'];
    $this->From = $param['From'];
    $this->AdditionalHeaders = $param['AdditionalHeaders'];
    $this->ListName = $param['ListName'];
    $this->DetectHtml = $param['DetectHtml'];

  }

  function asStruct() {
    $struct = Array();
    if ($this->EnableRecency) {
      $struct['EnableRecency'] = $this->EnableRecency;
    }
    if ($this->IsHtmlSectionEncoded) {
      $struct['IsHtmlSectionEncoded'] = $this->IsHtmlSectionEncoded;
    }
    if ($this->Subject) {
      $struct['Subject'] = $this->Subject;
    }
    if ($this->Campaign) {
      $struct['Campaign'] = $this->Campaign;
    }
    if ($this->HtmlSectionEncoding) {
      $struct['HtmlSectionEncoding'] = $this->HtmlSectionEncoding;
    }
    if ($this->HtmlMessage) {
      $struct['HtmlMessage'] = $this->HtmlMessage;
    }
    if ($this->To) {
      $struct['To'] = $this->To;
    }
    if ($this->RecencyWhich) {
      $struct['RecencyWhich'] = $this->RecencyWhich;
    }
    if ($this->ResendAfterDays) {
      $struct['ResendAfterDays'] = $this->ResendAfterDays;
    }
    if ($this->SampleSize) {
      $struct['SampleSize'] = $this->SampleSize;
    }
    if ($this->CharSetID) {
      $struct['CharSetID'] = $this->CharSetID;
    }
    if ($this->ReplyTo) {
      $struct['ReplyTo'] = $this->ReplyTo;
    }
    if ($this->IsTextSectionEncoded) {
      $struct['IsTextSectionEncoded'] = $this->IsTextSectionEncoded;
    }
    if ($this->TextSectionEncoding) {
      $struct['TextSectionEncoding'] = $this->TextSectionEncoding;
    }
    if ($this->Title) {
      $struct['Title'] = $this->Title;
    }
    if ($this->TextMessage) {
      $struct['TextMessage'] = $this->TextMessage;
    }
    if ($this->TrackOpens) {
      $struct['TrackOpens'] = $this->TrackOpens;
    }
    if ($this->RecencyNumberOfMailings) {
      $struct['RecencyNumberOfMailings'] = $this->RecencyNumberOfMailings;
    }
    if ($this->RecencyDays) {
      $struct['RecencyDays'] = $this->RecencyDays;
    }
    if ($this->BypassModeration) {
      $struct['BypassModeration'] = $this->BypassModeration;
    }
    if ($this->Attachments) {
      $struct['Attachments'] = $this->Attachments;
    }
    if ($this->DontAttemptAfterDate) {
      $struct['DontAttemptAfterDate'] = $this->DontAttemptAfterDate;
    }
    if ($this->RewriteDateWhenSent) {
      $struct['RewriteDateWhenSent'] = $this->RewriteDateWhenSent;
    }
    if ($this->From) {
      $struct['From'] = $this->From;
    }
    if ($this->AdditionalHeaders) {
      $struct['AdditionalHeaders'] = $this->AdditionalHeaders;
    }
    if ($this->ListName) {
      $struct['ListName'] = $this->ListName;
    }
    if ($this->DetectHtml) {
      $struct['DetectHtml'] = $this->DetectHtml;
    }
    return($struct);
  }
}
?>
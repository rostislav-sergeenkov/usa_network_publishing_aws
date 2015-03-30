<?php

/**
 * USA Network settings form
 */
function usanetwork_feedback_settings_form() {
  $query = db_select("node", "n");
  $query->innerjoin('webform_emails', 'email', 'email.nid = n.nid');
  $query->fields("n", array("nid"));
  $query->fields("email", array("eid"));
  $query->condition("title", "Feedback", '=');
  $query->condition("type", "webform", '=');
  $query->orderBy('nid', 'desc');
  $query->range(0,1);
  $result = $query->execute();
  while($record = $result->fetchObject()) {
    $nid = $record->nid;
    $eid = $record->eid;
  }
  drupal_goto('node/' . $nid . '/webform/emails/' . $eid);
}
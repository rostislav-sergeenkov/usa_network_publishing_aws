<?php
/**
 * @file
 * usa-personalization-content.tpl.php
 *
 * Theme implementation for personalization content
 *
 * Available variables:
 *
 */

?>

<div class="usa-personalization personalization-content" style="height:300px">
  <div class="col">
    col1 lorem ipsum
  </div>
  <div class="col">
     col2 lorem ipsum
  </div>
  <div id="personalization-navigation">
    <div id="personalization-user-info" style="display:none;float:left">
      <div id="personalization-user-avatar"></div>
      <div id="personalization-username"></div>
    </div>
    <ul class="loggedin" style="display:none;float:left">
      <li><a href="javascript:void(0)" class="action-edit-account">Account Settings</a></li>
      <li><a href="javascript:void(0)" class="action-signout">Logout</a></li>
    </ul>
  </div>
  <span class="close">close</span>
</div>

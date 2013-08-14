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

<div class="usa-personalization personalization-wrapper">
  <div id="personalization-main" class="col">
    <?php if($showlist) : ?>
    <ul class="usa-personalization-follow-shows">
      <?php print $showlist; ?>
    </ul>
    <?php endif; ?>
  </div>
  <div id="personalization-nav" class="col">
    <div id="personalization-navigation">
      <div id="personalization-user-info">
        <div id="personalization-user-avatar" class="personalization-avatar"></div>
        <div id="personalization-username"></div>
      </div>
      <ul class="loggedin">
        <li><a href="javascript:void(0)" class="action-edit-account">Account Settings</a></li>
        <li><a href="javascript:void(0)" class="action-signout">Logout</a></li>
      </ul>
    </div>
  </div>
  <span class="close">close</span>
</div>

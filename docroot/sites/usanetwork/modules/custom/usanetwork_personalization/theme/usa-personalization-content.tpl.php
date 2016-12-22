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


$defaultAvatar = '/'.drupal_get_path('module', 'usanetwork_personalization') . '/images/default_avatar_125x125.jpg';
$avatar_html = '<span class="avatar"><img src="'. $defaultAvatar . '"/></span>';
?>

<div class="usa-personalization personalization-wrapper">
  <div id="personalization-main" class="col">
    <header><h3>Edit Favorites</h3></header>
     <div class="personalization-main-item personalization-latest-updates">
    </div>
     <div class="personalization-main-item personalization-my-activity">
     </div>
     <div class="personalization-main-item personalization-friends">
    </div>
    <div class="personalization-main-item personalization-edit-favorites active">
      <?php if($showlist) : ?>
      <ul class="usa-personalization-follow-shows">
        <?php print $showlist; ?>
      </ul>
      <?php endif; ?>
    </div>
    <div class="personalization-main-item personalization-acct-settings">
    </div>
  </div>
  <div id="personalization-sidebar" class="col">
      <div id="personalization-user-info">
        <div id="personalization-user-avatar" class="avatar"><?php print $avatar_html; ?></div>
      </div>
      <div id="personalization-navigation">
        <ul class="personalization-logged-in">
          <li class="personalization-nav-item personalization-latest-updates">Latest Updates</li>
          <li class="personalization-nav-item active personalization-my-activity">My Activity</li>
          <li class="personalization-nav-item personalization-friends">Friends</li>
          <li class="personalization-nav-item personalization-edit-favorites active">Edit Favorites</li>
          <li class="personalization-nav-item personalization-acct-settings">Account Settings</li>
        </ul>
      </div>
  </div>
  <span class="close">close</span>
</div>

<?php 
$avatar_html = '';
if(module_exists('usanetwork_personalization')) {
  $defaultAvatar = '/'.drupal_get_path('module', 'usanetwork_personalization') . '/images/default_avatar_125x125.jpg';
  $avatar_html = '<span id="action-avatar" class="avatar personalization-trigger" style="display: none; color: red;"><img src="' . $defaultAvatar . '"/></span>';
}
?>

<div id="surf-actions">
  <span id="action-signin" class="logged-out-info" style="display: none;">Sign-in</span>
  <?php if ($avatar_html != '') : ?>
  <?php print $avatar_html; ?>
  <?php endif; ?>
  <div class="surf-logged-in">
    <span id="surf-info" class="logged-in-info"></span>
    <ul class="surf-logged-in-actions">
     <!--  <li id="action-edit" class="logged-in-info">Edit Surf Your Profile</li> -->
      <li id="action-signout" class="logged-in-info">Sign Out</li>
    </ul>
  </div>
</div>

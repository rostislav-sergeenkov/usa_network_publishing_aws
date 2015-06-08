<?php
/**
 * @file
 * Tve auth Login Menu.
 */
?>

<div class="tve-help-link signOut" data-ng-if="global.isAuthN">
  <?php print $authbar; ?>
</div>
<div class="tve-help-link signIn no-auth">
  <a href="javascript:void(0)" class="loginButton clean"
     data-ng-if="!global.isAuthN"
     data-ng-click="openLoginWindow()" data-ng-cloak="">
  </a>
  <div class="tve-help-sign ng-scope" data-tve-sign-in-button="" data-ng-if="!global.isAuthN"></div>
</div>

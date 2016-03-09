<?php
/**
 * @file
 * Tve auth login status window.
 *
 * @ingroup tve_auth
 */
?>

<script type="text/ng-template" id="usaLoginModalStatus.html">
  <button ng-click="$dismiss();" class="closeButton"></button>
  <section id="usaLoginStatusModal" class="modalContent" bindonce>
    <div class="status-wrapper">
      <div class="status-verification" data-ng-if="!isAuthenticated">
        <div class="status-title">just a minute while we verify your account</div>
        <div class="status-loader"></div>
      </div>
      <div class="status-success" data-ng-show="isAuthenticated">
        <div class="status-title">success!</div>
        <a ng-href="{{currentProvider.mvpd_url}}" class="provider-link" target="_blank">
          <img ng-if="isAuthenticated && currentProvider && !isRetina" title="{{currentProvider.title}}" alt="{{currentProvider.title}}" ng-src="{{currentProvider.mvpd_logo}}" />
          <img ng-if="isAuthenticated && currentProvider && isRetina" title="{{currentProvider.title}}" alt="{{currentProvider.title}}" ng-src="{{currentProvider.mvpd_logo_2x}}" />
        </a>
      </div>
    </div>
  </section>
</script>

<div class="video-block">
  <div
    class="player-wrapper right-rail-line"
    data-usa-tve-player-container
    data-entitlement="1"
    data-is-live="1"
    data-is-full-episode="0"
    data-ng-class="{'no-mobile-device': !isMobile}">
    <div class="node usanetwork-aspot player">
      <div class="video-player-wrapper section-auth" data-ng-if="!removePlayerThumbnail">
        <div class="player-thumbnail" data-ng-class="{'hide-section': !playerThumbnail}">
          <div class="video-loading" data-ng-class="{'show-spinner': user.isAuthenticated}"></div>
          <img src="<?php print $default_image; ?>" alt=""/>
        </div>
        <div class="auth-msg-wrap" data-ng-if="!user.isAuthenticated">
          <div class="locked-msg">
            <span class="first-line"><?php print t('Please sign in with your TV provider to unlock live tv viewing.'); ?></span>
          </div>
          <div id="player-login">
            <a href="javascript:void(0)" class="loginButton" data-ng-click="openLoginWindow()">
              <div class="sign-in-wrapper">
                <span class="sign-in-button">
                  <?php print t('sign in and watch'); ?>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="video-player-wrapper section-player" data-ng-class="{'show-section': !playerThumbnail}">
        <div data-usa-player-is-live<?php !empty($live_pdk) ? print ' data-pdk="' . $live_pdk . '"' : ''; ?><?php !empty($live_logLevel) ? print ' data-logLevel="' . $live_logLevel . '"' : ''; ?>>
          <iframe allowfullscreen="" id="videoplayer" width="100%" height="100%" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
  <?php if (!empty($taboola_block)) : ?>
    <?php print $taboola_block; ?>
  <?php endif; ?>
  <div class="consum-sidebar">
    <div class="node-wrapper advert">
      <?php if ($live_advert): ?>
        <div class="advertisement">
          <?php print $live_advert; ?>
        </div>
      <?php endif; ?>
    </div>
    <div class="download-app">
      <div class="download-app-wrapper">
        <div class="image-block"></div>
        <div class="text-block"><?php print t('Get USA NOW to watch full episodes from any device.'); ?></div>
        <div class="download-button show-color">
         <?php print $download_link; ?>
        </div>
      </div>
    </div>
  </div>
</div>

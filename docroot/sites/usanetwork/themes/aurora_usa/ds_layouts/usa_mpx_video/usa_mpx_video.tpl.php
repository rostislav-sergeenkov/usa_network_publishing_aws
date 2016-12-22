<div class="video-block">
  <div
    class="player-wrapper"
    data-usa-tve-player-container
    data-entitlement="<?php print $entitlement; ?>"
    data-is-live="0"
    data-show-title="<?php print (!empty($show_title)) ? $show_title : ''; ?>"
    data-episode-title="<?php print $filename; ?>"
    data-mpx-guid="<?php print $mpx_guid; ?>"
    data-episode-rating="<?php (!empty($episode_rating)) ? print $episode_rating : NULL; ?>"
    data-next-episode-url="<?php print $next_video_url; ?>"
    data-show-end-card="<?php print !empty($endcard_enabled) ? '1' : '0'; ?>"
    data-end-card-time="<?php print !empty($endcard_time) ? $endcard_time : 'null'; ?>"
    data-is-full-episode="<?php print $full_episode ?>"
    data-ng-class="{'no-mobile-device': !isMobile}">
    <div class="node usanetwork-aspot player">
      <?php if (!empty($video_inactive)): ?>
        <div class="video-player-wrapper inactive">
          <div class="inner-wrap">
            <div class="inner">
              <?php print $video_inactive; ?>
            </div>
          </div>
        </div>
      <?php elseif ($lock_video): ?>
        <div class="video-player-wrapper section-auth" data-ng-if="!removePlayerThumbnail">
          <div class="player-thumbnail" data-ng-class="{'hide-section': !playerThumbnail}">
            <div class="video-loading" data-ng-class="{'show-spinner': user.isAuthenticated}"></div>
            <div class="asset-img" data-picture data-alt="" data-class="tile-img">
              <?php if (!empty($image_mobile)): ?>
                <div data-src="<?php print $image_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image_desktop)): ?>
                <div data-media="(min-width: 1280px)" data-src="<?php print $image_desktop; ?>"></div>
                <!--[if (IE 8) & (!IEMobile)]>
                <div data-src="<?php print $image_desktop; ?>"></div>
                <![endif]-->
              <?php endif; ?>
              <?php if (!empty($image_desktop)): ?>
                <noscript><img src="<?php print $image_desktop; ?>" width="2880" height="1620" alt="" title="" /></noscript>
              <?php endif; ?>
            </div>
          </div>
          <div class="auth-msg-wrap" data-ng-if="!user.isAuthenticated">
            <div class="locked-msg">
              <span class="first-line"><?php print t('sign in with your TV provider to watch full episodes.'); ?></span>
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
          <?php print render($video); ?>
            <!--  start endcart  -->
            <?php if (!empty($endcard_enabled)) : ?>
              <?php print $endcard_template; ?>
            <?php endif; ?>
            <!--  end endcart -->
        </div>
        <!--  start new design  -->
        <?php if (!empty($is_new_design)) : ?>
          <div class="video-player-helper">
            <?php print $new_design_bar; ?>
          </div>
        <?php endif; ?>
        <!--  end new design  -->
      <?php else: ?>
        <div class="video-player-wrapper section-auth" data-ng-if="!removePlayerThumbnail">
          <div class="player-thumbnail" data-ng-class="{'hide-section': !playerThumbnail}">
            <div class="video-loading show-spinner" data-ng-hide="hidePlayerSpinner"></div>
            <div class="asset-img" data-picture data-alt="" data-class="tile-img">
              <?php if (!empty($image_mobile)): ?>
                <div data-src="<?php print $image_mobile; ?>"></div>
              <?php endif; ?>
              <?php if (!empty($image_desktop)): ?>
                <div data-media="(min-width: 1280px)" data-src="<?php print $image_desktop; ?>"></div>
                <!--[if (IE 8) & (!IEMobile)]>
                <div data-src="<?php print $image_desktop; ?>"></div>
                <![endif]-->
              <?php endif; ?>
              <?php if (!empty($image_desktop)): ?>
                <noscript><img src="<?php print $image_desktop; ?>" width="2880" height="1620" alt="" title="" /></noscript>
              <?php endif; ?>
            </div>
          </div>
        </div>
        <div class="video-player-wrapper section-player" data-ng-class="{'show-section': !playerThumbnail}">
          <?php print render($video); ?>
          <!--  start endcart  -->
          <?php if (!empty($endcard_enabled)) : ?>
            <?php print $endcard_template; ?>
          <?php endif; ?>
          <!--  end endcart -->
        </div>
        <!--  start new design  -->
        <?php if (!empty($is_new_design)) : ?>
          <div class="video-player-helper">
            <?php print $new_design_bar; ?>
          </div>
        <?php endif; ?>
        <!--  end new design  -->
      <?php endif; ?>
    </div>
  </div>
  <div class="consum-sidebar">
      <?php if (!empty($clips_block)): print $clips_block; endif; ?>
  </div>
</div>

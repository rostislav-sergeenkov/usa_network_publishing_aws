<div class="video-block">
  <div
    class="player-wrapper <?php print ($is_live) ? ' right-rail-line' : ''; ?>"
    data-usa-tve-player-container
    data-entitlement="<?php print $entitlement; ?>"
    data-is-live="<?php print $is_live; ?>"
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
        <div class="video-player-wrapper section-auth"
             data-ng-if="!removePlayerThumbnail">
          <div class="player-thumbnail"
               data-ng-class="{'hide-section': !playerThumbnail}">
            <div class="video-loading"
                 data-ng-class="{'show-spinner': user.isAuthenticated}"></div>
            <?php if (!$is_live): ?>
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
            <?php else: ?>
              <img
                src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>"
                alt=""/>
            <?php endif; ?>
          </div>
          <div class="auth-msg-wrap" data-ng-if="!user.isAuthenticated">
            <div class="locked-msg">
              <?php if ($is_live): ?>
                <span
                  class="first-line"><?php print t('Please sign in with your TV provider to unlock live tv viewing.'); ?></span>
              <?php else: ?>
                <span
                  class="first-line"><?php print t('sign in with your TV provider to watch full episodes.'); ?></span>
              <?php endif; ?>
            </div>
            <div id="player-login">
              <a href="javascript:void(0)" class="loginButton"
                 data-ng-click="openLoginWindow()">
                <div class="sign-in-wrapper">
                <span class="sign-in-button">
                  <?php print t('sign in and watch'); ?>
                </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="video-player-wrapper section-player"
             data-ng-class="{'show-section': !playerThumbnail}">
          <?php if ($is_live): ?>
            <div data-usa-player-is-live<?php !empty($live_pdk) ? print ' data-pdk="' . $live_pdk . '"' : ''; ?><?php !empty($live_logLevel) ? print ' data-logLevel="' . $live_logLevel . '"' : ''; ?>>
              <iframe allowfullscreen="" id="videoplayer" width="100%" height="100%" frameborder="0"></iframe>
            </div>
          <?php else: ?>
            <?php print render($video); ?>
            <!--  start endcart  -->
            <?php if (!empty($endcard_enabled)) : ?>
              <?php print $endcard_template; ?>
            <?php endif; ?>
            <!--  end endcart -->
          <?php endif; ?>
        </div>
        <!--  start new design  -->
        <?php if (!empty($is_new_design)) : ?>
          <div class="video-player-helper">
            <?php print $new_design_bar; ?>
          </div>
        <?php endif; ?>
        <!--  end new design  -->
      <?php else: ?>
        <div class="video-player-wrapper section-auth"
             data-ng-if="!removePlayerThumbnail">
          <div class="player-thumbnail"
               data-ng-class="{'hide-section': !playerThumbnail}">
            <div class="video-loading show-spinner"
                 data-ng-hide="hidePlayerSpinner"></div>
            <?php if (!$is_live): ?>
              <?php $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings' => array('image_style' => 'video_full')), '');
              print theme_image(array('path' => image_style_url($image['#style_name'], $image['#path'])));
              ?>
            <?php else: ?>
              <img
                src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>"
                alt=""/>
            <?php endif; ?>
          </div>
        </div>
        <div class="video-player-wrapper section-player"
             data-ng-class="{'show-section': !playerThumbnail}">
          <?php if ($is_live): ?>
            <div data-usa-player-is-live>
              <iframe allowfullscreen="" id="videoplayer" width="100%"
                      height="100%" frameborder="0"></iframe>
            </div>
            <?php //$video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
          <?php else: ?>
            <?php print render($video); ?>
            <!--  start endcart  -->
            <?php if (!empty($endcard_enabled)) : ?>
              <?php print $endcard_template; ?>
            <?php endif; ?>
            <!--  end endcart -->
          <?php endif; ?>
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
    <?php if ($is_live): ?>
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
          <div
            class="text-block"><?php print t('Get USA NOW to watch full episodes from any device.'); ?></div>
          <div class="download-button show-color">
            <a href="/app" target="_self">
              <?php print t('Download the app'); ?>
            </a>
          </div>
        </div>
      </div>
    <?php else: ?>
      <?php if (!empty($clips_block)): print $clips_block; endif; ?>
    <?php endif; ?>
  </div>
</div>

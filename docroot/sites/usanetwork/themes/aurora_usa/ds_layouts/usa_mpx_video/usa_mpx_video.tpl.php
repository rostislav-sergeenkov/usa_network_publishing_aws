<?php $next_video = array_shift($endcard) ?>
<div class="video-block">
  <div class="player-wrapper"
       data-usa-tve-player-container
       data-entitlement="<?php print $entitlement; ?>"
       data-is-live="<?php print $is_live; ?>"
       data-show-title="<?php print (!empty($show_title)) ? $show_title : ''; ?>"
       data-episode-title="<?php print $filename; ?>"
       data-mpx-guid="<?php print $mpx_guid; ?>"
       data-episode-rating="<?php print $episode_rating; ?>"
       data-show-end-card="<?php print !empty($endcard_enabled) ? '1' : '0'; ?>"
       data-end-card-time="<?php print !empty($endcard_time) ? $endcard_time : 'null'; ?>"
       data-ng-class="{'no-mobile-device': !isMobile}">
    <div class="node usanetwork-aspot player">
      <?php if (!empty($video_inactive)): ?>
        <div class="video-player-wrapper inactive">
          <?php print $video_inactive; ?>
        </div>
      <?php elseif ($lock_video): ?>
        <div class="tve-help">
          <div class="tve-msg">By signing in with your TV provider you get
            access to full<br/>episodes the day after they
            air!
          </div>
          <div class="tve-download">To unlock full episodes you can select an
            episode to sign in<br/>- or -<br/>DOWNLOAD THE
            USA NOW APP
          </div>
          <div class="tve-download-link">
            <a
              href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher">
              <img
                src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png"
                alt=""/>
            </a>
            <a href="http://www.usanetwork.com/usanow">
              <img src="/sites/usanetwork/themes/aurora_usa/images/usanow.png"
                   alt=""/>
            </a>
            <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8">
              <img src="/sites/usanetwork/themes/aurora_usa/images/appstore.png"
                   alt=""/>
            </a>
          </div>
          <div class="tve-close">
            <img src="/sites/usanetwork/themes/aurora_usa/images/close.png"
                 alt=""/>
            Close
          </div>
        </div>
        <div class="video-player-wrapper" data-ng-if="!user.isAuthenticated">
          <div class="locked-msg">
            <?php if ($is_live): ?>
              <span
                class="first-line"><?php print t('Please sign in with your TV provider to unlock live tv viewing.'); ?></span>
            <?php else: ?>
              <span
                class="first-line"><?php print t('sign in with your TV provider to watch full episodes.'); ?></span>
            <?php endif; ?>
          </div>
          <div id="player">
            <a href="javascript:void(0)" class="loginButton"
               data-ng-click="openLoginWindow()">
              <?php if (!$is_live): ?>
                <?php $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings' => array('image_style' => 'video_full')), '');
                print drupal_render($image);
                ?>
              <?php else: ?>
                <img
                  src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>"
                  alt=""/>
              <?php endif; ?>
              <div class="sign-in-wrapper">
                <span class="sign-in-button">
                  <?php print t('sign in and watch'); ?>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div class="video-player-wrapper" data-ng-show="user.isAuthenticated">
          <?php if ($is_live): ?>
            <iframe allowfullscreen="" id="videoplayer" width="100%"
                    data-usa-player-is-live height="100%"
                    frameborder="0"></iframe>
            <?php //$video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
          <?php else: ?>
            <?php print render($video); ?>
            <!--  start endcart  -->
            <?php if (!empty($endcard_enabled)) : ?>
              <?php print $endcard_template; ?>
            <?php endif; ?>
            <!--  end endcart -->
          <?php endif; ?>
          <?php if (!empty($watchwith) && !empty($ww_airing_id)) : ?>
            <div ng-non-bindable>
              <div id="wwRootContainer">
                <watchwith
                  airing-id="<?php print $ww_airing_id; ?>"
                  access-key="<?php print variable_get('usanetwork_ww_access_key', 'SBSXJZHX4R5'); ?>"
                  player-element="#pdk-player"
                  player-type="mpx">
                </watchwith>
              </div>
            </div>
          <?php endif; ?>
        </div>
        <?php
      else: ?>
        <div class="video-player-wrapper">
          <?php if ($is_live): ?>
            <iframe allowfullscreen="" id="videoplayer" width="100%"
                    data-usa-player-is-live height="100%"
                    frameborder="0"></iframe>
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
      <?php if (!empty($clips_block)): print $clips_block; endif; ?>
    <?php endif; ?>
  </div>
</div>

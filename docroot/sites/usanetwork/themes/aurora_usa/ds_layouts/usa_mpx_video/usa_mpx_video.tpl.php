<div class="video-block">
  <div class="player-wrapper">
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
              href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img
                src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png"
                alt=""/></a>
            <a href="http://www.usanetwork.com/usanow"><img
                src="/sites/usanetwork/themes/aurora_usa/images/usanow.png"
                alt=""/></a>
            <a
              href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img
                src="/sites/usanetwork/themes/aurora_usa/images/appstore.png"
                alt=""/></a>
          </div>
          <div class="tve-close"><img
              src="/sites/usanetwork/themes/aurora_usa/images/close.png"
              alt=""/>Close
          </div>
        </div>
        <div class="video-player-wrapper" data-ng-if="!global.isAuthN">
          <div class="locked-msg">
            <?php if ($is_live): ?>
              <span
                class="first-line"><?php print t('Please sign in with your TV provider to unlock live tv viewing.'); ?></span>
            <?php else: ?>
              <span
                class="first-line"><?php print t('Please sign in with your TV provider to unlock this episode.'); ?></span>
            <?php endif; ?>
          </div>
          <div id="player">
            <a href="javascript:void(0)" class="loginButton clean"
               data-ng-if="!global.isAuthN"
               data-ng-click="openLoginWindow()" data-ng-cloak="">
              <?php if (!$is_live): ?>
                <?php $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings' => array('image_style' => 'video_full')), '');
                print drupal_render($image);
                ?>
              <?php else: ?>
                <img
                  src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>"
                  alt=""/>
              <?php endif; ?>
            </a>
          </div>
        </div>
        <div class="video-player-wrapper" data-ng-show="global.isAuthN">
          <?php if ($is_live): ?>
            <?php $video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
          <?php else: ?>
            <?php
            $video = theme('pub_mpx_video', array(
              'file' => $file,
              'pub_mpx_player_parameters' => array(
                'autoPlay' => 'true',
                'form' => 'html'
              )
            ));
            ?>
          <?php endif; ?>
          <?php print $video; ?>
        </div>
      <?php
      else: ?>
        <div class="video-player-wrapper">
          <?php if ($is_live): ?>
            <?php $video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
          <?php else: ?>
            <?php
            $video = theme('pub_mpx_video', array(
              'file' => $file,
              'pub_mpx_player_parameters' => array(
                'autoPlay' => 'true',
                'form' => 'html'
              )
            ));
            ?>
          <?php endif; ?>
          <?php print $video; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
  <div class="consum-sidebar">
    <div class="node-wrapper advert">
      <div class="advertisement">
      </div>
    </div>
    <?php if ($is_live): ?>
      <div class="download-app">
        <div class="download-app-wrapper">
          <div class="image-block"></div>
          <div class="text-block"><?php print t('Get USA NOW to watch full episodes from any device.'); ?></div>
          <div class="download-button show-color"><?php print t('Download the app'); ?></div>
        </div>
      </div>
    <?php else: ?>
      <div class="download-app">
        <div class="download-app-wrapper">
          <div class="image-block"></div>
          <div class="text-block"><?php print t('Get USA NOW to watch full episodes from any device.'); ?></div>
          <div class="download-button show-color"><?php print t('Download the app'); ?></div>
        </div>
      </div>
      <div class="clips-block">
        <?php if (!empty($clips_block)): print $clips_block; endif;?>
      </div>
      <!-- change link to special video page for show-->
      <div class="more-clips show-color">
        <a href="/videos"><?php print t('View all video'); ?></a>
      </div>
    <?php endif; ?>
  </div>
</div>


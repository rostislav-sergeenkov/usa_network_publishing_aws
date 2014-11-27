<div id="main">
  <div class="video-block">
    <div class="player-wrapper">
      <div class="node usanetwork-aspot player">
<?php if ($video_inactive): ?>
          <div class="video-player-wrapper inactive">
  <?php print $video_inactive; ?>
          </div>
<?php elseif ($lock_video): ?>
          <div class="tve-help">
            <div class="tve-msg">By signing in with your TV provider you get access to full<br/>episodes the day after they
              air!
            </div>
            <div class="tve-download">To unlock full episodes you can select an episode to sign in<br/>- or -<br/>DOWNLOAD THE
              USA NOW APP
            </div>
            <div class="tve-download-link">
              <a href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img
                  src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" alt=""/></a>
              <a href="http://www.usanetwork.com/usanow"><img
                  src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" alt=""/></a>
              <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img
                  src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" alt=""/></a>
            </div>
            <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" alt=""/>Close</div>
          </div>
          <div class="video-player-wrapper" data-ng-if="!global.isAuthN">
            <div class="locked-msg">
                   <?php if ($is_live): ?>
                <span class="first-line"><?php print t('Please sign in with your TV provider to unlock live tv viewing.'); ?></span>
                   <?php else: ?>
                <span class="first-line"><?php print t('Please sign in with your TV provider to unlock this episode.'); ?></span>
                <?php endif; ?>
            </div>
            <div id="player">
              <a href="javascript:void(0)" class="loginButton clean" data-ng-if="!global.isAuthN"
                 data-ng-click="openLoginWindow()" data-ng-cloak="">
            <?php if (!$is_live): ?>
              <?php $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings' => array('image_style' => 'video_full')), '');
              print drupal_render($image);
              ?>
            <?php else: ?>
                  <img src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>" alt=""/>
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
      'pub_mpx_player_parameters' => array('autoPlay' => 'true', 'form' => 'html')
    ));
    ?>
            <?php endif; ?>
            <?php print $video; ?>
          </div>
          <div class="tve-help-link signIn">
            <div class="tve-help-sign" data-tve-sign-in-button="" data-ng-if="!global.isAuthN"><img
                src="/sites/usanetwork/themes/aurora_usa/images/info_blue.png" alt=""/>Why do I have to sign in?
            </div>
          </div>
          <div class="tve-help-link signOut <?php print (!$is_live)
                  ? 'not-live'
                  : 'live'  ?>"
               data-ng-if="global.isAuthN"><?php print drupal_render($links); ?></div>
<?php else: ?>
          <div class="video-player-wrapper">
  <?php if ($is_live): ?>
    <?php $video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
  <?php else: ?>
    <?php
    $video = theme('pub_mpx_video', array(
      'file' => $file,
      'pub_mpx_player_parameters' => array('autoPlay' => 'true', 'form' => 'html')
    ));
    ?>
  <?php endif; ?>
  <?php print $video; ?>
          </div>
<?php endif; ?>
      </div>
      <div class="coming-up-next">
        <div class="prev-video">
          <div class="video-title">Up next</div>
          <div class="asset-img">
            <img src="/proto/images/video_coming_up_next.jpg" alt="">

            <div class="img-shadow"></div>
            <div class="starts-in">Starts in</div>
          </div>
        </div>
        <div class="prev-disc">
          <div class="node node-usanetwork-promo show-suits">
            <div class="meta-wrap">
              <div class="meta">
                <div class="caption">Suits</div>
                <div class="title">Laveraged</div>
                <div class="additional"><span>S4 Episode 4</span> 44:31</div>
                <div class="description">
                  Mike moves to a hostile takeover of Gillis Industries. On the other side, Harvey and Louis pull out all
                  the stops to make sure they win this takeover fight, and things takea personal turn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-chat">
        <div class="node node-usanetwork-promo <?php print $show_css_class; ?> social-usa">
          <div class="join">join the conversation</div>
          <a href="javascript:void(0)">
            <div class="meta-wrap">
              <div class="meta">
                <div class="meta-text">Does Harvey owe Mike a warning?</div>
                <div class="meta-additional">2,954 fans talking</div>
              </div>
            </div>
          </a>

          <div class="bottom-spoiler"></div>
        </div>
        <div class="form-wrapper">
          <form action="#" method="post" class="form-promo">
            <div class="text-item">
              <input type="text" class="form-text">
            </div>
            <div class="submit-item">
              <input type="submit" value="submit" class="form-submit">
            </div>
          </form>
        </div>
        <div class="carousel-vertical chat">
          <ul>
            <li class="first">
              <div class="chat-comment">
                <div class="meta-wrap">
                  <div class="meta">
                    <div class="meta-name">Adam bernstein</div>
                    <div class="meta-comment time">1 minute ago</div>
                    <div class="meta-text">@ShawnMendes #TeamMike or #TeamHarvey? @Suits_USA</div>
                  </div>
                </div>
                <img src="/proto/images/avatars/avatar_1.png" alt="">
              </div>
            </li>
            <li>
              <div class="chat-comment">
                <div class="meta-wrap">
                  <div class="meta">
                    <div class="meta-name">Eric Olsen</div>
                    <div class="meta-comment time">10 minute ago</div>
                    <div class="meta-text">@HarveyS_Suits if Mike ever surpassed you, I'll be overly disappointed.... #suits
                      #teamharvey
                    </div>
                  </div>
                </div>
                <img src="/proto/images/avatars/avatar_2.png" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="consum-sidebar">
      <div class="node-wrapper advert">
        <div class="advertisement">
          <a href="javascript:void(0)">
            <img src="/proto/images/ad_lexus_309x258.png" alt="">
          </a>
        </div>
      </div>
      <div class="social">
        <div class="node node-usanetwork-promo <?php print $show_css_class; ?> social-usa">
          <a href="javascript:void(0)">
            <div class="meta-wrap">
              <div class="meta">
                <div class="meta-comment time">15 minutes ago</div>
                <div class="meta-social-title">@usa_network</div>
                <div class="meta-additional">2,954 fans talking</div>
                <div class="meta-text">Does Harvey owe Mike a warning?</div>
                <div class="meta-icon"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="asset-img">
          <img src="/proto/images/consum_social-block_2500.png">
        </div>
      </div>
      <div class="social-more">
        <a href="javascript:void(0)" alt="">
          Join the conversation
        </a>
      </div>
      <div class="node-wrapper promo video-link">
        <div class="node node-usanetwork-promo <?php print $show_css_class; ?>">
          <a href="<?php print $url; ?>">
            <div class="asset-img"><?php print $video_image; ?></div>
            <div class="meta-back"></div>
            <div class="meta-wrapper">
              <div class="meta-icon play-icon"></div>
              <div class="title-overlay meta">
                <div class="title"><?php print $file->filename; ?></div>
                <?php if (isset($season_number) && isset($episode_number)): ?>
                <div class="additional"><span>S<?php print $season_number; ?> Episode <?php print $episode_number; ?></span> <?php print $time; ?></div>
                <?php endif; ?>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <a href="javascript:void(0)" class="resize-video-button resize-button"></a>
  </div>
</div>

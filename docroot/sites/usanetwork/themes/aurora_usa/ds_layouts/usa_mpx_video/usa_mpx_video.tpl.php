<div class="<?php print $classes; ?> video usa-video featured-asset premium-asset clearfix" data-tve-player>
  <div class="companionContainer">
    <?php if ($ad_dart && $ad_dart != "&nbsp;"): ?>
      <div class="ad_dart" data-ng-show="isDartReq"><?php print $ad_dart; ?></div>
    <?php endif; ?>
    <?php if ($ad_lead && $ad_lead != "&nbsp;"): ?>
      <div class="ad_lead" data-ng-show="isFreeWheelReq"><?php print $ad_lead; ?></div>
    <?php endif; ?>
  </div>
  <div class="meta">
    <div class="meta-head">
      <?php if ($is_live): ?>
        <div class="show-title clearfix">
          <?php if ($on_now_show): ?><h1 class="show-name"><?php print $on_now_show; ?></h1><?php endif; ?>
          <?php if ($on_now_tune_in): ?><h2 class="tune-in"><?php print $on_now_tune_in; ?></h2><?php endif; ?>
        </div>
      <?php else: ?>
        <?php if ($show && $show != "&nbsp;"): ?><h2 class="show-name"><?php print $show; ?></h2><?php endif; ?>
        <?php if (!empty($h1) && $h1 != "&nbsp;"): ?><h1
          class="episode-title"><?php print strip_tags($h1); ?></h1><?php endif; ?>
        <div class="details">
          <?php if ($season && $season != "&nbsp;"): ?><span
            class="season-info"><?php print $season; ?></span><?php endif; ?>
          <?php if ($episode && $episode != "&nbsp;"): ?><span
            class="episode-info"><?php print $episode; ?></span><?php endif; ?>
          <?php if ($airdate && $airdate != "&nbsp;"): ?><span
            class="episode-info"><?php print $airdate; ?></span><?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
  <?php if ($video_inactive): ?>
    <div class="video-player-wrapper inactive">
      <?php print $video_inactive;?>
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
            print drupal_render($image); ?>
          <?php else: ?>
            <img src="<?php print '/' . path_to_theme() . '/images/usa_liveTV.jpg'; ?>" alt=""/>
          <?php endif; ?>
        </a>
      </div>
    </div>
    <div class="video-player-wrapper" data-ng-show="global.isAuthN">



      <?php if($is_live): ?>
        <iframe allowfullscreen="" id="videoplayer" width="100%" height="100%" frameborder="0"></iframe>
        <?php //$video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
      <?php else: ?>
        <?php $video = theme('pub_mpx_video', array(
          'file' => $file,
          'pub_mpx_player_parameters' => array('autoPlay' => 'true', 'form' => 'html')
        )); ?>
      <?php endif; ?>
      <?php print $video; ?>
    </div>

    <div class="tve-help-link signIn">
      <div class="tve-help-sign" data-tve-sign-in-button="" data-ng-if="!global.isAuthN"><img
          src="/sites/usanetwork/themes/aurora_usa/images/info_blue.png" alt=""/>Why do I have to sign in?
      </div>
    </div>
    <div class="tve-help-link signOut <?php print (!$is_live) ? 'not-live' : 'live' ?>"
         data-ng-if="global.isAuthN"><?php print drupal_render($links); ?></div>
  <?php else: ?>
    <div class="video-player-wrapper">
      <?php if($is_live):?>
        <?php $video = theme('usanetwork_tve_live_video', array('file' => $file)); ?>
      <?php else:?>
        <?php $video = theme('pub_mpx_video', array(
          'file' => $file,
          'pub_mpx_player_parameters' => array('autoPlay' => 'true', 'form' => 'html')
        )); ?>
      <?php endif; ?>
      <?php print $video; ?>
    </div>
  <?php endif; ?>

  <?php if ($is_live): ?>
    <div class="description">
      <?php if ($on_now_title): ?><h3 class="title"><?php print $on_now_title; ?></h3><?php endif; ?>
      <?php if ($on_now_description): ?><?php print $on_now_description; ?><?php endif; ?>
      <?php if ($on_now_rating): ?>
        <div class="rating"><?php print $on_now_rating; ?></div><?php endif; ?>
      <?php if ($description && $description != "&nbsp;"): ?><?php print $description; ?><?php endif; ?>
    </div>
  <?php else: ?>
    <?php if (!empty($watchwith_sidecar)): ?>
      <div class="sidecarSection" data-ng-show="!isMobile <?php if ($lock_video) {
        print '&& global.isAuthN';
      } ?>">
        <?php print $watchwith_sidecar; ?>
      </div>
    <?php endif; ?>
    <?php if ($description && $description != "&nbsp;"): ?>
      <div class="description"><?php print $description; ?></div><?php endif; ?>
  <?php endif; ?>
  <?php if ($ad_comp && $ad_comp != "&nbsp;"): ?>
    <div class="ad"><?php print $ad_comp; ?></div><?php endif; ?>
</div>

<div class="<?php print $classes;?> video usa-video featured-asset premium-asset clearfix" data-tve-player>
  <div class="companionContainer">
    <?php if ($ad_dart && $ad_dart != "&nbsp;"): ?>
      <div class="ad_dart" data-ng-show="isDartReq"><?php print $ad_dart; ?></div>
    <?php endif;  ?>
    <?php if ($ad_lead && $ad_lead != "&nbsp;"): ?>
      <div class="ad_lead" data-ng-show="isFreeWheelReq"><?php print $ad_lead; ?></div>
    <?php endif;  ?>
  </div>
  <div class="meta">
    <div class="meta-head">
      <?php if ($is_live): ?>
        <div class="show-title clearfix">
          <?php if ($on_now_show): ?><h1 class="show-name"><?php print $on_now_show; ?></h1><?php endif; ?>
          <?php if ($on_now_tune_in): ?><h2 class="tune-in"><?php print $on_now_tune_in; ?></h2><?php endif; ?>
        </div>
      <?php else: ?>
        <?php if ($show && $show != "&nbsp;"): ?><h1 class="show-name"><?php print $show; ?></h1><?php endif; ?>
        <?php if ($video_title && $video_title != "&nbsp;"): ?><h2 class="episode-title"><?php print $video_title; ?></h2><?php endif; ?>
        <div class="details">
        <?php if ($season && $season != "&nbsp;"): ?><span class="season-info"><?php print $season; ?></span><?php endif; ?>
        <?php if ($episode && $episode != "&nbsp;"): ?><span class="episode-info"><?php print $episode; ?></span><?php endif; ?>
        <?php if ($airdate && $airdate != "&nbsp;"): ?><span class="episode-info"><?php print $airdate; ?></span><?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
  
  <?php if ($lock_video): ?>
      <div class="tve-help">
        <div class="tve-msg">By signing in with your TV provider you get access to full<br />episodes the day after they air! Otherwise you may have to<br /> wait up to 30 days to watch most full episodes.</div>
        <div class="tve-download">To unlock full episodes you can select an episode to sign in<br />- or -<br />DOWNLOAD THE USA NOW APP</div>
        <div class="tve-download-link">
          <a href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" /></a>
          <a href="http://www.usanetwork.com/usanow"><img src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" /></a>
          <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" /></a>
        </div>
        <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" />Close</div>
      </div>
    <div class="video-player-wrapper <?php if ($is_live) print 'wrapper-live'; ?>" data-ng-if="!global.isAuthN">
      <div class="locked-msg">
      <?php if ($is_live) { 
        print t('<span class="first-line">Please sign in with your TV provider to unlock live tv viewing.</span>');
      } else { 
        print t('<span class="first-line">Please sign in with your TV provider to unlock this episode.</span><span class="second-line">(This episode will automatically unlock 30 days after original airdate.)</span>'); 
      } ?>
      </div>
      <div id="player">
        <a href="javascript:void(0)" class="loginButton clean" data-ng-if="!global.isAuthN" data-ng-click="openLoginWindow()" data-ng-cloak="">
          <?php 
          if (!$is_live) {
            $image = media_theplatform_mpx_file_formatter_image_view($file, array('settings'=> array('image_style'=>'video_full')), '');
            print drupal_render($image); 
          } else { ?>
            <img src="<?php print '/' . path_to_theme() .'/images/usa_liveTV.jpg'; ?>" /> 
          <?php } ?>
        </a>
      </div>
    </div>
  <div class="video-player-wrapper" data-ng-if="global.isAuthN">
      <?php 
        if ($is_live) {
          $video = theme('usanetwork_tve_live_video', array('file' => $file)); 
        } else {
          $video = theme('pub_mpx_video', array('file' => $file, 'pub_mpx_player_parameters' => array('autoPlay' => 'true')));
        }
        print $video;
      ?>
    </div>
    <div class="tve-help-link signIn"><div class="tve-help-sign" data-tve-sign-in-button="" data-ng-if="!global.isAuthN"><img src="/sites/usanetwork/themes/aurora_usa/images/info_blue.png" />Why do I have to sign in?</div></div>
    <div class="tve-help-link signOut <?php print (!$is_live) ? 'not-live' : 'live'?>" data-ng-if="global.isAuthN"><?php print drupal_render($links); ?></div>
  <?php else: ?>
    <div class="video-player-wrapper">
    <?php 
      if ($is_live) {
        $video = theme('usanetwork_tve_live_video', array('file' => $file)); 
      } else {
        $video = theme('pub_mpx_video', array('file' => $file, 'pub_mpx_player_parameters' => array('autoPlay' => 'true')));
      }
      print $video;
    ?>
    </div>
  <?php endif; ?>
    
  <?php if ($is_live): ?>
    <div class="description">
      <?php if ($on_now_title): ?><h3 class="title"><?php print $on_now_title; ?></h3><?php endif; ?>
      <?php if ($on_now_description): ?><?php print $on_now_description; ?><?php endif; ?>
      <?php if ($on_now_rating): ?><div class="rating"><?php print $on_now_rating; ?></div><?php endif; ?>
    </div>
  <?php else: ?>
    <?php if ($description && $description != "&nbsp;"): ?><div class="description"><?php print $description; ?></div><?php endif; ?>
  <?php endif; ?>
  <?php if ($ad_comp && $ad_comp != "&nbsp;"): ?>
    <div class="ad"><?php print $ad_comp; ?></div>
  <?php endif;  ?>
</div>

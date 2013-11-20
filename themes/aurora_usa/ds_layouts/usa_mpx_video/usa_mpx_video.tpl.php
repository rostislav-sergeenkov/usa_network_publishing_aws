<?php

$player_url = variable_get('usanetwork_theplatform_mpx_player_url', '');
$feed_url = variable_get('usanetwork_theplatform_mpx_feed_url', '');

$field_mpx_main_released_file_pid = field_get_items('file', $file, 'field_mpx_main_released_file_pid');
$platform_file_id = isset($field_mpx_main_released_file_pid[0]['value']) ? $field_mpx_main_released_file_pid[0]['value'] : '';

$field_mpx_full_episode = field_get_items('file', $file, 'field_mpx_full_episode');
$full_episode = isset($field_mpx_full_episode[0]['value']) ? $field_mpx_full_episode[0]['value'] : '';
$is_full = '';
if ($full_episode == '1') {
  $is_full = '?usa_fullEpisode=true';
} else {
  $is_full = '?usa_fullEpisode=false';
}

$field_mpx_description = field_get_items('file', $file, 'field_mpx_description');
$body = isset($field_mpx_description[0]['safe_value']) ? $field_mpx_description[0]['safe_value'] : '';
?>

<div class="<?php print $classes;?> video usa-video featured-asset premium-asset clearfix">

  <div class="meta">
    <div class="meta-head">
      <?php if ($show && $show != "&nbsp;"): ?><h1 class="show-name"><?php print $show; ?></h1><?php endif; ?>
      <?php if ($video_title && $video_title != "&nbsp;"): ?><h2 class="episode-title"><?php print $video_title; ?></h2><?php endif; ?>
       <div class="details">
      <?php if ($season && $season != "&nbsp;"): ?><span class="season-info"><?php print $season; ?></span><?php endif; ?>
      <?php if ($episode && $episode != "&nbsp;"): ?><span class="episode-info"><?php print $episode; ?></span><?php endif; ?>
      <?php if ($airdate && $airdate != "&nbsp;"): ?><span class="episode-info"><?php print $airdate; ?></span><?php endif; ?>
    </div>
    </div>
  </div>
  <div class="video-player-wrapper">
    <?php // this is for mpx with a player integration ?>
    <?php if ($platform_file_id && $player_url): ?>
      <iframe
      class="video-iframe"
      style=""
      src="<?php print $player_url; ?>/select/<?php print $platform_file_id . $is_full; ?>"
      frameborder="0"
      allowfullscreen>
      Your browser does not support iframes.
      </iframe>
    <?php endif; ?>
    <?php // this is for tve with a linked image, we leverage the auth region for now ?>
    <?php //if ($tve_auth && $tve_auth != "&nbsp;"): ?>
      <!--<div class="tve-help">
        <!-- <img class ="arrow" src="/sites/usanetwork/themes/aurora_usa/images/arrow2.png" /> -->
        <!--<div class="tve-msg">By signing in with your TV provider you get access to full<br />episodes the day after they air! Otherwise you may have to<br /> wait up to 30 days to watch most full episodes.</div>
        <div class="tve-download">To unlock full episodes you can select an episode to sign in<br />- or -<br />DOWNLOAD THE USA NOW APP</div>
        <div class="tve-download-link">
          <a href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" /></a>
          <a href="http://www.usanetwork.com/usanow"><img src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" /></a>
          <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" /></a>
        </div>
        <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" />Close</div>
      </div>
      <div class="locked-msg"><?php //print t('Please sign in with your TV provider<br />to unlock this episode.'); ?></div>
      <div id="player"><?php //print l($tve_auth, $tve_url, array('html' => TRUE)); ?></div> -->
    <?php //endif; ?>
  </div>
 <!--  <?php if ($tve_auth && $tve_auth != "&nbsp;"): ?><div class="tve-auth"><?php print $tve_auth; ?></div><?php endif; ?> -->
  <?php //if ($tve_auth && $tve_auth != "&nbsp;"): ?>
    <!--<div class="tve-help-link"><img src="/sites/usanetwork/themes/aurora_usa/images/info_gray.png" />Why do I have to sign in?</div> -->
  <?php //endif; ?>
  <?php if ($body && $body != "&nbsp;"): ?><div class="description"><?php print $body; ?></div><?php endif; ?>
  <?php //if ($ad && $ad != "&nbsp;"): ?><div class="ad"><?php //print $ad; ?></div><?php //endif; ?>

</div>

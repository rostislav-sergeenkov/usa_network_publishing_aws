<?php
// empty vars
$player_url = '';
$feed_url = '';
$platform_file_id = '';
$pl_id = '';
$vid_title = '';
$vid_showname = '';
$tve_url = '';

// mpx video
if ($node->type == 'usa_video') {
  //$player_url = variable_get('usanetwork_theplatform_mpx_player_url');
  $player_url = 'http://player.theplatform.com/p/OyMl-B/4Dl3P2Df_j5l';
  $feed_url = variable_get('usanetwork_theplatform_mpx_feed_url');
  $platform_file_id = _usanetwork_video_platform_get_file_id($guid, $feed_url);
  $full_episode = field_get_items('node', $node, 'field_full_episode');
  $full_episode = $full_episode[0]['value'];
  $is_full = '';
  if ($full_episode == '1') {
    $is_full = '?usa_fullEpisode=true';
  }
  else {
    $is_full = '?usa_fullEpisode=false';
  }

  $video_url = url($player_url . '/select/' . $platform_file_id, array(
    'external' => true,
    'query' => array(
      'usa_fullEpisode' => ($full_episode == '1') ? 'true' : 'false',
      'usa_filterByCategory' => (current_path() == 'videos') ? 'false' : 'true',
    ),
    'fragment' => 'playerurl=' . url(current_path(), array('absolute' => true)),
  ));
}
// tve video
if ($node->type == 'usa_tve_video') {
  //Sample URL to USA TVE asset detail
  // page: http://www.usanetwork.com/anywhere/show/{Showname}/{MPX ID}/1/{asset title}.
  // parse the media id for the tve path
  $pl_id = field_get_items('node', $node, 'field_video_pid');
  $pl_id = $pl_id[0]['value'];
  $pl_id = explode('/', $pl_id);  // Get the parts of the url.
  $pl_id = array_pop($pl_id); // And just last part of the URL's path.
  // strip tags and rawurlencode to convert spaces to %20 for tve paths
  $vid_title = strip_tags($node->title);
  $vid_title = rawurlencode($vid_title);
  $vid_showname = strip_tags(trim($show));
  $vid_showname = rawurlencode($vid_showname);
  // full path to tve
  $tve_url = 'http://www.usanetwork.com/now/show/' . $vid_showname . '/' . $pl_id .'/1/' . $vid_title;
}

?>

<div class="<?php print $classes;?> video usa-video usa-video-inline clearfix">

  <div class="video-player-wrapper">
    <?php // this is for mpx with a player integration ?>
    <?php if ($guid && $video_url): ?>
      <iframe
      class="video-iframe"
      style=""
      src="<?php print $video_url; ?>"
      frameborder="0"
      allowfullscreen>
      Your browser does not support iframes.
      </iframe>
    <?php endif; ?>
    <?php // this is for tve with a linked image, we leverage the auth region for now ?>
    <?php if ($tve_auth && $tve_auth != "&nbsp;"): ?>
      <div class="tve-help">
        <!-- <img class ="arrow" src="/sites/usanetwork/themes/aurora_usa/images/arrow2.png" /> -->
        <div class="tve-msg">By signing in with your TV provider you get access to full<br />episodes the day after they air!</div>
        <div class="tve-download">To unlock full episodes you can select an episode to sign in<br />- or -<br />DOWNLOAD THE USA NOW APP</div>
        <div class="tve-download-link">
          <a href="https://play.google.com/store/apps/details?id=com.usanetwork.watcher"><img src="/sites/usanetwork/themes/aurora_usa/images/googleplay.png" /></a>
          <a href="http://www.usanetwork.com/usanow"><img src="/sites/usanetwork/themes/aurora_usa/images/usanow.png" /></a>
          <a href="https://itunes.apple.com/us/app/usa-now/id661695783?mt=8"><img src="/sites/usanetwork/themes/aurora_usa/images/appstore.png" /></a>
        </div>
        <div class="tve-close"><img src="/sites/usanetwork/themes/aurora_usa/images/close.png" />Close</div>
      </div>
      <div class="locked-msg"><?php print t('Please sign in with your TV provider<br />to unlock this episode.'); ?></div>
      <div id="player"><?php print l($tve_auth, $tve_url, array('html' => TRUE)); ?></div>
    <?php endif; ?>
  </div>
  <?php if ($tve_auth && $tve_auth != "&nbsp;"): ?><div class="tve-auth"><?php //print $tve_auth; ?></div><?php endif; ?>
  <?php if ($tve_auth && $tve_auth != "&nbsp;"): ?>
    <div class="tve-help-link"><img src="/sites/usanetwork/themes/aurora_usa/images/info_gray.png" />Why do I have to sign in?</div>
  <?php endif; ?>
  <?php if ($body && $body != "&nbsp;"): ?><div class="description"><?php print $body; ?></div><?php endif; ?>
</div>

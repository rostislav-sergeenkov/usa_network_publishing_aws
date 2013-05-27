<?php 
// @TODO: tve auth
// may be done in a block
// and placed into this tpl via layout
// mpx details for testing
// account pid = OyMl-B
// player fid = f_h1HWlNhYtQ
//http://player.theplatform.com/p/OyMl-B/f_h1HWlNhYtQ
// tve example
// http://player.theplatform.com/p/dCK2IC/usa-vod-stage/embed/select/zR6MZeBntysk
//?autoPlay=true&mbr=true&MVPDid=Cablevision#playerurl=http%3A//tve-staging-usa.nbcuni.com/anywhere/show/Psych/26167364001/1/706%253A%2520Cirque%2520Du%2520Soul

// empty vars
$player_url = '';
$feed_url = '';
$platform_file_id = '';

// mpx video
if ($node->type == 'usa_video') {
  $player_url = variable_get('usanetwork_theplatform_mpx_player_url');
  $feed_url = variable_get('usanetwork_theplatform_mpx_feed_url');
  $platform_file_id = _usanetwork_video_platform_get_file_id($guid, $feed_url);
}
// tve video
if ($node->type == 'usa_tve_video') {
//$player_url = variable_get('usanetwork_theplatform_tve_player_url');
  // @todo: this is temporary only!
  $player_url = 'http://player.theplatform.com/p/dCK2IC/usa-vod-stage';
  $feed_url = variable_get('usanetwork_theplatform_tve_feed_url');
  $platform_file_id = _usanetwork_video_platform_get_file_id($guid, $feed_url);
}

?>

<div class="<?php print $classes;?> video usa-video featured-asset premium-asset clearfix">

  <div class="meta">
    <div class="meta-head">
      <?php if ($show): ?><h1 class="show-name"><?php print $show; ?></h1><?php endif; ?>
      <?php if ($video_title): ?><h2 class="episode-title"><?php print $video_title; ?></h2><?php endif; ?>
    </div>
    <div class="details">
      <?php if ($season): ?><span class="season-info"><?php print $season; ?></span><?php endif; ?>
      <?php if ($episode): ?><span class="episode-info"><?php print $episode; ?></span><?php endif; ?>
      <?php if ($airdate): ?><span class="episode-info"><?php print $airdate; ?></span><?php endif; ?>
    </div>
  </div>
  <div class="video-player-wrapper">
    <?php if ($guid && $player_url): ?>
    <div class="video-player">
      <iframe
      class="video-iframe"
      style="width: 100%; height: 100%"
      src="<?php print $player_url; ?>/embed/select/<?php print $platform_file_id; ?>"
      frameborder="0"
      allowfullscreen>
      Your browser does not support iframes.
      </iframe>
    </div>
    <?php endif; ?>
  </div>
  <?php if ($tve_auth): ?><div class="tve-auth"><?php print $tve_auth; ?></div><?php endif; ?>
  <?php if ($body): ?><div class="description"><?php print $body; ?></div><?php endif; ?>
  <?php if ($ad): ?><div class="ad"><?php print $ad; ?></div><?php endif; ?>

</div>
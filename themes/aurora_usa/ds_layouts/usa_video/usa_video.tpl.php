<?php 
  // @TODO: tve auth
  // may be done in a block
  // and placed into this tpl via layout
?>

<div class="<?php print $classes;?> video usa-video featured-asset premium-asset">

  <div class="meta">
    <div class="meta-head">
      <?php if ($show): ?><h1 class="show-name"><?php print $show; ?></h1><?php endif; ?>
      <?php if ($video_title): ?><h2 class="episode-title"><?php print $video_title; ?></h2><?php endif; ?>
    </div>
    <div class="details">
      <?php if ($season): ?><span class="season-info"><?php print $season; ?></span><?php endif; ?>
      <?php if ($episode): ?><span class="episode-info"><?php print $episode; ?></span><?php endif; ?>
      <?php if ($airdate): ?><span class="episode-info">(<?php print $airdate; ?>)</span><?php endif; ?>
    </div>
  </div>
  <div class="video-player-wrapper">
    <?php if ($guid): ?>
    <div class="video-player"><?php print $guid; ?></div>
    <?php endif; ?>
  </div>
  <?php if ($tve_auth): ?><div class="tve-auth"><?php print $tve_auth; ?></div><?php endif; ?>
  <?php if ($body): ?><div class="description"><?php print $body; ?></div><?php endif; ?>
  <?php if ($ad): ?><div class="ad"><?php print $ad; ?></div><?php endif; ?>

</div>
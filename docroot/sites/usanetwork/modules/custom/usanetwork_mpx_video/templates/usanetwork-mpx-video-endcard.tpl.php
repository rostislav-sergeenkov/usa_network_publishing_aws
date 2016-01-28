<?php
/**
 * Template for Video EndCard.
 */
?>
<div class="reload-button endcard_top" data-replay="usa-replay"
     data-ng-click="replayVideo()">
  <div class="replay-title"><?php print t('replay'); ?></div>
  <div class="episode-title"><?php print $filename; ?></div>
</div>
<div id="episode-up-next" class="endcard_block endcard_topRight"
     data-next-name="up next"
     data-end-card="usaEndCard"
     data-next-url="<?php print $next_video['url']; ?>">
  <h3><?php print t('up next...');?></h3>
  <div class="node">
    <a href="<?php print $next_video['url']; ?>" class="link link-up-next">
      <div class="asset-img">
        <img src="<?php print $next_video['images']['thumbnail']; ?>"
             class="img" alt="">
      </div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <div class="meta-icon full-video-icon-default"></div>
          <div class="meta">
            <div class="additional"><?php print t('S'); ?><span
                class="season"><?php print $next_video['season']; ?></span>
              <?php print t('EP'); ?>
              <span class="episode"><?php print $next_video['episode']; ?></span>:
            </div>
            <div class="title"><?php print $next_video['title']; ?></div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>
<div id="episode-share" class="endcard_block endcard_bottomLeft"
     data-end-card="usaEndCard">
  <h3><?php print t('share this episode'); ?></h3>
</div>
<div id="episode-related" class="endcard_block endcard_bottomRight"
     data-related-name="related clip"
     data-end-card="usaEndCard">
  <h3><?php print t('related video clips'); ?></h3>

  <div id="player-episodes-list" class="player-episodes-list">
    <ul class="related-slider">
      <?php foreach ($endcard as $eitem) : ?>
        <li class="slide-item">
          <div class="node">
            <a href="<?php print $eitem['url']; ?>" class="link link-related-clip">
              <div class="asset-img">
                <img src="<?php print $eitem['images']['thumbnail']; ?>"
                     alt="">
              </div>
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta">
                    <div class="title"><?php print $eitem['title']; ?></div>
                    <div class="additional"><?php print $eitem['duration']; ?></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>
<?php
/**
* $sharebar - html placeholder for JS, for sharebar rendering.
* $episode_title - string
* $body - html
* $season_number - integer
* $episode_number - integer
* $episode_video_link - link for "Wath the episode" button.
* $image_mobile - URL for img.
* $image_desktop - URL for img.
* $air_date_text - string
* $ep_carousel - rendered episode carousel block
* $gallery_rec - rendered gallery recap block
*/
?>
<div class="consumptionator-episode-main-block ">
  <div class="episode-info-main-block right-rail-line<?php print (empty($image_desktop))? ' no-cover-image' : ''; ?>">
    <div class="episode-info-block show-border">
      <div class="sticky-share">
        <?php print $sticky_sharebar; ?>
      </div>
      <div class="episode-info-header">
        <div class="episode-title-block">
          <?php if($new_design): ?>
            <div class="episode"><?php print '<h1 class="episode-inner">'.t('S').$season_number.t(' episode ').$episode_number.'</h1>'; ?></div>
            <div class="episode-title"><h2 class="episode-title-inner"><?php print $episode_title; ?></h2></div>
            <div class="additional"><?php print '<span class="aired">'.t(' Aired on ').'</span>'.$air_date_text; ?></div>
          <?php else: ?>
            <div class="episode-title"><?php print $episode_title; ?></div>
            <div class="additional"><?php print '<span class="episode">'.t('S').$season_number.t(' episode ').$episode_number.'</span><span class="aired">'.t(' Aired on ').'</span>'.$air_date_text; ?></div>
          <?php endif; ?>
        </div>
        <div class="share">
          <?php print $sharebar; ?>
          <?php if (!empty($episode_video_link)): ?>
            <div class="episode-button <?php print ($new_design)? 'show-border': 'show-color'; ?>">
              <a href="<?php print $episode_video_link; ?>"><?php print t('Watch the episode'); ?>
                <?php if($new_design): ?>
                  <span class="show-color show-font"></span>
                <?php endif; ?>
              </a>
            </div>
          <?php elseif (!empty($new_design)): ?>
            <div class="episode-button <?php print ($new_design)? 'show-border': 'show-color'; ?>">
              <a href="<?php print $where2watch_link; ?>"><?php print t('Where to watch'); ?>
                <span class="show-color show-font"></span>
              </a>
            </div>
          <?php endif; ?>
        </div>
      </div>
      <div class="episode-info-image">
        <?php if (!empty($image_desktop)): ?>
          <div class="asset-img"><img src="<?php print $image_desktop; ?>" alt="" title="<?php print $episode_title; ?>" /></div>
        <?php endif; ?>
      </div>
      <div class="node-wrapper advert">
        <div class="advertisement">
          <div class="topbox"></div>
        </div>
      </div>
      <div class="episode-info-description">
        <?php if (!empty($body)): ?>
          <?php print $body; ?>
        <?php endif; ?>
      </div>
    </div>
    <?php if (!empty($gallery_rec)): ?>
      <div class="gallery-recap-block show-border">
        <?php print $gallery_rec; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($navigation_links['previous'])): ?>
      <?php print $navigation_links['previous']; ?>
    <?php endif; ?>
    <?php if (!empty($navigation_links['next'])): ?>
      <?php print $navigation_links['next']; ?>
    <?php endif; ?>
  </div>
  <div class="consum-sidebar">
    <?php if (!empty($ep_carousel)): ?>
      <?php print $ep_carousel; ?>
    <?php endif; ?>
  </div>
</div>

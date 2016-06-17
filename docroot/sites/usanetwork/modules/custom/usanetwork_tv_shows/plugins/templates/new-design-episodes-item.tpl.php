<?php
/**
 * Item of episodes.
 * Variables:
 *  - $entity_id
 *  - $image
 *  - $season
 *  - $episode
 *  - $episode_link
 */
?>
<div class="node node-usanetwork-promo usa-episodes-carousel-promo<?php print (!empty($video_link)) ? ' full-episode' : '' ; ?>">
  <div class="image-block">
    <?php if (!empty($video_link)) : ?>
      <div class="meta-icon full-video-icon-default"></div>
    <?php endif; ?>
    <div class="asset-img">
      <img src="<?php print (!empty($image) ? $image : '#'); ?>" alt="">
    </div>
  </div>
  <div class="meta-wrapper">
    <div class="meta-wrapper-inner">
      <div class="meta">
        <?php if (!empty($season) && !empty($episode)): ?>
          <div class="caption"><?php print $season; ?>&nbsp<?php print $episode; ?></div>
        <?php endif; ?>
        <?php if (!empty($title)): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($video_link)) : ?>
          <a href="<?php print $video_link; ?>" class="additional show-color show-font">
            <?php print t('Watch');?>
          </a>
        <?php else: ?>
          <a href="<?php print $featured_provider['url']; ?>" class="additional show-color show-font">
            <?php print t('Watch on ') . $featured_provider['title'];?>
          </a>
        <?php endif; ?>
        <a href="<?php print $episode_link; ?>" class="additional show-color show-font">
          <?php print t('Read the Recap'); ?>
        </a>
      </div>
    </div>
  </div>
</div>

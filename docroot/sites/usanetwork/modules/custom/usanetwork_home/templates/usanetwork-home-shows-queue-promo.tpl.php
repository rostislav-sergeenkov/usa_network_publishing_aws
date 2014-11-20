<?php
/**
 *
 */
?>
<div class="node-wrapper promo">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
    <a class="slide-overlay-btn" href="javascript:void(0)">
      <div class="asset-img">
        <?php if (!empty($latet_episode_image_url)): ?>
          <img alt="" src="<?php print $latet_episode_image_url; ?>">
        <?php endif; ?>
      </div>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <div class="meta-icon play-icon"></div>
        <div class="title-overlay meta">
          <?php if (!empty($episode_title)): ?>
            <div class="caption"><?php print $episode_title; ?></div>
          <?php endif; ?>
          <?php if (!empty($episode_day) && !empty($episode_time)): ?>
            <div class="type-and-time">
              <span><?php print $episode_day; ?></span><?php print $episode_time; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </a>
  </div>
</div>

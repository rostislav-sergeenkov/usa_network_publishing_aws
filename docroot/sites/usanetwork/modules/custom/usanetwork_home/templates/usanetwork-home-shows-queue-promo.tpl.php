<?php
/**
 *
 */
?>
<div class="node-wrapper promo">
  <div class="node node-usanetwork-promo show-color-border<?php if (!empty($show_class)): print ' ' . $show_class; endif; ?>">
    <a href="javascript:void(0)">
      <div class="asset-img">
        <?php if (!empty($latet_episode_image_url)): ?>
          <img alt="" src="<?php print $latet_episode_image_url; ?>">
        <?php endif; ?>
      </div>
      <div class="meta-back"></div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <div class="meta-icon play-icon"></div>
          <div class="meta">
            <?php if (!empty($episode_title)): ?>
              <div class="title"><?php print $episode_title; ?></div>
            <?php endif; ?>
            <?php if (!empty($episode_description)): ?>
              <div class="additional">
                <?php print $episode_description; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

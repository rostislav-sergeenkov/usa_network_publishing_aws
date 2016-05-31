<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo small <?php print (!empty($is_new_design))? 'usa-landing-container-promo': 'three-line-video-large'; ?><?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="asset-img">
        <?php if (!empty($image_desktop)): ?>
          <img src="<?php print $image_desktop; ?>" alt=""/>
        <?php endif; ?>
      </div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <div class="meta-icon <?php print $media_icon; ?>"></div>
          <div class="meta">
            <?php if (!empty($caption)): ?>
              <div class="caption">
                <?php if (!empty($is_new_design)): ?>
                  <span class="show-color"><?php print $caption; ?></span>
                <?php else: ?>
                  <?php print $caption; ?>
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <?php if (!empty($title)): ?>
              <div class="title"><?php print $title; ?></div>
            <?php endif; ?>
            <?php if (!empty($additional)): ?>
              <div class="additional"><?php print $additional; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </a>
  <?php endif; ?>
</div>

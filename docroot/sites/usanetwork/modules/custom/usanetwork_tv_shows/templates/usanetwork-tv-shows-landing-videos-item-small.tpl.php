<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo small three-line-video<?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <div class="meta-icon <?php print $media_icon; ?>"></div>
          <div class="meta">
            <?php if (!empty($title)): ?>
              <div class="title"><?php print $title; ?></div>
            <?php endif; ?>
            <?php if (!empty($additional)): ?>
              <div class="additional"><?php print $additional; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <div class="asset-img">
        <?php if (!empty($image_desktop)): ?>
          <img src="<?php print $image_desktop; ?>" alt=""/>
        <?php endif; ?>
      </div>
    </a>
  <?php endif; ?>
</div>

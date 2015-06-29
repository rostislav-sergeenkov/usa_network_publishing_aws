<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo">
  <a href="<?php print !empty($content_url) ? $content_url : 'javascript:void(0)'; ?>">
    <?php if (!empty($image_url)): ?>
      <div class="asset-img">
        <img alt="" src="<?php print $image_url; ?>">
      </div>
    <?php endif; ?>
    <div class="meta-wrap">
      <div class="meta">
        <?php if (!empty($caption)): ?>
          <div class="caption"><?php print $caption; ?></div>
        <?php endif; ?>
        <?php if (!empty($title)): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if (!empty($additional['left']) || !empty($additional['right'])): ?>
          <div class="additional">
            <?php if (!empty($additional['left'])): ?>
              <span><?php print $additional['left']; ?></span>
            <?php endif; ?>
            <?php if (!empty($additional['right'])): ?>
              <?php print $additional['right']; ?>
            <?php endif; ?>
          </div>
        <?php endif; ?>
      </div>
      <div class="meta-icon video-icon"></div>
    </div>
  </a>
</div>

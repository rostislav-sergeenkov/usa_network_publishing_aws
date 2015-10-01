<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo all-shows-promo<?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner">
          <?php if (!empty($icon)):  ?>
            <div class="meta-icon <?php print $icon; ?>"></div>
          <?php endif; ?>
          <div class="meta">
            <?php if (!empty($caption)): ?>
              <div class="caption"><?php print $caption; ?></div>
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
      <div class="asset-img">
        <?php if (!empty($image_desktop)): ?>
          <img src="<?php print $image_desktop; ?>" alt=""/>
        <?php endif; ?>
      </div>
    </a>
  <?php endif; ?>
</div>

<?php
/**
 *
 */
?>
<div class="related-item<?php if (!empty($classes)): print ' ' . $classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="meta-wrap">
        <div class="meta-wrapper-inner">
          <div class="meta-icon play-icon"></div>
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
      <?php if (!empty($image_url)): ?>
        <img src="<?php print $image_url; ?>" />
      <?php endif; ?>
    </a>
  <?php endif; ?>
</div>

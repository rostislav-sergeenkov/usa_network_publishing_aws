<?php
/**
 * $is_even - boolean (is the element is even in block)
 * $classes - string (default node classes)
 * $custom_classes' - string (custom set of classes)
 * $target_url - string (destination URL)
 * $caption - string (1st line of meta)
 * $title - string (2nd line of meta)
 * $additional - string (3rd line of meta)
 * $image_desktop - string (921x488 image URL)
 * $image_desktop_large - string (921x1003 image URL)
 * $image_mobile - string (291x234 image URL)
 * $image_mobile_large - string (291x478 image URL)
 */
?>
<div class="related-item<?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
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
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($image_desktop)): ?>
          <div data-src="<?php print $image_desktop; ?>" data-type="image-desktop"></div>
        <?php endif; ?>
        <?php if (!empty($image_desktop_large)): ?>
          <div data-src="<?php print $image_desktop_large; ?>" data-type="image-desktop-large"></div>
        <?php endif; ?>
        <?php if (!empty($image_mobile)): ?>
          <div data-src="<?php print $image_mobile; ?>" data-type="image-mobile"></div>
        <?php endif; ?>
        <?php if (!empty($image_mobile_large)): ?>
          <div data-src="<?php print $image_mobile_large; ?>" data-type="image-mobile-large"></div>
        <?php endif; ?>
      </div>
    </a>
  <?php endif; ?>
</div>

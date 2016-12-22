<?php
/**
 *
 */
?>
<div class="node node-usanetwork-promo big <?php print ($is_new_design)? 'usa-landing-container-promo': 'three-line-video-large'; ?><?php if (!empty($classes)): print ' ' . $classes; endif; ?><?php if (!empty($custom_classes)): print ' ' . $custom_classes; endif; ?>">
  <?php if (!empty($target_url)): ?>
    <a href="<?php print $target_url; ?>">
      <div class="asset-img" data-picture="" data-alt="" data-class="tile-img">
        <?php if (!empty($image_mobile)): ?>
          <div data-src="<?php print $image_mobile; ?>"></div>
        <?php endif; ?>
        <?php if (!empty($image_desktop)): ?>
          <div data-media="(min-width: 769px)" data-src="<?php print $image_desktop; ?>"></div>
          <!--[if (IE 8) & (!IEMobile)]>
          <div data-src="<?php print $image_desktop; ?>"></div>
          <![endif]-->
          <noscript><img src="<?php print $image_desktop; ?>" alt="" title="" /></noscript>
        <?php endif; ?>
      </div>
      <div class="meta-wrapper">
        <div class="meta-wrapper-inner<?php print (!$is_new_design)? ' multiline-ellipsis-meta-wrapper': ''; ?>">
          <?php if (!$is_new_design): ?>
            <div class="meta-icon <?php print $media_icon; ?>"></div>
          <?php endif; ?>
          <div class="meta<?php print (!$is_new_design)? ' multiline-ellipsis-meta': ''; ?>">
            <?php if (!empty($caption)): ?>
              <div class="caption"<?php print (!$is_new_design)? ' data-text="'.$caption.'"': ''; ?>>
                <?php if ($is_new_design): ?>
                  <span class="show-color"><?php print $caption; ?></span>
                <?php else: ?>
                  <?php print $caption; ?>
                <?php endif; ?>
              </div>
            <?php endif; ?>
            <?php if (!empty($title)): ?>
              <div class="title"<?php print (!$is_new_design)? ' data-text="'.$title.'"': ''; ?>><?php print $title; ?></div>
            <?php endif; ?>
            <?php if (!empty($additional) && !$is_new_design): ?>
              <div class="additional" data-text="<?php print $additional; ?>"><?php print $additional; ?></div>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </a>
  <?php endif; ?>
</div>

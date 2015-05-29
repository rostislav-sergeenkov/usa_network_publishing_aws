<div class="node node-usanetwork-promo video-promo <?php print $classes . ' ' . (($lock_video) ? 'tve-video-auth' : ''); ?>"<?php print $attributes; ?>>
  <a href="<?php print $file_url; ?>">
    <?php if ($media): ?>
    <div class="asset-img <?php print $show_css_class?>">
        <?php print $media;?>
      </div>
    <?php endif; ?>
    <div class="meta-wrapper">
      <div class="meta-back"></div>
      <div class="meta-wrapper-inner">
        <div class="meta-icon video-icon"></div>
        <div class="meta">
          <?php if ($caption && $caption != "&nbsp;"): ?>
            <div class="caption"><?php print $caption; ?></div>
          <?php endif; ?>
          <?php if ($title && $title != "&nbsp;"): ?>
            <div class="title"><?php print $title; ?></div>
          <?php endif; ?>
          <?php if ($meta && $meta != "&nbsp;"): ?>
            <div class="additional"><?php print $meta; ?></div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </a>
</div>

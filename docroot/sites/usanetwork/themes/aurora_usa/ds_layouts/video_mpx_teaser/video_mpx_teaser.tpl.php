<div class="<?php print $classes . ' ' . (($lock_video) ? 'tve-video-auth' : ''); ?>"<?php print $attributes; ?>>
  <a href="<?php print $file_url; ?>">
    <?php if ($media): ?>
      <div class="asset-img show-color-border show-benched">
        <?php print $media;?>
      </div>
    <?php endif; ?>
    <div class="meta-wrapper">
      <div class="meta-icon play-icon"></div>
      <div class="title-overlay meta">
        <?php if ($title && $title != "&nbsp;"): ?>
          <div class="title"><?php print $title; ?></div>
        <?php endif; ?>
        <?php if ($caption && $caption != "&nbsp;"): ?>
          <div class="caption"><?php print $caption; ?></div>
        <?php endif; ?>
        <?php if ($meta && $meta != "&nbsp;"): ?>
          <div class="type-and-time"><?php print $meta; ?></div>
        <?php endif; ?>
      </div>
    </div>
  </a>
</div>

<div class="<?php print $classes;?> carousel-item">
  <?php if ($media): ?>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  
  <div class="title-overlay">
    <?php if ($title && $title != "&nbsp;"): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($caption && $caption != "&nbsp;"): ?>
      <div class="caption"><?php print ($caption); ?></div>
    <?php endif; ?>
  </div>
</div>

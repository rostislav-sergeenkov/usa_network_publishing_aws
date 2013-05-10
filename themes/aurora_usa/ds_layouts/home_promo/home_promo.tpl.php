<div class="<?php print $classes;?> home-promo">
  
  <div class="promo-media">
    <?php if ($media_wide): ?>
      <div class="media-wide"><?php print $media_wide; ?></div>
    <?php endif; ?>
    <?php if ($media_normal): ?>
      <div class="media-normal"><?php print $media_normal; ?></div>
    <?php endif; ?>
  </div>
  
  <div class="promo-metadata">
    <?php if ($text_1): ?>
      <h2 class="row-1"><?php print $text_1; ?></h2>
    <?php endif; ?>
    <?php if ($text_2): ?>
      <div class="row-2"><?php print ($text_2); ?></div>
    <?php endif; ?>

    <?php if ($cta): ?>
      <div class="promo-cta row-4 media"><?php print $cta; ?></div>
    <?php endif; ?>
  </div>
  
</div>
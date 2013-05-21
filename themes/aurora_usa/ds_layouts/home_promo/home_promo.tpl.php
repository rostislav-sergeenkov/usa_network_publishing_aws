<div class="<?php print $classes;?> home-promo">
  <?php if ($link): ?>
    <a href="<?php print $link; ?>" class="promo-link">
  <?php endif; ?>


  <div class="meta promo-metadata <?php if ($cta): ?><?php print ' cta'; ?><?php endif; ?>">
    <?php if ($text_1): ?><h2 class="meta-head"><?php print $text_1; ?></h2><?php endif; ?>
    <?php if ($text_2): ?><h3 class="meta-subhead"><?php print ($text_2); ?></h3><?php endif; ?>

    <?php if ($cta): ?>
      <div class="promo-cta row-4 media"><?php print $cta; ?></div>
    <?php endif; ?>
  </div>
  
  <div data-picture data-alt="" data-class="tile-img">
    <?php if ($media_wide): ?>
      <div class="media-wide"><?php print $media_wide; ?></div>
    <?php endif; ?>
    <?php if ($media_normal): ?>
      <div class="media-normal"><?php print $media_normal; ?></div>
    <?php endif; ?>
  </div>

  <?php if ($link): ?>
    </a>
  <?php endif; ?>
  
</div>

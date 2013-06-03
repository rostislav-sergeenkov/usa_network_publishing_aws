<div class="<?php print $classes;?> home-promo">
  <?php if ($link): ?>
    <a href="<?php print $link; ?>" class="promo-link">
  <?php endif; ?>

  <?php
  if (($text_1 && $text_1 != '&nbsp;') || ($text_2 && $text_2 != '&nbsp;')) {
    $print_cta = true;
  }
  ?>
  <?php if ($print_cta == true) : ?>
    <div class="meta promo-metadata <?php if ($cta): ?><?php print ' cta'; ?><?php endif; ?>">
      <?php if ($cta && $cta != '&nbsp;'): ?>
        <div class="promo-cta row-4 media"><?php print $cta; ?></div>
      <?php endif; ?>
      <?php if ($text_1 && $text_1 != '&nbsp;'): ?><h2 class="meta-head"><?php print $text_1; ?></h2><?php endif; ?>
      <?php if ($text_2 && $text_2 != '&nbsp;'): ?><h3 class="meta-subhead"><?php print ($text_2); ?></h3><?php endif; ?>
    </div>
  <?php endif; ?>

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

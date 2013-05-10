<div class="<?php print $classes;?> aspot">
  <?php if ($link): ?>
    <a href="<?php print $link; ?>" class="aspot-link">
  <?php endif; ?>
  <div class="aspot-media">
    <?php if ($media_desktop): ?>
      <div class="media-desktop"><?php print $media_desktop; ?></div>
    <?php endif; ?>
    <?php if ($media_tablet): ?>
      <div class="media-tablet"><?php print $media_tablet; ?></div>
    <?php endif; ?>
    <?php if ($media_mobile): ?>
      <div class="media-mobile"><?php print $media_mobile; ?></div>
    <?php endif; ?>
  </div>
  
  <div class="aspot-metadata">
    <?php if ($text_1): ?>
      <h2 class="row-1"><?php print $text_1; ?></h2>
    <?php endif; ?>
    <?php if ($text_2): ?>
      <div class="row-2"><?php print ($text_2); ?></div>
    <?php endif; ?>
    <?php if ($text_3): ?>
      <div class="row-2"><?php print ($text_3); ?></div>
    <?php endif; ?>

    <?php if ($cta): ?>
      <div class="aspot-cta row-4 media"><?php print $cta; ?></div>
    <?php endif; ?>
  </div>
  <?php if ($link): ?>
    </a>
  <?php endif; ?>

</div>
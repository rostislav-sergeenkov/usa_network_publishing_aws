<figure class="<?php print $classes;?> clearfix">
  <?php if ($media): print $media; endif; ?>

  <?php if ($title && $title != "&nbsp;"): ?>
    <h4><?php print $title; ?></h4>
  <?php endif; ?>

  <?php if ($caption && $caption != "&nbsp;"): ?>
    <figcaption><?php print ($caption); ?></figcaption>
  <?php endif; ?>
</figure>
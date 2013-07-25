<div class="<?php print $classes;?>">
  <?php if ($link): ?>
    <a href="<?php print $link; ?>" class="item-link">
  <?php endif; ?>
  <?php if ($media): ?>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  <?php if ($link): ?>
    </a>
  <?php endif; ?>
</div>

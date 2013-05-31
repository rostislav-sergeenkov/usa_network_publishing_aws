<div class="<?php print $classes;?>">
  <?php if ($link): ?>
    <a href="<?php print $link; ?>" class="item-link">
  <?php endif; ?>
  <?php if ($media): ?>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  <?php if(($title && $title != "&nbsp;") || ($caption && $caption != "&nbsp;") ) : ?>
  <div class="caption-overlay meta">
    <div class="caption-fields-wrapper">
    <?php if ($title && $title != "&nbsp;"): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($caption && $caption != "&nbsp;"): ?>
      <div class="caption"><?php print ($caption); ?></div>
    <?php endif; ?>
    </div>
  </div>
<?php endif; ?>
  <?php if ($link): ?>
    </a>
  <?php endif; ?>
</div>

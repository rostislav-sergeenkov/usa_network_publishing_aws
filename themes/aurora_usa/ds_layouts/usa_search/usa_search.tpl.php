<div class="<?php print $classes;?> usa-search">
  <?php if ($link && $link != "&nbsp;"): ?>
    <a href="<?php print $link; ?>" class="usa-search-link">
  <?php endif; ?>
  <div class="">
    <?php if ($title && $title != "&nbsp;"): ?>
      <div class="title"><?php print $title; ?></div>
    <?php endif; ?>
    <?php if ($body && $body != "&nbsp;"): ?>
      <div class="body"><?php print ($body); ?></div>
    <?php endif; ?>
  </div>
  <?php if ($media): ?>
  <div class="asset-img"><?php print $media; ?></div>
  <?php endif; ?>
  <?php if ($link && $link != "&nbsp;"): ?>
    </a>
  <?php endif; ?>
</div>

<div class="<?php print $classes;?> usa-search search-result clearfix">
  <div class="search-snippet-info">
    <div class="search-snippet">
      <?php if ($media && $media !== '&nbsp;'): ?>
        <div class="search-img"><?php print $media; ?></div>
      <?php endif; ?>
      <?php if ($title && $title !== '&nbsp;'): ?>
        <div class="search-title"><?php print $title; ?></div>
      <?php endif; ?>
      <?php if ($body && $body !== '&nbsp;'): ?>
        <div class="search-body"><?php print $body; ?></div>
      <?php endif; ?>
    </div>
    <?php if ($link && $link !== '&nbsp;'): ?>
      <div class="search-link"><?php print $link; ?></div>
    <?php endif; ?>
  </div>
</div>

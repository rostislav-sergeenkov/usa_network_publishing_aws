<?php
/**
 * $related_items_block - string (prerendered block of items)
 * $load_more_link - boolean (flag that requires the "Load more" link)
 */
?>
<div class="show-latest-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print t('The latest')?></span>
  </h2>
  <?php if (!empty($related_items_block)): ?>
    <?php print $related_items_block; ?>
  <?php endif; ?>
  <?php if (!empty($load_more_link)): ?>
    <div class="load-more-link"><a href="javascript:void(0)"><?php print t('Load more'); ?></a></div>
  <?php endif; ?>
</div>

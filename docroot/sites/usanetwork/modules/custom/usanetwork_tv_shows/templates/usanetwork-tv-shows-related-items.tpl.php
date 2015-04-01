<?php
/**
 *
 */
?>
<div class="related-items">
  <?php if (!empty($related_items)): ?>
    <?php foreach ($related_items as $related_item): ?>
      <?php print $related_item; ?>
    <?php endforeach; ?>
  <?php endif; ?>
  <?php if (!empty($load_more_link)): ?>
    <div class="load-more-link"><a><?php print t('Load more'); ?></a></div>
  <?php endif; ?>
</div>

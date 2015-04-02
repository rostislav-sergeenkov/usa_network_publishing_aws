<?php
/**
 * $related_items - array of string (prerendered array of related items that should be placed on to block)
 * $ad - boolean (flag that means that the advert should be included here)
 * $is_even - boolean (flag that marks the block of items as even or odd)
 */
?>
<div class="related-items <?php print $is_even ? 'even' : 'odd'; ?>">
  <?php if (!empty($related_items)): ?>
    <?php foreach ($related_items as $related_item): ?>
      <?php print $related_item; ?>
    <?php endforeach; ?>
  <?php endif; ?>
  <?php if (!empty($ad)): ?>
    <div class="related-items-ad"></div>
  <?php endif; ?>
</div>

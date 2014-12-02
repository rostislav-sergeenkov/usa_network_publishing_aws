<?php
/**
 *
 */
?>
<div class="show-content">
  <div class="show-content-wrapper">
    <h2 class="block-title show-content-title"><?php print t('Related content'); ?></h2>
    <?php if (!empty($related_items)): ?>
      <div class="show-list-wrapper">
        <ul>
          <?php foreach ($related_items as $related_item): ?>
            <li<?php if (!empty($related_item['li_class'])): print ' class="' . $related_item['li_class']; endif; ?>>
              <?php print $related_item['content']; ?>
            </li>
          <?php endforeach; ?>>
        </ul>
      </div>
    <?php endif; ?>
  </div>
</div>

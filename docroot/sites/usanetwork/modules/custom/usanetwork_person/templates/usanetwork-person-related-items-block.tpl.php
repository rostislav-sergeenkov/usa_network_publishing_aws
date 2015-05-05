<?php
/**
 *
 */
?>

  <?php if (!empty($ad)): ?>
    <div class="latest-ad"><?php print $ad; ?></div>
  <?php endif; ?>
  <?php if (!empty($related_items)): ?>
    <ul class="<?php print $is_even ? 'even' : 'odd'; ?>">
      <?php $index = 1; ?>
      <?php foreach ($related_items as $related_item): ?>
        <?php if ($index % 2 != 0): ?>
          <li class="block-item">
        <?php endif; ?>
        <?php print $related_item; ?>
        <?php if ($index % 2 == 0): ?>
          </li>
        <?php endif; ?>
        <?php $index++; ?>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>


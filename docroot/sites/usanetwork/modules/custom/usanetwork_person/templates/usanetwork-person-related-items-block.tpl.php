<?php
/**
 *
 */
?>

  <?php if (!empty($ad)): ?>
    <div class="latest-ad"><?php print $ad; ?></div>
  <?php endif; ?>
  <?php if (!empty($related_items)): ?>
    <ul>
      <?php foreach ($related_items as $related_item): ?>
        <li>
          <?php print $related_item; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>


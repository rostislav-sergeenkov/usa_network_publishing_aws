<?php
/**
 *
 */
?>
<?php if (!empty($items)): ?>
  <ul>
  <?php foreach ($items as $item): ?>
          <li class="block-item">
            <?php print $item; ?>
          </li>
        <?php endforeach; ?>
  </ul>
<?php endif; ?>

<?php
/**
 * BCD-Spot.
 */
?>
<ul>
  <?php foreach ($data['#content']['items'] as $item): ?>
    <li class="<?php print $item['position_classes']; ?>">
      <?php print $item['html']; ?>
    </li>
  <?php endforeach; ?>
</ul>


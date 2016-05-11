<?php
/**
 * BCD-Spot.
 * $data
 *  - #content
 *    - items
 *    - layout_scheme
 */
?>
<ul>
  <?php foreach ($data['#content']['items'] as $item): ?>
    <li>
      <?php print $item ?>
    </li>
  <?php endforeach; ?>
</ul>


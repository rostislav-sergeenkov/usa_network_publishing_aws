<?php
/**
 * Relevant content.
 */
?>
<ul>
  <?php foreach ($data['#content']['items'] as $item): ?>
    <li class="slide">
      <?php print $item ?>
    </li>
  <?php endforeach; ?>
</ul>



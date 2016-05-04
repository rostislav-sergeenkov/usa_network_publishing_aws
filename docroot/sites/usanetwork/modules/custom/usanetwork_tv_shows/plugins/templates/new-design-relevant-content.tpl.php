<?php
/**
 * Relevant content.
 */
?>
<div id="relevant-content-carousel" class="usa-carousel">
  <ul class="slider-list">
    <?php foreach ($data['#content']['items'] as $item): ?>
      <li class="slide slide-item">
        <?php print $item ?>
      </li>
    <?php endforeach; ?>
  </ul>
</div>



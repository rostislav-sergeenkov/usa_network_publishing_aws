<?php
/**
 * Relevant content.
 */
?>
<?php if (!empty($data['#content']['title'])): ?>
  <div class="carousel-title-block show-color show-font"><?php print $data['#content']['title']; ?></div>
<?php endif; ?>
<div id="relevant-content-carousel" class="usa-carousel">
  <ul class="slider-list">
    <?php foreach ($data['#content']['items'] as $item): ?>
      <li class="slide slide-item">
        <?php print $item ?>
      </li>
    <?php endforeach; ?>
  </ul>
</div>



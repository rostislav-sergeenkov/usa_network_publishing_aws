<?php
/**
 * $slides - array of pre-rendered slides
 * $gallery_type - string value of gallery type
 */
?>
<div id="usanetwork-consumptionator-episodes-gallery">
  <?php if (!empty($gallery_type)): ?>
    <div class="gallery-type"><?php print $gallery_type; ?></div>
  <?php endif; ?>
  <div class="galleries-list-slider vertical" data-mode="vertical">
    <?php if (!empty($slides_vertical)): ?>
      <ul class="slides slider-vertical">
        <?php foreach ($slides_vertical as $slide_vertical): ?>
          <li class="slide">
            <?php print $slide_vertical; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
  <div class="galleries-list-slider horizontal" data-mode="horizontal">
    <?php if (!empty($slides_horizontal)): ?>
      <ul class="slides slider-horizontal">
        <?php foreach ($slides_horizontal as $slide_horizontal): ?>
          <li class="slide">
            <?php print $slide_horizontal; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
</div>

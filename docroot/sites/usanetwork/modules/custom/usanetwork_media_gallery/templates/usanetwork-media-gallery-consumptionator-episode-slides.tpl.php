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
  <?php if (!empty($slides)): ?>
    <ul class="slides">
      <?php foreach ($slides as $slide): ?>
        <li class="slide">
          <?php print $slide; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>

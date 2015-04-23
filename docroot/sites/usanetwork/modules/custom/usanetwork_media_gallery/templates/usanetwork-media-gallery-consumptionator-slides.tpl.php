<?php
/**
 * $slides - array of pre-rendered slides
 */
?>
<div class="gallery-wrapper">
  <?php if (!empty($slides)): ?>
    <div class="bxslider bxslider-gallery">
    <?php foreach ($slides as $slide): ?>
      <div class="slide">
        <?php print $slide; ?>
      </div>
    <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>

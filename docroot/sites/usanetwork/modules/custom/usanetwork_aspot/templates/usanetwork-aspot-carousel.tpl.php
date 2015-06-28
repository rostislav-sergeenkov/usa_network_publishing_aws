<?php
/**
 *
 */
?>
<?php if (!empty($slides)): ?>
  <div class="next-button"></div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <?php foreach ($slides as $slide): ?>
        <?php print $slide; ?>
      <?php endforeach; ?>
    </div>
  </div>
<?php endif; ?>


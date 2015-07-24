<?php
/**
 *
 */
?>
<?php if (!empty($slides)): ?>
  <div class="next-button"><div class="next-button-wrapper"></div></div>
  <div class="slider-container">
    <?php foreach ($slides as $slide): ?>
      <?php print $slide; ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>


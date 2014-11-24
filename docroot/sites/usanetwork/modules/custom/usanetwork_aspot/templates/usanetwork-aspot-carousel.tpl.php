<?php
/**
 *
 */
?>
<?php if (!empty($slides)): ?>
  <div class="slider">
    <?php foreach ($slides as $slide): ?>
      <?php print $slide; ?>
    <?php endforeach; ?>
  </div>
  <div class="next-button"></div>
<?php endif; ?>

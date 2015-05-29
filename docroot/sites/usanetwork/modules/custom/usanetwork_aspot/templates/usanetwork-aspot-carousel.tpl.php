<?php
/**
 *
 */
?>
<?php if (!empty($slides)): ?>
  <div class="next-button"></div>
  <div class="slider">
    <?php foreach ($slides as $slide): ?>
      <?php print $slide; ?>
    <?php endforeach; ?>
  </div>

<?php endif; ?>


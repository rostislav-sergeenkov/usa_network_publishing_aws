<?php
/**
 * $slides - array of pre-rendered slides
 */
?>
<div class="gallery-wrapper" data-id="<?php print $gallery_id; ?>">
  <?php if (!empty($slides)): ?>
    <div class="bxslider bxslider-gallery on-load">
    <?php foreach ($slides as $slide): ?>
      <div class="slide">
        <?php print $slide; ?>
      </div>
    <?php endforeach; ?>
    </div>
    <div class="share-bar">
      <?php print $sharebar; ?>
    </div>
  <?php endif; ?>
</div>
